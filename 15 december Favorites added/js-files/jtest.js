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

// user can see the current tab used in my page and beverages
function checklist(letter, id)
{
	$(letter).removeClass("current" );
	$("#"+id).addClass( "current" );
}

function logout() {

	document.cookie="usName=";

}