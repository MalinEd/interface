/**
*/

$(function () {

    // First we hide all menus, but the one with all courses.
    //
    $("#popularBev").hide();
    $("#favBeverage").show();

    $("#favs").click(function () { /* Here we show and hide the field. */
        $("#popularBev").hide("slow");
        $("#favBeverage").show("slow");
    });

    $("#popular").click(function () { /* Here we show and hide the field. */
        $("#popularBev").show("slow");
        $("#favBeverage").hide("slow");
    });

    $(getAllfav(fav, beerdata)).appendTo("#favBeverage");
    $(getAllpop(pop, beerdata)).appendTo("#popularBev");

});


function getAllfav(fav, beerdata) {
    var CK = document.cookie;  //get cookieinformation
    var start=CK.split("=")[1]; // chooses the part of the cookie that we need (looks like userName=username and we remove userName= by using split)

    var out = '<br><div class="table" ><div class="row"><div id="bev2" class =cell></div>' +
        '<div class =cell></div></div>';
    var endtable= '</div><br>';


    var i;

    for (i = 0; i < fav.length; i++) {

        if (start==fav[i].Username){
            var favoritList= fav[i].fav_beer_id;
            if (favoritList.length>0) {

                for (var j = 0; j < beerdata.length; j++) {
                    for (var k = 0; k < favoritList.length; k++) {

                        if (favoritList[k]==beerdata[j].beer_id){
                            if (beerdata[j].count>lowStockCustomer){
                                /* out is a variable that contains the "middle of the table" + information*/
                                out +='<div class="row" id="menuItemFav' + j +' " draggable="true" ' +
                                    'ondragstart="drag(event)" data-price="'+beerdata[j].pub_price+'" data-name="'+beerdata[j].namn+'">'+
                                    '<div class="cell">'+ beerdata[j].namn+'</div> <div class="cell" id="'+
                                    " price"+j+'">'+beerdata[j].pub_price+':-</div><div class="cell" >' +
                                    '<img class="picturestyleStar" onclick="removeFavorite('+j+')"' +
                                    'src="pictures/stargul.png"/></div></div>';
                            }
                            else {

                                out +='<div class="row" id="menuItemFav' + j +' " draggable="false" ' +
                                    'data-price="'+beerdata[j].pub_price+'" data-name="'+beerdata[j].namn+'">'+
                                    '<div class="cell">'+ beerdata[j].namn+'</div> <div class="cell" id="'+
                                    " price"+j+'">'+beerdata[j].pub_price+':-</div><div id="order1" class="cell" >' +
                                    '<img id="star" class="picturestyleStar" onclick="removeFavorite('+j+')" src="pictures/stargul.png"/> ' +
                                    'ⓘ</div></div>';

                            }
                        }
                    }
                }
            }

            else {
                out = '<br><div class="table" ><div class="row"><div class =cell></div>' +
                    '<div class =cell></div></div><div id="favMessage"> You have not added any favorites<br>';

            }
        }
    }
    return out+endtable;

}


function getAllpop(pop, beerdata) {
    var out = '<br><div class="table" ><div class="row"><div class =cell></div>' +
        '<div class =cell></div></div>';
    var endtable= '</div><br>';


    var countedItem=countSales(pop);


// loop that adds all items that have been brought more that the limit of what counts as popular(poplimit)
    // then sees if its enough of those items in the stock to be able to sell it "online"

    for (var j = 0; j < beerdata.length; j++) {
        for (var i = 0; i < countedItem.length; i++) {
            if (beerdata[j].beer_id==countedItem[i].beer_id && countedItem[i].times_bought>popLimit){
                if (beerdata[j].count>lowStockCustomer){
                    /* out is a variable that contains the information*/
                    out +='<div class="row" id="menuItemPop' + i +' " draggable="true" ' +
                        'ondragstart="drag(event)" data-price="'+beerdata[j].pub_price+'" ' +
                        'data-name="'+beerdata[j].namn+'"><div class="cell">'+
                        beerdata[j].namn+'</div> <div class ="cell"> '+beerdata[j].pub_price+
                        ':-</div></div>';
                }
            }
        }
    }

    if (out == '<br><div class="table" ><div class="row"><div class =cell></div>' +
        '<div class =cell></div></div>')

    {
        /* out is a variable that contains the information*/
        out ='<br><div class="table" ><div class="row"><div class =cell></div>' +
        '<div class =cell></div></div><div id="popMessage"> The most popular beverages might be out of stock, please contact the bartender<br>';
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



