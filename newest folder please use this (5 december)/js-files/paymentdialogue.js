$(document).ready(function() {

                $('#wrapper').dialog({
                    autoOpen: false,
                    title: 'Are you sure?'
                });
                $('#opener').click(function() {
                    $('#wrapper').dialog('open');
//                  return false;
                });
            });
