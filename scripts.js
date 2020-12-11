function ready(callbackFunc) {
  if (document.readyState !== 'loading') {
    // Document is already ready, call the callback directly
    callbackFunc();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener('DOMContentLoaded', callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState === 'complete') {
        callbackFunc();
      }
    });
  }
}

ready(function () {

    let sliderImages = document.querySelectorAll('.slide')

    const arrowRight = document.querySelector('#slide-right')
    const arrowLeft = document.querySelector('#slide-left')
    let current = 0

    // Clear All Images
    function reset() {
      for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
      }
    }

    // Init Slide
    function startSlide() {
      reset();
      sliderImages[0].style.display = 'block';
    }

    //Show Previous Slide
    function slideLeft() {
      reset();
      sliderImages[current - 1].style.display = 'block';
      current--;
    }

    function slideRight() {
      reset();
      sliderImages[current + 1].style.display = 'block';
      current++;
    }

      // Event Listener for Left Button Click
      arrowLeft.addEventListener('click', function(){
        if(current === 0){
          current = sliderImages.length;
        }
        slideLeft();
      })

    arrowRight.addEventListener('click', function () {
      if (current === sliderImages.length - 1) {
        current =  -1
      }
      slideRight();
    })

    

    startSlide();

    //click to scroll

    document.getElementById('services').scrollIntoView

    //map

  function initMap() {
    let location = new google.maps.LatLng(51.052605, -114.119942);
    let map_canvas = document.getElementById('map');
    let map_options = {
      center: location,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    let map = new google.maps.Map(map_canvas, map_options);

    new google.maps.Marker({
      position: location,
      map: map
    });
  }
  // google.maps.event.addDomListener(window, 'load', initialize);
  
});

//jQuery - Scroll To Function to Services Section

$("#hero-button").click(function () {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#services").offset().top
  }, 2000);
});