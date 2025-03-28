const express = require("express");
const app = express();

const { connectToDB } = require("./db/db.connect.js");

const User = require("./models/user.model.js");
const Car = require("./models/car.model.js");

connectToDB();
app.use(express.json());

const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json("CARS BASE! GET ALL THE CARS YOU WANT");
});

// async function createData(data) {
//     try {
//         const savedData = await Car.insertMany(data)
//         console.log(savedData);
//     } catch (error) {
//         console.log(error)
//     }
// }
// createData(sampleCars)

app.get("/cars", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to fetch the cars" });
  }
});

app.get("/cars/:id", async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    res.json(car);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to fetch the car" });
  }
});

app.post("/cars", async (req, res) => {
  try {
    const car = new Car(req.body);
    const savedCar = await car.save();
    res.status(201).json(savedCar);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to post the car" });
  }
});

app.put("/cars/:id", async (req, res) => {
  try {
    const editedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!editedCar) {
      res.status(404).json({ message: "Car not found" });
    }

    res.json(editedCar);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to edit the car" });
  }
});

app.delete("/cars/:id", async (req, res) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.id);

    if (!deletedCar) {
      res.status(404).json({ message: "Car not found" });
    }

    res.json(deletedCar);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to delete the car" });
  }
});

app.listen(3000, () => {
  console.log("App is listening to port 3000");
});
