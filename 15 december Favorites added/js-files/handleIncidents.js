/**
 */
var tempUser =[];
$(function () {

    //
    $("#Incidents").hide();
    $("#History1").show();

    $("#newincident").click(function () { /* Here we show and hide the field. */
        $("#Incidents").show("slow");
        $("#History1").hide("slow");
    });

    $("#history").click(function () { /* Here we show and hide the field. */
        $("#History1").show("slow");
        $("#Incidents").hide("slow");
    });

    $(logInToAddNewIncident()).appendTo("#Incidents");
    $(getHistory(historyData)).appendTo("#History1");

});

// function that gets comments that the bartenders has done as to keep track of different incidents
function getHistory(historyData) {

    var out='<div><h3>History</h3></div><div class="tableHist"><div class="row"></div>' +
        '<div class="cell">Date</div><div class="cell">Bartender</div> ';
    var end='</div>';

    for (var i = 0; i < historyData.length; i++) {
        out+='<div class="row"></div><div class="cell">'+historyData[i].timestamp+'</div>' +
            '<div class="cell"><strong>' +historyData[i].Username +'</strong></div>' +
            '<div class="cell">'+historyData[i].comment+'</div>';
    }

    return out+end;
}

// generates the loginbox
function logInToAddNewIncident() {
    var out='<div class="tableIncident"><div class="row"><div class="cell">Username:</div>' +
        '<div class="cell"><input class="searchbox" id=user1 name="username" type="text" placeholder="Type your username"></div></div>' +
        '<div class=row><div class="cell">Password:</div><div class="cell">' +
        '<input class="searchbox" name="password" type="password" placeholder="Type your password" id="password1">' +
        '</div></div><div class="row"><div class="cell"><button class="undobutton" onclick="checkEmpl()">Login</button></div><div class="cell"></div></div></div>';
    return out

}

//function that checks the employees username and password in case of several people using the same computer
// and change the how the tab "Incidents" looks (switches from showing a loginbox to a textfield instead
function checkEmpl() {
    var tempUsername = document.getElementById("user1").value; // temporary username
    var passw = document.getElementById("password1").value;
    var testIfTrue=0;
    for (var i=0; i < users.length; i++) {
        if ((tempUsername == users[i].Username) && (passw == users[i].Password) && (users[i].Admin==1)) {
            testIfTrue=1;
            tempUser.push({"usname": tempUsername});

            $("#Incidents").empty();
            $(AddNewIncident()).appendTo("#Incidents");
        }
    }
    if (testIfTrue==0) {
        alert("Wrong username or password");
    }

}

// makes it possible to write text in in a text area
function AddNewIncident() {
    var out1='<div><textarea id="textAreaId" rows="10" cols="50">' +
        '</textarea><button class="undobutton" onclick="upload()">Upload</button><button class="undobutton" onclick="cancelNewIncident()">Cancel</button></div>';

    return out1;


}
// If user do not want to upload a comment anymore its possible to press cancel
function cancelNewIncident(){

    var r=confirm("Are you sure you don't want to upload any comment?");// Confirmation message
    if (r == true) {
        $("#History1").empty();
        $("#Incidents").empty();
        $(logInToAddNewIncident(historyData)).appendTo("#Incidents");
        $(getHistory(historyData)).appendTo("#History1");    }


}



// uploads the new comment to the "database"
function upload() {
    var text = document.getElementById("textAreaId").value;
    // gets today date =)
    var DateToday = new Date();
    var day = DateToday.getDate();
    var month = DateToday.getMonth()+1;// this because january=0
    var year = DateToday.getFullYear();
    DateToday =year+'-'+month+'-'+day;

    if (text=="") {
        alert("You have not written anything");

    }
    else {
        var r=confirm("Are you sure you would like to upload this comment?");// Confirmation message
        if (r == true) {


            // saving the bartenders comment including his/her username and the date
            var saveComment = {"Username" : tempUser[0].usname,"timestamp" : DateToday,"comment": text};

            historyData.push(saveComment); // pushes the new comment to historyData
            tempUser.splice(0,1);
            // makes it possible to see the new comment added directly instead of the loginbox..
            // (unfortunately not in the order newest first though..
            $("#Incidents").hide();
            $("#History1").show();
            $("#History1").empty();
            $("#Incidents").empty();
            $(logInToAddNewIncident(historyData)).appendTo("#Incidents");
            $(getHistory(historyData)).appendTo("#History1");

        }

    }

}



/*
*/
