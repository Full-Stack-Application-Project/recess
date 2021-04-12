const router = require("express").Router();
const { response } = require("express");
const { User, Activity, Schedule } = require("../../models");

// get all users in the user table
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// returns if a user with a certain id is logged in
router.get("/loggedIn", (req, res) => {
  User.findAll({
    where: {
      loggedIn: "true",
    },
  })
    .then((dbUserData) => {
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get a user with a specific id
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Schedule,
        attributes: [
          "id",
          "day",
          "working",
          "work_start",
          "work_end",
          "sleep_start",
          "sleep_end",
        ],
      },
      {
        model: Activity,
        attributes: [
          "id",
          "activity_category",
          "activity_name",
          "activity_length",
        ],
      },
    ],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// add a user to the user table
router.post("/", (req, res) => {
  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    loggedIn: "true",
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a session when the user logs in
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    User.update(
      {
        loggedIn: req.body.loggedIn,
      },
      {
        where: {
          id: dbUserData.id,
        },
      }
    )
      .then((result) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.email = dbUserData.email;
          req.session.loggedIn = true;

          res.json({ user: dbUserData, message: "You are now logged in!" });
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
});

// logs the user out of the session
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// edits the loggedin parameter
router.patch("/:id", (req, res) => {
  User.update(
    {
      loggedIn: req.body.loggedIn,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// deletes the user with a specific id
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
