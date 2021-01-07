const firebase = require("firebase");require("firebase/database");

const confirm = (req, res) => {
  const id = req.params.id;
  firebase
    .database()
    .ref("/users/")
    .once("value")
    .then((snapshot) => {
      const values = Object.values(snapshot.val());
      values.map((ob) => {
        if (ob.id === id) {
          firebase
            .database()
            .ref("/users/" + id)
            .update({ confirmed: 1 });
          res.redirect("http://localhost:3000/");
        }
        return 0;
      });
    });
};

module.exports = confirm;