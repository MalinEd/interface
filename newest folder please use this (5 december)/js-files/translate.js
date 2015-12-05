/**
 * Created by Andreas on 2015-12-02.
 */

$(function() {
    generateTranslateButtons();
});

function generateTranslateButtons() {
    var genArray = [' url("pictures/flag_british.png")', ' url("pictures/flag_swedish.png")', ' url("pictures/flag_spanish.png")'];
    for (i=0; i<genArray.length; i++) {
        var changeFlag = document.getElementsByClassName("flagbutton");
        changeFlag[i].style.backgroundImage = genArray[i];
    }
}

function Translate(language) {
    var translate = language();
    var count;
    for(count = 0; count < translate.length; count++){
        document.getElementById(translate[count][0]).innerHTML = translate[count][1];
    }
    }

function English() {
    return [
        ["menu", "This will be translated"],
        ["topleftbar", 'Welcome "get username"'],
        ["content", "here it should be possible to show list of favorite beers and most sold beers =)"]
    ]
}

function Svenska() {
    return [
        ["menu", "Detta kommer översättas"],
        ["topleftbar", 'Välkommen "få användarnamn"'],
        ["content", "Här bör det vara möjligt att visa listan över favorit öl och mest sålda öl =)"]
    ]
}

function Español() {
    return [
        ["menu", "Esto se traducirá"],
        ["topleftbar", 'Bienvenidos a "obtener nombre de usuario"'],
        ["content", "aquí debería ser posible para mostrar la lista de cervezas favoritas y cervezas más vendidas =)"]
    ]
}

