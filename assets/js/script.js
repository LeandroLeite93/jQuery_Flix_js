// funcao de tirar opacidade do navbar quando scrollar
$(document).ready(() => {
  $(window).scroll(() => {
    if ($(this).scrollTop() > 0) {
      $(".container").css({
        backgroundColor: "#101010",
        transition: "1s"
      });
    } else {
      $(".container").css({
        backgroundColor: "rgba(0,0,0,0)"
      });
    }
  });
});
// fim da funcao de tirar opacidade
