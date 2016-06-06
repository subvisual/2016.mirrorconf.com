function setupBorderAnimations() {
  const controller = new ScrollMagic.Controller();

  const activateOnScroll = function(element) {
    new ScrollMagic.Scene({ triggerElement: this }).
      addTo(controller).
      on("enter", () => $(this).addClass("active"));
  }

  $(".Border").each(activateOnScroll)
}

$(setupBorderAnimations);
