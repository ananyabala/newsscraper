var scrapeFunction = require("../data/scrape");
module.exports = function (app) {

  // * A GET route with the url `/api/news`. This will be used to display a JSON of all possible news.
  app.get("/news", function (req, res) {
    res.json(scrapeFunction);
  });
  // * A POST route `/api/news`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  // Create New News - takes in JSON input
  app.post("/news",
    function (req, res) {
      console.log(req.body)
    });
};