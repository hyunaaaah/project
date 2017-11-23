require('bootstrap');
require('../less/main.less');


function perfumeColor() {
    var colorList = require('./color/perfumeColor');
    var defaultColor = require('./color/defaultColor');

    $('.choice').on('mouseover', function () {
        $(this).css({width: '500px', height: '500px'});
        $('.choice').not($(this)).css('width', '70px');

        for (var i=0; i<colorList.length; i++) {
            var mainBoxID = colorList[i].mainColorID;
            var boxID = $(this).attr('id');

            if (mainBoxID === boxID) {
                $(this).find('.keyword').show();
                $(this).css('background-color', colorList[i].mainColor);
                $('.main-word').attr('style', 'color:' + colorList[i].mainColor);

                var subBoxColorList = colorList[i].subColor;
                for(var j=0; j<subBoxColorList.length; j++) {
                    var otherBox = $('.choice').not($(this));
                    $(otherBox[j]).css('background-color', subBoxColorList[j].color);
                }
            }
        }
    });

    $('.choice').on('mouseout', function () {
        $(this).find('.keyword').hide();
        $('.choice').css({width: '125px', height: '480px'});
        $('.main-word').attr('style', 'color:#9e9e9e');

        for (var i=0; i<colorList.length; i++) {
            var mainBoxID = colorList[i].mainColorID;
            $('#' + mainBoxID).css('background-color', defaultColor[mainBoxID]);
        }
    });
}

perfumeColor();

/*
$('.choice').on('click', function () {
    location.href = './recommend.html';
});
*/

$('.choice').on('click', function () {
   console.log($(this).attr('id'));
});
// id 마다 다른 향수 조회 창이 나오도록하기

$('.logo').on('click', function () {
    location.href = './';
});

$('.recommend').on('click', function () {
    location.href = './recommend.html';
});

$('.about').on('click', function () {
    location.href = './info.html';
});

$('.login').on('click', function () {
    location.href = './login.html';
});