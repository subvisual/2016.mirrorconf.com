//= require jquery
//= require lodash/dist/lodash
//= require_self

(function($){
  var SMALL_SIZE = 355;
  var LARGE_SIZE = 710;

  // Display gallery when both the document and the Facebook SDK have been
  // loaded.
  var ready = function() {
    console.log("Loading gallery photos...");

    // Get MirrorConf Facebook page photos through the Graph API
    function getPhotos(callback) {
      FB.api(
        '/578187519024917',
        'GET',
        {
          "access_token": "1073404472714264|Zr8aly_8YdBHFte79LRcIe9xx9Y",
          "fields": "albums{photos{images}}"
        },
        function(response) {
          handleGetPhotosResponse(response, callback);
        }
      );
    };

    // Handle the response retrieved from the Graph API when getting the images
    function handleGetPhotosResponse(response, callback) {
      if (response.error) {
        handleGetPhotosError(response.error, callback);
        return;
      }

      handleGetPhotosSuccess(response, callback);
    }

    // Handle error responses from the Graph API when getting the images
    function handleGetPhotosError(error, callback) {
      console.error("Failed to load gallery photos: " + error.message, error);
      callback([]);
    }

    // Handle success responses from the Graph API when getting the images
    function handleGetPhotosSuccess(response, callback) {
      console.log("Gallery loaded successfully!");
      extractGalleryItemsFromAlbums(response.albums.data, callback);
    }

    // Extract images from albums information
    function extractGalleryItemsFromAlbums(albums, callback) {
      var images = _.reduce(albums, function(acc, album) {
        return acc.concat(extractGalleryItemsFromAlbum(album));
      }, []);

      callback(images);
    }

    // Extract images from the information of a specific album
    function extractGalleryItemsFromAlbum(album) {
      var images = extractGalleryItemsFromPhotos(album.photos.data);

      return images;
    }

    // Extract images from the photos information
    function extractGalleryItemsFromPhotos(photos) {
      return _.reduce(photos, function(acc, photo) {
        return acc.concat(extractGalleryItemFromPhoto(photo));
      }, []);
    }

    // Extract a gallery item from a Photo object.
    //
    // @see {@link https://developers.facebook.com/docs/graph-api/reference/photo}
    function extractGalleryItemFromPhoto(photo) {
      var images = photo.images;
      var pixelRatio = _.get(window, "devicePixelRatio");

      if (pixelRatio && pixelRatio > 1) {
        return { id: photo.id, image: findBestImage(images, LARGE_SIZE) };
      }

      return { id: photo.id, image: findBestImage(images, SMALL_SIZE) };
    }

    function findBestImage(images, targetSize) {
      if (_.isEmpty(images)) return;

      var first = images[0];

      if (first.height > first.width) {
        return findBestImageByProperty(images, "height", targetSize);
      }

      return findBestImageByProperty(images, "width", targetSize);
    }

    function findBestImageByProperty(images, property, targetSize) {
      var bestImage = _.reduce(images, function(best, image) {
        var delta = image[property] - targetSize;

        if (!best) return { delta: delta, image: image };

        if (best.delta < 0 && 0 < delta) return { delta: delta, image: image };
        if (delta < 0 && 0 < best.delta) return best;

        if (Math.abs(delta) < Math.abs(best.delta)) {
          return { delta: delta, image: image };
        }

        return best;
      }, undefined);

      return bestImage.image;
    }

    // Render the gallery with the loaded images
    function render(images) {
      console.log("Rendering gallery...");

      var $children = [];
      _.each(images, function(photo, index) {
        var $item = $('<a class="Gallery-item really important rules" href="https://facebook.com/' + photo.id + '" target="_blank" style="background-image:url(\'' + photo.image.source + '\')"></a>');

        $children.push($item);
      });

      $('[data-gallery]').append($children);
      console.log("Rendered gallery!");
    }

    getPhotos(render);
  };

  // Facebook SDK asynchronous initialization
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1073404472714264',
      xfbml      : true,
      version    : 'v2.7'
    });

    $(ready);
  };

  // Load Facebook SDK
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
})(jQuery);
