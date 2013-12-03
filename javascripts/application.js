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


// flyouts

// name

$('body').on('click', '.sidebar-name', function() {
  $('.flyout.description').toggleClass( "visible" );
  $(this).toggleClass('active');
})

// gallery

$('body').on('click', '.sidebar-gallery', function() {
  $('.flyout.gallery').toggleClass( "visible" );
  $(this).toggleClass('active');
})

// share

$('body').on('click', '.sidebar-share', function() {
  $('.flyout.share').toggleClass( "visible" );
  $(this).toggleClass('active');
})

// contact

$('body').on('click', '.sidebar-contact', function() {
  $('.flyout.contact').toggleClass( "visible" );
  $(this).toggleClass('active');
})