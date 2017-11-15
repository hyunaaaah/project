require('../less/info.less');
require('../js/main');

require('../less/sub.less');


$('.goto-main').on('click', function() {
    location.href = 'index.html';
});

//note기능
var noteData = require('../js/info/note');
var noteTemplate = require('../template/noteInfo.hbs');

$('.note-contents').append(noteTemplate(noteData[0]));

function noteDataInsert() {
    $('.note-btns > li').on('click', function () {
        if ($(this).attr('id') === 'type') {
            $('.type-contents').addClass('active');
            $('.note-contents').empty();
            $('.division-contents').empty();
            typeSelect();
        }
        else {

            $('.note-contents').empty();
            $('.type-contents').removeClass('active');
            $('.division-contents').empty();

            var noteBtn = $(this).index();

            var note = noteTemplate(noteData[noteBtn]);

            $('.note-contents').append(note);
        }
    });
}

noteDataInsert();

//division 기능
var divisionData = require('../js/info/division');

function divisionDatainsert() {
    $('.division-btns > li').on('click', function () {
        $('.note-contents').empty();
        $('.type-contents').removeClass('active');
        $('.division-contents').empty();

        var divisionBtn = $(this).index();

        var divisionTemplate = require('../template/divisionInfo.hbs');
        var division = divisionTemplate(divisionData[divisionBtn]);

        $('.division-contents').append(division);

        //부향률 설명
        $('.question').on('mouseover', function () {
            $('#mean').toggle();
        });
        $('.question').on('mouseout', function () {
            $('#mean').toggle();
        });
    });
}

divisionDatainsert();

//계열 기능
/*
$('#type').on('click', function () {
    $('.type-contents').addClass('active');
});

$('.type-btns').on('click', function () {
    var typeBtnID = $(this).attr('id');

    var typeContents = $(this).parents('body').find('.type-text#' + typeBtnID);
    $('.type-text').removeClass('active');
    typeContents.addClass('active');
});
*/

function typeSelect() {
    var typeData = require('../template/typeInfo.hbs');
    $('.type-contents').append(typeData);

    $('.type-btns').on('click', function () {
        var typeBtnID = $(this).attr('id');

        var typeContents = $(this).parents('body').find('.type-text#' + typeBtnID);
        $('.type-text').removeClass('active');
        typeContents.addClass('active');
    });
}





