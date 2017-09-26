require('bootstrap');
require('../less/main.less');

function perfumeColor() {
    var colorList = require('./color/perfumeColor');

    $('.choice').on('mouseover', function () {
        var boxID = $(this).attr('id');
        $(this).css({width: '500px', height: '500px'});
        $('.choice').not($(this)).css('width', '70px');

        for (var i=0; i<colorList.length; i++) {
            var mainBoxID = colorList[i].mainColorID;
            if (mainBoxID === boxID) {
                $(this).css('background-color', colorList[i].mainColor);
                $('.main-word').attr('style', 'color:' + colorList[i].mainColor);
                $(this).find('.keyword').show();

                var subBoxColorList = colorList[i].subColor;
                var otherBox = $('.choice').not($(this));

                for(var j=0; j<subBoxColorList.length; j++) {
                    $(otherBox[j]).css('background-color', subBoxColorList[j].color);
                }
            }
        }
    });

    var defaultColor = require('./color/defaultColor');
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
