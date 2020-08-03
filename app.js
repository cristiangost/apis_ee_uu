const citymap = {
  Montana: {
    center: { lat: 46.568621, lng: -109.379188 },
    population: 4081
  },
  Kansas: {
	center: {lat: 38.421681, lng:  -98.436805},
	population: 350045
  },
  Colorado: {
	center: {lat: 38.490507, lng:  -105.775672},
	population: 350045
  },
  Utah: {
	center: {lat: 39.277274, lng:  -111.488563},
	population: 350045
  },
  
  Nevada: {
	center: {lat: 39.684296, lng:  -116.652137},
	population: 49306
  },
  Dakota_norte: {
	center: {lat: 47.497105, lng:  -100.546180},
	population: 6660
  },
  Dakota_sur: {
	center: {lat: 44.569277, lng:  -99.908973},
	population: 8867
  },
  Idaho: {
	center: {lat: 43.303531, lng:  -114.081336},
	population: 19849
  },
  Oregon: {
	center: {lat: 43.686084, lng: -120.739051},
	population: 18817
  },
  new_mexico: {
	center: {lat: 33.918676, lng: -105.863563},
	population: 350045
  },
   washington: {
	center: {lat: 47.169491, lng: -120.321571},
	population: 57541
  },
   Arizona: {
	center: {lat: 34.100816, lng: -112.037879},
	population: 350045
  },
   Missouri: {
	center: {lat: 38.076567, lng: -92.174598},
	population: 51258
  },
   Texas: {
	center: {lat: 31.065094, lng: -99.074012},
	population: 350045
  },
  California: {
	center: {lat: 36.078335, lng: -119.332801},
	population: 350045
  },
  Missisipi: {
	center: {lat: 32.632825, lng: -89.735633},
	population: 59002
  },
   Michigan: {
	center: {lat: 43.717855, lng: -85.033484},
	population: 350045
  },
   Iowa: {
	center: {lat: 42.141348, lng: -92.679969},
	population: 350045
  },
   Carolina_sur: {
	center: {lat: 33.772682, lng: -80.089637},
	population: 90076
  },
  Carolina_norte: {
	center: {lat: 35.472230, lng: -78.463661},
	population: 123878
  },
  Wisconsin: {
	center: {lat: 44.412532, lng: -89.669716},
	population: 350045
  },
  
  Louisiana: {
	center: {lat: 31.365759, lng: -92.174598},
	population: 28922
  },
  Indiana: {
	center: {lat: 40.557986, lng: -86.505653},
	population: 67122
  },
  Minnesota: {
	center: {lat: 45.838690, lng: -94.393837},
	population: 55947
  },
  Ohio: {
	center: {lat: 40.524591, lng: -82.133095},
	population: 350045
  },
  NY: {
	center: {lat: 42.757436, lng: -75.585243},
	population: 190307
  },
  Kentucky: {
	center: {lat: 37.451245, lng: -85.187294},
	population: 350045
  },
   Nebraska: {
	center: {lat: 40.957436, lng: -99.755165},
	population: 26391
  },
  Wyoming:{
	center: {lat:42.854160 ,lng: -107.709267},
	population: 2297,
  }
};


function initMap() {
  const mapa2 = { lat: 42.854160, lng: -98.709267 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4.2,
    center: mapa2
  });
//wyoming 
 const text_wyoming =
    '<h1>Wyoming</h1>' +
    "<p>Casos activos:   2.297</p>"+
	"<p>Casos Presuntos:  472</p>"+
	"<p>Fallecidos:  26</p>"
	
  const infowindow = new google.maps.InfoWindow({
    content: text_wyoming,
    maxWidth: 200
  });
  const marker_wyoming = new google.maps.Marker({
    position: {lat: 42.854160, lng: -107.709267},
    map,
    title: "prueba"
  });
  marker_wyoming.addListener("click", () => {
    infowindow.open(map, marker_wyoming);
  });
  
//idaho
 const text_idaho =
    '<h1>Idaho</h1>' +
    "<p>Casos activos:   19.849</p>"+
	"<p>Casos Presuntos:  1265</p>"+
	"<p>Fallecidos:  197</p>"
	
  const infowindow2 = new google.maps.InfoWindow({
    content: text_idaho,
    maxWidth: 200
  });
  const marker_idaho = new google.maps.Marker({
    position: {lat: 43.303531, lng: -114.081336},
    map,
    title: "prueba"
  });
  marker_idaho.addListener("click", () => {
    infowindow2.open(map, marker_idaho);
  });

//Montana
const text_Montana =
    '<h1>Montana</h1>' +
    "<p>Casos activos:   4081</p>"+
	"<p>Casos Presuntos:  0</p>"+
	"<p>Fallecidos:  61</p>"
	
  const infowindow3 = new google.maps.InfoWindow({
    content: text_Montana,
    maxWidth: 200
  });
  const marker_Montana = new google.maps.Marker({
    position: {lat: 46.568621, lng: -109.379188},
    map,
    title: "prueba"
  });
  marker_Montana.addListener("click", () => {
    infowindow3.open(map, marker_Montana);
  });

//Kansas
const text_Kansas =
    '<h1>Kansas</h1>' +
    "<p>Casos activos:   27.171</p>"+
	"<p>Casos Presuntos:  641</p>"+
	"<p>Fallecidos:  358</p>"
	
  const infowindow4 = new google.maps.InfoWindow({
    content: text_Kansas,
    maxWidth: 200
  });
  const marker_Kansas = new google.maps.Marker({
    position: {lat: 38.421681, lng: -98.436805},
    map,
    title: "prueba"
  });
  marker_Kansas.addListener("click", () => {
    infowindow4.open(map, marker_Kansas);
  });

//Washington
const text_Washington =
    '<h1>Washington</h1>' +
    "<p>Casos activos:   57.541</p>"+
	"<p>Casos Presuntos:  0</p>"+
	"<p>Fallecidos:  1.592</p>"
	
  const infowindow5 = new google.maps.InfoWindow({
    content: text_Washington,
    maxWidth: 200
  });
  const marker_Washington = new google.maps.Marker({
    position: {lat: 47.169491, lng: -120.321571},
    map,
    title: "prueba"
  });
  marker_Washington.addListener("click", () => {
    infowindow5.open(map, marker_Washington);
  });

//colorado
const text_colorado =
    '<h1>Colorado</h1>' +
    "<p>Casos activos:   44.077</p>"+
	"<p>Casos Presuntos:  3190</p>"+
	"<p>Fallecidos:  1.844</p>"
	
  const infowindow6 = new google.maps.InfoWindow({
    content: text_colorado,
    maxWidth: 200
  });
  const marker_colorado = new google.maps.Marker({
    position: {lat: 38.490507, lng: -105.775672},
    map,
    title: "prueba"
  });
  marker_colorado.addListener("click", () => {
    infowindow6.open(map, marker_colorado);
  });

//Nebraska
const text_Nebraska =
    '<h1>Nebraska</h1>' +
    "<p>Casos activos:   26.391</p>"+
	"<p>Casos Presuntos:  N/A</p>"+
	"<p>Fallecidos:  332</p>"
	
  const infowindow7 = new google.maps.InfoWindow({
    content: text_Nebraska,
    maxWidth: 200
  });
  const marker_Nebraska = new google.maps.Marker({
    position: {lat: 40.957436, lng: -99.755165},
    map,
    title: "prueba"
  });
  marker_Nebraska.addListener("click", () => {
    infowindow7.open(map, marker_Nebraska);
  });
  
  //Ohio
  const text_Ohio =
    '<h1>Ohio</h1>' +
    "<p>Casos activos:   87.218</p>"+
	"<p>Casos Presuntos:  4.869</p>"+
	"<p>Fallecidos:  3.515</p>"
	
  const infowindow8 = new google.maps.InfoWindow({
    content: text_Ohio,
    maxWidth: 200
  });
  const marker_Ohio = new google.maps.Marker({
    position: {lat: 40.524591, lng: -82.133095},
    map,
    title: "prueba"
  });
  marker_Ohio.addListener("click", () => {
    infowindow8.open(map, marker_Ohio);
  });
 
// Carolina_sur
   const text_Carolina_sur =
    '<h1>South Carolina</h1>' +
    "<p>Casos activos:   90.076</p>"+
	"<p>Casos Presuntos:  523</p>"+
	"<p>Fallecidos:  1.751</p>"
	
  const infowindow9 = new google.maps.InfoWindow({
    content: text_Carolina_sur,
    maxWidth: 200
  });
  const marker_Carolina_sur = new google.maps.Marker({
    position: {lat: 33.772682, lng: -80.089637},
    map,
    title: "prueba"
  });
  marker_Carolina_sur.addListener("click", () => {
    infowindow9.open(map, marker_Carolina_sur);
  });

//Carolina_norte
const text_Carolina_norte =
    '<h1>North Carolina</h1>' +
    "<p>Casos activos:   123.878</p>"+
	"<p>Casos Presuntos:  N/A</p>"+
	"<p>Fallecidos:  1.964</p>"
	
  const infowindow10 = new google.maps.InfoWindow({
    content: text_Carolina_norte,
    maxWidth: 200
  });
  const marker_Carolina_norte = new google.maps.Marker({
    position: {lat: 35.472230, lng: -78.463661},
    map,
    title: "prueba"
  });
  marker_Carolina_norte.addListener("click", () => {
    infowindow10.open(map, marker_Carolina_norte);
  });
  
  //NY
 const text_NY =
    '<h1>New York </h1>' +
    "<p>Casos activos:   190.307</p>"+
	"<p>Casos Presuntos:  N/A</p>"+
	"<p>Fallecidos:  23.541</p>"
	
  const infowindow11 = new google.maps.InfoWindow({
    content: text_NY,
    maxWidth: 200
  });
  const marker_NY = new google.maps.Marker({
    position: {lat: 42.757436, lng: -75.585243},
    map,
    title: "prueba"
  });
  marker_NY.addListener("click", () => {
    infowindow11.open(map, marker_NY);
  });
  
  //Dakota_norte
   const text_Dakota_norte =
    '<h1>North Dakota </h1>' +
    "<p>Casos activos:   6.660</p>"+
	"<p>Casos Presuntos:  N/A</p>"+
	"<p>Fallecidos:  105</p>"
	
  const infowindow12 = new google.maps.InfoWindow({
    content: text_Dakota_norte,
    maxWidth: 200
  });
  const marker_Dakota_norte = new google.maps.Marker({
    position: {lat: 47.497105, lng: -100.546180},
    map,
    title: "prueba"
  });
  marker_Dakota_norte.addListener("click", () => {
    infowindow12.open(map, marker_Dakota_norte);
  });

//Dakota_sur
const text_Dakota_sur =
    '<h1>South Dakota </h1>' +
    "<p>Casos activos:   8.867</p>"+
	"<p>Casos Presuntos:  N/A</p>"+
	"<p>Fallecidos:  134</p>"
	
  const infowindow13 = new google.maps.InfoWindow({
    content: text_Dakota_sur,
    maxWidth: 200
  });
  const marker_Dakota_sur = new google.maps.Marker({
    position: {lat: 44.569277, lng: -99.908973},
    map,
    title: "prueba"
  });
  marker_Dakota_sur.addListener("click", () => {
    infowindow13.open(map, marker_Dakota_sur);
  });

//Nevada
const Nevada =
    '<h1>Nevada </h1>' +
    "<p>Casos activos:   49.306</p>"+
	"<p>Casos Presuntos:  N/A</p>"+
	"<p>Fallecidos:  858</p>"
	
  const infowindow14 = new google.maps.InfoWindow({
    content: Nevada,
    maxWidth: 200
  });
  const marker_Nevada = new google.maps.Marker({
    position: {lat: 39.684296, lng: -116.652137},
    map,
    title: "prueba"
  });
  marker_Nevada.addListener("click", () => {
    infowindow14.open(map, marker_Nevada);
  });

//Oregon
const text_Oregon =
    '<h1>Oregon </h1>' +
    "<p>Casos activos:   18.817</p>"+
	"<p>Casos Presuntos:  N/A</p>"+
	"<p>Fallecidos:  325</p>"
	
  const infowindow15 = new google.maps.InfoWindow({
    content: text_Oregon,
    maxWidth: 200
  });
  const marker_Oregon = new google.maps.Marker({
    position: {lat: 43.686084, lng: -120.739051},
    map,
    title: "prueba"
  });
  marker_Oregon.addListener("click", () => {
    infowindow15.open(map, marker_Oregon);
  });

//new_mexico
const text_new_mexico =
    '<h1>New Mexico </h1>' +
    "<p>Casos activos:   20.796</p>"+
	"<p>Casos Presuntos:  N/A</p>"+
	"<p>Fallecidos:  651</p>"
	
  const infowindow16 = new google.maps.InfoWindow({
    content: text_new_mexico,
    maxWidth: 200
  });
  const marker_new_mexico = new google.maps.Marker({
    position: {lat: 33.918676, lng: -105.863563},
    map,
    title: "prueba"
  });
  marker_new_mexico.addListener("click", () => {
    infowindow16.open(map, marker_new_mexico);
  });

//Missisipi
const text_Missisipi =
    '<h1>Missisipi</h1>' +
    "<p>Casos activos:   59.002</p>"+
	"<p>Casos Presuntos:  879</p>"+
	"<p>Fallecidos:  1693</p>"
	
  const infowindow17 = new google.maps.InfoWindow({
    content: text_Missisipi,
    maxWidth: 200
  });
  const marker_Missisipi = new google.maps.Marker({
    position: {lat: 32.632825, lng: -89.735633},
    map,
    title: "prueba"
  });
  marker_Missisipi.addListener("click", () => {
    infowindow17.open(map, marker_Missisipi);
  });

//California
const text_California =
    '<h1>California</h1>' +
    "<p>Casos activos:   500.130</p>"+
	"<p>Casos Presuntos:  N/A</p>"+
	"<p>Fallecidos:  9.224</p>"
	
  const infowindow18 = new google.maps.InfoWindow({
    content: text_California,
    maxWidth: 200
  });
  const marker_California = new google.maps.Marker({
    position: {lat: 36.078335, lng: -119.332801},
    map,
    title: "prueba"
  });
  marker_California.addListener("click", () => {
    infowindow18.open(map, marker_California);
  });

// Indiana
const text_Indiana =
    '<h1>Indiana</h1>' +
    "<p>Casos activos:   67.122</p>"+
	"<p>Casos Presuntos:  N/A</p>"+
	"<p>Fallecidos:  2.971</p>"
	
  const infowindow19 = new google.maps.InfoWindow({
    content: text_Indiana,
    maxWidth: 200
  });
  const marker_Indiana = new google.maps.Marker({
    position: {lat: 40.557986, lng: -86.505653},
    map,
    title: "prueba"
  });
  marker_Indiana.addListener("click", () => {
    infowindow19.open(map, marker_Indiana);
  });

//Texas
const text_Texas =
    '<h1>Texas</h1>' +
    "<p>Casos activos:   430.485</p>"+
	"<p>Casos Presuntos:  N/A</p>"+
	"<p>Fallecidos:  6.837</p>"
	
  const infowindow20 = new google.maps.InfoWindow({
    content: text_Texas,
    maxWidth: 200
  });
  const marker_Texas = new google.maps.Marker({
    position: {lat: 31.065094, lng: -99.074012},
    map,
    title: "prueba"
  });
  marker_Texas.addListener("click", () => {
    infowindow20.open(map, marker_Texas);
  });

//Arizona
const text_Arizona =
    '<h1>Arizona</h1>' +
    "<p>Casos activos:   177.022</p>"+
	"<p>Casos Presuntos:  N/A</p>"+
	"<p>Fallecidos:  3.747</p>"
	
  const infowindow21 = new google.maps.InfoWindow({
    content: text_Arizona,
    maxWidth: 200
  });
  const marker_Arizona = new google.maps.Marker({
    position: {lat: 34.100816, lng: -112.037879},
    map,
    title: "prueba"
  });
  marker_Arizona.addListener("click", () => {
    infowindow21.open(map, marker_Arizona);
  });
  
//Minnesota
const text_Minnesota =
    '<h1>Minnesota</h1>' +
    "<p>Casos activos:   55.947</p>"+
	"<p>Casos Presuntos:  N/A</p>"+
	"<p>Fallecidos:  1.654</p>"
	
  const infowindow22 = new google.maps.InfoWindow({
    content: text_Minnesota,
    maxWidth: 200
  });
  const marker_Minnesota = new google.maps.Marker({
    position: {lat: 45.838690, lng: -94.393837},
    map,
    title: "prueba"
  });
  marker_Minnesota.addListener("click", () => {
    infowindow22.open(map, marker_Minnesota);
  });

//Michigan
const text_Michigan =
    '<h1>Michigan</h1>' +
    "<p>Casos activos:   82.356</p>"+
	"<p>Casos Presuntos:  8.976</p>"+
	"<p>Fallecidos:  6.457</p>"
	
  const infowindow23 = new google.maps.InfoWindow({
    content: text_Michigan,
    maxWidth: 200
  });
  const marker_Michigan = new google.maps.Marker({
    position: {lat: 43.717855, lng: -85.033484},
    map,
    title: "prueba"
  });
  marker_Michigan.addListener("click", () => {
    infowindow23.open(map, marker_Michigan);
  });

//Wisconsin: 
const text_Wisconsin =
    '<h1>Wisconsin</h1>' +
    "<p>Casos activos:   54.002</p>"+
	"<p>Casos Presuntos:  4.056</p>"+
	"<p>Fallecidos:  311</p>"
	
  const infowindow24 = new google.maps.InfoWindow({
    content: text_Wisconsin,
    maxWidth: 200
  });
  const marker_Wisconsin = new google.maps.Marker({
    position: {lat: 44.412532, lng: -89.669716},
    map,
    title: "prueba"
  });
  marker_Wisconsin.addListener("click", () => {
    infowindow24.open(map, marker_Wisconsin);
  });

// Utah
const text_Utah =
    '<h1>Utah</h1>' +
    "<p>Casos activos:   41.037</p>"+
	"<p>Casos Presuntos:  343</p>"+
	"<p>Fallecidos:  954</p>"
	
  const infowindow25 = new google.maps.InfoWindow({
    content: text_Utah,
    maxWidth: 200
  });
  const marker_Utah = new google.maps.Marker({
    position: {lat: 39.277274, lng: -111.488563},
    map,
    title: "prueba"
  });
  marker_Utah.addListener("click", () => {
    infowindow25.open(map, marker_Utah);
  });

// Missouri
const text_Missouri =
    '<h1>Missouri</h1>' +
    "<p>Casos activos:   51.258</p>"+
	"<p>Casos Presuntos:  N/A</p>"+
	"<p>Fallecidos:  1.253</p>"
	
  const infowindow26 = new google.maps.InfoWindow({
    content: text_Missouri,
    maxWidth: 200
  });
  const marker_Missouri = new google.maps.Marker({
    position: {lat: 38.07656, lng: -92.174598},
    map,
    title: "prueba"
  });
  marker_Missouri.addListener("click", () => {
    infowindow26.open(map, marker_Missouri);
  });

//Iowa
const text_Iowa =
    '<h1>Iowa</h1>' +
    "<p>Casos activos:   44.491</p>"+
	"<p>Casos Presuntos:  N/A</p>"+
	"<p>Fallecidos:  871</p>"
	
  const infowindow27 = new google.maps.InfoWindow({
    content: text_Iowa,
    maxWidth: 200
  });
  const marker_Iowa = new google.maps.Marker({
    position: {lat: 42.141348, lng: -92.679969},
    map,
    title: "prueba"
  });
  marker_Iowa.addListener("click", () => {
    infowindow27.open(map, marker_Iowa);
  });

//Kentucky
const text_Kentucky =
    '<h1>Kentucky</h1>' +
    "<p>Casos activos:   28.922</p>"+
	"<p>Casos Presuntos:  1.801</p>"+
	"<p>Fallecidos:  740</p>"
	
  const infowindow28 = new google.maps.InfoWindow({
    content: text_Kentucky,
    maxWidth: 200
  });
  const marker_Kentucky = new google.maps.Marker({
    position: {lat: 37.451245, lng: -85.187294},
    map,
    title: "prueba"
  });
  marker_Kentucky.addListener("click", () => {
    infowindow28.open(map, marker_Kentucky);
  });

//Louisiana
const text_Louisiana =
    '<h1>Louisiana</h1>' +
    "<p>Casos activos:   28.922</p>"+
	"<p>Casos Presuntos:  1.801</p>"+
	"<p>Fallecidos:  740</p>"
	
  const infowindow29 = new google.maps.InfoWindow({
    content: text_Louisiana,
    maxWidth: 200
  });
  const marker_Louisiana = new google.maps.Marker({
    position: {lat: 31.365759, lng: -92.174598},
    map,
    title: "prueba"
  });
  marker_Louisiana.addListener("click", () => {
    infowindow29.open(map, marker_Louisiana);
  });

for (const city in citymap) {
	const cityCircle = new google.maps.Circle({
      strokeColor: "#EC0707",
      strokeOpacity: 0.9,
      strokeWeight: 2,
      fillColor: "#EC0707",
      fillOpacity: 0.25,
      map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 200
	  
    });
  } 
}



