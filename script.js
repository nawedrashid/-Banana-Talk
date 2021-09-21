var btntrans = document.querySelector("#btn-translate");
var input = document.querySelector("#input-txt");
var output = document.querySelector("#output-txt");

var serverURL = "https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}
function errorHandler(error){
    console.log("Error Occured",error);
    alert("Something went wrong")
}
function clickHandler(){
    var inputText=input.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        output.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}
btntrans.addEventListener("click",clickHandler);
