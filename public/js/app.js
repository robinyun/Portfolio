$(document).ready(function(){

  var downButton = $('.button-box-anchor');
  var push = $('.push');
  var downArrow = $('.down');

  $('.smoothscroll').on('click',function(e) {
   e.preventDefault();

   var target = this.hash,
   $target = $(target);

   $('html, body').stop().animate({
         'scrollTop': $target.offset().top
     }, 800, 'swing', function () {
         window.location.hash = target;
     });
    });

  downButton.hover(function(){
    push.toggleClass('push-hover');
    downArrow.toggleClass('down-hover');
  });

  downButton.click(function(){
    $('html, body').animate({
      scrollTop: $('#work').offset().top
    }, 500);
  });

  var img1 = [
    '../img/Fenix1.png', '../img/Fenix2.png', '../img/Fenix3.png', '../img/Fenix4.png', '../img/Fenix6.png', '../img/Fenix7.png'
  ];

  $('.box1').css('background-image', 'url('+img1[0]+')');
  $('.box1 div').text('1/'+img1.length);
  var ind = 0;
  $('.box1').click(function(){
    $(this).addClass('active');
    ind++;
    if(ind+1 > img1.length) ind=0;
    setTimeout(function(){
      $('.box1').css('background-image', 'url('+img1[ind]+')');
      $('.box1 div').text((ind+1)+'/'+img1.length);
          $('.box1').removeClass('active');
        },50);
    });

    var img2 = [
      '../img/Wedding1.png', '../img/Wedding2.png', '../img/Wedding3.png', '../img/Wedding4.png', '../img/Wedding5.png', '../img/Wedding6.png'
    ];

    $('.box2').css('background-image', 'url('+img2[0]+')');
    $('.box2 div').text('1/'+img2.length);
    var ind2 = 0;
    $('.box2').click(function(){
      $(this).addClass('active');
      ind2++;
      if(ind2+1 > img2.length) ind2=0;
      setTimeout(function(){
        $('.box2').css('background-image', 'url('+img2[ind2]+')');
        $('.box2 div').text((ind2+1)+'/'+img2.length);
            $('.box2').removeClass('active');
          },50);
      });

});
