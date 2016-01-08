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
    alert(ev)
    ev.preventDefault();

    // This allows for copying menu items, rather than moving them.
    //
    ev.dataTransfer.dropEffect="copy";

    var data = ev.dataTransfer.getData("text");

    // If we use .cloneNode(true) the dragging results in a copy, rather than
    // a move of the source.
    //
    var nodeCopy = document.getElementById(data).cloneNode(true);

    /* We cannot use the same ID */
    nodeCopy.id="newId";
    ev.target.appendChild(nodeCopy);



}



