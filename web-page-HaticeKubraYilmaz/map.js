function initMap() {
    var uluru = {lat: 40.741335, lng: 30.3313067};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
  }