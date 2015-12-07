$(document).ready(function() {

                $('#wrapper').dialog({
                    autoOpen: false,
                    title: 'Basic Dialog'
                });
                $('#opener').click(function() {
                    $('#wrapper').dialog('open');
//                  return false;
                });
            });
