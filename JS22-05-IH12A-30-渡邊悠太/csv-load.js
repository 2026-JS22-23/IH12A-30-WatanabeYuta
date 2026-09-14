function loadCSV() {

    fetch("spots.csv")
        .then(res => res.text())
        .then(text => {

            var rows = text.split("\n");

            rows.forEach(function(line) {

                var col = line.split(",");

                var lat = parseFloat(col[0]);
                var lng = parseFloat(col[1]);
                var name = col[2];

               
                new google.maps.Marker({
                    position: {
                        lat: lat,
                        lng: lng
                    },
                    map: map,
                    title: name
                });
            });
        });
}