/**
 * Created by Andreas on 2015-12-07.
 */

var users = getUsers();

function validateLogin() {
        var un = document.loginForm.username.value;
        var pw = document.loginForm.password.value;
    for (var i=0; i < users.length; i++) {
        if ((un == users[i].Username) && (pw == users[i].Password)) {
			
			if (users[i].Admin == 0){
            document.loginForm.action = "custview.html";
			return True;
			}
			
			else{
				document.loginForm.action = "empview.html";
				return True;
			}
		}
		
    }
}





function getUsers() {
    return [
		 {"Firstname" : "Ervin","Lastname" : "Todd","Username" : "ervtodd","Password" : "ervtodd","Admin" : "1"},
        {"Firstname" : "Hiram","Lastname" : "Christopherson","Username" : "hirchr","Password" : "hirchr", "Admin" : "1"},
        {"Firstname" : "Jory","Lastname" : "Assies","Username" : "jorass","Password" : "jorass", "Admin" : "1"},
        {"Firstname" : "Saša","Lastname" : "Krüger","Username" : "saskru","Password" : "saskru", "Admin" : "1"},
        {"Firstname" : "Svetlana","Lastname" : "Torres","Username" : "svetor","Password" : "svetor", "Admin" : "1"},
        {"Firstname" : "Aamu","Lastname" : "Stankic","Username" : "aamsta","Password" : "aamsta", "Admin" : "0"},
        {"Firstname" : "Andrea","Lastname" : "Darzi","Username" : "anddar","Password" : "anddar", "Admin" : "0"},
        {"Firstname" : "Ângela","Lastname" : "Ková?","Username" : "ankov","Password" : "ankov", "Admin" : "0"},
        {"Firstname" : "Aquilina","Lastname" : "Lyndon","Username" : "aqulyn","Password" : "aqulyn", "Admin" : "0"},
        {"Firstname" : "Aubrey","Lastname" : "Blackwood","Username" : "aubbla","Password" : "aubbla", "Admin" : "0"},
        {"Firstname" : "Bento","Lastname" : "Faucher","Username" : "benfau","Password" : "benfau", "Admin" : "0"},
        {"Firstname" : "Branko","Lastname" : "Tamás","Username" : "bratam","Password" : "bratam", "Admin" : "0"},
        {"Firstname" : "Cezar","Lastname" : "Newman","Username" : "ceznew","Password" : "ceznew", "Admin" : "0"},
        {"Firstname" : "Danna","Lastname" : "Schermer","Username" : "dansch","Password" : "dansch", "Admin" : "0"},
        {"Firstname" : "Dido","Lastname" : "Waters","Username" : "didwat","Password" : "didwat", "Admin" : "0"},
        {"Firstname" : "Domen","Lastname" : "Olhouser","Username" : "domolh","Password" : "domolh", "Admin" : "0"},
        {"Firstname" : "Edric","Lastname" : "Augustin","Username" : "edraug","Password" : "edraug", "Admin" : "0"},
        {"Firstname" : "Einarr","Lastname" : "Yamauchi","Username" : "edraug","Password" : "einyam", "Admin" : "0"},
        {"Firstname" : "Elektra","Lastname" : "Pickle","Username" : "elepic","Password" : "elepic", "Admin" : "0"},
        {"Firstname" : "Eulàlia","Lastname" : "Coughlan","Username" : "eulcou","Password" : "eulcou", "Admin" : "0"},
        {"Firstname" : "Eustachius","Lastname" : "Gorski","Username" : "eusgor","Password" : "eusgor", "Admin" : "0"},
        {"Firstname" : "Felix","Lastname" : "Bartoš","Username" : "felbar","Password" : "felbar", "Admin" : "0"},
        {"Firstname" : "Felicia","Lastname" : "Franklin","Username" : "felfra","Password" : "felfra", "Admin" : "0"},
        {"Firstname" : "Ferdinánd","Lastname" : "Augustin","Username" : "fercrn","Password" : "fercrn", "Admin" : "0"},
        {"Firstname" : "Giacinta","Lastname" : "Mikkelsen","Username" : "giamik","Password" : "giamik", "Admin" : "0"},
        {"Firstname" : "Golnar","Lastname" : "Langley","Username" : "gollan","Password" : "gollan", "Admin" : "0"},
        {"Firstname" : "Hyram","Lastname" : "Lapointe","Username" : "hyrlap","Password" : "hyrlap", "Admin" : "0"},
        {"Firstname" : "Jacob","Lastname" : "Abbatelli","Username" : "jacabb","Password" : "jacabb", "Admin" : "0"},
        {"Firstname" : "Jancsi","Lastname" : "Heiman","Username" : "janhei","Password" : "janhei", "Admin" : "0"},
        {"Firstname" : "Jeanne","Lastname" : "Atses","Username" : "jeaats","Password" : "jeaats", "Admin" : "0"},
        {"Firstname" : "Jerry","Lastname" : "Shizuka","Username" : "jershi","Password" : "jershi", "Admin" : "0"},
        {"Firstname" : "Jove","Lastname" : "Sitz","Username" : "jovsit","Password" : "jovsit", "Admin" : "0"},
        {"Firstname" : "Karme","Lastname" : "Blythe","Username" : "karbly","Password" : "karbly", "Admin" : "0"},
        {"Firstname" : "Katrien","Lastname" : "Fabre","Username" : "katfab","Password" : "katfab", "Admin" : "0"},
        {"Firstname" : "Kaye","Lastname" : "Wang","Username" : "kaywan","Password" : "kaywan", "Admin" : "0"},
        {"Firstname" : "Kenan","Lastname" : "Olguin","Username" : "kenolg","Password" : "kenolg", "Admin" : "0"},
        {"Firstname" : "Krystyna","Lastname" : "Santiago","Username" : "krysan","Password" : "krysan", "Admin" : "0"},
        {"Firstname" : "Lara","Lastname" : "Schenck","Username" : "larsch","Password" : "larsch", "Admin" : "0"},
        {"Firstname" : "Lasse","Lastname" : "Nicholson","Username" : "lasnic","Password" : "lasnic", "Admin" : "0"},
        {"Firstname" : "Liam","Lastname" : "Traverso","Username" : "liatra","Password" : "liatra", "Admin" : "0"},
        {"Firstname" : "Livianus","Lastname" : "Zhao","Username" : "livzha","Password" : "livzha", "Admin" : "0"},
        {"Firstname" : "Maiken","Lastname" : "Honda","Username" : "maihon","Password" : "maihon", "Admin" : "0"},
        {"Firstname" : "Mariana","Lastname" : "Pugliese","Username" : "marpug","Password" : "marpug", "Admin" : "0"},
        {"Firstname" : "Marin","Lastname" : "Stieber","Username" : "marsti","Password" : "marsti", "Admin" : "0"},
        {"Firstname" : "Molle","Lastname" : "Babi?","Username" : "molbab","Password" : "molbab", "Admin" : "0"},
        {"Firstname" : "Muhammed","Lastname" : "Toft","Username" : "muhtof","Password" : "muhtof", "Admin" : "0"},
        {"Firstname" : "Nika","Lastname" : "Proulx","Username" : "nikpro","Password" : "nikpro", "Admin" : "0"},
        {"Firstname" : "Oliver","Lastname" : "Slusarski","Username" : "olislu","Password" : "olislu", "Admin" : "0"},
        {"Firstname" : "Oluwakanyinsola","Lastname" : "Braun","Username" : "olubra","Password" : "olubra", "Admin" : "0"},
        {"Firstname" : "Oluwatoyin","Lastname" : "Drake","Username" : "oludra","Password" : "oludra", "Admin" : "0"},
        {"Firstname" : "Orabela","Lastname" : "Panders","Username" : "orapan","Password" : "orapan", "Admin" : "0"},
        {"Firstname" : "Paula","Lastname" : "Aafjes","Username" : "pauaaf","Password" : "pauaaf", "Admin" : "0"},
        {"Firstname" : "Pompeius","Lastname" : "Graner","Username" : "pomgra","Password" : "pomgra", "Admin" : "0"},
        {"Firstname" : "Prabhakar","Lastname" : "Bartos","Username" : "prabar","Password" : "prabar", "Admin" : "0"},
        {"Firstname" : "Régulo","Lastname" : "Westerberg","Username" : "rewes","Password" : "rewes", "Admin" : "0"},
        {"Firstname" : "Schwanhild","Lastname" : "Joubert","Username" : "schjou","Password" : "schjou", "Admin" : "0"},
        {"Firstname" : "Sharma","Lastname" : "Pet?fi","Username" : "shapet","Password" : "shapet", "Admin" : "0"},
        {"Firstname" : "S?d?ka","Lastname" : "Van","Username" : "sivan","Password" : "sivan", "Admin" : "0"},
        {"Firstname" : "Stefan","Lastname" : "Bernard","Username" : "steber","Password" : "steber", "Admin" : "0"},
        {"Firstname" : "Sulis?aw","Lastname" : "Pender","Username" : "sulpen","Password" : "sulpen", "Admin" : "0"},
        {"Firstname" : "Sulayman","Lastname" : "Street","Username" : "sulstr","Password" : "sulstr", "Admin" : "0"},
        {"Firstname" : "Symeonu","Lastname" : "Zimmermann","Username" : "symzim","Password" : "symzim", "Admin" : "0"},
        {"Firstname" : "Teodora","Lastname" : "Jensen","Username" : "teojen","Password" : "teojen", "Admin" : "0"},
        {"Firstname" : "Tófa","Lastname" : "Heinrich","Username" : "tohei","Password" : "tohei", "Admin" : "0"},
        {"Firstname" : "Valeria","Lastname" : "Pagani","Username" : "valpag","Password" : "valpag", "Admin" : "0"},
        {"Firstname" : "Yevpraksiya","Lastname" : "Owens","Username" : "yevowe","Password" : "yevowe", "Admin" : "0"},
        {"Firstname" : "Zuleika","Lastname" : "Gorecki","Username" : "zulgor","Password" : "zulgor", "Admin" : "0"}
    ];
}
