/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
******************************************/

//  creates `quotes` variable to store quotes //
var quotes = [];

// adds quote objects to `quotes` array //
quotes.push({}, {}, {}, {}, {});

// `quotes[].quote` gives each quote object a `quote property.//
quotes[0].quote = ('Veni, Vidi, Vici.');
// `quotes[].source` gives each quote object a `source` property //
quotes[0].source = ('Julius Caesar');
// `quotes[].citation` gives each quote object a `citation` property //
quotes[0].citation = ('in a letter to the Roman Senate');
// `quotes[].year` gives each quote object a `year` property //
quotes[0].year = ('Around 47 BC');

quotes[1].quote = ('Life is like riding a bicycle. To keep your balance, you must keep moving.');
quotes[1].source = ('Albert Einstein');

quotes[2].quote = ('You don\'t always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.');
quotes[2].source = ('Mandy Hale');

quotes[3].quote = ('Don’t judge each day by the harvest you reap but by the seeds that you plant.');
quotes[3].source = ('Robert Louis Stevenson');

quotes[4].quote = ('Happiness is not by chance, but by choice.');
quotes[4].source = ('Jim Rohn');


/***
  `getRandomQuote` function creates `randomNumber` variable to store random number
   and returns a random quote object from the `quotes` array.
***/
function getRandomQuote(){
  var randomNumber = Math.floor( Math.random ()  *  quotes.length );
return quotes[randomNumber];
};


//`printQuote` function calls `getRandomQuote` function and assigns it to `htmlString` variable. //
function printQuote(){
  var randomQuote = getRandomQuote();
  var htmlString = ' ';

  //adds random quote variable to `htmlString`//
  htmlString += '<p class="quote">' +  ' "' + randomQuote.quote + '" ' + '</p>';
  //adds random source variable to `htmlString`//
  htmlString += '<p class="source">' + ' - ' + randomQuote.source ;

  //if statement checks for `citation` property before adding it to the `htmlString`.//
  if (randomQuote.citation){
    htmlString += '<span class="citation">' + ', ' + randomQuote.citation + '</span>';
  };

  //if statement checks for `year` property before adding it to the `htmlString`.//
  if (randomQuote.year){
    htmlString += '<span class="year">' + ', ' + randomQuote.year + '</span>';
  };

  htmlString += '</p>'

//Setting innerHTML` of `quote-box` div to `htmlString`. //
 document.getElementById("quote-box").innerHTML = htmlString;
};

//  "Show another quote" button is clicked, event listener calls `printQuote` function. //
document.getElementById('loadQuote').addEventListener("click", printQuote, false); 
