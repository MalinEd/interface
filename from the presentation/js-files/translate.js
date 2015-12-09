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
        ["yourorder", "Your order"],
        ["wannaPay", "<p>Are you sure you would like to pay?</p>"],
        ["beverages", "Beverages"],
        ["favs", "Favorites"],
        ["popular", "Popular"],
        ["favBeverage", "Favorites"],
        ["popularBev", "<h3>Most sold Beverages</h3>"],
        ["drinks", "Beverages"],
        ["searching1", "Search beverage"]
    ]
}

function Svenska() {
    return [
        ["sitetitle", "Välkommne ombord på The Flying Dutchman!"],
        ["logoutbutton", "Logga ut"],
        ["leftbar1", "Min sida"],
        ["leftbar2", "Drycker"],
        ["credit", "<h5>Ditt kredit: ...</h5>"],
        ["cost", "<h5>Total kostnad: ....</h5>"],
        ["yourorder", "Din beställning"],
        ["opener", "Betala"],
        ["wannaPay", "<p>Är du säker att du vill betala?</p>"],
        ["beverages", "Drycker"],
        ["favs", "Favoriter"],
        ["popular", "Populära"],
        ["favBeverage", "Favoriter"],
        ["popularBev", "<h3>Mest sålda drycker</h3>"],
        ["drinks", "Drycker"],
        ["searching1", "Sök dryck"]
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
        ["yourorder", "Your order"],
        ["opener", "Pagar"],
        ["wannaPay", "<p> ¿Está seguro que desea pagar? </ p>"],
        ["beverages", "Alcoholes"],
        ["favs", "Favoritos"],
        ["popular", "Popular"],
        ["favBeverage", "Favoritos"],
        ["popularBev", "<h3>Bedidas más vendidos</h3>"],
        ["drinks", "Bedidas"],
        ["searching1", "Búsqueda de bebidas"]]
}

