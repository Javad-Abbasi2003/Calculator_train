const displayBox = document.querySelector(".display");
let hiddenBox = 0;
const keys = document.querySelectorAll(".show-display");
keys.forEach(function(key) {
    key.addEventListener("click", addToDisplay);
});
document.querySelector(".tavan").addEventListener("click", tavan);
document.querySelector(".clear-last").addEventListener("click", clear);
document.querySelector(".calculate").addEventListener("click", Calculate);
document.querySelector(".all-clear").addEventListener("click", allClear);
document.querySelector(".sqrt").addEventListener("click", sqroot);
document.querySelector(".pi").addEventListener("click", pi);
const max = document.querySelector(".maxNumber")
function maxDisplayed() {
    max.innerText = "Maximum number reached!";
    max.style.visibility = "visible"
    setTimeout(() => {max.style.visibility = "hidden"}, 2000)
}
function wrongAction() {
    max.innerText = "Wrong action!";
    max.style.visibility = "visible"
    setTimeout(() => {max.style.visibility = "hidden"}, 2000)
}
function pi(){
    if (displayBox.innerText.length != 13) {
        if (displayBox.innerText == 0) {
            displayBox.innerText = "π";
            hiddenBox = "(Math.PI)";
        } else {
            displayBox.innerText += "π";
            hiddenBox += "(Math.PI)";
        };
    } else {
        maxDisplayed()
    };
};
function sqroot(){
    displayBox.innerText = Math.sqrt(hiddenBox);
    hiddenBox = displayBox.innerText;
    if (displayBox.innerText == "NaN") {
        wrongAction();
        allClear();
    }else {
        displayBox.innerText = displayBox.innerText.substring(0, 13);
        hiddenBox = displayBox.innerText;
    };
};
function tavan(){
    if (displayBox.innerText == 0) {
        wrongAction();
        allClear();
    } else if (displayBox.innerText.length != 13) {
        displayBox.innerText += "^";
        hiddenBox += "**";
    } else {
        maxDisplayed()
    };
};
function addToDisplay(item){
    const x = item.target.innerText
    if (displayBox.innerText.length != 13) {
        if (displayBox.innerText == 0) {
            displayBox.innerText = x;
            hiddenBox = x;
        } else {
            displayBox.innerText += x;
            hiddenBox += x;
        };
    } else {
        maxDisplayed()
    };
};
function allClear(){
    displayBox.innerText = 0;
    hiddenBox = 0;
};
function clear(){
    const text = displayBox.innerText;
    if (text.length == 1) {
        displayBox.innerText = 0;
        hiddenBox = 0;
    } else if (text.substring(text.length - 1,text.length) == "^") {
        displayBox.innerText = text.substring(0, text.length - 1);
        hiddenBox = hiddenBox.substring(0,hiddenBox.length - 2);
    }else if (text.substring(text.length - 1,text.length) == "π"){
        displayBox.innerText = text.substring(0, text.length - 1);
        hiddenBox = hiddenBox.substring(0,hiddenBox.length - 9);
    }else {
        displayBox.innerText = text.substring(0, text.length - 1);
        hiddenBox = hiddenBox.substring(0,hiddenBox.length - 1);
    };
};
function Calculate(){
    const dis = displayBox.innerText
    if (dis.substring(0, 1) == "*" || dis.substring(0, 1) == "/" || dis.substring(0, 1) == "%" || dis.substring(0, 1) == ")" || dis.substring(0, 1) == "^" || dis.substring(0, 1) == "√"){
        wrongAction();
        allClear();
    }else if (dis.substring(dis.length - 1, dis.length) == "*" || dis.substring(dis.length - 1, dis.length) == "/" || dis.substring(dis.length - 1, dis.length) == "%" || dis.substring(dis.length - 1, dis.length) == ")" || dis.substring(dis.length - 1, dis.length) == "^" || dis.substring(dis.length - 1, dis.length) == "√") {
        wrongAction();
        allClear();
    }else {
        displayBox.innerText = eval(hiddenBox);
        displayBox.innerText = displayBox.innerText.substring(0, 13);
        hiddenBox = displayBox.innerText;
    };
};