//Word list arrays

//English List
var greetings_En =["Hello","How are you?","What\'s up?", "Nice to meet you."];
var bodyParts_Sw =["Head", "Chest", "Back","Hand","Leg"];
var colors_Sw =["red","orange","brown", "green", "blue", "light blue"];

//Swahili Lists
var greetings_Sw =["Habari","Habari gani?","Kuna nini?", "Ni njema kukutana na wewe."];
var bodyParts_Sw =["Kichwa", "kifua", "mgongo","mkono","miguu"];
var colors_Sw =["nyekundu","chungwa","majano", "kijani", "samawati", "bluu ya kati"];

//variable to display current word
var word = document.getElementById("wrd");

//variable to store the current word
var crrWrd;

//varriable to store word lists
var crrLst;
var trgLst;

//varriable to store index of word in a list
var flipped = false;

function init(){
    //set crList
    crLst = greetings_En;
    //set trgLst
    trgLst = greetings_En;
    //set crrWrd
    crrWrd = crrLst[0];
    //set display
    word.innerHTML = crrWrd;
    //set ndx
    ndx = crrLst.indexOf(crrWrd)
    //reset cartegoryList to default
    document.getElementById("category").selectedIndex =0;
    //reset target list value to defaut
    document.getElementById("target1").selectedIndex =0;
    document.getElementById("target2").selectedIndex =0;
}
//change cartegory control
function chgList(trg){
    switch(trg.value){
        case "greetings":
            crrLst = greetings_En;
            trgLst = greetings_Sw;
            word.innerHTML = crrLst[ndx];
        break;
        case "bodyParts":
            crrLst = bodyParts_En;
            trgLst = bodyParts_Sw;
            word.innerHTML = crrLst[ndx];
        break;
        case "colors":
            crrLst = colors_En;
            trgLst = colors_Sw;
            word.innerHTML = crrLst[ndx];
        break;
    }}
function prrWrd() {
    if(ndx > 0) {
        ndx--;
    }else{
        ndx = (crrLst.length-1);
    }
  word.innerHTML = trgLst[ndx];
}
function flipWrd() {
    if(flipped) {
        word.innerHTML = crrLst[ndx];
        flipped = false;
    }else{
        word.innerHTML = crrLst[ndx];
        flipped = true;
}
   function nxtWrd() {
    if(ndx < (crrLst.length-1)) {
        ndx++;
    }else{
        ndx = 0;
    }
  word.innerHTML = crrLst[ndx];
}}



document.onload = init();