onload = (event) =>
{
var tolmieLatLng = [46.9379, -121.8675];
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
L.marker(tolmieLatLng).bindPopup("<strong>Tolmie Fire Lookout<br /><a href='journal.html#tolmie'><u>View in Journal</u></a></strong><br /><br />Hike to an old fire lookout with in-your-face views of Mount Rainier and a sapphire blue lake below. <br /> <strong>Length:</strong> 7.5 miles<br /><strong>Elevation gain:</strong> 1,100 feet<br /><br /><a href='https://www.wta.org/go-hiking/hikes/tolmie-peak><u>View Trail on Washington Trail Association</u></a>").addTo(map);
L.marker(mtSiLatLng).bindPopup("<strong>Mount Si<br /><a href='journal.html#littleSi'><u>View in Journal</u></a></strong><br /><br />Lake Serene is an alpine lake located in Snohomish County, Washington near Mount Index. <br /> <strong>Length:</strong> 8.0 miles<br /><strong>Elevation gain:</strong> 3,150 feet<br /><br /><a href='https://www.wta.org/go-hiking/hikes/mount-si'><u>View Trail on Washington Trail Association</u></a>").addTo(map);
L.marker(lake22LatLng).bindPopup("<strong>Lake 22<br /><a href='journal.html#lake22'><u>View in Journal</u></a></strong><br /><br />Lake Twenty-Two Trail is a beautiful hike to an alpine lake through old-growth forests.<br /> <strong>Length:</strong> 5.4 miles<br /><strong>Elevation gain:</strong> 1,350 feet<br /><br /><a href='https://www.wta.org/go-hiking/hikes/lake-22-lake-twenty-two'><u>View Trail on Washington Trail Association</u></a>").addTo(map);
L.marker(bridalVeilFallsLatLng).bindPopup("<strong>Bridal Veil Falls<br /><a href='journal.html#bridalVeil'><u>View in Journal</u></a></strong><br /><br />A beautiful waterfall flows out of Lake Serene and cascades below the rugged east wall of Mount Index.<br /> <strong>Length:</strong> 4.0 miles<br /><strong>Elevation gain:</strong> 1,000 feet<br /><br /><a href='https://www.wta.org/go-hiking/hikes/bridal-veil-falls'><u>View Trail on Washington Trail Association</u></a>").addTo(map);
L.marker(graniteMountainFallsLatLng).bindPopup("<strong>Granite Mountain<br /><a href='journal.html#graniteMountain'><u>View in Journal</u></a></strong><br /><br />Granite Mountain is a tall peak in the Cascade Range in King County, Washington 16 miles (26 km) east of North Bend.<br /> <strong>Length:</strong> 8.6 miles<br /><strong>Elevation gain:</strong> 3,800 feet<br /><br /><a href='https://www.wta.org/go-hiking/hikes/granite-mountain'><u>View Trail on Washington Trail Association</u></a>").addTo(map);
L.marker(mtWillardLatLng).bindPopup("<strong>Mount Willard Trail<br /><a href='journal.html#mtWillard'><u>View in Journal</u></a></strong><br /><br />Mount Willard is a hike in White Mountains Area that goes to the ledges above the cliffs overlooking Crawford Notch.<br /> <strong>Length:</strong> 3.2 miles<br /><strong>Elevation gain:</strong> 930 feet<br /><br /><a href='https://www.visitwhitemountains.com/listing/mount-willard-trailhead/143/'><u>View Trail on Visit White Mountains</u></a>").addTo(map);

};