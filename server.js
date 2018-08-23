// STEP 1: Get the scraping to work and scrape 1) the headline, 2) summary and 3) url

const request = require('request');
const cheerio = require('cheerio');

request("https://www.theguardian.com/international", (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        $('.fc-item__container').each((i, el) => {
            // Headline
            const headline = $(el)
                .find('.fc-item__header')
                .text()
            console.log(headline)
            // Summary
            const summary = $(el)
                .find('.fc-item__standfirst-wrapper')
                .text();
            console.log(summary);

            // URL
            const url = $(el)
                .find('.fc-item__title')
                .find('a')
                .attr('href');
            console.log(url)

        });
    }

});

// STEP 2: 

// a) I should be able to leave a comment on the article 
// b) I should be able to revisit my comments later
// c) When I revisit my comments, they should be saved in the database alongside the article they were saved for
// d) I should be able to delete my comments
// e) I should have my comments visible to everyone

