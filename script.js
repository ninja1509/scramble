var level, word, display;
var easy=["BIRD", "DANCE", "WHITE", "FISH"];
var medium= ["SUPERMAN","ANIMAL", "PARROT", "MARINE"];
var difficult= ["MOTERCYCLE", "PYRAMID", "ADVENTURE","SOLUTION"];


function updateLevel(){

    level = document.getElementById("diff").value;
    document.getElementById("level_span").innerText=level;

}


function play(){
    level = document.getElementById("diff").value;

    if(level == 1){
        word = easy[Math.floor(Math.random()*easy.length)]
        jumbled_words()
    }
    else if(level == 2){
        word = medium[Math.floor(Math.random()*medium.length)]
        jumbled_words()
    }
    else{
        word = difficult[Math.floor(Math.random()*difficult.length)]
        jumbled_words()
    }

}

function submit(){
    answer =  document.getElementById("ans").value;
    if (answer.toUpperCase() == word){
        alert("CORRECT");
        location.reload();
    }
    else{
        alert("WRONG");
        location.reload();
    }

}


function jumbled_words(){
    var a = word.split("");
    var n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    display = a.join("");
    document.getElementById("word_span").innerHTML = display
}