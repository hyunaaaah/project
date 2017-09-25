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


                if (mainBoxID === 'cool') {
                    $('#warm').css('background-color', subBoxColorList[0].color);
                    $('#relax').css('background-color', subBoxColorList[1].color);
                    $('#sweet').css('background-color', subBoxColorList[2].color);
                    $('#citrus').css('background-color', subBoxColorList[3].color);
                    $('#mature').css('background-color', subBoxColorList[4].color);
                    $('#sexy').css('background-color', subBoxColorList[5].color);
                    $('#heavy').css('background-color', subBoxColorList[6].color);
                }
                else if (mainBoxID === 'warm') {
                    $('#cool').css('background-color', subBoxColorList[0].color);
                    $('#relax').css('background-color', subBoxColorList[1].color);
                    $('#sweet').css('background-color', subBoxColorList[2].color);
                    $('#citrus').css('background-color', subBoxColorList[3].color);
                    $('#mature').css('background-color', subBoxColorList[4].color);
                    $('#sexy').css('background-color', subBoxColorList[5].color);
                    $('#heavy').css('background-color', subBoxColorList[6].color);
                }
                else if (mainBoxID === 'relax') {
                    $('#cool').css('background-color', subBoxColorList[0].color);
                    $('#warm').css('background-color', subBoxColorList[1].color);
                    $('#sweet').css('background-color', subBoxColorList[2].color);
                    $('#citrus').css('background-color', subBoxColorList[3].color);
                    $('#mature').css('background-color', subBoxColorList[4].color);
                    $('#sexy').css('background-color', subBoxColorList[5].color);
                    $('#heavy').css('background-color', subBoxColorList[6].color);
                }
                else if (mainBoxID === 'sweet') {
                    $('#cool').css('background-color', subBoxColorList[0].color);
                    $('#warm').css('background-color', subBoxColorList[1].color);
                    $('#relax').css('background-color', subBoxColorList[2].color);
                    $('#citrus').css('background-color', subBoxColorList[3].color);
                    $('#mature').css('background-color', subBoxColorList[4].color);
                    $('#sexy').css('background-color', subBoxColorList[5].color);
                    $('#heavy').css('background-color', subBoxColorList[6].color);
                }
                else if (mainBoxID === 'citrus') {
                    $('#cool').css('background-color', subBoxColorList[0].color);
                    $('#warm').css('background-color', subBoxColorList[1].color);
                    $('#relax').css('background-color', subBoxColorList[2].color);
                    $('#sweet').css('background-color', subBoxColorList[3].color);
                    $('#mature').css('background-color', subBoxColorList[4].color);
                    $('#sexy').css('background-color', subBoxColorList[5].color);
                    $('#heavy').css('background-color', subBoxColorList[6].color);
                }
                else if (mainBoxID === 'mature') {
                    $('#cool').css('background-color', subBoxColorList[0].color);
                    $('#warm').css('background-color', subBoxColorList[1].color);
                    $('#relax').css('background-color', subBoxColorList[2].color);
                    $('#sweet').css('background-color', subBoxColorList[3].color);
                    $('#citrus').css('background-color', subBoxColorList[4].color);
                    $('#sexy').css('background-color', subBoxColorList[5].color);
                    $('#heavy').css('background-color', subBoxColorList[6].color);
                }
                else if (mainBoxID === 'sexy') {
                    $('#cool').css('background-color', subBoxColorList[0].color);
                    $('#warm').css('background-color', subBoxColorList[1].color);
                    $('#relax').css('background-color', subBoxColorList[2].color);
                    $('#sweet').css('background-color', subBoxColorList[3].color);
                    $('#citrus').css('background-color', subBoxColorList[4].color);
                    $('#mature').css('background-color', subBoxColorList[5].color);
                    $('#heavy').css('background-color', subBoxColorList[6].color);
                }
                else if (mainBoxID === 'heavy') {
                    $('#cool').css('background-color', subBoxColorList[0].color);
                    $('#warm').css('background-color', subBoxColorList[1].color);
                    $('#relax').css('background-color', subBoxColorList[2].color);
                    $('#sweet').css('background-color', subBoxColorList[3].color);
                    $('#citrus').css('background-color', subBoxColorList[4].color);
                    $('#mature').css('background-color', subBoxColorList[5].color);
                    $('#sexy').css('background-color', subBoxColorList[6].color);
                }
            }
        }
    });

    var defaultColor = require('./color/defaultColor');
    $('.choice').on('mouseout', function () {
        $(this).find('.keyword').hide();

        $('.choice').css({width: '125px', height: '480px'});
        $('.main-word').attr('style', 'color:#9e9e9e');

        $('#cool').css('background-color', defaultColor.cool);
        $('#warm').css('background-color', defaultColor.warm);
        $('#relax').css('background-color', defaultColor.relax);
        $('#sweet').css('background-color', defaultColor.sweet);
        $('#citrus').css('background-color', defaultColor.citrus);
        $('#mature').css('background-color', defaultColor.mature);
        $('#sexy').css('background-color', defaultColor.sexy);
        $('#heavy').css('background-color', defaultColor.heavy);

    });
}

perfumeColor();
