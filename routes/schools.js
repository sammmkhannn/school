const express = require("express");
const router = express.Router();
const School = require("../models/school");
const bodyParser = require("body-parser");
const app = express();

//using body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//get all schools
router.get("/", async (req, res) => {
  let data = await School.find({});
  try {
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

//post request on schools
router.post("/", (req, res) => {
  let school = new School({
    name: req.body.name,
    institutionType: req.body.institutionType,
    city: req.body.city,
    coordinates: req.body.coordinates,
    totalStudents: req.body.totalStudents,
    numberOfBoys: req.body.numberOfBoys,
    numberOfGirsl: req.body.numberOfGirsl,
  });

  school
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

//update a school
router.patch("/school/:id", async (req, res) => {
  let id = req.params.id;
  let updated = await School.updateOne({ _id: id }, { $set: req.body });
  try {
    res.send("Data has been updated");
  } catch (error) {
    res.send(error);
  }
});
//delet a school
router.delete("/school/:id", async (req, res) => {
  let id = req.body.id;
  let deleted = await School.deleteOne({ _id: id });
  try {
    res.send("Record has been deleted");
  } catch (error) {
    res.send(error);
  }
});

//export the routes
module.exports = router;
