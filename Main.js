var listquotes=[
    {'author':'Oscar Wilde',
        'quote':'Be yourself; everyone else is already taken.'

    },
     {'author':' Frank Zappa',
        'quote':'So many books, so little time'

    },
     {'author':' Albert Einstein',
        'quote':'Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.'

    },
     {'author':'Marcus Tullius Cicero',
        'quote':'A room without books is like a body without a soul.'

    },
     {'author':'Bernard M. Baruch',
        'quote':'Be who you are and say what you feel, because those who mind donot matter, and those who matter donot mind.'

    },
     {'author':'Dr. Seuss',
        'quote':'You know you are in love when you canot fall asleep because reality is finally better than your dreams'

    },
     {'author':' Mae West',
        'quote':'You only live once, but if you do it right, once is enough.'

    },
     {'author':'Mahatma Gandhi',
        'quote':'Be the change that you wish to see in the world.'

    }
];



function changeQuote(){
    var i=Math.floor(Math.random()*listquotes.length);
     document.getElementById('Quote').innerText=listquotes[i].quote
    document.getElementById('QuoteEuthor').innerText=listquotes[i].author;
   
}