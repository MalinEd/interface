
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
        '<th># in stock</th> <th>Beverage</th> <th>price</th> <th>pub price</th></tr> </thead><tbody>';
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
        ' <th>"beer"</th> <th>price</th> <th>pub price</th></tr> </thead><tbody>';
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
            '<td>'+ arr[i].price+'</td><td>'+ arr[i].pub_price+'</td> </tr>';
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
                '<td>'+ arr[i].price+'</td><td>'+ arr[i].pub_price+'</td>  </tr>';
        }
    }
    return out;
}


function SearchItem(beerdata) {
    /*this creates a search field and search button*/
    var search='<div id="searchplacement">' +
        ' <input class="searchbox" id="searchword1" type="text"> ' +
        '<button class="searchBev" onclick="SearchInStock(beerdata)">Search Beverage</button></div><div><p id="foundBeverage"> </div>'
    return search;
}


function SearchInStock(beerdata) {

    /* needed variables*/
    var foundBeverage;
    var searchBeverage;
    var fBeverage ="";
    var startTable='<div class="table"><div class="row"><div class="cell"></div>' +
            '<div class="cell"></div><div class="cell"></div><div class="cell">#Instock</div></div>';
    var endtable= '</div>';

    /*gets the variables from the html document and also the data needed*/
    foundBeverage = document.getElementById("foundBeverage");
    searchBeverage = document.getElementById("searchword1").value;

    // start searching through the beverages

    if(searchBeverage=="" ){
        foundBeverage.innerHTML="You didn't search for anything";
    }

    else {

        for (var i = 0; i < beerdata.length; i++) {
            var str=beerdata[i].namn;
            str=str.toLowerCase();
            searchBeverage=searchBeverage.toLowerCase();
            if (str.search(searchBeverage)>-1) {
                if (beerdata[i].count>lowStockLimit){
                    fBeverage +='<div class="row" id="item'+i+' ' +
                        ' data-price="'+beerdata[i].pub_price+'" data-name="'+beerdata[i].namn+'" ' +
                        'data-beerID="'+beerdata[i].beer_id+'">'+
                        '<div class="cell">'+ beerdata[i].namn+'</div> <div class="cell" id="price'+i+'">'
                        +beerdata[i].pub_price+':-</div><div class="cell" >' +
                        '</div><div class="cell">'+beerdata[i].count+'</div></div>';
                }

                else {
                    fBeverage +='<div class="row" id="item'+i+' data-price="'+beerdata[i].pub_price+'" data-name="'+beerdata[i].namn+'" ' +
                        'data-beerID="'+beerdata[i].beer_id+'">'+
                        '<div class="cell">'+ beerdata[i].namn+'</div> <div class="cell" id="price'+i+'">'
                        +beerdata[i].pub_price+':-</div><div class="cell">Order more!</div>' +
                        '<div class="cell">'+beerdata[i].count+'</div></div>';
                }
            }
        }




        if(fBeverage==""){
            foundBeverage.innerHTML="Couldn't find " + searchBeverage;
        }

        else {
            foundBeverage.innerHTML='<br>' +startTable+fBeverage+endtable ;

        }
    }

}







