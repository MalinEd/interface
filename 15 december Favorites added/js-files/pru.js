function deleteRow(id){
	$( "div" ).remove(id);
}

function addRow(){
	$("#RowsContainer").append('<div class="alert alert-info alert-dismissable"><button type="button" id="button1" class="close" data-dismiss="alert" aria-hidden="true"><i class="fa fa-trash-o"></i></button>Hello</div>');
}