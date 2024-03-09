
// https://github.com/lukePeavey/quotable
// https://api.quotable.io/random


// fetching and displaying quotes
const getQuotes = async()=>{
  try {
    const response = await fetch("https://api.quotable.io/random")
    const data = await response.json();
    const elem =document.getElementById("element")
    // console.log( data.content);
    elem.innerHTML = data.content
  } catch (error) {
    
  }
}
window.addEventListener("load", ()=>{
  getQuotes();
})
