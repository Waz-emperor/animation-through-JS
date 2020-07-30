$('.spoilerButton').hide();

$('.spoiler').on('click', function () {
  $('.spoiler').hide();
  $('.spoilerButton').fadeIn(2000);
});
$('.spoilerButton').on('click', function () {
  $('.spoilerButton').hide();
  $('.spoiler').slideDown(2000);
});
