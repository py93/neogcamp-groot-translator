const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const divShow = document.querySelector("#div-Show");

btnTranslate.addEventListener("click", clickEventHandler)

const serverURL = "https://api.funtranslations.com/translate/groot.json"

function getTranslationUrl(input) {
    const url = serverURL + "?" + "text=" + input;
    const encodedUrl = encodeURI(url);
    console.log(encodedUrl);
    return encodedUrl;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickEventHandler(){
    const inputText = txtInput.value;

    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {
        const translatedText = json.contents.translated;
        divShow.innerText = translatedText;
    })
    .catch(errorHandler)
};

