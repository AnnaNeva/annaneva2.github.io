$(document).ready(function(){
  $('.btn1').click(function(){
    $(this).addClass('active');
    $('.btn2, .btn3, .btn4, .btn5, .btn6, .btn7, .btn8, .btn9, .btn10').removeClass('active');
    $('.first').addClass('opa');
    $('.second, .third, .fouth, .fifth, .sixth, .seventh, .eighth, .ninth, .tenth').removeClass('opa');
  })
  $('.btn2').click(function(){
    $(this).addClass('active');
    $('.btn1, .btn3, .btn4, .btn5, .btn6, .btn7, .btn8, .btn9, .btn10').removeClass('active');
    $('.second').addClass('opa');
    $('.first, .third, .fouth, .fifth, .sixth, .seventh, .eighth, .ninth, .tenth').removeClass('opa');

  })
  $('.btn3').click(function(){
    $(this).addClass('active');
    $('.btn1, .btn2, .btn4, .btn5, .btn6, .btn7, .btn8, .btn9, .btn10').removeClass('active');
    $('.third').addClass('opa');
    $('.second, .first, .fouth, .fifth, .sixth, .seventh, .eighth, .ninth, .tenth').removeClass('opa');

  })

  $('.btn4').click(function(){
    $(this).addClass('active');
    $('.btn1, .btn2, .btn3, .btn5, .btn6, .btn7, .btn8, .btn9, .btn10').removeClass('active');
    $('.fouth').addClass('opa');
    $('.second, .third, .first, .fifth, .sixth, .seventh, .eighth, .ninth, .tenth').removeClass('opa');

  })
  $('.btn5').click(function(){
    $(this).addClass('active');
    $('.btn1, .btn3, .btn4, .btn2, .btn6, .btn7, .btn8, .btn9, .btn10').removeClass('active');
    $('.fifth').addClass('opa');
    $('.second, .third, .fouth, .first, .sixth, .seventh, .eighth, .ninth, .tenth').removeClass('opa');

  })
  $('.btn6').click(function(){
    $(this).addClass('active');
    $('.btn1, .btn3, .btn4, .btn5, .btn2, .btn7, .btn8, .btn9, .btn10').removeClass('active');
    $('.sixth').addClass('opa');
    $('.second, .third, .fouth, .fifth, .first, .seventh, .eighth, .ninth, .tenth').removeClass('opa');

  })
  $('.btn7').click(function(){
    $(this).addClass('active');
    $('.btn1, .btn3, .btn4, .btn5, .btn6, .btn2, .btn8, .btn9, .btn10').removeClass('active');
    $('.seventh').addClass('opa');
    $('.second, .third, .fouth, .fifth, .sixth, .first, .eighth, .ninth, .tenth').removeClass('opa');

  })

  $('.btn8').click(function(){
    $(this).addClass('active');
    $('.btn1, .btn3, .btn4, .btn5, .btn6, .btn7, .btn2, .btn9, .btn10').removeClass('active');
    $('.eighth').addClass('opa');
    $('.second, .third, .fouth, .fifth, .sixth, .seventh, .first, .ninth, .tenth').removeClass('opa');

  })
  $('.btn9').click(function(){
    $(this).addClass('active');
    $('.btn1, .btn3, .btn4, .btn5, .btn6, .btn7, .btn8, .btn2, .btn10').removeClass('active');
    $('.ninth').addClass('opa');
    $('.second, .third, .fouth, .fifth, .sixth, .seventh, .eighth, .first, .tenth').removeClass('opa');

  })

  $('.btn10').click(function(){
    $(this).addClass('active');
    $('.btn1, .btn3, .btn4, .btn5, .btn6, .btn7, .btn8, .btn9, .btn2').removeClass('active');
    $('.tenth').addClass('opa');
    $('.second, .third, .fouth, .fifth, .sixth, .seventh, .eighth, .ninth, .first').removeClass('opa');

  })
})
