    $(document).ready(function() {
      $(".kopez").click(function() {
      console.log('dfjvbdfjkgv');
      document.getElementById('form').addEventListener("submit", checkForm);
      $('#myInput').val("");
      $('.element').css('left', getRandomInt(10, 80) + 'vw');
      $('.element').css('top', getRandomInt(10, 20) + 'vw');
    })
    function checkForm(event){
      event.preventDefault();
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
});
