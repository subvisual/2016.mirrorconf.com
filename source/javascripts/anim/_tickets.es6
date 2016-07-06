class TicketsAnim {
  start() {
    const animArea = $('.TicketsAnim');
    const win = $(window);
    let screenHeight;
    let screenWidth;
    let animTop;
    let animHeight;

    let resizeCallback = () => {
      animTop = animArea.offset().top;
      animHeight = animArea.innerHeight();
      screenHeight = win.height();
      screenWidth = win.width();
    }

    let scrollCallback = () => {
      const animStart = animTop + animHeight - screenHeight;
      const animEnd   = animTop;
      let baseOffset;
      let multiplier = 1;

      if (screenWidth > 1150) {
        baseOffset = 400;
      } else {
        baseOffset = 300;
        multiplier = 0.3;

      }

      const position = clamp(win.scrollTop(), animStart - 400, animEnd + 200);
      const offset = baseOffset - (position - animStart) / (animEnd - animStart) * 100 * multiplier;
      $('.TicketsAnim-image').css('transform', `translateY(${offset}px)`)
    };

    $(window).on('scroll', scrollCallback);
    $(window).resize(resizeCallback);
    resizeCallback();
    scrollCallback();
  }
}

function clamp(x, min, max) {
  return Math.min(Math.max(x, min), max);
}
