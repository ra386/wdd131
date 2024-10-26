// variables

let btn =document.getElementById("new-quote");
let quote = document.getElementById("talk");
let author = document.getElementById("quel");

const quotes = [{
    quote: `"The successful warrior is the average man, with laser-like focus."`,
    person: `Bruce Lee`
},
{
    quote: `"If you don’t build your dream, someone else will hire you to help them build theirs."`,
    person: `Dhirubhai Ambani`   
},
{
    quote: `"Successful entrepreneurs know that the best way to predict the future is to create it."`,
    person: `Peter Drucker`   
},
{
    quote: `"Success is not final; failure is not fatal: It is the courage to continue that counts."`,
    person: `Winston Churchill`   
},
{
    quote: `"he future belongs to those who believe in the beauty of their dreams."`,
    person: `Eleanor Roosevelt`   
},
{
    quote: `"The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand."`,
    person: `Vince Lombardi`   
},
{
    quote: `"The key to successful leadership today is influence, not authority."`,
    person: `Kenneth Blanchard`   
},
{
    quote: `"Be undeniably good. No marketing effort or social media buzzword can be a substitute for that."`,
    person: ` Anthony Volodkin`   
},
{
    quote: `"You don’t learn to walk by following rules. You learn by doing and falling over."`,
    person: `Richard Branson`   
},
{
    quote: `"The most difficult thing is the decision to act, the rest is merely tenacity."`,
    person: `Amelia Earhart`   
},
];

btn.addEventListener('click', function(){

        let random = Math.floor(Math.random() * quotes.length);
    
    
    
        quote.innerText = quotes[random].quote;
    
        author.innerText = quotes[random].person;
    
    
    
    });