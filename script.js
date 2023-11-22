var apiQuotes=[];
const quoteText=document.querySelector("#quote");
const authorText=document.querySelector("#author");
const twitterBtn=document.querySelector("#twitter");
const showNewQuote=(listQutote)=>{
    const quote=apiQuotes[Math.floor(Math.random()* apiQuotes.length)]
    quoteText.innerHTML=quote.text;
    if (!quote.author) {
        authorText.innerHTML="Unknown";
    }else{
        authorText.innerHTML=quote.author;
    }
    if (quote.text.length>80) {
        quoteText.classList.add('long-quote')
    }else{
        quoteText.classList.remove('long-quote')
    }

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
const tweet=()=>{
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent} \n +
     from : ${window.location.origin} `
    window.open(twitterUrl)
}
 get();
