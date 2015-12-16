
/**
 * Created by LOe on 01/12/15.
 */


$(function () {

    // First we hide all menus, but the one with all courses.
    //
    $("#allStock").show();
    $("#lowStock").hide();
    $("#SearchStock").hide();


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

    $("#searching1").click(function () { /* Here we show and hide the field. */
        $("#allStock").hide("slow");
        $("#lowStock").hide("slow");
        $("#SearchStock").show("slow");


    });

    $(getlowStock(beerdata)).appendTo("#lowStock");
    $(getAllBeers(beerdata)).appendTo("#allStock");
    $(SearchItem(beerdata)).appendTo("#SearchStock");



});


function getAllBeers(arr) {

    var temp = "";
    /* top is a variable that starts making a table with relevant information */
    var top='<div> <table class="table table-hover"><thead> <tr> ' +
        '<th># in stock</th> <th>Beverage</th> <th>price</th> </tr> </thead><tbody>';
    /* bottom is a variable that "ends" the created table*/
    var bottom='</tbody></table></div>';

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
        ' <th>"beer"</th> <th>price</th> </tr> </thead><tbody>';
    /* bottom is a variable that "ends" the created table*/
    var bottom='</tbody></table></div>';

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
        out += ' <tr><td>'+arr[i].count+'</td> <td>'+arr[i].namn+ '</td> ' +
            '<td>'+ arr[i].price+'</td> </tr>';
    }
    return out;
}

function checkStock(namn, arr){
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i].count<lowStockLimit) {
            /* out is a variable that contains the "middle of the table" + information*/
            out += ' <tr><td>'+arr[i].count+'</td> <td>'+arr[i].namn+ '</td> ' +
                '<td>'+ arr[i].price+'</td> </tr>';
        }
    }
    return out;
}


function SearchItem(beerdata) {
    /*this creates a search field and search button*/
    var search='<div id="searchplacement">' +
        ' <input class="searchbox" id="searchword1" type="text"> ' +
        '<button onclick="SearchInStock(beerdata)">Search Beverage</button> <p id="foundBeverage"> </div>'
    return search;
}


function SearchInStock(beerdata) {

    /*top =start of result table, bottom = end of result table*/
    var top='<div> <table class="table table-hover"><thead> <tr> <th>#Instock</th> <th>"Beverage"</th> ' +
        '<th>Price</th></tr> </thead><tbody>';
    var bottom='</tbody></table></div>';

    /* needed variables*/
    var foundBeverage;
    var searchBeverage;
    var fBeverage ="";

    /*gets the variables from the html document and also the data needed*/
    foundBeverage = document.getElementById("foundBeverage");
    searchBeverage = document.getElementById("searchword1").value;

    if(searchBeverage=="" ){
        foundBeverage.innerHTML="You didn't search for anything ";

    }
    else {
        for (var i=0;  i < beerdata.length; i++) {
            if (searchBeverage.replace(/ +/g, "").toLowerCase()==beerdata[i].namn.replace(/ +/g, "").toLowerCase()) {
                fBeverage += '<tr><td>'+beerdata[i].count+'</td> <td>'+beerdata[i].namn+ '</td> <td>'+
                    beerdata[i].price+ '</td></tr>';

            }
        }
        if(fBeverage==""){
            foundBeverage.innerHTML="Couldn't find " + searchBeverage;

        }
        else {
            foundBeverage.innerHTML="Results"+'<br>' + top+fBeverage+bottom;

        }
    }
}



