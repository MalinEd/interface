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
function drop(ev) {
    var identitet=ev.target.id;
    countDrop++; /*count how many drops have been made and also giv the outer div a new id */
    var maxNumOfOrders=5;

    ev.preventDefault();

    // This allows for copying menu items, rather than moving them.
    //
    ev.dataTransfer.dropEffect="copy";

    var data = ev.dataTransfer.getData("text");

    // If we use .cloneNode(true) the dragging results in a copy, rather than
    // a move of the source.
    //



    if (identitet=="receipt13") {
        var orders = $("#"+identitet).children();
        if (orders.length<maxNumOfOrders) {
            var node1 = document.createElement("LI");
            var nodeCopy = document.getElementById(data).cloneNode(true);


            /* We cannot use the same ID */
            var newID="newId"+countDrop;
            nodeCopy.id=newID;

            node1.appendChild(nodeCopy);
            ev.target.appendChild(node1);

            // get all the children to see if you are allowed to ordermore items

            var list = $("#"+newID).children(); // get all the children

            if (list.length>maxNumOfOrders) {
                $(list.get(list.length-1)).remove(); // remove the last one (the star will be removed)
                var content=document.getElementById(newID).outerHTML;
                undoDrop.push({"cont":content,"idet": identitet});
            }

            else {
                /* uses this to store what was dropped into target*/
                undoDrop.push({"cont":nodeCopy.outerHTML,"idet": identitet});

            }

        }

        else{
            alert("You are only allowed to order five items at a time")
        }

    }

    else {


        var nodeCopy = document.getElementById(data).cloneNode(true);

        /* We cannot use the same ID */
        var newID="newId"+countDrop;
        nodeCopy.id=newID;

        ev.target.appendChild(nodeCopy);
        /* uses this to store what was dropped into target*/
        undoDrop.push({"cont":nodeCopy.outerHTML,"idet": identitet});

    }




}
function DropUndo(){
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
        alert("nothing to undo");
    }



}

function DropRedo(){
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
        alert("nothing to redo");
    }



}

