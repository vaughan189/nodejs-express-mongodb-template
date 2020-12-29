const port = process.env.PORT || 3000;

const connectDB = require('./db/database');
const app = require('./app');

const startServer = async () => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
};

(async () => {
  await connectDB();
  await startServer();
})();
