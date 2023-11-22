var apiQuotes=[];
const quoteText=document.querySelector("#quote");
const authorText=document.querySelector("#author");
const showNewQuote=(listQutote)=>{
    const quote=apiQuotes[Math.floor(Math.random()* apiQuotes.length)]
    console.log(quote);
    quoteText.innerHTML=quote.text;
    authorText.innerHTML=quote.author;
}   
async function get(){
    try {
        const response=await fetch("https://jacintodesign.github.io/quotes-api/data/quotes.json",{method:"GET"})
        apiQuotes=await response.json();
        showNewQuote();

    } catch (error) {
        alert("an error occured")
    }
}

 get();
