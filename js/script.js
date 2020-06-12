/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "They may take our lives, but they'll never take our freedom!",
    source: "Mel Gibson as William Wallace",
    citation: "Braveheart",
    year: 1995,
    tag: ["movie", "epic"]
  },
  {
    quote: "You complete me.",
    source: "Tom Cruise as Jerry Maguire",
    citation: "Jerry Maguire",
    year: 1996,
    tag: ["movie", "not watched"]
  },
  {
    quote: "Chewie, we're home.",
    source: "Harrison Ford as Han Solo ",
    citation: "Star Wars Ep VII: The Force Awakens",
    year: 2015,
    tag: ["movie"]
  },
  {
    quote: "They call it a Royale with cheese.",
    source: "John Travolta as Vincent",
    citation: "Pulp Fiction",
    year: 1994,
    tag: ["movie", "awesome"]
  },
  {
    quote: "I am the one who knocks.",
    source: "Brian Cranston as Walter White",
    citation: "Breaking Bad Season 4 Ep. 6",
    year: 2011,
    tag: ["tv", "awesome"]
  },
  {
    quote: "Rosebud.",
    source: "Orson Welles as Kane",
    citation: "Citizen Kane",
    year: 1941,
    tag: ["movie", "classic"]
  },
  {
    quote: "I am going to stop procrastinating.",
    source: "Andrew Hinkson",
    citation: "Myself"
  }
];



/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes[randomNumber];
}

function getRandomRGB() {
  return Math.floor(Math.random() * 256);
}

/***
 * `printQuote` function
***/
function printQuote() {
  document.getElementById('load-quote').removeEventListener("click", printQuote, false);
  setInterval(function() {
    let quoteObj = getRandomQuote();

    document.body.style.backgroundColor = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`

    let html = `<p class="quote">${quoteObj.quote}</p>`;
    html += `<p class="source">${quoteObj.source}`;
    if (quoteObj.citation) {
      html += `<span class="citation">${quoteObj.citation}</span>`
    }
    if (quoteObj.year) {
      html += `<span class="year">${quoteObj.year}</span>`;
    }
    if (quoteObj.tag) {
      html += `<span class="tag"> [${quoteObj.tag}]</span>`;
    }
    html += "</p>";
    
    return document.getElementById('quote-box').innerHTML = html;
  }, 5000);
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);