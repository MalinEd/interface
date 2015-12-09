/**
 * Created by malinedlert on 15-12-05.
 */
/**
 * Created by LOe on 01/12/15.
 see which beverages are the most popular ones (Popular and Search) look further down on the page*/

/*rigth now popular beverages is generated from how many it is in the stock....(and it should be from 
the table where you can see all transaction.....(at least that is what I think)*/

var popLimit=195; /*variable that states what is popular or not if below this limit it should not be counted as popular*/


$(function() {

    $("#order1").show();
    $("#order2").hide();
    $("#order3").hide();
    $("#order4").hide();
    $("#order5").hide();
    $("#order6").hide();
    $("#order7").hide();
    $("#order8").hide();
    $("#order9").hide();
    $("#order10").hide();



    $("#t1").click(function () {
        $("#order1").show();
        $("#order2").hide();
        $("#order3").hide();
        $("#order4").hide();
        $("#order5").hide();
        $("#order6").hide();
        $("#order7").hide();
        $("#order8").hide();
        $("#order9").hide();
        $("#order10").hide();

    });

    $("#t2").click(function () {
        $("#order1").hide();
        $("#order2").show();
        $("#order3").hide();
        $("#order4").hide();
        $("#order5").hide();
        $("#order6").hide();
        $("#order7").hide();
        $("#order8").hide();
        $("#order9").hide();
        $("#order10").hide();

    });

    $("#t3").click(function () {
        $("#order1").hide();
        $("#order2").hide();
        $("#order3").show();
        $("#order4").hide();
        $("#order5").hide();
        $("#order6").hide();
        $("#order7").hide();
        $("#order8").hide();
        $("#order9").hide();
        $("#order10").hide();

    });

    $("#t4").click(function () {
        $("#order1").hide();
        $("#order2").hide();
        $("#order3").hide();
        $("#order4").show();
        $("#order5").hide();
        $("#order6").hide();
        $("#order7").hide();
        $("#order8").hide();
        $("#order9").hide();
        $("#order10").hide();

    });

    $("#t5").click(function () {
        $("#order1").hide();
        $("#order2").hide();
        $("#order3").hide();
        $("#order4").hide();
        $("#order5").show();
        $("#order6").hide();
        $("#order7").hide();
        $("#order8").hide();
        $("#order9").hide();
        $("#order10").hide();
    });

    $("#t6").click(function () {
        $("#order1").hide();
        $("#order2").hide();
        $("#order3").hide();
        $("#order4").hide();
        $("#order5").hide();
        $("#order6").show();
        $("#order7").hide();
        $("#order8").hide();
        $("#order9").hide();
        $("#order10").hide();
    });

    $("#t7").click(function () {
        $("#order1").hide();
        $("#order2").hide();
        $("#order3").hide();
        $("#order4").hide();
        $("#order5").hide();
        $("#order6").hide();
        $("#order7").show();
        $("#order8").hide();
        $("#order9").hide();
        $("#order10").hide();
    });

    $("#t8").click(function () {
        $("#order1").hide();
        $("#order2").hide();
        $("#order3").hide();
        $("#order4").hide();
        $("#order5").hide();
        $("#order6").hide();
        $("#order7").hide();
        $("#order8").show();
        $("#order9").hide();
        $("#order10").hide();
    });

    $("#t9").click(function () {
        $("#order1").hide();
        $("#order2").hide();
        $("#order3").hide();
        $("#order4").hide();
        $("#order5").hide();
        $("#order6").hide();
        $("#order7").hide();
        $("#order8").hide();
        $("#order9").show();
        $("#order10").hide();
    });

    $("#t10").click(function () {
        $("#order1").hide();
        $("#order2").hide();
        $("#order3").hide();
        $("#order4").hide();
        $("#order5").hide();
        $("#order6").hide();
        $("#order7").hide();
        $("#order8").hide();
        $("#order9").hide();
        $("#order10").show();
    });


});

/*function that handles "Popular and Search"*/


$(function () {

    // First we hide all menus, but the one with all courses.
    //
    $("#popularBeverages").show();
    $("#searchBeverage").hide();


    $("#popular").click(function () { /* Here we show and hide the field. */
        $("#popularBeverages").show("slow");
        $("#searchBeverage").hide("slow");
    });


    $("#searching").click(function () { /* Here we show and hide the field. */
        $("#popularBeverages").hide("slow");
        $("#searchBeverage").show("slow");
    });

    $(SearchItemToPay(getBeerData())).appendTo("#searchBeverage");
    $(getAllPopular(getPopData())).appendTo("#popularBeverages");

});



function SearchItemToPay() {
    /*this creates a search field and search button*/
    var search='<div>' +
        ' <input class="searchbox" id="searchword3" type="text"> ' +
        '<button type=button2" onclick="SearchStock()">Search Beverage</button> <p id="ffoundBeverage"> </div>';
    return search;
}


function SearchStock() {


    /* needed variables*/
    var ffoundBeverage;
    var searchBeverage;
    var ffBeverage ="";
    /*gets the variables from the html document and also the data needed*/
    ffoundBeverage = document.getElementById("ffoundBeverage");
    searchBeverage = document.getElementById("searchword3").value;

    var allBeverages=getBeerData();/*migth be a redunant way*/

    if(searchBeverage=="" ){
        ffoundBeverage.innerHTML="You didn't search for anything";
    }

    else {
        ffoundBeverage.innerHTML="Results"+'<br>' + ffBeverage;


        for (var i=0;  i < allBeverages.length; i++) {
            if (searchBeverage==allBeverages[i].namn) {
                if(allBeverages[i].count<1){
                    ffoundBeverage.innerHTML=searchBeverage + "out of Stock";

                }
                else {
                 ffBeverage += '<div id="' + "menuitem" + i + '"draggable="true" ' +
                 'ondragstart="drag(event)" data-price=""'+allBeverages[i].price+'" data-name=""'+allBeverages[i].namn+'">'+
                 allBeverages[i].namn+' Price:'+allBeverages[i].pub_price + ' ' +
                 'id:'+allBeverages[i].beer_id+'</div>';                
                 
                }
            }
        }
        if(ffBeverage==""){
            ffoundBeverage.innerHTML="Couldn't find " + searchBeverage;

        }
        else {
            ffoundBeverage.innerHTML="Results"+'<br>' + ffBeverage;

        }
    }

}


/*we do got a lot of redunant code so we will probably have to check it out*/
function getAllPopular(pop) {
    var tempt = "";

    tempt += getpopulars(pop) +"<br>";


    return tempt;

}

function getpopulars(pop) {
    var out = "";
    var i;
    for (i = 0; i < pop.length; i++) {

        if (pop[i].count>popLimit){
            /* out is a variable that contains the "middle of the table" + information*/
            out +='<div id="' + "menuitempop" + i + '"draggable="true" ' +
                'ondragstart="drag(event)" data-price="'+pop[i].price+'" data-name="'+pop[i].namn+'">'+
                pop[i].namn+' <spann id="'+"price"+i+'"> '+pop[i].pub_price+'</span></div><br>';
        }
    }
    return out;
}



/*this is probably not the data we should use to get most brought beverages but it was just used for the presentation*/
function getPopData() {
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


/*just how i thought when i was trying to generate most brought items.......*/
/*
function getPopular(arr) {

    /*here it should be a function that first gets data from countSoldBeveragesr and "saves"
     * the 20 most sold beverages or something like that */
/*
}
/*
 function countSoldBeverages(arr) {


 /*here we should have a function that are able to count how many times
 * a beer_id shows up in the "getPurchaseData" and returns namn, beer_id and price and how many times
 * people have bought it :D (for example variable count)
 * out put would look something like
 * soldbeverages= [{namn: xxx, beer_id: yyy, count: number of times it has been bought},
 * {namn: xxx, beer_id: yyy, count: number of times it has been bought},
 * {namn: sss, beer_id: gg, count: number of times it has been bought},
 * {namn: ddd, beer_id: yggewgy, count: number of times it has been bought}]*/

/*
    }


*/


function getPurchaseData(){

    return [{"namn" : "Bedarö Bitter","namn2" : "","transaction_id" : "49619","user_id" : "17","beer_id" : "141001","timestamp" : "2015-12-04 13:06:33","price" : "28.20","first_name" : "Svetlana","last_name" : "Torres","username" : "svetor"},
        {"namn" : "Black Tower","namn2" : "Rivaner","transaction_id" : "49618","user_id" : "88","beer_id" : "604504","timestamp" : "2015-12-03 16:40:43","price" : "35.00","first_name" : "Testy","last_name" : "Test","username" : "testy"},
        {"namn" : "Black Tower","namn2" : "Rivaner","transaction_id" : "49617","user_id" : "88","beer_id" : "604504","timestamp" : "2015-12-03 16:38:07","price" : "35.00","first_name" : "Testy","last_name" : "Test","username" : "testy"},
        {"namn" : "Black Tower","namn2" : "Rivaner","transaction_id" : "49616","user_id" : "88","beer_id" : "604504","timestamp" : "2015-12-03 16:35:39","price" : "35.00","first_name" : "Testy","last_name" : "Test","username" : "testy"},
        {"namn" : "Black Tower","namn2" : "Rivaner","transaction_id" : "49615","user_id" : "88","beer_id" : "604504","timestamp" : "2015-12-03 16:33:18","price" : "35.00","first_name" : "Testy","last_name" : "Test","username" : "testy"},
        {"namn" : "Black Tower","namn2" : "Rivaner","transaction_id" : "49614","user_id" : "88","beer_id" : "604504","timestamp" : "2015-12-03 16:30:55","price" : "35.00","first_name" : "Testy","last_name" : "Test","username" : "testy"},
        {"namn" : "Campos Góticos","namn2" : "Tempranillo","transaction_id" : "49613","user_id" : "51","beer_id" : "209702","timestamp" : "2015-12-03 13:51:16","price" : "69.00","first_name" : "Anders","last_name" : "Kovalchyck","username" : "ankov"},
        {"namn" : "Samuel Adams","namn2" : "Black Lager","transaction_id" : "49612","user_id" : "51","beer_id" : "153503","timestamp" : "2015-12-02 17:04:07","price" : "24.90","first_name" : "Anders","last_name" : "Kovalchyck","username" : "ankov"},
        {"namn" : "Mahou Negra","namn2" : "","transaction_id" : "49611","user_id" : "51","beer_id" : "172303","timestamp" : "2015-12-02 17:04:02","price" : "24.20","first_name" : "Anders","last_name" : "Kovalchyck","username" : "ankov"},
        {"namn" : "Kung","namn2" : "","transaction_id" : "49607","user_id" : "51","beer_id" : "144612","timestamp" : "2015-12-02 13:00:34","price" : "99.00","first_name" : "Anders","last_name" : "Kovalchyck","username" : "ankov"},
        {"namn" : "Kung","namn2" : "","transaction_id" : "49608","user_id" : "51","beer_id" : "144612","timestamp" : "2015-12-02 13:00:34","price" : "99.00","first_name" : "Anders","last_name" : "Kovalchyck","username" : "ankov"},
        {"namn" : "Kung","namn2" : "","transaction_id" : "49609","user_id" : "51","beer_id" : "144612","timestamp" : "2015-12-02 13:00:34","price" : "99.00","first_name" : "Anders","last_name" : "Kovalchyck","username" : "ankov"},
        {"namn" : "Kung","namn2" : "","transaction_id" : "49610","user_id" : "51","beer_id" : "144612","timestamp" : "2015-12-02 13:00:34","price" : "99.00","first_name" : "Anders","last_name" : "Kovalchyck","username" : "ankov"},
        {"namn" : "Leffe","namn2" : "Blonde","transaction_id" : "49579","user_id" : "51","beer_id" : "165903","timestamp" : "2015-12-02 13:00:33","price" : "10.90","first_name" : "Anders","last_name" : "Kovalchyck","username" : "ankov"},
        {"namn" : "Kung","namn2" : "","transaction_id" : "49580","user_id" : "51","beer_id" : "144612","timestamp" : "2015-12-02 13:00:33","price" : "99.00","first_name" : "Anders","last_name" : "Kovalchyck","username" : "ankov"},
        {"namn" : "Kloster","namn2" : "","transaction_id" : "49581","user_id" : "51","beer_id" : "8967303","timestamp" : "2015-12-02 13:00:33","price" : "19.90","first_name" : "Anders","last_name" : "Kovalchyck","username" : "ankov"},
        {"namn" : "Leffe","namn2" : "Blonde","transaction_id" : "49582","user_id" : "51","beer_id" : "165903","timestamp" : "2015-12-02 13:00:33","price" : "10.90","first_name" : "Anders","last_name" : "Kovalchyck","username" : "ankov"},
        {"namn" : "Kung","namn2" : "","transaction_id" : "49583","user_id" : "51","beer_id" : "144612","timestamp" : "2015-12-02 13:00:33","price" : "99.00","first_name" : "Anders","last_name" : "Kovalchyck","username" : "ankov"},
        {"namn" : "Kloster","namn2" : "","transaction_id" : "49584","user_id" : "51","beer_id" : "8967303","timestamp" : "2015-12-02 13:00:33","price" : "19.90","first_name" : "Anders","last_name" : "Kovalchyck","username" : "ankov"},
        {"namn" : "Leffe","namn2" : "Blonde","transaction_id" : "49585","user_id" : "51","beer_id" : "165903","timestamp" : "2015-12-02 13:00:33","price" : "10.90","first_name" : "Anders","last_name" : "Kovalchyck","username" : "ankov"},
        {"namn" : "Kung","namn2" : "","transaction_id" : "49586","user_id" : "51","beer_id" : "144612","timestamp" : "2015-12-02 13:00:33","price" : "99.00","first_name" : "Anders","last_name" : "Kovalchyck","username" : "ankov"},
        {"namn" : "Kloster","namn2" : "","transaction_id" : "49587","user_id" : "51","beer_id" : "8967303","timestamp" : "2015-12-02 13:00:33","price" : "19.90","first_name" : "Anders","last_name" : "Kovalchyck","username" : "ankov"},
        {"namn" : "Leffe","namn2" : "Blonde","transaction_id" : "49588","user_id" : "51","beer_id" : "165903","timestamp" : "2015-12-02 13:00:33","price" : "10.90","first_name" : "Anders","last_name" : "Kovalchyck","username" : "ankov"},
        {"namn" : "Kung","namn2" : "","transaction_id" : "49589","user_id" : "51","beer_id" : "144612","timestamp" : "2015-12-02 13:00:33","price" : "99.00","first_name" : "Anders","last_name" : "Kovalchyck","username" : "ankov"},
        {"namn" : "Kloster","namn2" : "","transaction_id" : "49590","user_id" : "51","beer_id" : "8967303","timestamp" : "2015-12-02 13:00:33","price" : "19.90","first_name" : "Anders","last_name" : "Kovalchyck","username" : "ankov"}]
}

