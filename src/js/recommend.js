require('../less/recommend.less')
require('../js/main');

$('.detail-button').on('click', function () {
    openDetail();
});

$('.detail-layer').on('click', function () {
    closeDetail();
});

function openDetail() {
    $('.detail-layer').addClass('layer');

    $('.detail-box').css('display', 'inline-block');
}

function closeDetail() {
    $('.detail-layer').removeClass('layer');
    $('.detail-box').css('display', 'none');
}