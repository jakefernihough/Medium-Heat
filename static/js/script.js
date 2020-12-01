$(document).ready(function(){
    $('.sidenav').sidenav({edge: "right"});
    $('.collapsible').collapsible();
    $('.slider').slider();
    $('.datepicker').datepicker({
        format: "dd mmm, yyyy",
        yearRange: [1960,2021],
        changeMonth: true,
        changeYear: true,
        showClearBtn: true,
        i18n: {
            done: "Select"
        }
    });
    $('select').formSelect();
  });