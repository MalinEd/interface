$(document).ready(function() {

	$(".tab_content").hide();
	$(".tab_content:first").show(); 

	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn(); 
	});
});

// user is able to see the current li tab in for example my page
function checklist(letter, id)
{
	$(letter).removeClass("current" );
	$("#"+id).addClass( "current" );
}

// removes value from cookie
function logout() {

	document.cookie="usName=";

}
