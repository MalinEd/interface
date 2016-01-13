/**
 */

$(function () {
    // this one hides all messages that later will show up in custview when clicking on different things

    $("#mess").hide();
    $("#confirm").hide();
    $("#noOrder").hide();
    $("#Instruct").hide();
    $("#outOfstock").hide();
    $("#Instruct2").hide();



    $("#ok").click(function () { /* Here we show and hide the field. */
        $("#mess").hide("slow");
    });
    $("#ok2").click(function () { /* Here we show and hide the field. */
        $("#noOrder").hide("slow");
        $("#confirm").hide("slow");

    });
    $("#ok3").click(function () { /* Here we show and hide the field. */
        $("#Instruct").hide("slow");
    });
    $("#ok4").click(function () { /* Here we show and hide the field. */
        $("#Instruct").hide("slow");
    });
    $("#ok5").click(function () { /* Here we show and hide the field. */
        $("#Instruct2").hide("slow");
    });
    $("#No").click(function () { /* Here we show and hide the field. */
        $("#confirm").hide("slow");
    });


    // gets the users credit when logging in
    $(getUsersCredit());

});


// getting the users credit
function getUsersCredit() {
    var CK = document.cookie;  //get cookieinformation
    var start=CK.split("=")[1]; // chooses the part of the cookie that we need (looks like userName=username and we remove userName= by using split)

    // searching for the users credit
    for (var i = 0; i < VipData.length; i++) {
        if (start==VipData[i].username){
            var userCred=VipData[i].assets;

        }
    }
    document.getElementById("UserCredit").innerHTML=" "+userCred+":-";

}

function payIt(ident) {
    $("#confirm").show("slow");

}



/* in this function we do the payment
starting by getting a timestamp and also identifies where the payment is taking place
changes the stock of the bought items
removes content
and updates the users credit
and sets the total to zero again
also resets undo/redo
* */
function pay(ident) {

    // getting a timestamp
    var DateToday = new Date();
    var day = DateToday.getDate();
    var month = DateToday.getMonth()+1;// this because january=0
    var year = DateToday.getFullYear();
    var hour= DateToday.getHours();
    var minute= DateToday.getMinutes();
    var second=DateToday.getSeconds();
    DateToday =year+'-'+month+'-'+day+ ' '+hour+':'+minute+':'+second;
    var Cost;
    var changeStock, i,j;

    var order = $("#"+ident).children();

    if (order.length>0) {



        // this is used if it is a customer ordering
        if (ident=="receipt13"){
            $("#confirm").hide("slow");

            // users balance
            var balance=document.getElementById("UserCredit").innerHTML;
            balance=balance.split(":")[0];
            // getting the total cost
            Cost=totalcost(ident);
            Cost=Cost.split(":")[0];

            //getting children to parent div
            var newBalance=Number(balance)-Number(Cost);
            var changeStock, i,j;

            if (newBalance<=0){
                $("#mess").show("slow");

            }
            else{

                for (i = 0; i < order.length; i++) {
                    changeStock=order[i].getAttribute("data-beerID");
                    for (j = 0; j < beerdata.length; j++) {
                        if (beerdata[j].beer_id==changeStock){
                            if (beerdata[j].count>0){
                                beerdata[j].count=Number(beerdata[j].count)-1;
                                // here we add data so that the list of most popular beverages bought can be updated
                                // some of the keyvalues are empty but they wouldn't have been if we used the API
                                pop.push({"namn" : beerdata[j],"namn2" : "","transaction_id" : "","user_id" : "",
                                    "beer_id" : beerdata[j].beer_id,"timestamp" : DateToday,
                                    "price" : beerdata[j].price,"first_name" : "","last_name" : "","username" : ""});
                            }
                            else{
                                newBalance=Number(newBalance)+Number(beerdata[j].pub_price);
                                $("#outOfstock").show("slow");

                            }
                        }
                    }
                }
                $(order).remove(); // removes brought items
                document.getElementById("UserCredit").innerHTML=SetBalance(newBalance);
                whereToUpdate(ident);
                countDrop=-1;
                undoDrop=[];
                countRedo=-1;
                redoDrop=[];
                $("#Instruct").show("slow");
            }
        }



        // this is used when a bartender is "paying"
        else{
            var r = confirm("Ready to pay"); //Confirmation message

            if (r == true) {
                // getting the total cost
                Cost=totalcost(ident);
                Cost=Cost.split(":")[0];
                //getting children to parent div

                for (i = 0; i < order.length; i++) {
                    changeStock=order[i].getAttribute("data-beerID");
                    for (j = 0; j < beerdata.length; j++) {
                        if (beerdata[j].beer_id==changeStock){
                            if (beerdata[j].count>0){
                                beerdata[j].count=Number(beerdata[j].count)-1;
                                // here we add data so that the list of most popular beverages bought can be updated
                                // some of the keyvalues are empty but they wouldn't have been if we used the API
                                pop.push({"namn" : beerdata[j],"namn2" : "","transaction_id" : "","user_id" : "",
                                    "beer_id" : beerdata[j].beer_id,"timestamp" : DateToday,
                                    "price" : beerdata[j].price,"first_name" : "","last_name" : "","username" : ""});
                            }
                            else{
                                alert("out of stock");
                            }
                        }
                    }
                }
                $(order).remove(); // removes brought items
                whereToUpdate(ident);
                countDrop=-1;
                undoDrop=[];
                countRedo=-1;
                redoDrop=[];
            }

        }

    }


    else{
        $("#noOrder").show("slow");
    }


}

function SetBalance(newBalance) {
    // setting the users new credit
    var CK = document.cookie;  //get cookieinformation
    var start=CK.split("=")[1]; // chooses the part of the cookie that we need (looks like userName=username and we remove userName= by using split)
    var out;
// searching for the users credit
    for (var k = 0; k < VipData.length; k++) {
        if (start==VipData[k].username){
            VipData[k].assets=newBalance;
            out=VipData[k].assets
        }
    }

    return " "+out+":-";
}


