$(function () {

    // First we hide all menus, but the one with all courses.
    //
    $("#all").show();
    $("#öl").hide();
    $("#cider").hide();
    $("#vitt_vin").hide();
    $("#rött_vin").hide();
    $("#alcohol-free").hide();
    $("#SearchStock").hide();

    $("#all1").click(function () { /* Here we show and hide the field. */
        $("#all").show("slow");
        $("#öl").hide("slow");
        $("#cider").hide("slow");
        $("#vitt_vin").hide("slow");
        $("#rött_vin").hide("slow");
        $("#alcohol-free").hide("slow");
        $("#SearchStock").hide("slow");
    });
    
    $("#öl1").click(function () { /* Here we show and hide the field. */
        $("#all").hide("slow");
        $("#öl").show("slow");
        $("#cider").hide("slow");
        $("#vitt_vin").hide("slow");
        $("#rött_vin").hide("slow");
        $("#alcohol-free").hide("slow");
        $("#SearchStock").hide("slow")
    });

    $("#cider1").click(function () { /* Here we show and hide the field. */
        $("#all").hide("slow");
        $("#öl").hide("slow");
        $("#cider").show("slow");
        $("#vitt_vin").hide("slow");
        $("#rött_vin").hide("slow");
        $("#alcohol-free").hide("slow");
        $("#SearchStock").hide("slow");
    });
    
    $("#vitt_vin1").click(function () { /* Here we show and hide the field. */
        $("#all").hide("slow");
        $("#öl").hide("slow");
        $("#cider").hide("slow");
        $("#vitt_vin").show("slow");
        $("#rött_vin").hide("slow");
        $("#alcohol-free").hide("slow");
        $("#SearchStock").hide("slow");
    });

    $("#rött_vin1").click(function () { /* Here we show and hide the field. */
        $("#all").hide("slow");
        $("#öl").hide("slow");
        $("#cider").hide("slow");
        $("#vitt_vin").hide("slow");
        $("#rött_vin").show("slow");
        $("#alcohol-free").hide("slow");
        $("#SearchStock").hide("slow");
    });
    
    $("#alcohol-free1").click(function () { /* Here we show and hide the field. */
        $("#all").hide("slow");
        $("#öl").hide("slow");
        $("#cider").hide("slow");
        $("#vitt_vin").hide("slow");
        $("#rött_vin").hide("slow");
        $("#alcohol-free").show("slow");
        $("#SearchStock").hide("slow");
    });
    
    $("#searching1").click(function () { /* Here we show and hide the field. */
        $("#all").hide("slow");
        $("#öl").hide("slow");
        $("#cider").hide("slow");
        $("#vitt_vin").hide("slow");
        $("#rött_vin").hide("slow");
        $("#alcohol-free").hide("slow");
        $("#SearchStock").show("slow");

    });


    $(getBeers("öl", beerdata, fav)).appendTo("#öl");
    $(getBeers("cider", beerdata, fav)).appendTo("#cider");
    $(getBeers("vitt_vin", beerdata,fav)).appendTo("#vitt_vin");
    $(getBeers("rött_vin", beerdata, fav)).appendTo("#rött_vin");
    $(getBeers("alcohol-free", beerdata,fav)).appendTo("#alcohol-free");
    $(SearchItem(beerdata)).appendTo("#SearchStock");
    $(getAllBeers(beerdata,fav)).appendTo("#all");

});


// this function gets all of the beverages in one list but no sorting of what type they are

function getAllBeers(beerdata,fav) {
    var out = '<br><div class="table" ><div class="row"><div class =cell></div>' +
        '<div class =cell></div></div>';
    var endtable= '</div><br>';

    var i, myFavorite;


    var CK = document.cookie;  //get cookieinformation
    var start=CK.split("=")[1]; // chooses the part of the cookie that we need (looks like userName=username and we remove userName= by using split)

    // this for-loop checks based on the cookie whose favorite list it should use
    for (var h = 0; h < fav.length; h++) {
        if (fav[h].Username==start){
            myFavorite=fav[h].fav_beer_id;
        }
    }

    /* goes through every item in beerdata and if there is enough in stock for a customer to order and allows the beverage
    * to be dragable and if a beverage is in the person who is logged in's list over added favorite it adds a yellow star
    * that is clickable. if the user clicks the star(or div) it will remove it from "myfavorite list"
    * if the beverage is not in the users favorite list a grey star will be added that is clickable and if the user clicks
    * this star/div that beverage will be added to my favorite. When adding/removing a favorite the star will turn either
    * grey or yellow after the content is updated*/
    for (i = 0; i < beerdata.length; i++) {
        //if (beerdata[i].count>lowStockCustomer){
            if(myFavorite.indexOf(beerdata[i].beer_id)>-1){
                if (beerdata[i].count>lowStockCustomer){
                    out +='<div class="row" id="item'+i+' "draggable="true" ' +
                        'ondragstart="drag(event)" data-price="'+beerdata[i].pub_price+'" data-name="'+beerdata[i].namn+'">'+
                        '<div class="cell">'+ beerdata[i].namn+'</div> <div class="cell" id="price'+i+'">'
                        +beerdata[i].pub_price+':-</div><div class="cell" >' +
                        '<img class="picturestyleStar" onclick="removeFavorite('+i+')" src="pictures/stargul.png"/></div></div>';
                }

                else {
                    out +='<div class="row" id="item'+i+' data-price="'+beerdata[i].pub_price+'" data-name="'+beerdata[i].namn+'">'+
                        '<div class="cell">'+ beerdata[i].namn+'</div> <div class="cell" id="price'+i+'">'
                        +beerdata[i].pub_price+':-</div><div id="order2" class="cell" >' +
                        '<img class="picturestyleStar" onclick="removeFavorite('+i+')" src="pictures/stargul.png"/> ' +
                        'ⓘ</div></div>';
                }

            }
            else{
                if (beerdata[i].count>lowStockCustomer){
                    out +='<div class="row" id="item'+i+' "draggable="true" ' +
                        'ondragstart="drag(event)" data-price="'+beerdata[i].pub_price+'" data-name="'+beerdata[i].namn+'">' +
                        '<div class="cell">'+ beerdata[i].namn+'</div> <div class="cell" id="price'+i+'">'
                        +beerdata[i].pub_price+':-</div><div class="cell" >' +
                        '<img class="picturestyleStar" onclick="addFavorite('+i+')" src="pictures/star-grey.png"/></div></div>';
                }

                else{ 
                    out +='<div class="row" id="item'+i+' data-price="'+beerdata[i].pub_price+'" data-name="'+beerdata[i].namn+'">'+
                        '<div class="cell">'+ beerdata[i].namn+'</div> <div class="cell" id="price'+i+'">'
                        +beerdata[i].pub_price+':-</div><div id="order3" class="cell" >' +
                        '<img class="picturestyleStar" onclick="addFavorite('+i+')" src="pictures/star-grey.png"/> ' +
                        'ⓘ</div></div>';
                }
            }

    }
    return out+ endtable;
}


// this function gets all beverages but they are sorted in what type they are
// and appended to the "right tab" otherwise works the same way as getallBeers()
function getBeers(type, beerdata, fav) {
    
    var out = '<br><div class="table" ><div class="row"><div class=cell></div>' +
        '<div class =cell></div></div>';
    var endtable= '</div><br>';
    var i, myFavorite;

    var CK = document.cookie;  //get cookieinformation
    var start=CK.split("=")[1]; // chooses the part of the cookie that we need (looks like userName=username and we remove userName= by using split)
    // this for-loop checks based on the cookie whose favorite list it should use
    for (var h = 0; h < fav.length; h++) {
        if (fav[h].Username==start){
            myFavorite=fav[h].fav_beer_id;
        }
    }


    for (i = 0; i < beerdata.length; i++) {
        if (beerdata[i].type == type) {
            if(myFavorite.indexOf(beerdata[i].beer_id)>-1){
                if (beerdata[i].count>lowStockCustomer){
                    out +='<div class="row" id="item'+i+' "draggable="true" ' +
                        'ondragstart="drag(event)" data-price="'+beerdata[i].pub_price+'" data-name="'+beerdata[i].namn+'">'+
                        '<div class="cell">'+ beerdata[i].namn+'</div> <div class="cell" id="price'+i+'">'
                        +beerdata[i].pub_price+':-</div><div class="cell" >' +
                        '<img class="picturestyleStar" onclick="removeFavorite('+i+')" src="pictures/stargul.png"/></div></div>';
                }

                else {
                    out +='<div class="row" id="item'+i+' data-price="'+beerdata[i].pub_price+'" data-name="'+beerdata[i].namn+'">'+
                        '<div class="cell">'+ beerdata[i].namn+'</div> <div class="cell" id="price'+i+'">'
                        +beerdata[i].pub_price+':-</div><div id="order4" class="cell" >' +
                        '<img class="picturestyleStar" onclick="removeFavorite('+i+')" src="pictures/stargul.png"/> ' +
                        'ⓘ</div></div>';
                }

            }
            else{
                if (beerdata[i].count>lowStockCustomer){


                    out +='<div class="row" id="item'+i+' "draggable="true" ' +
                        'ondragstart="drag(event)" data-price="'+beerdata[i].pub_price+'" data-name="'+beerdata[i].namn+'">' +
                        '<div class="cell">'+ beerdata[i].namn+'</div> <div class="cell" id="price'+i+'">'
                        +beerdata[i].pub_price+':-</div><div class="cell" >' +
                        '<img class="picturestyleStar" onclick="addFavorite('+i+')" src="pictures/star-grey.png"/></div></div>';
                }

                else{ out +='<div class="row" id="item'+i+' data-price="'+beerdata[i].pub_price+'" data-name="'+beerdata[i].namn+'">'+
                    '<div class="cell">'+ beerdata[i].namn+'</div> <div class="cell" id="price'+i+'">'
                    +beerdata[i].pub_price+':-</div><div id="order5" class="cell" >' +
                    '<img class="picturestyleStar" onclick="addFavorite('+i+')" src="pictures/star-grey.png"/> ' +
                    'ⓘ</div></div>';

                }
            }
        }
    }
    return out+ endtable;
}


// functions that add a users favorite beverage
function addFavorite(i){
    var favoritList;

    var CK = document.cookie;  //get cookieinformation
    var start=CK.split("=")[1]; // chooses the part of the cookie that we need (looks like userName=username and we remove userName= by using split)

    for (var j = 0; j < fav.length; j++) {
        if (fav[j].Username==start){
            favoritList= fav[j].fav_beer_id;
        }
    }
    favoritList.push(beerdata[i].beer_id);

    /*get rid of the old content*/
    $("#öl").empty();
    $("#cider").empty();
    $("#vitt_vin").empty();
    $("#rött_vin").empty();
    $("#alcohol-free").empty();
    $("#all").empty();
    $("#favBeverage").empty();



    /*update of new content*/
    $(getBeers("öl", beerdata, fav)).appendTo("#öl");
    $(getBeers("cider", beerdata, fav)).appendTo("#cider");
    $(getBeers("vitt_vin", beerdata,fav)).appendTo("#vitt_vin");
    $(getBeers("rött_vin", beerdata, fav)).appendTo("#rött_vin");
    $(getBeers("alcohol-free", beerdata,fav)).appendTo("#alcohol-free");
    $(getAllBeers(beerdata,fav)).appendTo("#all");
    $(getAllfav(fav, beerdata)).appendTo("#favBeverage");

}

function removeFavorite(i){
    var favoritList;

    /* slices favoriteList where the beer_ids matches and removes 1 element then updates*/
    var CK = document.cookie;  //get cookieinformation
    var start=CK.split("=")[1]; // chooses the part of the cookie that we need (looks like userName=username and we remove userName= by using split)

    for (var j = 0; j < fav.length; j++) {
        if (fav[j].Username==start){
            favoritList= fav[j].fav_beer_id;
        }
    }
    var st=favoritList.length;
    for (var k=0; k< st; k++){
        if (favoritList[k]==beerdata[i].beer_id){
            favoritList.splice(k,1);
        }
    }
    /*get rid of the old content*/
    $("#öl").empty();
    $("#cider").empty();
    $("#vitt_vin").empty();
    $("#rött_vin").empty();
    $("#alcohol-free").empty();
    $("#all").empty();
    $("#favBeverage").empty();



    /*update of new content*/
    $(getBeers("öl", beerdata, fav)).appendTo("#öl");
    $(getBeers("cider", beerdata, fav)).appendTo("#cider");
    $(getBeers("vitt_vin", beerdata,fav)).appendTo("#vitt_vin");
    $(getBeers("rött_vin", beerdata, fav)).appendTo("#rött_vin");
    $(getBeers("alcohol-free", beerdata,fav)).appendTo("#alcohol-free");
    $(getAllBeers(beerdata,fav)).appendTo("#all");
    $(getAllfav(fav, beerdata)).appendTo("#favBeverage");


}



// generates a place where customer is able to search for an beverage
function SearchItem(beerdata) {
    /*this creates a search field and search button*/
    var search='<div id="searchplacement">' +
        ' <input class="searchbox" id="searchword1" type="text"> ' +
        '<button id="search_2" class="sbutton" onclick="SearchInStock(beerdata)">Search Beverage</button> <p id="foundBeverage"> </div><br>';
    return search;
}


function SearchInStock(beerdata) {
    /* needed variables*/
    var foundBeverage;
    var searchBeverage;
    var fBeverage ="";
    var startTable='<div><br></div><div class="table" ><div class="row"><div class =cell><strong></strong></div>' +
        '<div class =cell><strong>Price:</strong></div></div>';
    var endtable= '</div>';

    /*gets the variables from the html document and also the data needed*/
    foundBeverage = document.getElementById("foundBeverage");
    searchBeverage = document.getElementById("searchword1").value;


    // start searching through the beverages

    if(searchBeverage=="" ){
        foundBeverage.innerHTML="You didn't search for anything";
    }

    else {
        foundBeverage.innerHTML="Results"+'<br>' + fBeverage;


        for (var i=0;  i < beerdata.length; i++) {
            if (searchBeverage==beerdata[i].namn) {
                if(beerdata[i].count==notInStock){
                    foundBeverage.innerHTML=searchBeverage + "out of Stock";

                }
                else {
                    fBeverage += '<div class="row" id="menuitemSearch'+ i +'" draggable="True" ' +
                        'ondragstart="drag(event)" data-price="'+beerdata[i].price+'" data-name="'+beerdata[i].namn+'">'+
                        '<div class="cell">'+ beerdata[i].namn+'</div> <div class="cell" id="'+
                        " price"+i+'">'+beerdata[i].pub_price+':-</div>';

                }
            }
        }
        if(fBeverage==""){
            foundBeverage.innerHTML="Couldn't find " + searchBeverage;
        }

        else {
            foundBeverage.innerHTML="Results"+'<br>' +startTable+fBeverage+endtable ;

        }
    }

}
