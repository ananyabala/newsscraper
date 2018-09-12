var db = require ("../models")
var scrapeFunction = require("./scrape")

module.exports={
    scrapedHeadlines: function(req,res){
        return scrapeFunction()
        .then(
            function(articles){
                return db.Article.create(articles);
            }
        )
        .then(
            function(dbHeadline){
                if(dbHeadline.length===0){
                    res.json({
                        message: "No new articles"
                    })
                }
            }
        )
        .catch(function(err))
    }
}