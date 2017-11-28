require('../less/recommend.less');
require('../js/main');

var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);
var perfumeID = params.get('id');



var selectTemplate = require('../template/detailSelect.hbs');
var brandList = require('./list/listDetail');

$('.detail-button').on('click', function () {
    $('.detail-box').css('display', 'inline-block');
    $('.detail-layer').addClass('layer');

    for (var i=0; i<brandList.brand.length; i++) {
        var brandSelect = selectTemplate(brandList.brand[i]);

        $('.detail-select.brand').append(brandSelect)
    }

    for (var i=0; i<brandList.image.length; i++) {
        var imageSelect = selectTemplate(brandList.image[i]);

        $('.detail-select.image').append(imageSelect);
    }

    for (var i=0; i<brandList.season.length; i++) {
        var seasonSelect = selectTemplate(brandList.season[i]);

        $('.detail-select.season').append(seasonSelect);
    }

    for (var i=0; i<brandList.gender.length; i++) {
        var genderSelect = selectTemplate(brandList.gender[i]);

        $('.detail-select.gender').append(genderSelect);
    }

    for (var i=0; i<brandList.type.length; i++) {
        var typeSelect = selectTemplate(brandList.type[i]);

        $('.detail-select.perfume-type').append(typeSelect);
    }

    for (var i=0; i<brandList.age.length; i++) {
        var ageSelect = selectTemplate(brandList.age[i]);

        $('.detail-select.age').append(ageSelect);
    }
});

$('.detail-layer').on('click', function () {
    $('.detail-box').css('display', 'none');
    $('.detail-select').empty();
    $('.detail-layer').removeClass('layer');
});

var perfumeListTemplate = require('../template/list.hbs');
var perfumeListImg = require('./list/perfumeLists');
var missDiorListImg = require('./list/missDiorLists');
var jadoreListImg = require('./list/jadoreLists');

function imgList() {
    for(var i=0; i<perfumeListImg.length; i++) {
        var perfumeList = perfumeListTemplate(perfumeListImg[i]);

        $('.perfume-list').append(perfumeList);
    }
}
imgList();

/*
$.ajax({
    url: '/api/perfume/' + perfumeID ,
    success: function (result) {
        console.log(result);
    }
});
*/

function initImage(model) {
    var images = model.image;
    for(var i=0; i<images.length; i++) {
        var perfumeList = perfumeListTemplate(images[i]);

        $('.perfume-list').append(perfumeList);
    }
}
//initImage();



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

