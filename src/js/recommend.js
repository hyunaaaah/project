require('../less/recommend.less');
require('../js/main');

var perfumeListTemplate = require('../template/list.hbs');
var perfumeListImg = require('../js/list/listIMG');

var selectBrandTemplate = require('../template/detailSelect.hbs');
var brandList = require('../js/list/listBrand');

$('.detail-button').on('click', function () {
    $('.detail-box').css('display', 'inline-block');
    $('.detail-layer').addClass('layer');

    for (var i=0; i<brandList.brand.length; i++) {
        var brandSelect = selectBrandTemplate(brandList.brand[i]);

        console.log(brandSelect);
    }
});

$('.detail-layer').on('click', function () {
    $('.detail-box').css('display', 'none');

});


function imgList() {
    for(var i=0; i<perfumeListImg.length; i++) {
        var perfumeList = perfumeListTemplate(perfumeListImg[i]);

        $('.perfume-list').append(perfumeList);
    }
}
imgList();

$('.perfume-info').on('click', function () {
    var clickIndex = $(this).index();

    $('.detail-view').addClass('info-detail-view');
    var perfumeIntro = require('../template/introduce.hbs');
    var color = perfumeListImg[clickIndex].color;
    var detail = perfumeIntro(perfumeListImg[clickIndex]);

    $('.detail-view').append(detail);

    $('.select-detail-view').css('background-color', color);
    $('.perfume-list').css('opacity', '0.5');
});

$('.detail-view').on('click', function () {
    $(this).removeClass('info-detail-view');
    var perfumeIntro = require('../template/introduce.hbs');
    $('.detail-view').empty();

    $('.perfume-list').css('opacity', '1.0');
});
