/**
 * Created by malinedlert on 15-12-04.
 */
/**
 * Created by LOe on 01/12/15.
 */

$(function () {

    // First we hide all menus, but the one with all courses.
    //
    $("#allVipUsers").show();
    $("#searchVipUser").hide();


    $("#vip").click(function () { /* Here we show and hide the field. */
        $("#allVipUsers").show("slow");
        $("#searchVipUser").hide("slow");
    });


    $("#search").click(function () { /* Here we show and hide the field. */
        $("#allVipUsers").hide("slow");
        $("#searchVipUser").show("slow");
    });

    $(Searchbox(getVipData())).appendTo("#searchVipUser");
    $(getAllVipMem(getVipData())).appendTo("#allVipUsers");

});


function getAllVipMem(arr) {

    var temp = "";
    /* top1 is a variable that starts making a table with relevant information */
    var top1='<div> <table class="table table-hover"><thead> <tr> <th>Amount</th> ' +
        '<th>Username</th> <th>First Name</th> <th>Last Name</th> </tr> </thead>';

    /* bottom1 is a variable that "ends" the created table*/
    var bottom1='</table></div>';

    temp += getUsers(arr) +"<br>";     /*gets all users one by one I think*/


    return top1+temp+bottom1;

}

function getUsers(arr) {
    var out1 = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        /* out1 is a variable that contains the "middle of the table" + information*/
        out1 += '<tbody> <tr><td>'+arr[i].assets+'</td> <td>'+arr[i].username+
            '</td> <td>'+ arr[i].first_name+'</td><td>'+ arr[i].last_name+'</td> </tr> </tbody>';

    }
    return out1;
}


function Searchbox() {
    /*this creates a search field and search button*/
    var search1='<div id="searchplacement">' +
        ' <input class="searchbox" id="Searchword1" type="text"> ' +
        '<button class="" onclick="FindObject()">Search Vip-member</button> <p id="foundPersons"> </div>'
    return search1;
}


function FindObject() {

    /*toppen =start of result table, bottom1 = end of result table*/
    var top1='<div> <table class="table table-hover"><thead> <tr> <th>Amount</th> <th>Username</th> ' +
        '<th>First Name</th> <th>Last Name</th> </tr> </thead>';
    var bottom1='</table></div>';

    /* needed variables*/
    var foundPersons;
    var user;
    var fPersons ="";/*if able to find a Vip-member this will later become the middle of the table*/

    /*gets the variables from the html document and also the data needed*/
    foundPersons = document.getElementById("foundPersons");
    user = document.getElementById("Searchword1").value;


    var vipmembers=getVipData();/* this is probably a redundant way*/


    if(user=="" ){
        foundPersons.innerHTML="You didn't search for anyone ";
    }

    else {
        foundPersons.innerHTML="Results"+'<br>' + top1+fPersons+bottom1;

        /*Goes every row in vipmembers to see if it can find the search vip-member*/
        for (var i=0;  i < vipmembers.length; i++) {
            if (user==vipmembers[i].username || user==vipmembers[i].first_name ||user==vipmembers[i].last_name) {
                fPersons += '<tbody> <tr><td>'+vipmembers[i].assets+'</td> <td>'+vipmembers[i].username+ '</td> <td>'+
                    vipmembers[i].first_name+ '</td><td>'+ vipmembers[i].last_name+'</td> </tr> </tbody>';

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