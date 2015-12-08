/**
 * Created by Andreas on 2015-12-07.
 */

var admins = getAdmins();
var customers = getUsers();

function validateLogin() {
        var un = document.loginForm.username.value;
        var pw = document.loginForm.password.value;
    for (var i=0; i<customers.length; i++) {
        if ((un == customers[i].Username) && (pw == customers[i].Password)) {
            document.loginForm.action = "custview.html";
            return true;
        }
        else if ((un == admins[i].Username) && (pw == admins[i].Password)) {
            document.loginForm.action = "empview.html";
            return true;
        }
        else {
            alert("Login was unseccesful, please check your username and password. If the problem remains please contact the bartender to check your credit")
        }
    }
}

function getAdmins() {
    return [
        {"Firstname" : "Ervin","Lastname" : "Todd","Username" : "ervtodd","Password" : "ervtodd"},
        {"Firstname" : "Hiram","Lastname" : "Christopherson","Username" : "hirchr","Password" : "hirchr"},
        {"Firstname" : "Jory","Lastname" : "Assies","Username" : "jorass","Password" : "jorass"},
        {"Firstname" : "Saša","Lastname" : "Krüger","Username" : "saskru","Password" : "saskru"},
        {"Firstname" : "Svetlana","Lastname" : "Torres","Username" : "svetor","Password" : "svetor"}
    ];
}

function getUsers() {
    return [
        {"Firstname" : "Aamu","Lastname" : "Stankic","Username" : "aamsta","Password" : "aamsta"},
        {"Firstname" : "Andrea","Lastname" : "Darzi","Username" : "anddar","Password" : "anddar"},
        {"Firstname" : "Ângela","Lastname" : "Ková?","Username" : "ankov","Password" : "ankov"},
        {"Firstname" : "Aquilina","Lastname" : "Lyndon","Username" : "aqulyn","Password" : "aqulyn"},
        {"Firstname" : "Aubrey","Lastname" : "Blackwood","Username" : "aubbla","Password" : "aubbla"},
        {"Firstname" : "Bento","Lastname" : "Faucher","Username" : "benfau","Password" : "benfau"},
        {"Firstname" : "Branko","Lastname" : "Tamás","Username" : "bratam","Password" : "bratam"},
        {"Firstname" : "Cezar","Lastname" : "Newman","Username" : "ceznew","Password" : "ceznew"},
        {"Firstname" : "Danna","Lastname" : "Schermer","Username" : "dansch","Password" : "dansch"},
        {"Firstname" : "Dido","Lastname" : "Waters","Username" : "didwat","Password" : "didwat"},
        {"Firstname" : "Domen","Lastname" : "Olhouser","Username" : "domolh","Password" : "domolh"},
        {"Firstname" : "Edric","Lastname" : "Augustin","Username" : "edraug","Password" : "edraug"},
        {"Firstname" : "Einarr","Lastname" : "Yamauchi","Username" : "edraug","Password" : "einyam"},
        {"Firstname" : "Elektra","Lastname" : "Pickle","Username" : "elepic","Password" : "elepic"},
        {"Firstname" : "Eulàlia","Lastname" : "Coughlan","Username" : "eulcou","Password" : "eulcou"},
        {"Firstname" : "Eustachius","Lastname" : "Gorski","Username" : "eusgor","Password" : "eusgor"},
        {"Firstname" : "Felix","Lastname" : "Bartoš","Username" : "felbar","Password" : "felbar"},
        {"Firstname" : "Felicia","Lastname" : "Franklin","Username" : "felfra","Password" : "felfra"},
        {"Firstname" : "Ferdinánd","Lastname" : "Augustin","Username" : "fercrn","Password" : "fercrn"},
        {"Firstname" : "Giacinta","Lastname" : "Mikkelsen","Username" : "giamik","Password" : "giamik"},
        {"Firstname" : "Golnar","Lastname" : "Langley","Username" : "gollan","Password" : "gollan"},
        {"Firstname" : "Hyram","Lastname" : "Lapointe","Username" : "hyrlap","Password" : "hyrlap"},
        {"Firstname" : "Jacob","Lastname" : "Abbatelli","Username" : "jacabb","Password" : "jacabb"},
        {"Firstname" : "Jancsi","Lastname" : "Heiman","Username" : "janhei","Password" : "janhei"},
        {"Firstname" : "Jeanne","Lastname" : "Atses","Username" : "jeaats","Password" : "jeaats"},
        {"Firstname" : "Jerry","Lastname" : "Shizuka","Username" : "jershi","Password" : "jershi"},
        {"Firstname" : "Jove","Lastname" : "Sitz","Username" : "jovsit","Password" : "jovsit"},
        {"Firstname" : "Karme","Lastname" : "Blythe","Username" : "karbly","Password" : "karbly"},
        {"Firstname" : "Katrien","Lastname" : "Fabre","Username" : "katfab","Password" : "katfab"},
        {"Firstname" : "Kaye","Lastname" : "Wang","Username" : "kaywan","Password" : "kaywan"},
        {"Firstname" : "Kenan","Lastname" : "Olguin","Username" : "kenolg","Password" : "kenolg"},
        {"Firstname" : "Krystyna","Lastname" : "Santiago","Username" : "krysan","Password" : "krysan"},
        {"Firstname" : "Lara","Lastname" : "Schenck","Username" : "larsch","Password" : "larsch"},
        {"Firstname" : "Lasse","Lastname" : "Nicholson","Username" : "lasnic","Password" : "lasnic"},
        {"Firstname" : "Liam","Lastname" : "Traverso","Username" : "liatra","Password" : "liatra"},
        {"Firstname" : "Livianus","Lastname" : "Zhao","Username" : "livzha","Password" : "livzha"},
        {"Firstname" : "Maiken","Lastname" : "Honda","Username" : "maihon","Password" : "maihon"},
        {"Firstname" : "Mariana","Lastname" : "Pugliese","Username" : "marpug","Password" : "marpug"},
        {"Firstname" : "Marin","Lastname" : "Stieber","Username" : "marsti","Password" : "marsti"},
        {"Firstname" : "Molle","Lastname" : "Babi?","Username" : "molbab","Password" : "molbab"},
        {"Firstname" : "Muhammed","Lastname" : "Toft","Username" : "muhtof","Password" : "muhtof"},
        {"Firstname" : "Nika","Lastname" : "Proulx","Username" : "nikpro","Password" : "nikpro"}
        {"Firstname" : "Oliver","Lastname" : "Slusarski","Username" : "olislu","Password" : "olislu"},
        {"Firstname" : "Oluwakanyinsola","Lastname" : "Braun","Username" : "olubra","Password" : "olubra"},
        {"Firstname" : "Oluwatoyin","Lastname" : "Drake","Username" : "oludra","Password" : "oludra"},
        {"Firstname" : "Orabela","Lastname" : "Panders","Username" : "orapan","Password" : "orapan"},
        {"Firstname" : "Paula","Lastname" : "Aafjes","Username" : "pauaaf","Password" : "pauaaf"},
        {"Firstname" : "Pompeius","Lastname" : "Graner","Username" : "pomgra","Password" : "pomgra"},
        {"Firstname" : "Prabhakar","Lastname" : "Bartos","Username" : "prabar","Password" : "prabar"},
        {"Firstname" : "Régulo","Lastname" : "Westerberg","Username" : "rewes","Password" : "rewes"},
        {"Firstname" : "Schwanhild","Lastname" : "Joubert","Username" : "schjou","Password" : "schjou"},
        {"Firstname" : "Sharma","Lastname" : "Pet?fi","Username" : "shapet","Password" : "shapet"},
        {"Firstname" : "S?d?ka","Lastname" : "Van","Username" : "sivan","Password" : "sivan"},
        {"Firstname" : "Stefan","Lastname" : "Bernard","Username" : "steber","Password" : "steber"},
        {"Firstname" : "Sulis?aw","Lastname" : "Pender","Username" : "sulpen","Password" : "sulpen"},
        {"Firstname" : "Sulayman","Lastname" : "Street","Username" : "sulstr","Password" : "sulstr"},
        {"Firstname" : "Symeonu","Lastname" : "Zimmermann","Username" : "symzim","Password" : "symzim"},
        {"Firstname" : "Teodora","Lastname" : "Jensen","Username" : "teojen","Password" : "teojen"},
        {"Firstname" : "Tófa","Lastname" : "Heinrich","Username" : "tohei","Password" : "tohei"},
        {"Firstname" : "Valeria","Lastname" : "Pagani","Username" : "valpag","Password" : "valpag"},
        {"Firstname" : "Yevpraksiya","Lastname" : "Owens","Username" : "yevowe","Password" : "yevowe"},
        {"Firstname" : "Zuleika","Lastname" : "Gorecki","Username" : "zulgor","Password" : "zulgor"},
    ];
}