class HeroAnim {
  get commonData() {
    return {
      renderer: "svg",
      loop: false,
      autoplay: true
    };
  }

  loadAnimationData() {
    this.data = {
      topIntro: _.assign({}, this.commonData, {
        container: document.getElementById("HeroAnimation-topIntro"),
        path: "anim/hero-intro.json",
      }),

      bottomIntro: _.assign({}, this.commonData, {
        container: document.getElementById("HeroAnimation-bottomIntro"),
        path: "anim/hero-intro.json",
      }),

      topLoop: _.assign({}, this.commonData, {
        container: document.getElementById("HeroAnimation-topLoop"),
        path: "anim/hero-loop.json",
        loop: true,
        autoplay: false
      }),

      bottomLoop: _.assign({}, this.commonData, {
        container: document.getElementById("HeroAnimation-bottomLoop"),
        path: "anim/hero-loop.json",
        loop: true,
        autoplay: false
      })
    };
  }

  loadAnimations() {
    $("#HeroAnimation-topLoop, #HeroAnimation-bottomLoop").hide();
    this.anims = {
      topIntro:    window.bodymovin.loadAnimation(this.data.topIntro),
      bottomIntro: window.bodymovin.loadAnimation(this.data.bottomIntro),
      topLoop:    window.bodymovin.loadAnimation(this.data.topLoop),
      bottomLoop: window.bodymovin.loadAnimation(this.data.bottomLoop),
    };
    _.each(this.anims, (anim) => anim.setSpeed(0.5));
  }


  setupCallbacks() {
    this.anims.topIntro.onComplete = () => {
      $("#HeroAnimation-topLoop").show();
      this.anims.topLoop.play();
      this.anims.topIntro.destroy();
    };
    this.anims.bottomIntro.onComplete = () => {
      $("#HeroAnimation-bottomLoop").show();
      this.anims.bottomLoop.play();
      this.anims.bottomIntro.destroy();
    };
  }

  start() {
    this.loadAnimationData();
    this.loadAnimations();
    this.setupCallbacks();
  }
}
