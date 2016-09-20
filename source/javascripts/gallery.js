//= require jquery
//= require_self

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

class Gallery {
  getPhotos(callback) {
    FB.api("/1590224514005/photos", (response) => {
      console.log(response)
      if (response && !response.error) {
        callback(response);
      };
    })
  }

  display() {
    this.getPhotos((photos) => {
      console.log(photos)
    });
  }
};

window.fbAsyncInit = function() {
  FB.init({
    appId      : '105600879903166',
    xfbml      : true,
    version    : 'v2.7'
  });

  $(function() {
    new Gallery().display();
  });
};
