
/**
 * Created by LOe on 01/12/15.
 */

var lowStockLimit= 200;

$(function () {

    // First we hide all menus, but the one with all courses.
    //
    $("#allStock").show();
    $("#lowStock").hide();
    $("#SearchStock").hide("slow");




    $("#drinks").click(function () { /* Here we show and hide the field. */
        $("#allStock").show("slow");
        $("#lowStock").hide("slow");
        $("#SearchStock").hide("slow");


    });


    $("#runningout").click(function () { /* Here we show and hide the field. */
        $("#allStock").hide("slow");
        $("#lowStock").show("slow");
        $("#SearchStock").hide("slow");


    });

    $("#searching").click(function () { /* Here we show and hide the field. */
        $("#allStock").hide("slow");
        $("#lowStock").hide("slow");
        $("#SearchStock").show("slow");


    });

    $(getlowStock(getBeerData())).appendTo("#lowStock");
    $(getAllBeers(getBeerData())).appendTo("#allStock");
    $(SearchItem("search", getBeerData())).appendTo("#SearchStock");



});


function getAllBeers(arr) {

    var temp = "";
    /* top is a variable that starts making a table with relevant information */
    var top='<div> <table class="table table-hover"><thead> <tr> ' +
        '<th># in stock</th> <th>"beer"</th> <th>price</th> </tr> </thead>';
    /* bottom is a variable that "ends" the created table*/
    var bottom='</table></div>';

    var types = ["all"];
    var names = ["All in Stock"];
    len = types.length;

    for (var i = 0; i < len; i++) {
        temp += '<strong>' + names[i] + '</strong><br><hr>';
        temp += getBeers(types[i], arr) +"<br>";
    }

    return top+temp+bottom;
}


function getlowStock(arr) {
    var temp = "";
    /* top is a variable that starts making a table with relevant information */
    var top='<div> <table class="table table-hover"><thead> <tr> <th># in stock</th>' +
        ' <th>"beer"</th> <th>price</th> </tr> </thead>';
    /* bottom is a variable that "ends" the created table*/
    var bottom='</table></div>';

    var types = ["low"];
    var names = ["Low in Stock"];
    len = types.length;

    for (var i = 0; i < len; i++) {

        temp += '<strong>' + names[i] + '</strong><br><hr>';
        temp += checkStock(types[i], arr) +"<br>";
    }

    return top+temp+bottom;
}


function getBeers(namn, arr) {
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        /* out is a variable that contains the "middle of the table" + information*/
        out += '<tbody> <tr><td>'+arr[i].count+'</td> <td>'+arr[i].namn+ '</td> ' +
            '<td>'+ arr[i].price+'</td> </tr> </tbody>';
    }
    return out;
}

function checkStock(namn, arr){
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i].count<lowStockLimit) {
            /* out is a variable that contains the "middle of the table" + information*/
            out += '<tbody> <tr><td>'+arr[i].count+'</td> <td>'+arr[i].namn+ '</td> ' +
                '<td>'+ arr[i].price+'</td> </tr> </tbody>';
        }
    }
    return out;
}


function SearchItem() {
    /*this creates a search field and search button*/
    var search='<div id="searchplacement">' +
        ' <input class="searchbox" id="searchword1" type="text"> ' +
        '<button type=button2" onclick="SearchInStock()">Search Beverage</button> <p id="foundBeverage"> </div>'
    return search;
}


function SearchInStock() {

    /*top =start of result table, bottom = end of result table*/
    var top='<div> <table class="table table-hover"><thead> <tr> <th>#Instock</th> <th>"Beverage"</th> ' +
        '<th>Price</th></tr> </thead>';
    var bottom='</table></div>';

    /* needed variables*/
    var foundBeverage;
    var searchBeverage;
    var fBeverage ="";
    /*gets the variables from the html document and also the data needed*/
    foundBeverage = document.getElementById("foundBeverage");
    searchBeverage = document.getElementById("searchword1").value;
    var allBeverages=getBeerData();


    for (var i=0;  i < allBeverages.length; i++) {
        if (searchBeverage==allBeverages[i].namn) {
            fBeverage += '<tbody> <tr><td>'+allBeverages[i].count+'</td> <td>'+allBeverages[i].namn+ '</td> <td>'+
                allBeverages[i].price+ '</td></tr> </tbody>';

        }
    }
    if(fBeverage==""){
        foundBeverage.innerHTML="Couldn't find " + searchBeverage;

    }
    else {
        foundBeverage.innerHTML="Results"+'<br>' + top+fBeverage+bottom;

    }
}





function getBeerData() {
    return [
        {"namn" : "Brooklyn Lager","namn2" : "","sbl_price" : "17.90","pub_price" : "20","beer_id" : "154803","count" : "4","price" : "16.90"},
        {"namn" : "Cameleon","namn2" : "Selection Malbec","sbl_price" : "43.00","pub_price" : "45","beer_id" : "658102","count" : "80","price" : "43.00"},
        {"namn" : "Campos Góticos","namn2" : "Tempranillo","sbl_price" : "49.00","pub_price" : "55","beer_id" : "209702","count" : "203","price" : "49.00"},
        {"namn" : "Casillero del Diablo","namn2" : "Chardonnay","sbl_price" : "29.00","pub_price" : "35","beer_id" : "207504","count" : "203","price" : "30.00"},
        {"namn" : "Ch Malavieille Alliance","namn2" : "","sbl_price" : "119.00","pub_price" : "125","beer_id" : "266201","count" : "194","price" : "119.00"},
        {"namn" : "Château Pech-Latt","namn2" : "","sbl_price" : "99.00","pub_price" : "105","beer_id" : "223301","count" : "201","price" : "99.00"},
        {"namn" : "Chilcas","namn2" : "Sauvignon Blanc","sbl_price" : "46.00","pub_price" : "50","beer_id" : "669702","count" : "200","price" : "45.00"},
        {"namn" : "Chill Out Mountains","namn2" : "Malbec","sbl_price" : "69.00","pub_price" : "75","beer_id" : "614601","count" : "177","price" : "69.00"},
        {"namn" : "Chimay blå","namn2" : "","sbl_price" : "29.90","pub_price" : "35","beer_id" : "165103","count" : "192","price" : "28.90"},
        {"namn" : "Cidraie Pear","namn2" : "","sbl_price" : "20.00","pub_price" : "25","beer_id" : "180202","count" : "198","price" : "20.00"},
        {"namn" : "Citra Pale Ale","namn2" : "","sbl_price" : "20.90","pub_price" : "25","beer_id" : "155103","count" : "193","price" : "20.90"},
        {"namn" : "Coopers Best","namn2" : "Extra Stout","sbl_price" : "19.90","pub_price" : "25","beer_id" : "1127103","count" : "197","price" : "19.90"},
        {"namn" : "Dr L","namn2" : "Riesling","sbl_price" : "81.00","pub_price" : "85","beer_id" : "721801","count" : "183","price" : "81.00"},
        {"namn" : "Duvel","namn2" : "","sbl_price" : "25.50","pub_price" : "30","beer_id" : "165403","count" : "171","price" : "24.90"},
        {"namn" : "Ecologica","namn2" : "Shiraz Malbec","sbl_price" : "69.00","pub_price" : "75","beer_id" : "651201","count" : "194","price" : "69.00"},
        {"namn" : "Einbecker Brauherren Alkoholfrei","namn2" : "","sbl_price" : "9.90","pub_price" : "15","beer_id" : "191402","count" : "193","price" : "9.90"},
        {"namn" : "El Cortejo","namn2" : "Sauvignon Blanc","sbl_price" : "34.00","pub_price" : "40","beer_id" : "601202","count" : "184","price" : "33.00"},
        {"namn" : "El Coto","namn2" : "Blanco","sbl_price" : "37.00","pub_price" : "40","beer_id" : "278002","count" : "189","price" : "37.00"},
        {"namn" : "Electric Nurse","namn2" : "Imperial Stout","sbl_price" : "34.90","pub_price" : "40","beer_id" : "8953903","count" : "196","price" : "34.90"}
    ]
}
