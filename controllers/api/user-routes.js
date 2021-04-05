const router = require("express").Router();
const { User, Activity, Schedule } = require("../../models");
// const sequelize = require('../../config/connection');


// get all users with /api/users
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

router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Schedule,
        attributes: ["id", "day", "working", "work_start_hour", "work_start_minute", "work_end_hour", "work_end_minute", "sleep_start_hour", "sleep_start_minute", "sleep_end_hour", "sleep_end_minute"]
      },
      {
        model: Activity,
        attributes: ["id", "activity_category", "activity_name", "activity_length"]
      }
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

router.post("/", (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) =>  res.json(dbUserData))
    // {
    //   req.session.save(() => {
    //     req.session.user_id = dbUserData.id;
    //     req.session.loggedIn = true;

    //     res.json(dbUserData);
    //   });
    // }
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  console.log(req.body.email);
  console.log(req.body.password);
  User.findOne({
    where: {
      email: req.body.email
    },
  }).then((dbUserData) => {
    console.log(dbUserData);
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }
    console.log('hit line 92')
    res.json({ user: dbUserData, message: "You are now logged in!" });

    // req.session.save(() => {
    //   req.session.user_id = dbUserData.id;
    //   req.session.loggedIn = true;

    //   res.json({ user: dbUserData, message: "You are now logged in!" });
    // });
  });
});

// router.post("/logout", (req, res) => {
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

router.put("/:id", (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  // pass in req.body instead to only update what's passed through
  User.update(req.body, {
    individualHooks: true,
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
