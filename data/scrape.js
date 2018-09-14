var axios = require('axios')
var cheerio = require('cheerio')
var db = require("../models")

var scrapeFunction = function () {

    return axios.get("https://www.theguardian.com/international").then(function (res) {
        var $ = cheerio.load(res.data); //res.data = guardian website data
    
        // console.log(res.data); //console.logging cheerio data
        var articles = []

        $('.fc-item__container').each(function (el, i) {

            // Headline
            var headline = $(this).find('.fc-item__header').text().trim()
            // console.log(headline);
            // Summary
            var summary = $(this).find('.fc-item__standfirst-wrapper').text().trim()
            // console.log(summary);
            // URL
            var url = $(this).find('.fc-item__title').find('a').attr('href').trim()
            // console.log(url);

            // Initialize an object and storing all the data in an object
            var articlesToPush = {
                headline: headline,
                summary: summary,
                url: url
            };
            // pushing the various objects to the articles array
            articles.push(articlesToPush)
            // console.log(articles)

        })

        db.Article.create(res)
            .then(function (dbArticle) {
                // View the added result in the console
                console.log('this is a test');
                console.log(dbArticle);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                return err;
            });

        return articles;

        // If we were able to successfully scrape and save an Article, send a message to the client
        res.send("Scrape Complete");

    });
}


scrapeFunction();
module.exports = scrapeFunction

// STEP 2: 

// a) I should be able to leave a comment on the article
    // TODO:: need to create a form to enter in comments
    // TODO:: need to have a button to post the comment 
    // TODO:: need to have a click function to trigger the posting of the comment 
    // TODO:: need to have the comment posted back onto the page

// b) I should be able to revisit my comments later
    // TODO:: need to create a db for the articles saved
// c) When I revisit my comments, they should be saved in the database alongside the article they were saved for
// d) I should be able to delete my comments
// e) I should have my comments visible to everyone

