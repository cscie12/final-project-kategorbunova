onload = (event) =>
{
var lakeSereneLatLng = [47.8090, -121.5738];
var mtSiLatLng = [47.4880, -121.7231];
var lake22LatLng = [48.0770, -121.7457];
var bridalVeilFallsLatLng = [47.8092, -121.5740];
var graniteMountainFallsLatLng = [ 47.3979, -121.4861];
var mtWillardLatLng = [44.21777967045232, -71.41051084314955];
var usCenterLatLng = [40.265806, -98.902952]

var zoomLevel = 5;

/* create Leaflet map object, 
    place in container, 
    and set initial center and zoom */
var map = L.map('map_container').setView(usCenterLatLng, zoomLevel);

/* required attribution */
var attributionHtml = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

/* create tile layer with attribution */
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: attributionHtml
}).addTo(map);


/* create marker, info popup, and add to map */
L.marker(lakeSereneLatLng).bindPopup("<strong>Lake Serene</strong><br />Lake Serene is an alpine lake located in Snohomish County, Washington near Mount Index. <br /> <strong>Length:</strong> 8.2 miles<br /><strong>Elevation gain:</strong> 2,000 feet<br /><a href='https://www.wta.org/go-hiking/hikes/lake-serene'>View Trail on Washington Trail Association</a>").addTo(map);
L.marker(mtSiLatLng).bindPopup("<strong>Mount Si</strong><br />Lake Serene is an alpine lake located in Snohomish County, Washington near Mount Index. <br /> <strong>Length:</strong> 8.0 miles<br /><strong>Elevation gain:</strong> 3,150 feet<br /><a href='https://www.wta.org/go-hiking/hikes/mount-si'>View Trail on Washington Trail Association</a>").addTo(map);
L.marker(lake22LatLng).bindPopup("<strong>Lake 22</strong><br />Lake Twenty-Two Trail is a beautiful hike to an alpine lake through old-growth forests.<br /> <strong>Length:</strong> 5.4 miles<br /><strong>Elevation gain:</strong> 1,350 feet<br /><a href='https://www.wta.org/go-hiking/hikes/lake-22-lake-twenty-two'>View Trail on Washington Trail Association</a>").addTo(map);
L.marker(bridalVeilFallsLatLng).bindPopup("<strong>Bridal Veil Falls</strong><br />A beautiful waterfall flows out of Lake Serene and cascades below the rugged east wall of Mount Index.<br /> <strong>Length:</strong> 4.0 miles<br /><strong>Elevation gain:</strong> 1,000 feet<br /><a href='https://www.wta.org/go-hiking/hikes/bridal-veil-falls'>View Trail on Washington Trail Association</a>").addTo(map);
L.marker(graniteMountainFallsLatLng).bindPopup("<strong>Granite Mountain</strong><br />Granite Mountain is a tall peak in the Cascade Range in King County, Washington 16 miles (26 km) east of North Bend.<br /> <strong>Length:</strong> 8.6 miles<br /><strong>Elevation gain:</strong> 3,800 feet<br /><a href='https://www.wta.org/go-hiking/hikes/granite-mountain'>View Trail on Washington Trail Association</a>").addTo(map);
L.marker(mtWillardLatLng).bindPopup("<strong>Mount Willard Trail</strong><br />Mount Willard is a hike in White Mountains Area that goes to the ledges above the cliffs overlooking Crawford Notch.<br /> <strong>Length:</strong> 3.2 miles<br /><strong>Elevation gain:</strong> 930 feet<br /><a href='https://www.visitwhitemountains.com/listing/mount-willard-trailhead/143/'>View Trail on Visit White Mountains</a>").addTo(map);

};