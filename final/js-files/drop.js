/**
 * Created by USUARIO on 07/12/2015.
 */
/**
 * Created by LOe on 01/12/15.
 */

// A standard function. If you don't want any "extras", just use this
// as it is. It will prevent the default behaviour, which is not to accept
// any drops.
//

var countDrop=-1;
var undoDrop=[];
var countRedo=-1;
var redoDrop=[];

function allowDrop(ev) {
    ev.preventDefault();
}

// A standard function. I packages the ID of the source into the data
// transfer package.
//
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

}

// The drop function determines what happens when you drop the source item
// on the target. You can define any kind of action that you want to
// incorporate.
//
// The drop function determines what happens when you drop the source item
// on the target. You can define any kind of action that you want to
// incorporate.
//this is when drop in custview
function drop1(ev) {
    var identitet=ev.target.id;
    countDrop++; /*count how many drops have been made and also giv the outer div a new id */
    var maxNumOfOrders=5;

    ev.preventDefault();

    // This allows for copying menu items, rather than moving them.
    //
    ev.dataTransfer.dropEffect="copy";

    var data = ev.dataTransfer.getData("text");

    //maxiumum number of items a customer can buy by them self
    var orders = $("#"+"receipt13").children();
    if (orders.length<maxNumOfOrders) {

        // If we use .cloneNode(true) the dragging results in a copy, rather than
        // a move of the source.

        var nodeCopy;
        var newID;

        nodeCopy = document.getElementById(data).cloneNode(true);
        //We cannot use the same ID
        newID="newId"+countDrop;
        nodeCopy.id=newID;
        ev.target.appendChild(nodeCopy);

        // getting the the beverages name and price so we add it into the innerhtml
        // of the first div and remove the remaning divs containing for example the star
        var bevName=nodeCopy.getAttribute("data-name");
        var bevPrice=nodeCopy.getAttribute("data-price");

        $("#"+newID).html(bevName+ " "+bevPrice+":-");

        var content=document.getElementById(newID).outerHTML;
        undoDrop.push({"cont":content,"idet": identitet});

        //decides where the calculated sum should be placed  every time something is dropped
        whereToUpdate(identitet);


    }
    // this will show up if you try to buy more than you are allowed
    else{
        $("#Instruct2").show("slow");
    }


}

//this is drop in empview

function drop(ev) {
    var identitet=ev.target.id;
    countDrop++; /*count how many drops have been made and also giv the outer div a new id */

    ev.preventDefault();

    // This allows for copying menu items, rather than moving them.
    //
    ev.dataTransfer.dropEffect="copy";

    var data = ev.dataTransfer.getData("text");

    var nodeCopy;
    var newID;

    nodeCopy = document.getElementById(data).cloneNode(true);
    //We cannot use the same ID
    newID="newId"+countDrop;
    nodeCopy.id=newID;
    ev.target.appendChild(nodeCopy);

    // getting the the beverages name and price so we add it into the innerhtml
    // of the first div and remove the remaning divs containing for example the star
    var bevName=nodeCopy.getAttribute("data-name");
    var bevPrice=nodeCopy.getAttribute("data-price");

    $("#"+newID).html(bevName+ " "+bevPrice+":-");

    var content=document.getElementById(newID).outerHTML;
    undoDrop.push({"cont":content,"idet": identitet});

    //decides where the calculated sum should be placed  every time something is dropped
    whereToUpdate(identitet);


}
// this function keeps track of where to update to total sum of items added in order
function whereToUpdate(ident){

    var out;
    var numberOfTables=10;

    if (ident=="receipt13") {
        out=document.getElementById("total").innerHTML= totalcost(ident);

    }
    else if (ident=="receipt23") {
       out= document.getElementById("total").innerHTML= totalcost(ident);

    }

    else {
        for (var k = 1; k < numberOfTables+1; k++) {
            if (ident=="order"+k) {
                var li= $("#t"+k).children();
                for (var a = 1; a < li.length; a++) {
                    if (li[a].getAttribute("class")=="tsum") {
                        li[a].innerHTML=totalcost(ident);

                    }

                }

            }
        }

    }
return out;
}


function DropUndo(button){
    //alert(undoDrop.length)
    if (undoDrop.length>0){

        var ident=undoDrop[undoDrop.length-1].idet;
        var content=undoDrop[undoDrop.length-1].cont;

        var list = $("#"+ident).children(); // get all the children
        $(list.get(list.length-1)).remove(); // remove the last one


        redoDrop.push({"cont2":content,"idet2":ident});
        undoDrop.pop();
        countRedo++;
    }
    else{
        if (button=="undoC"){
            $("#Instruct3").show();

        }
        else{
            alert("nothing to undo");
        }
    }
    //recalculate total cost

    whereToUpdate(ident);


}

function DropRedo(button){
    //alert(redoDrop.length)

    if (redoDrop.length>0){
        var content=redoDrop[redoDrop.length-1].cont2;
        var ident=redoDrop[redoDrop.length-1].idet2;
        undoDrop.push({"cont":content,"idet": ident});

        var list = $("#"+ident).children(); // get all the children
        document.getElementById(ident).innerHTML +=content;

        redoDrop.pop();

    }

    else{
        if (button=="redoC"){
            $("#Instruct4").show();

        }
        else{
            alert("nothing to undo");
        }

    }

    //recalculate total cost
    whereToUpdate(ident);


}


// function that calculates the total cost
function totalcost(ident){
    var totcost=0;
    var list2 = $("#"+ident).children(); // get all the children

    if (list2.length>0){
        for (var i = 0; i < list2.length; i++) {
            var price=list2[i].getAttribute("data-price");
            totcost=totcost+Number(price);
        }
    }


return totcost+':-';

}

