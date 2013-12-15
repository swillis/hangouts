// HANGOUTS JS


// PAGE LOAD STATE

$('.close-nav').hide();

$('nav').hide();

$('.fancy-title').hide();

$('.log-out').hide();


// INTRO

$(window).load(function() {
  $('.fancy-title').fadeIn(500, function() {
    $('.fancy-title').fadeOut(1500, function() {
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


// sign in

$('body').on('click', '.sign-in', function() {
  $('.overlay').addClass('visible');
})

$('body').on('click', '.overlay', function() {
  var checkVisibility = $(this).hasClass('visible');
  if (checkVisibility == true) {
    $(this).removeClass('visible');
  }
});

$('.sign-in-close').click(function() {
  $('.overlay').removeClass('visible');
})

$('.sign-in-module').click(function(event){
    event.stopPropagation();
});

$('.submit-form').click(function() {
  $('.sign-in').hide();
  $('.log-out').show();
  $('.overlay').removeClass('visible');
})

$('body').on('click', '.log-out', function() {
  $('.sign-in').show();
  $(this).hide();
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

$('body').on('click', '.close-nav, .sidebar-main li a', function() {
  snapper.close('right');
  $('.close-nav').hide();
  $('.open-nav').show();
})


// flyouts

// name

$('body').on('click', '.sidebar-name', function() {
  if ($(".flyout.visible").length > 0) {
    $('.flyout').not('.description').removeClass('visible');
    $('.sidebar-main li a').not($(this)).removeClass('active');
  }
  $('.flyout.description').toggleClass( "visible" );
  $(this).toggleClass('active' );
})

// newsfeeds

$('body').on('click', '.sidebar-news', function() {
  if ($(".flyout.visible").length > 0) {
    $('.flyout').not('.news').removeClass('visible');
    $('.sidebar-main li a').not($(this)).removeClass('active');
  }
  $('.flyout.news').toggleClass( "visible" );
  $(this).toggleClass('active');
})

// gallery

$('body').on('click', '.sidebar-gallery', function() {
  if ($(".flyout.visible").length > 0) {
    $('.flyout').not('.gallery').removeClass('visible');
    $('.sidebar-main li a').not($(this)).removeClass('active');
  }
  $('.flyout.gallery').toggleClass( "visible" );
  $(this).toggleClass('active');
})

// share

$('body').on('click', '.sidebar-share', function() {
  if ($(".flyout.visible").length > 0) {
    $('.flyout').not('.share').removeClass('visible');
    $('.sidebar-main li a').not($(this)).removeClass('active');
  }
  $('.flyout.share').toggleClass( "visible" );
  $(this).toggleClass('active');
})

// contact

$('body').on('click', '.sidebar-contact', function() {
  if ($(".flyout.visible").length > 0) {
    $('.flyout').not('.contact').removeClass('visible');
    $('.sidebar-main li a').not($(this)).removeClass('active');
  }
  $('.flyout.contact').toggleClass( "visible" );
  $(this).toggleClass('active');
})

// close

$('body').on('click', '.close-button', function() {
  $(this).closest('.flyout').removeClass('visible');
  $('.sidebar-main li a').removeClass('active');
})


// like button

$('body').on('click', '.sidebar-like, .like-button', function() {
  $('.like').toggleClass('liked', 500);
})


// masonry

$(document).ready(function() {

  // Initialize Masonry
  $('#newsfeed').masonry({
    columnWidth: $('#newsfeed').width()/3,
    itemSelector: '.item',
    "gutter": 10,
    // isFitWidth: true,
    isAnimated: !Modernizr.csstransitions
  }).imagesLoaded(function() {
    $(this).masonry('reload');
  });
});


// change color

var colors = ['#fff', 'transparent'];

$.each(colors, function(i, color){
    setInterval(function(){$('.open-menu').css('color', color)}, (i+1)*4000);
});