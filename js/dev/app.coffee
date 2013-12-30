$ ->
  timer = undefined
  delay = 5500
  functionTimeOut = (a) ->
    timer = setTimeout(->
      $('.slide-02').removeClass('oculto')
      $('.slide-01').addClass('oculto')
      functionTimeOut2()
    , delay)
  functionTimeOut2 = (a) ->
    timer = setTimeout(->
      $('.slide-03').removeClass('oculto')
      $('.slide-02').addClass('oculto')
      functionTimeOut3()
    , delay)
  functionTimeOut3 = (a) ->
    timer = setTimeout(->
      $('.slide-01').removeClass('oculto')
      $('.slide-03').addClass('oculto')
      functionTimeOut()
    , delay)
  
  goBrowser = () ->
    $('.browser').removeClass('oculto')
  
  functionTimeOut()
  goBrowser()