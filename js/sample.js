$(function (){
    var main_nav = $('.main_nav');
    $('.nav_roll', main_nav).mouseover(function (e) {
      $('.nav_roll2', this).stop().slideDown('fast');
    }).mouseout(function (e) {
      $('.nav_roll2', this).stop().slideUp('fast');
    });
  });