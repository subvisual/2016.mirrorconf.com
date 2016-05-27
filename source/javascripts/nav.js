window.Nav = {
  listenToBurger: function() {
    $("#Burger, #Overlay a").on("click", Nav.toggleNav);
  },

  toggleNav: function() {
    $("#Overlay, #Burger").toggleClass("is-open");
    $("body").toggleClass("no-scroll");
  }
}
