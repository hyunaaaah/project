require('../less/recommend.less')
require('../js/main');

$('.detail-button').on('click', function () {
    $('.detail-box').css('display', 'inline-block');
});

$('.perfume-list').on('click', function () {
   $('.detail-box').css('display', 'none');
});
