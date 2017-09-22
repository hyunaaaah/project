require('bootstrap');
require('../less/main.less');

// 시원한
$('#cool').on('mouseover', function () {
    $(this).attr('style', 'background-color:#DAF1EF');
    $('.main-word').attr('style', 'color:#DAF1EF');

    $('#warm').attr('style', 'background-color:#D5ECEA');
    $('#relax').attr('style', 'background-color:#CFE5E3');
    $('#sweet').attr('style', 'background-color:#C7DCDA');
    $('#citrus').attr('style', 'background-color:#B3C6C4');
    $('#mature').attr('style', 'background-color:#ABBDBB');
    $('#sexy').attr('style', 'background-color:#92A1A0');
    $('#heavy').attr('style', 'background-color:#7D8A89');
});

$('#cool').on('mouseout', function () {
    $(this).attr('style', 'background-color:#e0e0e0');
    $('.main-word').attr('style', 'color:#9e9e9e');

    $('#warm').attr('style', 'background-color:#bebebe');
    $('#relax').attr('style', 'background-color:#9e9e9e');
    $('#sweet').attr('style', 'background-color:#7f7f7f');
    $('#citrus').attr('style', 'background-color:#5e5e5e');
    $('#mature').attr('style', 'background-color:#404040');
    $('#sexy').attr('style', 'background-color:#212121');
    $('#heavy').attr('style', 'background-color:#000000');
});

// 포근한
$('#warm').on('mouseover', function () {
    $(this).attr('style', 'background-color:#E4D8BE');
    $('.main-word').attr('style', 'color:#E4D8BE');

    $('#cool').attr('style', 'background-color:#EEE1C6');
    $('#relax').attr('style', 'background-color:#DDD1B8');
    $('#sweet').attr('style', 'background-color:#D2C7AF');
    $('#citrus').attr('style', 'background-color:#CFC4AD');
    $('#mature').attr('style', 'background-color:#C1B8A1');
    $('#sexy').attr('style', 'background-color:#B0A693');
    $('#heavy').attr('style', 'background-color:#A89F8C');
});

$('#warm').on('mouseout', function () {
    $(this).attr('style', 'background-color:#bebebe');
    $('.main-word').attr('style', 'color:#9e9e9e');

    $('#cool').attr('style', 'background-color:#e0e0e0');
    $('#relax').attr('style', 'background-color:#9e9e9e');
    $('#sweet').attr('style', 'background-color:#7f7f7f');
    $('#citrus').attr('style', 'background-color:#5e5e5e');
    $('#mature').attr('style', 'background-color:#404040');
    $('#sexy').attr('style', 'background-color:#212121');
    $('#heavy').attr('style', 'background-color:#000000');
});

// 차분한
$('#relax').on('mouseover', function () {
    $(this).attr('style', 'background-color:#B57581');
    $('.main-word').attr('style', 'color:#B57581');

    $('#cool').attr('style', 'background-color:#CB8390');
    $('#warm').attr('style', 'background-color:#C17D8A');
    $('#sweet').attr('style', 'background-color:#AB6F7A');
    $('#citrus').attr('style', 'background-color:#A36974');
    $('#mature').attr('style', 'background-color:#935F69');
    $('#sexy').attr('style', 'background-color:#83555D');
    $('#heavy').attr('style', 'background-color:#7D5159');
});

$('#relax').on('mouseout', function () {
    $(this).attr('style', 'background-color:#9e9e9e');
    $('.main-word').attr('style', 'color:#9e9e9e');

    $('#cool').attr('style', 'background-color:#e0e0e0');
    $('#warm').attr('style', 'background-color:#bebebe');
    $('#sweet').attr('style', 'background-color:#7f7f7f');
    $('#citrus').attr('style', 'background-color:#5e5e5e');
    $('#mature').attr('style', 'background-color:#404040');
    $('#sexy').attr('style', 'background-color:#212121');
    $('#heavy').attr('style', 'background-color:#000000');
});

// 달콤한
$('#sweet').on('mouseover', function () {
    $(this).attr('style', 'background-color:#B9B2DB');
    $('.main-word').attr('style', 'color:#B9B2DB');

    $('#cool').attr('style', 'background-color:#D2CAF9');
    $('#warm').attr('style', 'background-color:#CEC6F4');
    $('#relax').attr('style', 'background-color:#C7BFEC');
    $('#citrus').attr('style', 'background-color:#A099BD');
    $('#mature').attr('style', 'background-color:#9993B6');
    $('#sexy').attr('style', 'background-color:#908BAB');
    $('#heavy').attr('style', 'background-color:#7A7691');
});

$('#sweet').on('mouseout', function () {
    $(this).attr('style', 'background-color:#7f7f7f');
    $('.main-word').attr('style', 'color:#9e9e9e');

    $('#cool').attr('style', 'background-color:#e0e0e0');
    $('#warm').attr('style', 'background-color:#bebebe');
    $('#relax').attr('style', 'background-color:#9e9e9e');
    $('#citrus').attr('style', 'background-color:#5e5e5e');
    $('#mature').attr('style', 'background-color:#404040');
    $('#sexy').attr('style', 'background-color:#212121');
    $('#heavy').attr('style', 'background-color:#000000');
});

// 상큼한
$('#citrus').on('mouseover', function () {
    $(this).attr('style', 'background-color:#DDDD72');
    $('.main-word').attr('style', 'color:#DDDD72');

    $('#cool').attr('style', 'background-color:#F4F47E');
    $('#warm').attr('style', 'background-color:#F0F07B');
    $('#relax').attr('style', 'background-color:#EEEE7C');
    $('#sweet').attr('style', 'background-color:#E4E476');
    $('#mature').attr('style', 'background-color:#D6D66E');
    $('#sexy').attr('style', 'background-color:#CECE6A');
    $('#heavy').attr('style', 'background-color:#ADAD59');
});

$('#citrus').on('mouseout', function () {
    $(this).attr('style', 'background-color:#5e5e5e');
    $('.main-word').attr('style', 'color:#9e9e9e');

    $('#cool').attr('style', 'background-color:#e0e0e0');
    $('#warm').attr('style', 'background-color:#bebebe');
    $('#relax').attr('style', 'background-color:#9e9e9e');
    $('#sweet').attr('style', 'background-color:#7f7f7f');
    $('#mature').attr('style', 'background-color:#404040');
    $('#sexy').attr('style', 'background-color:#212121');
    $('#heavy').attr('style', 'background-color:#000000');
});

// 성숙한
$('#mature').on('mouseover', function () {
    $(this).attr('style', 'background-color:#CE5F4B');
    $('.main-word').attr('style', 'color:#CE5F4B');

    $('#cool').attr('style', 'background-color:#FB745B');
    $('#warm').attr('style', 'background-color:#F67259');
    $('#relax').attr('style', 'background-color:#E36953');
    $('#sweet').attr('style', 'background-color:#DB6550');
    $('#citrus').attr('style', 'background-color:#D4624D');
    $('#sexy').attr('style', 'background-color:#C85C49');
    $('#heavy').attr('style', 'background-color:#BF5846');
});

$('#mature').on('mouseout', function () {
    $(this).attr('style', 'background-color:#404040');
    $('.main-word').attr('style', 'color:#9e9e9e');

    $('#cool').attr('style', 'background-color:#e0e0e0');
    $('#warm').attr('style', 'background-color:#bebebe');
    $('#relax').attr('style', 'background-color:#9e9e9e');
    $('#sweet').attr('style', 'background-color:#7f7f7f');
    $('#citrus').attr('style', 'background-color:#5e5e5e');
    $('#sexy').attr('style', 'background-color:#212121');
    $('#heavy').attr('style', 'background-color:#000000');
});

// 섹시한
$('#sexy').on('mouseover', function () {
    $(this).attr('style', 'background-color:#4A2867');
    $('.main-word').attr('style', 'color:#4A2867');

    $('#cool').attr('style', 'background-color:#8146B3');
    $('#warm').attr('style', 'background-color:#7440A2');
    $('#relax').attr('style', 'background-color:#703C9C');
    $('#sweet').attr('style', 'background-color:#613487');
    $('#citrus').attr('style', 'background-color:#5B317E');
    $('#mature').attr('style', 'background-color:#522C72');
    $('#heavy').attr('style', 'background-color:#462661');
});

$('#sexy').on('mouseout', function () {
    $(this).attr('style', 'background-color:#212121');
    $('.main-word').attr('style', 'color:#9e9e9e');

    $('#cool').attr('style', 'background-color:#e0e0e0');
    $('#warm').attr('style', 'background-color:#bebebe');
    $('#relax').attr('style', 'background-color:#9e9e9e');
    $('#sweet').attr('style', 'background-color:#7f7f7f');
    $('#citrus').attr('style', 'background-color:#5e5e5e');
    $('#mature').attr('style', 'background-color:#404040');
    $('#heavy').attr('style', 'background-color:#000000');
});

// 무거운
$('#heavy').on('mouseover', function () {
    $(this).attr('style', 'background-color:#1C2B50');
    $('.main-word').attr('style', 'color:#1C2B50');

    $('#cool').attr('style', 'background-color:#3D5DAD');
    $('#warm').attr('style', 'background-color:#3A57A3');
    $('#relax').attr('style', 'background-color:#344F93');
    $('#sweet').attr('style', 'background-color:#2D4784');
    $('#citrus').attr('style', 'background-color:#2D447F');
    $('#mature').attr('style', 'background-color:#273B6E');
    $('#sexy').attr('style', 'background-color:#21325D');
});

$('#heavy').on('mouseout', function () {
    $(this).attr('style', 'background-color:#000000');
    $('.main-word').attr('style', 'color:#9e9e9e');

    $('#cool').attr('style', 'background-color:#e0e0e0');
    $('#warm').attr('style', 'background-color:#bebebe');
    $('#relax').attr('style', 'background-color:#9e9e9e');
    $('#sweet').attr('style', 'background-color:#7f7f7f');
    $('#citrus').attr('style', 'background-color:#5e5e5e');
    $('#mature').attr('style', 'background-color:#404040');
    $('#sexy').attr('style', 'background-color:#212121');
});