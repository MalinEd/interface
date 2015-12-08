/**
 * Created by malinedlert on 15-12-04.
 */
/**
 * Created by LOe on 01/12/15.
 */

/*should not be declared this way but now its possible to see that
 * data was deleted without API :) */
var VipData=getVipData();

/* variables to undo/redo*/
var deletedVIP = [];
var undoneVIP = [];

$(function () {

    // First we hide all menus, but the one with all courses.
    //

    $("#allVipUsers").show();
    $("#searchVipUser").hide();
    $("#addVipUser").hide();



    $("#vip").click(function () { /* Here we show and hide the field. */
        $("#allVipUsers").show("slow");
        $("#searchVipUser").hide("slow");
        $("#addVipUser").hide("slow");

    });


    $("#search").click(function () { /* Here we show and hide the field. */
        $("#allVipUsers").hide("slow");
        $("#searchVipUser").show("slow");
        $("#addVipUser").hide("slow");

    });

    $("#newUser").click(function () { /* Here we show and hide the field. */
        $("#allVipUsers").hide("slow");
        $("#searchVipUser").hide("slow");
        $("#addVipUser").show("slow");

    });

    $(Searchbox(VipData)).appendTo("#searchVipUser");
    $(getAllVipMem(VipData)).appendTo("#allVipUsers");
    $(getNewUserInputField()).appendTo("#addVipUser");


});



function getAllVipMem(VipData) {

    var temp = "";
    /* top1 is a variable that starts making a table with relevant information */
    var top1='<div> <table class="table table-hover"><thead> <tr> <th>Amount</th> ' +
        '<th>Username</th> <th>First Name</th> <th>Last Name</th> </tr> </thead><tbody>';

    /* bottom1 is a variable that "ends" the created table*/
    var bottom1='</tbody></table></div>';

    temp += getUsers(VipData) +"<br>";     /*gets all users one by one I think*/


    return top1+temp+bottom1;

}

function getUsers(VipData) {
    var out1 = "";
    var i;
    for (i = 0; i < VipData.length; i++) {
        /* out1 is a variable that contains the "middle of the table" + information*/
        out1 += ' <tr><td>'+VipData[i].assets+'</td> <td>'+VipData[i].username+
            '</td> <td>'+ VipData[i].first_name+'</td><td>'+ VipData[i].last_name+'</td>' +
            '<td><button onclick="deletemember('+i+')">Delete</button></td> </tr>  </tr>';

    }
    return out1;
}


function Searchbox() {
    /*this creates a search field and search button*/
    var search1='<div id="searchplacement">' +
        ' <input class="searchbox" id="Searchword1" type="text"> ' +
        '<button class="" onclick="FindObject()">Search Vip-member</button> <p id="foundPersons"></p> </div>';
    return search1;
}




function FindObject() {

    /*top1 =start of result table, bottom1 = end of result table*/
    var top1='<div> <table class="table table-hover"><thead> <tr> <th>Amount</th> <th>Username</th> ' +
        '<th>First Name</th> <th>Last Name</th> </tr> </thead><tbody>';
    var bottom1='</tbody></table></div>';

    /* needed variables*/
    var foundPersons;
    var user;
    var fPersons ="";/*if able to find a Vip-member this will later become the middle of the table*/

    /*gets the variables from the html document and also the data needed*/
    foundPersons = document.getElementById("foundPersons");
    user = document.getElementById("Searchword1").value;



    if(user=="" ){
        foundPersons.innerHTML="You didn't search for anyone ";
    }

    else {
        foundPersons.innerHTML="Results"+'<br>' + top1+fPersons+bottom1;

        /*Goes every row in vipmembers to see if it can find the search vip-member*/
        for (var i=0;  i < VipData.length; i++) {
            if (user==VipData[i].username || user==VipData[i].first_name ||user==VipData[i].last_name) {
                fPersons += ' <tr><td>'+VipData[i].assets+'</td> <td>'+VipData[i].username+ '</td> <td>'+
                    VipData[i].first_name+ '</td><td>'+ VipData[i].last_name+'</td>' +
                    '<td><button onclick="deletemember('+i+')">Delete</button></td> </tr>';

            }
        }
        if(fPersons==""){
            foundPersons.innerHTML="Couldn't find " + user;
        }
        else {
            foundPersons.innerHTML="Results"+'<br>' + top1+fPersons+bottom1;
        }
    }
}

function getNewUserInputField(){
    /*this creates a table where it wil be possible to add members to the database*/

 var addVip='<div>' +
        '<span>NEW VIP</span> ' +
        '<table border="2px solid black" align="center">' +
        '<tr><td>First Name:</td><td><input class="inputfield" id="1first_name" type="text"></td></> ' +
        '<tr><td>Last Name:</td><td><input class="inputfield" id="1last_name" type="text"> </td></tr>' +
        '<tr><td>Username:</td><td><input class="inputfield" id="1new_username" type="text"> </td></tr>' +
        '<tr><td>Password:</td><td><input class="inputfield" id="1new_password" type="password"> </td></tr>' +
        '<tr><td>E-mail:</td><td> <input class="inputfield" id="1email" type="text"> </td></tr>' +
        '<tr><td>Phone:</td><td><input class="inputfield" id="1phone" type="text"></td></tr> ' +
        '<tr><td>Credit: </td><td><input class="inputfield" id="1credit" type="text"> </td></tr>' +
        '<tr><td>Address: </td><td><input class="inputfield" id="1address" type="text"></td></tr> ' +
        '<tr><td>Zip-Code:  </td><td><input class="inputfield" id="1zipCode" type="text"> </td></tr>' +
        '<tr><td></td><td><button class="addVipbutton"  onclick="addmember()">Add VIP</button>' +
        '<button class="cancelButton"  onclick="cancleaddVip()">Cancel</button></tr></table>' +
        '</div>';
    return addVip;



}

function deletemember(i){

    var message="You have deleted " +VipData[i].first_name +' '+ VipData[i].last_name;

    var r = confirm("Are you sure you want to delete "+
        VipData[i].first_name+' '+ VipData[i].last_name+"?" );

    if (r == true) {
        var saveVIP = {"username" : VipData[i].username,"first_name" : VipData[i].first_name,"last_name" : VipData[i].last_name,"assets" : VipData[i].assets};
        VipData.splice(i, i+1);
        alert(message);
        deletedVIP.push(saveVIP);


            /*if this two rows is not performed the table:
             * 1. Will not be updated
             * or if just $(getAllVipMem(VipData)).appendTo("#allVipUsers");
             *the content will just be appended another time so the table
             * becomes twice as big with the deleted member gone in one of the
             * tables*/

            $('#allVipUsers').empty();  /*get rid of the old content*/
            $(getAllVipMem(VipData)).appendTo("#allVipUsers"); /*appends the new content :)*/


    } else {
        alert("You didn't do any changes");

    }




}





/*here is our undo/redo function and there are global variables at the top of this file
* but there is a bugg somewhere......*/


function undoVIPdelete() {
    var i = deletedVIP.length - 1;
    VipData.push(deletedVIP[i]);
    undoneVIP.push(deletedVIP[i]);
    if (deletedVIP.length > 0) {
        deletedVIP.pop();

        $('#allVipUsers').empty();  /*get rid of the old content*/
        $(getAllVipMem(VipData)).appendTo("#allVipUsers"); /*appends the new content :)*/

    }
    else {
        alert("Nothing to undo");

    }
}

function redoVIPdelete() {
    var i = undoneVIP.length - 1;
    deletedVIP.push(undoneVIP[i]);
    if (undoneVIP.length > 0) {
        VipData.pop();

        $('#allVipUsers').empty();   /*get rid of the old content*/
        $(getAllVipMem(VipData)).appendTo("#allVipUsers"); /*appends the new content :)*/
    }
    else {
        alert("Nothing to redo");
    }
}



function cancleaddVip(){

    /*Clearing the input fields*/
    document.getElementById("1first_name").value="";
    document.getElementById("1last_name").value="";
    document.getElementById("1new_username").value="";
    document.getElementById("1new_password").value="";
    document.getElementById("1email").value="";
    document.getElementById("1phone").value="";
    document.getElementById("1credit").value="";
    document.getElementById("1address").value="";
    document.getElementById("1zipCode").value="";

}


function addmember() {


    /*variables needed*/
    var first_name, last_name, new_username, new_password, email, phone, credit, address, zipCode;

    /*getting the needed variables from inputfields*/
    first_name= document.getElementById("1first_name").value;
    last_name=document.getElementById("1last_name").value;
    new_username=document.getElementById("1new_username").value;
    new_password=document.getElementById("1new_password").value;
    email=document.getElementById("1email").value;
    phone=document.getElementById("1phone").value;

    /*somewhat from the requirements document but not needed in the database update*/
    credit=document.getElementById("1credit").value;
    address=document.getElementById("1address").value;
    zipCode=document.getElementById("1zipCode").value;



    if (new_username=="" || new_password=="" ||first_name=="" ||last_name=="" ||email=="" ||phone=="" || credit=="" ||address=="" || zipCode=="") {
        alert("You need to fill in all the information");


    }
    else {

        /*this is probably how it would look when adding to the api but im not sure
         var url='http://pub.jamaica-inn.net/fpdb/api.php?username='+admin+'&password='+admin+'&action=user_edit&=new_username='+new_username+'&new_password='+new_password+'&first_name='+first_name+'&last_name='+last_name+'&email='+email+'&phone='+phone;
         */
        /*using this to simulate the whole thing */

        VipData.push({"username" : new_username,"first_name" : first_name,"last_name" : last_name,"assets":credit});
        alert("You have added " + first_name+' '+ last_name+' with username '+new_username + 'as a new VIP-customer' );

        /*Clearing the input fields*/
        document.getElementById("1first_name").value="";
        document.getElementById("1last_name").value="";
        document.getElementById("1new_username").value="";
        document.getElementById("1new_password").value="";
        document.getElementById("1email").value="";
        document.getElementById("1phone").value="";
        document.getElementById("1credit").value="";
        document.getElementById("1address").value="";
        document.getElementById("1zipCode").value="";


        /*if this two rows is not performed the table:
         * 1. Will not be updated
         * or if just $(getAllVipMem(VipData)).appendTo("#allVipUsers");
         *the content will just be appended another time so the table
         * becomes twice as big with the deleted member gone in one of the
         * tables*/

        $('#allVipUsers').empty()   /*get rid of the old content*/
        $(getAllVipMem(VipData)).appendTo("#allVipUsers"); /*appends the new content :)*/

    }





}



function getVipData() {
    return [
        {"username" : "anddar","first_name" : "Andrea","last_name" : "Darzi","assets" : "-357460"},
        {"username" : "aamsta","first_name" : "Aamu","last_name" : "Stankic","assets" : "-5120"},
        {"username" : "maihon","first_name" : "Maiken","last_name" : "Honda","assets" : "-3415"},
        {"username" : "ankov","first_name" : "Anders","last_name" : "Kovalchyck","assets" : "-3210"},
        {"username" : "jovsit","first_name" : "Zlatan","last_name" : "Ibrahimovic","assets" : "-1637"},
        {"username" : "liatra","first_name" : "Liam","last_name" : "Traverso","assets" : "-1055"},
        {"username" : "dansch","first_name" : "Danna","last_name" : "Schermer","assets" : "-985"},
        {"username" : "pauaaf","first_name" : "Paula","last_name" : "Aafjes","assets" : "-720"},
        {"username" : "undefined","first_name" : "Hej","last_name" : "Då","assets" : "-440"},
        {"username" : "ervtod","first_name" : "Ervin","last_name" : "Todd","assets" : "-345"},
        {"username" : "eulcou","first_name" : "Eul�lia","last_name" : "Coughlan","assets" : "-270"},
        {"username" : "livzha","first_name" : "Livianus","last_name" : "Zhao","assets" : "-260"},
        {"username" : "lasnic","first_name" : "Lasse","last_name" : "Nicholson","assets" : "-250"},
        {"username" : "testy","first_name" : "Testy","last_name" : "Test","assets" : "-200"},
        {"username" : "kenolg","first_name" : "Kenan","last_name" : "Olguin","assets" : "-187"},
        {"username" : "elepic","first_name" : "Elektra","last_name" : "Pickle","assets" : "-185"},
        {"username" : "gollan","first_name" : "Golnar","last_name" : "Langley","assets" : "-150"},
        {"username" : "felbar","first_name" : "Felix","last_name" : "Barto�","assets" : "-125"},
        {"username" : "einyam","first_name" : "Einarr","last_name" : "Yamauchi","assets" : "-115"},
        {"username" : "hyrlap","first_name" : "Hyram","last_name" : "Lapointe","assets" : "-105"},
        {"username" : "tohei","first_name" : "T�fa","last_name" : "Heinrich","assets" : "-85"},
        {"username" : "sulpen","first_name" : "Sulis?aw","last_name" : "Pender","assets" : "-60"},
        {"username" : "hirchr","first_name" : "Hiram","last_name" : "Christopherson","assets" : "-55"},
        {"username" : "giamik","first_name" : "Giacinta","last_name" : "Mikkelsen","assets" : "-50"},
        {"username" : "sulstr","first_name" : "Sulayman","last_name" : "Street","assets" : "-40"},
        {"username" : "karbly","first_name" : "Karme","last_name" : "Blythe","assets" : "-40"},
        {"username" : "valpag","first_name" : "Valeria","last_name" : "Pagani","assets" : "-35"},
        {"username" : "bratam","first_name" : "Branko","last_name" : "Tam�s","assets" : "-30"},
        {"username" : "shapet","first_name" : "Sharma","last_name" : "Pet?fi","assets" : "-30"},
        {"username" : "marsti","first_name" : "Marin","last_name" : "Stieber","assets" : "-30"},
        {"username" : "symzim","first_name" : "Symeonu","last_name" : "Zimmermann","assets" : "-25"},
        {"username" : "edraug","first_name" : "Edric","last_name" : "Augustin","assets" : "-25"},
        {"username" : "nikpro","first_name" : "Nika","last_name" : "Proulx","assets" : "-20"},
        {"username" : "fercrn","first_name" : "Ferdin�nd","last_name" : "Crncevic","assets" : "-15"},
        {"username" : "steber","first_name" : "Stefan","last_name" : "Bernard","assets" : "-15"},
        {"username" : "didwat","first_name" : "Dido","last_name" : "Waters","assets" : "-5"},
        {"username" : "olubra","first_name" : "Oluwakanyinsola","last_name" : "Braun","assets" : "-5"},
        {"username" : "jeaats","first_name" : "Jeanne","last_name" : "Atses","assets" : "0"},
        {"username" : "pomgra","first_name" : "Pompeius","last_name" : "Graner","assets" : "0"},
        {"username" : "krysan","first_name" : "Krystyna","last_name" : "Santiago","assets" : "0"},
        {"username" : "yevowe","first_name" : "Yevpraksiya","last_name" : "Owens","assets" : "0"},
        {"username" : "benfau","first_name" : "Bento","last_name" : "Faucher","assets" : "0"},
        {"username" : "orapan","first_name" : "Orabela","last_name" : "Panders","assets" : "0"},
        {"username" : "teojen","first_name" : "Teodora","last_name" : "Jensen","assets" : "0"},
        {"username" : "oludra","first_name" : "Oluwatoyin","last_name" : "Drake","assets" : "0"},
        {"username" : "ceznew","first_name" : "Cezar","last_name" : "Newman","assets" : "0"},
        {"username" : "jershi","first_name" : "Jerry","last_name" : "Shizuka","assets" : "0"},
        {"username" : "molbab","first_name" : "Molle","last_name" : "Babi?","assets" : "5"},
        {"username" : "larsch","first_name" : "Lara","last_name" : "Schenck","assets" : "5"},
        {"username" : "schjou","first_name" : "Schwanhild","last_name" : "Joubert","assets" : "10"},
        {"username" : "felfra","first_name" : "Felicia","last_name" : "Franklin","assets" : "10"},
        {"username" : "janhei","first_name" : "Jancsi","last_name" : "Heiman","assets" : "15"},
        {"username" : "foobar","first_name" : "Foo","last_name" : "Bar","assets" : "15"},
        {"username" : "domolh","first_name" : "Domen","last_name" : "Olhouser","assets" : "15"},
        {"username" : "marpug","first_name" : "Mariana","last_name" : "Pugliese","assets" : "20"},
        {"username" : "kaywan","first_name" : "Kaye","last_name" : "Wang","assets" : "25"},
        {"username" : "jacabb","first_name" : "Jacob","last_name" : "Abbatelli","assets" : "25"},
        {"username" : "rewes","first_name" : "R�gulo","last_name" : "Westerberg","assets" : "25"},
        {"username" : "muhtof","first_name" : "Muhammed","last_name" : "Toft","assets" : "25"},
        {"username" : "eusgor","first_name" : "Eustachius","last_name" : "Gorski","assets" : "45"},
        {"username" : "katfab","first_name" : "Katrien","last_name" : "Fabre","assets" : "50"},
        {"username" : "olislu","first_name" : "Oliver","last_name" : "Slusarski","assets" : "65"},
        {"username" : "saskru","first_name" : "Sa�a","last_name" : "Kr�ger","assets" : "110"},
        {"username" : "zulgor","first_name" : "Zuleika","last_name" : "Gorecki","assets" : "120"},
        {"username" : "aubbla","first_name" : "Aubrey","last_name" : "Blackwood","assets" : "150"},
        {"username" : "prabar","first_name" : "Prabhakar","last_name" : "Bartos","assets" : "170"},
        {"username" : "sivan","first_name" : "S?d?ka","last_name" : "Van","assets" : "235"},
        {"username" : "pierre","first_name" : "Pierre","last_name" : "Flener","assets" : "1000"},
        {"username" : "aqulyn","first_name" : "Aquilina","last_name" : "Lyndon","assets" : "1248"},
        {"username" : "svetor","first_name" : "Svetlana","last_name" : "Torres","assets" : "8036"},
        {"username" : "jorass","first_name" : "Jory","last_name" : "Assies","assets" : "8995"}
    ]


}
