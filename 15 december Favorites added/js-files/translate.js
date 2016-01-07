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
        ["sitetitle", "Welcome Aboard The Flying Dutchman!"],
        ["logoutbutton", "Log Out"],
        ["leftbar1", "My Page"],
        ["leftbar2", "Beverages"],
        ["credit", "<h5>Your credit: ...</h5>"],
        ["cost", "<h5>Total cost: ....</h5>"],
        ["opener", "Pay"],
        ["yourorder", "Your order:"],
        ["favs", "<b id='b1' class ='current'>Favorites</b>"],
        ["popular", "<b id='b2'>Popular</b>"],
        ["all1", "<c id='c1' class='current'>Beverages</c>"],
        ["öl1", "<c id='c2' >Beer</c>"],
        ["cider1", "<c id='c3' >Cider</c>"],
        ["vitt_vin1", "<c id='c4' >White wine</c>"],
        ["rött_vin1","<c id='c5' >Red wine</c>"],
        ["alcohol-free1","<c id='c6' >Alkohol free</c>"],
        ["searching1", "<c id='c7' >Search</c>"],
        ["search_2","Search beverage"],
        ["inf1","ⓘ=Order from bartender"],
        ["inf2","ⓘ=Order from bartender"],
        ["favMessage","You have not added any favorites"],
        ["wannaPay", "<p>Are you sure you would like to pay?</p>"],

    ]

}

function Svenska() {
    return [ 
        ["sitetitle", "Välkommne ombord på The Flying Dutchman!"], 
        ["logoutbutton", "Logga ut"], 
        ["leftbar1", "Min sida"], 
        ["leftbar2", "Drycker"], 
        ["credit", "<h5>Din kredit: ...</h5>"], 
        ["cost", "<h5>Total kostnad: ....</h5>"], 
        ["yourorder", "Din beställning:"], 
        ["opener", "Betala"], 
        ["favs", "<b id='b1' class ='current'>  Favoriter  </b>"], 
        ["popular","<b id='b2' >Populära</b>"], 
        ["all1", "<c id='c1' class='current'>Drycker</c>"], 
        ["öl1", "<c id='c2'>Öl</c>"], 
        ["cider1", "<c id='c3' >Cider</c>"], 
        ["vitt_vin1", "<c id='c4' >Vitt vin</c>"], 
        ["rött_vin1","<c id='c5' >Rött vin</c>"], 
        ["alcohol-free1","<c id='c6' >Alcohol fri</c>"], 
        ["searching1", "<c id='c7' >Search</c>"], 
        ["search_2","Sök dryck"],
        ["inf1","ⓘ=Beställ av bartendern"],
        ["inf2","ⓘ=Beställ av bartendern"],
        ["favMessage","Du har inte lagt till några favoriter"],
        ["wannaPay", "<p>Är du säker att du vill betala?</p>"]

    ]

}


function Español() {
    return [
        ["sitetitle", "Bienvenido a bordo del Holandés Errante!"],
        ["logoutbutton", "Cerrar sesión"],
        ["leftbar1", "Mi Página"],
        ["leftbar2", "Alcoholes"],
        ["credit", "<h5>Su crédito: ...</h5>"],
        ["cost", "<h5>Costo total: ....</h5>"],
        ["yourorder", "Su pedido:"],
        ["opener", "Pagar"],
        ["favs", "<b id='b1' class='current'>Favoritos</b>"],
        ["popular", "<b id='b2' >Popular</b>"],
        ["all1", "<c  id='c1' class='current'>Bedidas</c>"],
        ["öl1", "<c id='c2' >Cerveza</c>"],
        ["cider1", "<c id='c3' >Sidra</c>"],
        ["vitt_vin1", "<c id='c4' >Vino blanco</c>"],
        ["rött_vin1","<c id='c5' >Vino tinto</c>"],
        ["alcohol-free1","<c id='c6' >No alcohólico</c>"],
        ["searching1", "<c id='c7' >Buscar</c>"],
        ["search_2","Buscar"],
        ["inf1","ⓘ=Fin de camarero"],
        ["inf2","ⓘ=Fin de camarero"],
        ["favMessage","Usted no ha agregado favoritos"],
        ["wannaPay", "<p> ¿Está seguro que desea pagar? </p>"],

    ]
}

