let express = require("express");
let bodyParser = require("body-parser");
let app = express();

// Import routes
let apiRoutes = require("./routes/api-routes");
let connectDB = require("./db/database");

var port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello World with Express"));

app.use("/api", apiRoutes);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const startServer = async () => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
};

(async () => {
  await connectDB();
  await startServer();
})();
