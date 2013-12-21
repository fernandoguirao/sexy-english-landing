$('.scroll-m').click(function(){
  $('.content-13').animate({'bottom':"0px"});
  $('.header-18-section').animate({"padding-bottom":"200px"});
});

function gup(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return results[1];
}

if(gup('suscribe')=="true"){
  $('#modal-sent').modal('show');
}

if(gup('suscribed')=="true"){
  $('#modal-suscribed').modal('show');
}

$('#mc-embedded-subscribe-form').submit(function(e) 
{
    if( $('#theinput').val().length == 0 ) {
        e.preventDefault();
        alert('Debes introducir tu email para suscribirte');
    }
});

$("#video_background").bind('playing',function() {
  $('.grad-back').css({"z-index":"-101"});
});