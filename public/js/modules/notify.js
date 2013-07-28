/*
 Notifications
 */

define(['jquery','libs/jquery.noty','libs/noty/inline' ,'libs/noty/theme','libs/noty/bottomLeft','libs/noty/bottomRight','libs/noty/bottomLeft','libs/noty/bottom'], function($){ 

    $.noty.defaults.timeout = 20000;

    window.notify = function(msg, type){
        return noty({
            layout : 'bottom',
            type : type || 'alert',
            text : msg || 'Some notification!'
        });
    }


    /*--------------------------------/
            Attach Bootstrapers
    /--------------------------------*/

    // Link Helper
    var link_to = function(link){ return "<a href=\"" + link + "\" target=\"_blank\" >" + link + "</a>"; }

    if( Settings.debug ) {
        // oh my document!!!
        $(document)

        // Log sending Ajax reqests
        .ajaxSend(function(e, jx, settings){

            var text = "<b>" + settings.type + ": </b> : " + link_to( settings.url ), link = link_to(settings.url),

                n1 = notify(text);

            // Update on Request complete
            jx

            .done(function(data){
                if( data && data.success === false) {
                    n1.setText( text + '<br><b>Error</b>: ' + data.message ).setType('error');
                    // n1.setText( text + '<br><b>Completed</b> : ' + url );
                } else {
                    n1.setText( text + '<br><b>Completed</b> : ' + link ).setType('success');
                    setTimeout(n1.close, 4000);
                }
            })

            // Ajax not completed
            .error(function(data){
                var data = $.parseJSON(data.responseText), error = data && data.error && data.error.message || "Some error!";
                n1.setText( text + '<br><b>Error</b>: ' + error ).setType('error');
            });
        })

        .ajaxStop(function(e, jx, settings){
            console.log('stop', settings);
        });
    }

    return notify;
});