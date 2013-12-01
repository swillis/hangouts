// HANGOUTS JS


// PAGE LOAD STATE

$('.close-nav').hide();

$('nav').hide();

$('.fancy-title').hide();


// INTRO

$(window).load(function() {
  $('.fancy-title').fadeIn(500, function() {
    $('.fancy-title').delay(1200).fadeOut(500, function() {
      $('nav').fadeIn(500);
    });
  });
})


// CENTER FANCY TITLE

$(function() {
  var headHeight = $('.fancy-title').height()/2;
  var windowHeight = $(window).height();
  var halfWay = windowHeight/2;
  var navHeight = $('nav').height();
  $('.fancy-title').css({
    'padding-top': halfWay - headHeight - navHeight
  })
})

$(window).resize(function() {
  var headHeight = $('.fancy-title').height()/2;
  var windowHeight = $(window).height();
  var halfWay = windowHeight/2;
  var navHeight = $('nav').height();
  $('.fancy-title').css({
    'padding-top': halfWay - headHeight - navHeight
  })
})


// SUPERSLIDES

$(document).ready(function() {
  $('#slides').superslides({
    slide_easing: 'easeInOutCubic',
    slide_speed: 800,
    pagination: true,
    hashchange: true,
    scrollable: true
  });
});


// SNAPPER SIDEBAR

var snapper = new Snap({
  element: document.getElementById('content'),
  disable: 'left',
  tapToClose: false
});

$('body').on('click', '.open-nav', function() {
  snapper.open('right');
  $('.open-nav').hide();
  $('.close-nav').show();
})

$('body').on('click', '.close-nav', function() {
  snapper.close('right');
  $('.close-nav').hide();
  $('.open-nav').show();
})


// FLYOUTS

$('body').on('click', '.sidebar li a', function() {
  $('.flyout').animate({'bottom' : '-600'}, 200);
  $('.venue-name').addClass('active');
})
