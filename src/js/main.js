require('bootstrap');
require('../less/main.less');

function mainPageColor() {
    $('.choice').on('mouseover', function () {
        var boxID = $(this).attr('id');

        if (boxID === 'cool') {
            $(this).find('.keyword').show();

            $(this).attr('style', 'background-color:#DAF1EF; width: 500px; height:500px');
            $('.main-word').attr('style', 'color:#DAF1EF');

            $('#warm').attr('style', 'background-color:#D5ECEA; width: 70px');
            $('#relax').attr('style', 'background-color:#CFE5E3; width: 70px');
            $('#sweet').attr('style', 'background-color:#C7DCDA; width: 70px');
            $('#citrus').attr('style', 'background-color:#B3C6C4; width: 70px');
            $('#mature').attr('style', 'background-color:#ABBDBB; width: 70px');
            $('#sexy').attr('style', 'background-color:#92A1A0; width: 70px');
            $('#heavy').attr('style', 'background-color:#7D8A89; width: 70px');
        }
        else if (boxID === 'warm') {
            $(this).find('.keyword').show();


            $(this).attr('style', 'background-color:#E4D8BE; width: 500px; height:500px');
            $('.main-word').attr('style', 'color:#E4D8BE');

            $('#cool').attr('style', 'background-color:#EEE1C6; width: 70px');
            $('#relax').attr('style', 'background-color:#DDD1B8; width: 70px');
            $('#sweet').attr('style', 'background-color:#D2C7AF; width: 70px');
            $('#citrus').attr('style', 'background-color:#CFC4AD; width: 70px');
            $('#mature').attr('style', 'background-color:#C1B8A1; width: 70px');
            $('#sexy').attr('style', 'background-color:#B0A693; width: 70px');
            $('#heavy').attr('style', 'background-color:#A89F8C; width: 70px');
        }
        else if (boxID === 'relax') {
            $(this).find('.keyword').show();

            $(this).attr('style', 'background-color:#B57581; width: 500px; height:500px');
            $('.main-word').attr('style', 'color:#B57581');

            $('#cool').attr('style', 'background-color:#CB8390; width: 70px');
            $('#warm').attr('style', 'background-color:#C17D8A; width: 70px');
            $('#sweet').attr('style', 'background-color:#AB6F7A; width: 70px');
            $('#citrus').attr('style', 'background-color:#A36974; width: 70px');
            $('#mature').attr('style', 'background-color:#935F69; width: 70px');
            $('#sexy').attr('style', 'background-color:#83555D; width: 70px');
            $('#heavy').attr('style', 'background-color:#7D5159; width: 70px');
        }
        else if (boxID === 'sweet') {
            $(this).find('.keyword').show();

            $(this).attr('style', 'background-color:#B9B2DB; width: 500px; height:500px');
            $('.main-word').attr('style', 'color:#B9B2DB');

            $('#cool').attr('style', 'background-color:#D2CAF9; width: 70px');
            $('#warm').attr('style', 'background-color:#CEC6F4; width: 70px');
            $('#relax').attr('style', 'background-color:#C7BFEC; width: 70px');
            $('#citrus').attr('style', 'background-color:#A099BD; width: 70px');
            $('#mature').attr('style', 'background-color:#9993B6; width: 70px');
            $('#sexy').attr('style', 'background-color:#908BAB; width: 70px');
            $('#heavy').attr('style', 'background-color:#7A7691; width: 70px');
        }
        else if (boxID === 'citrus') {
            $(this).find('.keyword').show();

            $(this).attr('style', 'background-color:#DDDD72; width: 500px; height:500px');
            $('.main-word').attr('style', 'color:#DDDD72');

            $('#cool').attr('style', 'background-color:#F4F47E; width: 70px');
            $('#warm').attr('style', 'background-color:#F0F07B; width: 70px');
            $('#relax').attr('style', 'background-color:#EEEE7C; width: 70px');
            $('#sweet').attr('style', 'background-color:#E4E476; width: 70px');
            $('#mature').attr('style', 'background-color:#D6D66E; width: 70px');
            $('#sexy').attr('style', 'background-color:#CECE6A; width: 70px');
            $('#heavy').attr('style', 'background-color:#ADAD59; width: 70px');
        }
        else if (boxID === 'mature') {
            $(this).find('.keyword').show();

            $(this).attr('style', 'background-color:#CE5F4B; width: 500px; height:500px');
            $('.main-word').attr('style', 'color:#CE5F4B');

            $('#cool').attr('style', 'background-color:#FB745B; width: 70px');
            $('#warm').attr('style', 'background-color:#F67259; width: 70px');
            $('#relax').attr('style', 'background-color:#E36953; width: 70px');
            $('#sweet').attr('style', 'background-color:#DB6550; width: 70px');
            $('#citrus').attr('style', 'background-color:#D4624D; width: 70px');
            $('#sexy').attr('style', 'background-color:#C85C49; width: 70px');
            $('#heavy').attr('style', 'background-color:#BF5846; width: 70px');
        }
        else if (boxID === 'sexy') {
            $(this).find('.keyword').show();

            $(this).attr('style', 'background-color:#4A2867; width: 500px; height:500px');
            $('.main-word').attr('style', 'color:#4A2867');

            $('#cool').attr('style', 'background-color:#8146B3; width: 70px');
            $('#warm').attr('style', 'background-color:#7440A2; width: 70px');
            $('#relax').attr('style', 'background-color:#703C9C; width: 70px');
            $('#sweet').attr('style', 'background-color:#613487; width: 70px');
            $('#citrus').attr('style', 'background-color:#5B317E; width: 70px');
            $('#mature').attr('style', 'background-color:#522C72; width: 70px');
            $('#heavy').attr('style', 'background-color:#462661; width: 70px');
        }
        else if (boxID === 'heavy') {
            $(this).find('.keyword').show();

            $(this).attr('style', 'background-color:#1C2B50; width: 500px; height:500px');
            $('.main-word').attr('style', 'color:#1C2B50');

            $('#cool').attr('style', 'background-color:#3D5DAD; width: 70px');
            $('#warm').attr('style', 'background-color:#3A57A3; width: 70px');
            $('#relax').attr('style', 'background-color:#344F93; width: 70px');
            $('#sweet').attr('style', 'background-color:#2D4784; width: 70px');
            $('#citrus').attr('style', 'background-color:#2D447F; width: 70px');
            $('#mature').attr('style', 'background-color:#273B6E; width: 70px');
            $('#sexy').attr('style', 'background-color:#21325D; width: 70px');
        }
    });

    $('.choice').on('mouseout', function () {
        var boxID = $(this).attr('id');

        if (boxID === 'cool') {
            $(this).find('.keyword').hide();

            $(this).attr('style', 'background-color:#e0e0e0');
            $('.main-word').attr('style', 'color:#9e9e9e');

            $('#warm').attr('style', 'background-color:#bebebe');
            $('#relax').attr('style', 'background-color:#9e9e9e');
            $('#sweet').attr('style', 'background-color:#7f7f7f');
            $('#citrus').attr('style', 'background-color:#5e5e5e');
            $('#mature').attr('style', 'background-color:#404040');
            $('#sexy').attr('style', 'background-color:#212121');
            $('#heavy').attr('style', 'background-color:#000000');
        }
        else if (boxID === 'warm') {
            $(this).find('.keyword').hide();

            $(this).attr('style', 'background-color:#bebebe');
            $('.main-word').attr('style', 'color:#9e9e9e');

            $('#cool').attr('style', 'background-color:#e0e0e0');
            $('#relax').attr('style', 'background-color:#9e9e9e');
            $('#sweet').attr('style', 'background-color:#7f7f7f');
            $('#citrus').attr('style', 'background-color:#5e5e5e');
            $('#mature').attr('style', 'background-color:#404040');
            $('#sexy').attr('style', 'background-color:#212121');
            $('#heavy').attr('style', 'background-color:#000000');
        }
        else if (boxID === 'relax') {
            $(this).find('.keyword').hide();

            $(this).attr('style', 'background-color:#9e9e9e');
            $('.main-word').attr('style', 'color:#9e9e9e');

            $('#cool').attr('style', 'background-color:#e0e0e0');
            $('#warm').attr('style', 'background-color:#bebebe');
            $('#sweet').attr('style', 'background-color:#7f7f7f');
            $('#citrus').attr('style', 'background-color:#5e5e5e');
            $('#mature').attr('style', 'background-color:#404040');
            $('#sexy').attr('style', 'background-color:#212121');
            $('#heavy').attr('style', 'background-color:#000000');
        }
        else if (boxID === 'sweet') {
            $(this).find('.keyword').hide();

            $(this).attr('style', 'background-color:#7f7f7f');
            $('.main-word').attr('style', 'color:#9e9e9e');

            $('#cool').attr('style', 'background-color:#e0e0e0');
            $('#warm').attr('style', 'background-color:#bebebe');
            $('#relax').attr('style', 'background-color:#9e9e9e');
            $('#citrus').attr('style', 'background-color:#5e5e5e');
            $('#mature').attr('style', 'background-color:#404040');
            $('#sexy').attr('style', 'background-color:#212121');
            $('#heavy').attr('style', 'background-color:#000000');
        }
        else if (boxID === 'citrus') {
            $(this).find('.keyword').hide();

            $(this).attr('style', 'background-color:#5e5e5e');
            $('.main-word').attr('style', 'color:#9e9e9e');

            $('#cool').attr('style', 'background-color:#e0e0e0');
            $('#warm').attr('style', 'background-color:#bebebe');
            $('#relax').attr('style', 'background-color:#9e9e9e');
            $('#sweet').attr('style', 'background-color:#7f7f7f');
            $('#mature').attr('style', 'background-color:#404040');
            $('#sexy').attr('style', 'background-color:#212121');
            $('#heavy').attr('style', 'background-color:#000000');
        }
        else if (boxID === 'mature') {
            $(this).find('.keyword').hide();

            $(this).attr('style', 'background-color:#404040');
            $('.main-word').attr('style', 'color:#9e9e9e');

            $('#cool').attr('style', 'background-color:#e0e0e0');
            $('#warm').attr('style', 'background-color:#bebebe');
            $('#relax').attr('style', 'background-color:#9e9e9e');
            $('#sweet').attr('style', 'background-color:#7f7f7f');
            $('#citrus').attr('style', 'background-color:#5e5e5e');
            $('#sexy').attr('style', 'background-color:#212121');
            $('#heavy').attr('style', 'background-color:#000000');
        }
        else if (boxID === 'sexy') {
            $(this).find('.keyword').hide();

            $(this).attr('style', 'background-color:#212121');
            $('.main-word').attr('style', 'color:#9e9e9e');

            $('#cool').attr('style', 'background-color:#e0e0e0');
            $('#warm').attr('style', 'background-color:#bebebe');
            $('#relax').attr('style', 'background-color:#9e9e9e');
            $('#sweet').attr('style', 'background-color:#7f7f7f');
            $('#citrus').attr('style', 'background-color:#5e5e5e');
            $('#mature').attr('style', 'background-color:#404040');
            $('#heavy').attr('style', 'background-color:#000000');
        }
        else if (boxID === 'heavy') {
            $(this).find('.keyword').hide();

            $(this).attr('style', 'background-color:#000000');
            $('.main-word').attr('style', 'color:#9e9e9e');

            $('#cool').attr('style', 'background-color:#e0e0e0');
            $('#warm').attr('style', 'background-color:#bebebe');
            $('#relax').attr('style', 'background-color:#9e9e9e');
            $('#sweet').attr('style', 'background-color:#7f7f7f');
            $('#citrus').attr('style', 'background-color:#5e5e5e');
            $('#mature').attr('style', 'background-color:#404040');
            $('#sexy').attr('style', 'background-color:#212121');
        }
    });
}

mainPageColor();
