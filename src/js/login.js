require('../less/login.less')
require('../js/main');

$('.member > li').on('click', function () {
    if ($(this).hasClass('join-form')) {
        $('.member-login-form').removeClass('active');
        var memberJoin = $(this).parents('body').find('.member-join-form');
        memberJoin.addClass('active');
        $('.join-form').css('opacity', '1.0');
        $('.login-form').css('opacity', '0.5');
    }
    else {
        $('.member-join-form').removeClass('active');
        var memberLogin = $(this).parents('body').find('.member-login-form');
        memberLogin.addClass('active');
        $('.join-form').css('opacity', '0.5');
        $('.login-form').css('opacity', '1.0');
    }
});