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


$('.perfume-info').on('click', function () {
    $('.detail-view').addClass('info-detail-view');
    var perfumeIntro = require('../template/introduce.hbs');
    $('.detail-view').append(perfumeIntro);

    $('.perfume-list').css('opacity', '0.5');
});

$('.detail-view').on('click', function () {
    $(this).removeClass('info-detail-view');
    var perfumeIntro = require('../template/introduce.hbs');
    $('.detail-view').empty();

    $('.perfume-list').css('opacity', '1.0');
});
