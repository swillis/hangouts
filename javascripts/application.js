// HANGOUTS JS


// PAGE LOAD STATE

$('.close-nav').hide();


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
