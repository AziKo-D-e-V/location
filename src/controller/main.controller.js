const DailySchema = require("../models/daily.model");

const HomePage = async (req, res) => {
  res.render("index");
};

const MainPage = async (req, res) => {
  try {
    const { distance } = req.body;

    console.log(distance);
    await DailySchema.create({
      distance: distance.distance,
      latitude: distance.startLocation.latitude,
      longitude: distance.startLocation.longitude,
    });

    res.status(200).json({ message: "Success", result: distance });
  } catch (error) {
    console.log(error.message);
  }
};

const GetAllDistance = async (req, res) => {
  const result = await DailySchema.find({});

  const distanceSum = calcDis(result);

  res.render("getAll", { distanceSum });
};

const calcDis = (data) => {
  let totalSum = 0;
  data.forEach((item) => {
    totalSum += +item.distance;
  });
  return totalSum.toFixed(2);
};

module.exports = { HomePage, MainPage, GetAllDistance };
