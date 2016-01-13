/**
 * Created by Andreas on 2015-12-02.
 */

$(function() {
    generateTranslateButtons();
});

function generateTranslateButtons() {
    var genArray = [' url("pictures/flag_british.png")', ' url("pictures/flag_swedish.png")', ' url("pictures/flag_spanish.png")'];
    for (var i=0; i<genArray.length; i++) {
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
        ["credit", "Your credit:"],
        ["cost", "Total cost:"],
        ["opener", "Pay"],
        ["yourorder", "Your order:"],
        ["favs", "<b id='b1' class ='current'>Favorites</b>"],
        ["popular", "<b id='b2'>Popular</b>"],
        ["all1", "<c id='c1' class='current'>Beverages</c>"],
        ["öl1", "<c id='c2' >Beer</c>"],
        ["cider1", "<c id='c3' >Cider</c>"],
        ["vitt_vin1", "<c id='c4' >White wine</c>"],
        ["rött_vin1","<c id='c5' >Red wine</c>"],
        ["alcohol-free1","<c id='c6' >Alcohol free</c>"],
        ["searching1", "<c id='c7' >Search</c>"],
        ["search_2","Search beverage"],
        ["inf1","ⓘ=Order from bartender"],
        ["inf2","ⓘ=Order from bartender"],
        ["undoButton","undo"],
        ["redoButton","redo"],
        ["dra1","Drag and drop beverage in area under pay"],
        ["dra2","Drag and drop beverage in area under pay"],
        ["creditmess","You don't have enough credit. Remove an item and try again or add more credit in the automat or in the bar"],
        ["ok","Ok"],
        ["confirmmess","Are you sure you want to pay?"],
        ["Yes","Yes"],
        ["No","No"],
        ["noOrdermess","You haven't ordered anything"],
        ["ok2","Ok"],
        ["slut","Out of stock"],
        ["ok3","Ok"],
        ["instr","Take the receipt and go get your order"],
        ["ok4","Ok"],
        ["favMessage","You have not added any favorites"]

    ]

}

function Svenska() {
    return [ 
        ["sitetitle", "Välkommne ombord på The Flying Dutchman!"], 
        ["logoutbutton", "Logga ut"], 
        ["leftbar1", "Min sida"], 
        ["leftbar2", "Drycker"], 
        ["credit", "Din kredit:"], 
        ["cost", "Total kostnad:"], 
        ["yourorder", "Din beställning:"], 
        ["opener", "Betala"], 
        ["favs", "<b id='b1' class ='current'>  Favoriter  </b>"], 
        ["popular","<b id='b2' >Populära</b>"], 
        ["all1", "<c id='c1' class='current'>Drycker</c>"], 
        ["öl1", "<c id='c2'>Öl</c>"], 
        ["cider1", "<c id='c3' >Cider</c>"], 
        ["vitt_vin1", "<c id='c4' >Vitt vin</c>"], 
        ["rött_vin1","<c id='c5' >Rött vin</c>"], 
        ["alcohol-free1","<c id='c6' >Alkohol fri</c>"], 
        ["searching1", "<c id='c7' >Sök</c>"], 
        ["search_2","Sök dryck"],
        ["inf1","ⓘ=Beställ av bartendern"],
        ["inf2","ⓘ=Beställ av bartendern"],
        ["undoButton","ångra"],
        ["redoButton","gör om"],
        ["dra1","Dra och släpp dryck i området under betala"],
        ["dra2","Dra och släpp dryck i området under betala"],
        ["creditmess","Du har inte tillräckligt mycket kredit. Ta bort något och försök igen eller lägg till mer kredit i automaten eller i baren"],
        ["ok","Ok"],
        ["confirmmess","Är du säker på att du vill betala?"],
        ["Yes","Ja"],
        ["No","Nej"],
        ["noOrdermess","Du har inte beställt något"],
        ["ok2","Ok"],
        ["slut","Slut"],
        ["ok3","Ok"],
        ["instr","Tag ditt kvitto och hämta din order"],
        ["ok4","Ok"],
        ["favMessage","You have not added any favorites"]

    ]

}


function Español() {
    return [
        ["sitetitle", "Bienvenido a bordo del Holandés Errante!"],
        ["logoutbutton", "Cerrar sesión"],
        ["leftbar1", "Mi Página"],
        ["leftbar2", "Alcoholes"],
        ["credit", "Su crédito:"],
        ["cost", "Costo total:"],
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
        ["undoButton","deshacer"],
        ["redoButton","rehacer"],
        ["dra1","Arrastrar y bebida caída en la zona bajo pagar"],
        ["dra2","Arrastrar y bebida caída en la zona bajo pagar"],
        ["creditmess", "Usted no tiene suficiente crédito. Eliminar un elemento y vuelva a intentarlo o añadir más crédito en el Automator en el bar"],        ["ok","Ok"],
        ["ok","Ok"],
        ["confirmmess","¿Está seguro que desea pagar?"],
        ["Yes","Sí"],
        ["No","No"],
        ["noOrdermess", "No ha pedido nada"],
        ["ok2","Ok"],
        ["slut","Agotado"],
        ["ok3","Ok"],
        ["instr", "Toma el recibo y ir a buscar su pedido"],
        ["ok4","Ok"],
        ["favMessage","Usted no ha agregado favoritos"]

    ]
}

