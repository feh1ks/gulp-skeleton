function initMap() {
    var markers = [
        ['<p class="h4 text-primary">Житомир</p>',
         '<p class="text-muted">ул. Шевченковская, 16а</p><p>+38 056 566 45 12<br>+38 056 566 45 12</p>',
         50.4020355,30.5326905],

        ['<p class="h4 text-primary">Житомир</p>',
         '<p class="text-muted">ул. Шевченковская, 16а</p><p>+38 056 566 45 12<br>+38 056 566 45 12</p>',
         49.9945914, 36.1484956],

        ['<p class="h4 text-primary">Житомир</p>',
         '<p class="text-muted">ул. Шевченковская, 16а</p><p>+38 056 566 45 12<br>+38 056 566 45 12</p>',
         48.464717,35.046183],

        ['<p class="h4 text-primary">Житомир</p>',
         '<p class="text-muted">ул. Шевченковская, 16а</p><p>+38 056 566 45 12<br>+38 056 566 45 12</p>',
         50.254650,28.658667],

        ['<p class="h4 text-primary">Житомир</p>',
         '<p class="text-muted">ул. Шевченковская, 16а</p><p>+38 056 566 45 12<br>+38 056 566 45 12</p>',
         48.173463,23.297248],

        ['<p class="h4 text-primary">Житомир</p>',
         '<p class="text-muted">ул. Шевченковская, 16а</p><p>+38 056 566 45 12<br>+38 056 566 45 12</p>',
         48.146349,23.030212],

        ['<p class="h4 text-primary">Житомир</p>',
         '<p class="text-muted">ул. Шевченковская, 16а</p><p>+38 056 566 45 12<br>+38 056 566 45 12</p>',
         50.508911,26.256644]
    ];

    var mapCanvas = document.getElementById('map');
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var logo = new google.maps.MarkerImage('img/map-marker.png');
    var infowindow = new google.maps.InfoWindow();
    for (var i = 0; i < markers.length; i++) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(markers[i][2], markers[i][3]),
            icon: logo,
            map: map
        });
        bounds.extend(marker.position);
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                var content = markers[i][0] + markers[i][1];
                infowindow.setContent(content);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
    map.fitBounds(bounds);
    google.maps.event.addDomListener(window, 'resize', function() {
        var center = bounds.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });
};
