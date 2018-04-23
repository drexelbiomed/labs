var jquery = require('../vendor/jquery/dist/jquery.js');
global.$ = global.jQuery = jquery;

require('../vendor/foundation/js/foundation.js');
require('../vendor/bxslider-4/jquery.bxslider.js');

// Init Foundation 5
$(document).foundation();

// Init bxslider
$(document).ready(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    auto: true,
    pause: 5000,
    autoHover: true
  });
});

