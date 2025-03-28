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

const sampleCars = [
    {
      make: "Toyota",
      imgURL: "https://images.unsplash.com/photo-1559416523-140ddc3d238c",
      model: "Camry",
      year: 2022,
      color: "Silver",
      price: 29999,
      fuelType: "petrol",
      transmission: "automatic",
      mileage: 12500,
      features: ["Sunroof", "Navigation", "Bluetooth", "Backup Camera"],
      isAvailable: true
    },
    {
      make: "Honda",
      imgURL: "https://images.unsplash.com/photo-1630990325544-39046e06bbe5",
      model: "Civic",
      year: 2021,
      color: "Blue",
      price: 24500,
      fuelType: "petrol",
      transmission: "cvt",
      mileage: 18000,
      features: ["Apple CarPlay", "Android Auto", "Heated Seats"],
      isAvailable: true
    },
    {
      make: "Tesla",
      imgURL: "https://images.unsplash.com/photo-1560958089-b8a1929cea89",
      model: "Model 3",
      year: 2023,
      color: "White",
      price: 52990,
      fuelType: "electric",
      transmission: "automatic",
      mileage: 5000,
      features: ["Autopilot", "Premium Sound System", "Glass Roof", "Supercharging"],
      isAvailable: false
    },
    {
      make: "Ford",
      imgURL: "https://images.unsplash.com/photo-1551830820-330a71b99659",
      model: "Mustang",
      year: 2020,
      color: "Red",
      price: 45000,
      fuelType: "petrol",
      transmission: "manual",
      mileage: 25000,
      features: ["V8 Engine", "Leather Seats", "Performance Package"],
      isAvailable: true
    },
    {
      make: "BMW",
      imgURL: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
      model: "X5",
      year: 2022,
      color: "Black",
      price: 65700,
      fuelType: "hybrid",
      transmission: "automatic",
      mileage: 9800,
      features: ["Panoramic Sunroof", "Heads-up Display", "Heated Steering Wheel", "Parking Assistant"],
      isAvailable: true
    },
    {
      make: "Audi",
      imgURL: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd",
      model: "A4",
      year: 2021,
      color: "Gray",
      price: 39950,
      fuelType: "petrol",
      transmission: "automatic",
      mileage: 15600,
      features: ["Virtual Cockpit", "Bang & Olufsen Sound", "Quattro AWD"],
      isAvailable: true
    },
    {
      make: "Hyundai",
      imgURL: "https://images.unsplash.com/photo-1629385701817-21671c196a41",
      model: "Tucson",
      year: 2023,
      color: "Green",
      price: 32450,
      fuelType: "hybrid",
      transmission: "automatic",
      mileage: 3200,
      features: ["Lane Keeping Assist", "Blind Spot Detection", "Wireless Charging"],
      isAvailable: true
    },
    {
      make: "Volkswagen",
      imgURL: "https://images.unsplash.com/photo-1617814065893-2be4a6a1e71c",
      model: "Golf GTI",
      year: 2020,
      color: "White",
      price: 28750,
      fuelType: "petrol",
      transmission: "manual",
      mileage: 32000,
      features: ["Sport Suspension", "Plaid Seats", "Performance Brakes"],
      isAvailable: false
    }
  ];

app.listen(3000, () => {
  console.log("App is listening to port 3000");
});
