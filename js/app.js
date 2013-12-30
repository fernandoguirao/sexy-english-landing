(function() {
  $(function() {
    var delay, functionTimeOut, functionTimeOut2, functionTimeOut3, goBrowser, timer;
    timer = void 0;
    delay = 5500;
    functionTimeOut = function(a) {
      return timer = setTimeout(function() {
        $('.slide-02').removeClass('oculto');
        $('.slide-01').addClass('oculto');
        return functionTimeOut2();
      }, delay);
    };
    functionTimeOut2 = function(a) {
      return timer = setTimeout(function() {
        $('.slide-03').removeClass('oculto');
        $('.slide-02').addClass('oculto');
        return functionTimeOut3();
      }, delay);
    };
    functionTimeOut3 = function(a) {
      return timer = setTimeout(function() {
        $('.slide-01').removeClass('oculto');
        $('.slide-03').addClass('oculto');
        return functionTimeOut();
      }, delay);
    };
    goBrowser = function() {
      return $('.browser').removeClass('oculto');
    };
    functionTimeOut();
    return goBrowser();
  });

}).call(this);
