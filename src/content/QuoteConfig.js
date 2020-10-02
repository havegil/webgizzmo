import React from 'react';

const QuoteConfig = props => {

    /* Refactor: consider putting thw quotes in a JSON file for as external text, that way they can be edited without having to go into the this file*/
    const quotesObj = [
        {
        authorQuote: "It's not what you look at that matters, it's what you see.",
        author : "~ Henry David Thoreau"
        },
         { authorQuote: "Sometimes only a change of viewpoint is needed to convert a tiresome duty into an interesting opportunity.",
         author:"~ Alberta Flanders"
        },
        { authorQuote: "Vision: the art of seeing the invisible.",
        author: "~ Jonathan Swift"
        },
         { authorQuote: "Never solve a problem from its original perspective.",
         author:"~ Charles Thompson"
        },
         { authorQuote: "Sometimes the questions are complicated, and the answers are simple.",
         author:"~ Dr. Seuss"
        },
         { authorQuote: "If you change the way you look at things, the things you look at change.",
         author: "~ Wayne Dyer"
        },
          { authorQuote: "There are some people who see a great deal and some who see very little in the same things.",
          author:"~ Thomas Henry Huxley"
        },
         { authorQuote:  "Sometimes a problem isn’t really a problem but the solution in disguise.",
         author:"~ Richelle E. Goodrich"
        },
         { authorQuote:  "We don't know all the answers. If we knew all the answers we'd be bored, wouldn't we? We keep looking, searching, trying to get more knowledge.",
         author:"~ Jack LaLanne"
        },
         { authorQuote:  "Creativity involves breaking out of established patterns in order to look at things in a different way.",
         author:"~ Edward de Bono"
        }
    ];


             
    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    const shuffleQuotes = () => {
        let randNum = randomIntFromInterval(0, (quotesObj.length -1));        
        let randomQuoteObj =  quotesObj[randNum];

        return randomQuoteObj;
    }


    return(

        <div>
            <div className="page_quote">{shuffleQuotes().authorQuote}</div>
            <div className="page_author">{shuffleQuotes().author}</div>
        </div>
    );
}
export default QuoteConfig;
