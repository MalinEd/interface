/**
 * Created by malinedlert on 15-12-05.
 */
/**
 * Created by LOe on 01/12/15.
 see which beverages are the most popular ones (Popular and Search) look further down on the page*/

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

    $(SearchItemToPay(beerdata)).appendTo("#searchBeverage");
    $(getAllPopular(pop, beerdata)).appendTo("#popularBeverages");

});



function SearchItemToPay(beerdata) {
    /*this creates a search field and search button*/
    var search='<div>' +
        ' <input class="searchbox" id="searchword3" type="text"> ' +
        '<button type=button2" onclick="SearchStock(beerdata)">Search Beverage</button> <p id="ffoundBeverage"> </div>';
    return search;
}


function SearchStock(beerdata) {


    /* needed variables*/
    var ffoundBeverage;
    var searchBeverage;
    var ffBeverage ="";
    var startTable='<div><br></div><div class="table" ><div class="row"><div class =cell><strong></strong></div>' +
        '<div class =cell><strong>Price:</strong></div></div>';
    var endtable= '</div>';
    /*gets the variables from the html document and also the data needed*/
    ffoundBeverage = document.getElementById("ffoundBeverage");
    searchBeverage = document.getElementById("searchword3").value;


    if(searchBeverage=="" ){
        ffoundBeverage.innerHTML="You didn't search for anything";
    }

    else {
        ffoundBeverage.innerHTML="Results"+'<br>' + ffBeverage;


        for (var i=0;  i < beerdata.length; i++) {
            if (searchBeverage==beerdata[i].namn) {
                if(beerdata[i].count==notInStock){
                    ffoundBeverage.innerHTML=searchBeverage + "out of Stock";

                }
                else {
                 ffBeverage += '<div class="row" id="menuitemSearch'+ i +'" draggable="True" ' +
                        'ondragstart="drag(event)" data-price="'+beerdata[i].price+'" data-name="'+beerdata[i].namn+'" ' +
                     'data-beerID="'+beerdata[i].beer_id+'">'+
                        '<div class="cell">'+ beerdata[i].namn+'</div> <div class="cell" id="'+
                        " price"+i+'">'+beerdata[i].pub_price+':-</div>';
                 
                }
            }
        }
        if(ffBeverage==""){
            ffoundBeverage.innerHTML="Couldn't find " + searchBeverage;

        }
        else {
            ffoundBeverage.innerHTML="Results"+'<br>' +startTable+ ffBeverage+endtable;

        }
    }

}


function getAllPopular(pop, beerdata) {
    var out = '<div class="table" ><div class="row"><div class =cell>Beverages:</div>' +
        '<div class =cell>Price:</div></div>';
    var endtable= '</div>';

    var countedItem=countSales(pop);

// loop that adds all items that have been brought more that the limit of what counts as popular(poplimit)
    // then sees if its enough of those items in the stock to be able to sell it "online"

    for (var j = 0; j < beerdata.length; j++) {
        for (var i = 0; i < countedItem.length; i++) {
            if (beerdata[j].beer_id==countedItem[i].beer_id && countedItem[i].times_bought>popLimit){
                if (beerdata[j].count>notInStock){
                    /* out is a variable that contains the information*/
                    out +='<div class="row" id="menuItemPop' + i +' " draggable="true" ' +
                        'ondragstart="drag(event)" data-price="'+beerdata[j].pub_price+'" ' +
                        'data-name="'+beerdata[j].namn+'" data-beerID="'+beerdata[j].beer_id+'">' +
                        '<div class="cell">'+
                        beerdata[j].namn+'</div><div class ="cell"> '+beerdata[j].pub_price+
                        ':-</div></div>';
                }
                else {
                    out+='<div class="row" id="menuItemPop' + i +' " data-price="'+beerdata[j].pub_price+'" ' +
                        'data-name="'+beerdata[j].namn+'" data-beerID="'+beerdata[j].beer_id+'">' +
                        '<div class="cell">'+beerdata[j].namn+
                        '</div><div class="cell">Out of Stock</div></div>';

                }
            }
        }
    }

    if (out=='<div class="table" ><div class="row"><div class =cell>Beverages:</div>' +
        '<div class =cell>Price:</div></div>'){
        /* out is a variable that contains the information*/
        out ='<div> The most popular beverages might be out of stock, please contact the bartender<br>';
    }
    return out+endtable;
}

// this function the number of times one beverage has been bought
function countSales(pop){

    // it would probably be better if every purchase of a beer got stored in the database as a number
    // then this would go faster
    var counting = []; // array where beer_id and the number of times it has been bought is stored
    var itemlist = []; // array where beer_id is stored so it's possible to use indexOf


    for (var i = 0; i < pop.length; i++) {
        var if_in_mapp= itemlist.indexOf(pop[i].beer_id);// gives what index an element has or -1 if it's not in the array

        if (if_in_mapp==-1){
            var itemBought = {"beer_id" :pop[i].beer_id, "times_bought": 1};
            counting.push(itemBought);  // store the item in counted...
            itemlist.push(pop[i].beer_id);

        }

        else { // every time loop finds that a beverage has been bought 1 time or more it adds +1 in times it has been bought
            for (var j =0; j < itemlist.length; j++){
                if (pop[i].beer_id==counting[j].beer_id){
                    counting[j].times_bought+=1;

                }

            }
        }

    }

    return counting;
}
