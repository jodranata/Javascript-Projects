let quoteBtn_DOM = document.getElementById('quoteBtn');

function random(length) {
    return Math.floor(Math.random() * length);
}

function changeQuote() {
    const quotes = [
        {name: 'Dante Alighieri',
         quotes: 'Consider your origin. You were not formed to live like brutes but to follow virtue and knowledge.'    
        },
        {name: 'Virgil',
         quotes: 'Let us go singing as far as we go: the road will be less tedious.'    
        },
        {name: 'Miguel de Cervantes',
         quotes: 'In order to attain the impossible, one must attempt the absurd.'    
        },
        {name: 'Immanuel Kant',
         quotes: 'Thoughts without content are empty, intuitions without concepts are blind.'    
        },
        {name: 'Plato',
         quotes: 'Ignorance, the root and stem of every evil.'    
        },
        {name: 'Aristotle',
         quotes: 'It is during our darkest moments, that we must focus to see the light.'    
        },
        {name: 'Friedrich Wilhelm Nietzsche',
         quotes: 'You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist.'    
        },
        {name: 'Desiderius Erasmus',
         quotes: 'The summit of happiness is reached when a person is ready to be what he is.'    
        },
    ];

    let randomIndex = random(quotes.length);
    let randomAuthor = quotes[randomIndex].name;
    let randomQuote = quotes[randomIndex].quotes;
    document.getElementById('quote').innerHTML = randomQuote;
    document.getElementById('quoteAuthor').innerHTML = randomAuthor;
}


quoteBtn_DOM.addEventListener('click', changeQuote);