/**
 * Created by Andreas on 2015-12-07.
 */


function validateLogin() {
	var test=0;
        var un = document.loginForm.username.value;
        var pw = document.loginForm.password.value;
    for (var i=0; i < users.length; i++) {
        if ((un == users[i].Username) && (pw == users[i].Password)) {
			
			if (users[i].Admin == 0){
				document.loginForm.action = "custview.html";
				test=1;
				document.cookie="usName="+un;
				return True;
			}
			
			else{
				document.loginForm.action = "empview.html";
				test=1;
				document.cookie="usName="+un;
				return True;
			}
		}
		
    }
    
    	if (test== 0){
		alert("wrong username or password");
	}
}
