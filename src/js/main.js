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

$('.logo').on('click', function () {
    location.href = './';
});

$('.recommend').on('click', function () {
   location.href = './recommend.html';
});

$('.about').on('click', function () {
   location.href = './about.html';
});