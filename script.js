var btntrans = document.querySelector("#btntranslate");
var input = document.querySelector("#input");
var output = document.querySelector("#outputtxt");

var serverURL="https://api.funtranslations.com/translate/minion.json";
function getTanslationURL(text){
    return serverURL+"?text"+ text;
}
function errorHandler(error){
    console.log("Error Occured",error);
    alert("Something went wrong")
}
function clickHandler(){
    var inputText=input.value;
    fetch(getTanslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var Translatedtext = json.contents.translated;
        output.innerText = Translatedtext;
    })
    .catch(errorHandler);
}
btntrans.addEventListener("click",clickHandler);