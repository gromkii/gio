$(document).ready(() => {

  $('form').on('submit', event => {
    var fav = $('#fav').val();

    $('#main').append(`<div class="col-md-6 col-md-offset-3">Um actually, ${fav} is bad.</div>`);

    $('#fav').val("");
    $('#fav').attr('placeholder', 'Okay well maybe try something else?');
    event.preventDefault();
  })
})
