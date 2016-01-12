/**
 */
/**
 * Created by LOe on 01/12/15.
 */



/* variables to undo/redo*/
var deletedVIP = [];
var undoneVIP = [];
var countDeletes=0;

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
    var top1='<div> <table class="table table-hover"><thead> <tr> <th>Balance</th> ' +
        '<th>Username</th> <th>First Name</th> <th>Last Name</th> </tr> </thead><tbody>';

    /* bottom1 is a variable that "ends" the created table*/
    var bottom1='</tbody></table></div>';

    temp += getVips(VipData) +"<br>";     /*gets all users one by one I think*/


    return top1+temp+bottom1;

}

function getVips(VipData) {
    var out1 = "";
    var i;
    for (i = 0; i < VipData.length; i++) {
        /* out1 is a variable that contains the "middle of the table" + information*/
        out1 += ' <tr><td>'+VipData[i].assets+'</td> <td>'+VipData[i].username+
            '</td> <td>'+ VipData[i].first_name+'</td><td>'+ VipData[i].last_name+'</td>' +
            '<td><button class="undobutton" onclick="deletemember('+i+')">Delete</button></td> </tr>  </tr>';

    }
    return out1;
}


function Searchbox() {
    /*this creates a search field and search button*/
    var search1='<div id="searchplacement">' +
        ' <input class="searchbox" id="Searchword1" type="text"> ' +
        '<button class="addVipbutton" onclick="FindObject()">Search Vip</button> </div><div><p id="foundPersons"></p> </div>';
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
            var str1=VipData[i].username ;
            var str2=VipData[i].first_name;
            var str3=VipData[i].last_name;
            str1=str1.toLowerCase();
            str2=str2.toLowerCase();
            str3=str3.toLowerCase();
            user=user.toLowerCase();

            if (str1.search(user)>-1 || str2.search(user)>-1||str3.search(user)>-1) {
                fPersons += ' <tr><td>'+VipData[i].assets+'</td> <td>'+VipData[i].username+ '</td> <td>'+
                    VipData[i].first_name+ '</td><td>'+ VipData[i].last_name+'</td>' +
                    '<td><button class="undobutton" onclick="deletemember('+i+')">Delete</button></td> </tr>';

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
        '<table align="center">' +
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
        '<button class="addVipbutton"  onclick="cancleaddVip()">Cancel</button></tr></table>' +
        '</div>';
    return addVip;



}

function deletemember(i){

    var message="You have deleted " +VipData[i].first_name +' '+ VipData[i].last_name;
    var r = confirm("Are you sure you want to delete "+
        VipData[i].first_name+' '+ VipData[i].last_name+"?" ); //Confirmation message

    if (r == true) {
        // saving information about the deleted user temporarily in an array
        var saveVIP = {"username" : VipData[i].username,"first_name" : VipData[i].first_name,"last_name" : VipData[i].last_name,"assets" : VipData[i].assets};
        deletedVIP.push(saveVIP);
        VipData.splice(i, 1); // removes a user from VipData(should be the database)
        countDeletes++; // increases so it's possible to keep track of the index the "newest"
                // deleted person is placed in the deletedVIP array
        
        $('#allVipUsers').empty();  /*get rid of the old content*/
        $(getAllVipMem(VipData)).appendTo("#allVipUsers"); /*appends the new content :)*/
    } 
    
    else {
        alert("You didn't do any changes");
    }
}

// undo/redo start
function undoVIPdelete() {
    if (countDeletes>0) {
        countDeletes--; // decreases by one to get the right index
        var restoreVIP = {"username" :deletedVIP[countDeletes].username,"first_name" : deletedVIP[countDeletes].first_name,
            "last_name" : deletedVIP[countDeletes].last_name,"assets" :deletedVIP[countDeletes].assets};

        VipData.push(restoreVIP); // adding the deleted VIP again
        undoneVIP.push(restoreVIP); // adding the deleted VIP in this array to make it possible later to add it undo the
                                    //delete again by pressing redo

        $('#allVipUsers').empty();  /*get rid of the old content*/
        $(getAllVipMem(VipData)).appendTo("#allVipUsers"); /*appends the new content :)*/

        deletedVIP.pop(); //removing the last element in this array
    }

    else {
        alert("Nothing to undo");
    }
}

function redoVIPdelete() {

    var backStep=undoneVIP.length; // variable to find most recently undone delete

    if( backStep > 0) {
        backStep--; // so we don't start out of bounds
        countDeletes++;  // so we can keep track of most recently deleted VIP
        var vipp = {"username" :undoneVIP[backStep].username,
            "first_name" : undoneVIP[backStep].first_name,
            "last_name" : undoneVIP[backStep].last_name, "assets" :undoneVIP[backStep].assets};

        VipData.pop();// since in this case all deleted VIPS is placed last when undoing a delete
        deletedVIP.push(vipp);
        undoneVIP.pop();

        $('#allVipUsers').empty();   /*get rid of the old content*/
        $(getAllVipMem(VipData)).appendTo("#allVipUsers"); /*appends the new content :)*/

    }


    else {
        alert("Nothing to redo");
    }
}
//end of undo/redo

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

