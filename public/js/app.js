$(document).ready(function(){
  var navOpen = $('#open-navigation');
  var menu = $('.stackedMenu');
  var menuList = $('.nav-menu-list li a');
  var downButton = $('.button-box-anchor');
  var push = $('.push');
  var downArrow = $('.down');

  menu.click(function(){
    navOpen.toggleClass('show');
    $('body').toggleClass('overlay');
    $('section').toggleClass('blur');
    var open = navOpen.hasClass('show');
  });
  
  $('.smoothscroll').on('click',function (e) {
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

  $('.content1, .box1').css('background-image', 'url('+img1[0]+')');
  $('.box1 div').text('1/'+img1.length);
  var ind = 0;
  $('.box1').click(function(){
    $(this).addClass('active');
    ind++;
    if(ind+1 > img1.length) ind=0;
    setTimeout(function(){
      $('.box1').css('background-image', 'url('+img1[ind]+')');
      $('.box1 div').text((ind+1)+'/'+img1.length);
      setTimeout(function(){
        $('.content1').css('background-image','url('+img1[ind]+')');
        setTimeout(function(){
          $('.box1').removeClass('active');
        },50);
      },550);
    });
  });
});
