// script.js
document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([32.3078, -9.2361], 10); 

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // بيانات الإحداثيات
   

  const locations = [
    { id: 1, lat: 32.664108, lng: -9.006899, label: " pH =6.8 <br> Matière organique (MO%)= 4.6 <br> Phosphore=41.1<br>Potassium=276.3"},
    {  lat: 32.664623, lng: -9.036011, label:  "pH =6.7 <br> Matière organique (MO%) =4.3 <br> Phosphore = 41.1 <br> Potassium = 276.3 " }, 
     { lat: 32.664839, lng: -9.068059, label: " pH =7.5 <br> Matière organique (MO%) = 1.6 <br>Phosphore =34.7  <br> Potassium =280.6 "  },
    { lat: 32.663747, lng: -9.0927,   label: " pH =8.9 <br> Matière organique (MO%) = 3.6 <br>Phosphore = 25.2 <br> Potassium = 346.9 "  },
    { lat: 32.640814, lng: -9.114624, label: " pH =7.7 <br> Matière organique (MO%) =4.9  <br>Phosphore = 50.9 <br> Potassium =343.4  "  },
    { lat: 32.605119, lng: -9.0701,   label: " pH =6.3 <br> Matière organique (MO%) = 4.2 <br>Phosphore =16.2  <br> Potassium = 316.4"  },
    { lat: 32.560375, lng: -9.035415, label: " pH =6.2 <br> Matière organique (MO%) = 1.9 <br>Phosphore = 28.4 <br> Potassium =246.2 "  },
    { lat: 32.560375, lng: -9.035415, label: " pH =7.5 <br> Matière organique (MO%) =  3.6<br>Phosphore =  34.9<br> Potassium = 237.7"  },
    { lat: 32.513061, lng: -8.964457, label: " pH =6.8 <br> Matière organique (MO%) = 1.7 <br>Phosphore =30.1  <br> Potassium = 323.5"  },
    { lat: 32.459672, lng: -8.885814, label: " pH =8.7 <br> Matière organique (MO%) =3.9  <br>Phosphore = 22.1 <br> Potassium = 336.6"  },
    { lat: 32.420656, lng: -8.813444, label: " pH =7.8 <br> Matière organique (MO%) = 4.2 <br>Phosphore = 46.2 <br> Potassium = 319.9"  },
    { lat: 401696, lng:  -8.74613,    label: " pH =7.1 <br> Matière organique (MO%) = 4.1 <br>Phosphore =  36.8<br> Potassium = 333.5"  },
    { lat: 32.358516, lng: -8.686569, label: " pH =7.0 <br> Matière organique (MO%) = 2.3 <br>Phosphore = 19.0 <br> Potassium =291.6 "  },
    { lat: 32.32551, lng: -8.628757, label: "  pH =6.8 <br> Matière organique (MO%) = 3.7 <br>Phosphore =  56.9<br> Potassium =215.2 "  },
    { lat: 32.476331, lng: -8.746213, label: " pH =8.2 <br> Matière organique (MO%) = 1.8 <br>Phosphore =31.9  <br> Potassium = 336.0 "  },
    { lat: 32.446014, lng: -8.694312, label: " pH =6.4 <br> Matière organique (MO%) = 4.6 <br>Phosphore =26.1  <br> Potassium = 284.2"  },
    { lat: 32.412752, lng: -8.645407, label: " pH =6.9 <br> Matière organique (MO%) =  3.1<br>Phosphore = 52.6 <br> Potassium = 52.6"  },
    { lat: 32.495717, lng: -8.669867, label: " pH =6.8 <br> Matière organique (MO%) = 4.7 <br>Phosphore = 20.6 <br> Potassium = 194.5"  },
    { lat: 32.561435, lng: -9.187555, label: " pH =8.5 <br> Matière organique (MO%) = 1.1 <br>Phosphore = 17.7 <br> Potassium = 280.1"  },
    { lat: 32.562771, lng: -9.195556, label: " pH =7.4 <br> Matière organique (MO%) = 3.9 <br>Phosphore = 37.6 <br> Potassium =216.0 "  },
    { lat: 32.543909, lng: -9.151411, label: " pH =7.6 <br> Matière organique (MO%) = 2.7 <br>Phosphore = 15.0 <br> Potassium = 324.9"  },
    { lat: 32.52533, lng: -9.132522, label: "  pH =7.9 <br> Matière organique (MO%) =2.9  <br>Phosphore =41.5  <br> Potassium = 227.5"  },
    { lat: 32.50356, lng: -9.084668, label: "  pH =7.6 <br> Matière organique (MO%) = 1 <br>Phosphore = 37.3 <br> Potassium = 233.5 "  },
    { lat: 32.443003, lng: -9.014146, label: " pH =7.5 <br> Matière organique (MO%) = 3 <br>Phosphore = 32.7  <br> Potassium =  342.8"  },
    { lat: 32.397292, lng: -8.953699, label: " pH =7.4 <br> Matière organique (MO%) = 2 <br>Phosphore = 18.5 <br> Potassium = 225.6 "  },
    { lat: 32.362196, lng: -8.898289, label: " pH =7.9 <br> Matière organique (MO%) = 1.4 <br>Phosphore = 27.6 <br> Potassium = 320.3"  },
    { lat: 32.332407, lng: -8.849176, label: " pH =6.8 <br> Matière organique (MO%) =  2<br>Phosphore = 47.8  <br> Potassium = 251.3"  },
    { lat: 32.301544, lng: -8.773617, label: " pH =7.6 <br> Matière organique (MO%) = 1.7 <br>Phosphore =  57.5<br> Potassium = 318.4"  },
    { lat: 32.2728, lng: -8.710652, label: "   pH =7.3 <br> Matière organique (MO%) = 3.7 <br>Phosphore = 49.2 <br> Potassium = 287.5"  },
    { lat: 32.210214, lng: -8.837672, label: " pH =8.5 <br> Matière organique (MO%) =  4.2<br>Phosphore = 50.8 <br> Potassium = 182.0"  },
    { lat: 32.251187, lng: -8.90465, label: "  pH =7.8 <br> Matière organique (MO%) = 4.5 <br>Phosphore = 19.9 <br> Potassium = 249.8"  },
    { lat: 32.28335, lng: -8.987457, label: "  pH =8.6 <br> Matière organique (MO%) = 3.2 <br>Phosphore = 34.5 <br> Potassium = 272.3"  },
    { lat: 32.298542, lng: -9.026394, label: " pH =6.2 <br> Matière organique (MO%) = 3.5 <br>Phosphore = 59.7 <br> Potassium = 208.2"  },
    { lat: 32.317528, lng: -9.059341, label: " pH =7.7 <br> Matière organique (MO%) =  3.6<br>Phosphore = 18.6  <br> Potassium = 282.1 "  },
    { lat: 32.345367, lng: -9.110259, label: " pH =7.9 <br> Matière organique (MO%) = 3.4 <br>Phosphore = 21.3  <br> Potassium =  199.3"  },
    { lat: 32.363078, lng: -9.158181, label: " pH =6.9 <br> Matière organique (MO%) =  3.1<br>Phosphore =57.3  <br> Potassium =  182.9"  },
    { lat: 32.384882, lng: -9.223322, label: " pH =8.7 <br> Matière organique (MO%) = 1.3 <br>Phosphore =  20.4 <br> Potassium = 280.8"  },
    { lat: 32.27935, lng: -9.186599, label: "  pH =8.9 <br> Matière organique (MO%) =  4.2<br>Phosphore = 59.1  <br> Potassium = 290.6"  },
    { lat: 32.2661, lng: -9.13428, label: "    pH =7.6 <br> Matière organique (MO%) = 3.7 <br>Phosphore = 24.2 <br> Potassium =  191.0"  },
    { lat: 32.248679, lng: -9.066989, label: " pH =8.1 <br> Matière organique (MO%) = 3 <br>Phosphore =  20.1 <br> Potassium =  341.9"  },
    { lat: 32.238226, lng: -9.012057, label: " pH =7.4 <br> Matière organique (MO%) =  3.6<br>Phosphore =  35.4<br> Potassium = 338.6 "  },
    { lat: 32.217315, lng: -8.966739, label: " pH =7.3 <br> Matière organique (MO%) = 1.4 <br>Phosphore = 36.1 <br> Potassium =  264.1"  },
    { lat: 32.181291, lng: -8.931033, label: " pH =7.2 <br> Matière organique (MO%) =  2.6<br>Phosphore = 31.7 <br> Potassium = 320.4"  },
    { lat: 32.143744, lng: -8.862231, label: " pH =8.6 <br> Matière organique (MO%) = 2.7 <br>Phosphore = 31.2 <br> Potassium = 221.6 "  },
    { lat: 32.120874, lng: -8.886932, label: " pH =6.5 <br> Matière organique (MO%) =  1.8<br>Phosphore = 31.5 <br> Potassium = 200.7"  },
    { lat: 32.123641, lng: -8.926127, label: " pH =7.6 <br> Matière organique (MO%) = 1.6 <br>Phosphore = 30.3 <br> Potassium = 190.5"  },
    { lat: 32.130556, lng: -8.983286, label: " pH =8.8 <br> Matière organique (MO%) =  2.3<br>Phosphore = 17.6 <br> Potassium = 309.1"  },
    { lat: 32.138853, lng: -9.030647, label: " pH =7.1 <br> Matière organique (MO%) = 4.5 <br>Phosphore = 49.0 <br> Potassium =  307.5"  },
    { lat: 32.119851, lng: -9.113073, label: " pH =6.0 <br> Matière organique (MO%) = 3.3 <br>Phosphore = 55.3 <br> Potassium =306.7 "  },
    { lat: 32.126421, lng: -9.143694, label: " pH =8.5 <br> Matière organique (MO%) =  3.7<br>Phosphore = 60.5 <br> Potassium = 332.8"  },
    { lat: 32.135756, lng: -9.193504, label: " pH =8.0 <br> Matière organique (MO%) =  2.4<br>Phosphore = 26.7 <br> Potassium = 203.9"  },
    { lat: 32.140942, lng: -9.220859, label: " pH =8.3 <br> Matière organique (MO%) = 1.3 <br>Phosphore = 38.1<br> Potassium = 316.3 "  },
    { lat: 32.14509, lng: -9.255971, label: "  pH =6.8 <br> Matière organique (MO%) = 4.3 <br>Phosphore = 33.3 <br> Potassium = 221.3"  },
    { lat: 32.124346, lng: -9.285238, label: " pH =6.0 <br> Matière organique (MO%) = 3.1 <br>Phosphore = 33.0  <br> Potassium = 328.3"  },
    { lat: 32.100831, lng: -9.23951, label: "  pH =8.0 <br> Matière organique (MO%) = 2.3 <br>Phosphore = 22.1 <br> Potassium = 340.7"  },
    { lat: 32.089763, lng: -9.177451, label: " pH =8.1 <br> Matière organique (MO%) = 3.8 <br>Phosphore =15.7  <br> Potassium =309.3  "  },
    { lat: 32.069006, lng: -9.102327, label: " pH =6.2 <br> Matière organique (MO%) = 3.5 <br>Phosphore = 34.9<br> Potassium = 325.6"  },
    { lat: 32.053782, lng: -9.063132, label: " pH =6.6 <br> Matière organique (MO%) =  4.3<br>Phosphore = 28.5<br> Potassium =261.2 "  },
    { lat: 32.03717, lng: -9.017405, label: "  pH =8.3 <br> Matière organique (MO%) =  1.3<br>Phosphore = 55.7 <br> Potassium = 269.7"  },
    { lat: 32.026094, lng: -8.960245, label: " pH =7.9 <br> Matière organique (MO%) = 4 <br>Phosphore = 57.8 <br> Potassium =  256.4"  },
    { lat: 32.009478, lng: -8.893287, label: " pH =8.4 <br> Matière organique (MO%) = 2.5 <br>Phosphore = 52.0 <br> Potassium = 336.1"  },
    { lat: 31.973465, lng: -8.891654, label: " pH =8.5 <br> Matière organique (MO%) =  2.8<br>Phosphore = 40.9  <br> Potassium = 234.4"  },
    { lat: 31.976236, lng: -8.935748, label: " pH =8.7 <br> Matière organique (MO%) = 2.2 <br>Phosphore =59.7  <br> Potassium = 222.7"  },
    { lat: 31.980392, lng: -8.989642, label: " pH =7.0 <br> Matière organique (MO%) = 4.1 <br>Phosphore = 49.8 <br> Potassium = 350.5"  },
    { lat: 31.990088, lng: -9.054967, label: " pH =7.7 <br> Matière organique (MO%) =  4.2<br>Phosphore =34.3  <br> Potassium = 201.1"  },
    { lat: 31.998399, lng: -9.10396, label: "  pH =6.3 <br> Matière organique (MO%) =  4.6<br>Phosphore =  20.2<br> Potassium = 258.5"  },
    { lat: 32.009478, lng: -9.154587, label: " pH =6.0 <br> Matière organique (MO%) = 4.6 <br>Phosphore = 30.4<br> Potassium = 248.9"  },
    { lat: 32.006708, lng: -9.193782, label: " pH =6.5 <br> Matière organique (MO%) = 4.3 <br>Phosphore = 37.2 <br> Potassium = 216.1"  },
    { lat: 32.006708, lng: -9.23951, label: "  pH =7.2 <br> Matière organique (MO%) =4.5  <br>Phosphore = 47.6<br> Potassium =325.7 "  },
    { lat: 32.009478, lng: -9.290137, label: " pH =7.9 <br> Matière organique (MO%) = 2.7 <br>Phosphore = 33.7 <br> Potassium =181.5 "  },
    { lat: 31.914867, lng: -8.951008, label: " pH =8.2 <br> Matière organique (MO%) =1.6  <br>Phosphore =  19.4<br> Potassium = 302.5"  },
    { lat: 31.925582, lng: -9.01704, label: "  pH =7.3 <br> Matière organique (MO%) =  3.8<br>Phosphore = 24.6 <br> Potassium = 221.4"  },
    { lat: 31.928878, lng: -9.085986, label: " pH =7.0 <br> Matière organique (MO%) = 4.4 <br>Phosphore = 48.4 <br> Potassium =342.4 "  },
    { lat: 31.94124, lng: -9.143278, label: "  pH =6.9 <br> Matière organique (MO%) = 1.8 <br>Phosphore = 20.9 <br> Potassium = 188.5"  },
    { lat: 31.947832, lng: -9.19086, label: "  pH =7.0 <br> Matière organique (MO%) =  1.7<br>Phosphore = 41.4 <br> Potassium = 243.4"  },
    { lat: 31.944536, lng: -9.2365,  label: "  pH =8.3 <br> Matière organique (MO%) = 1.6 <br>Phosphore = 26.0 <br> Potassium = 288.8"  },
    { lat: 31.950304, lng: -9.292822, label: " pH =8.3 <br> Matière organique (MO%) = 2.1 <br>Phosphore = 44.1 <br> Potassium = 221.3"  },
    { lat: 31.952776, lng: -9.348173, label: " pH =8.5 <br> Matière organique (MO%) = 2.5 <br>Phosphore =  18.9<br> Potassium = 211.1"  },
    { lat: 31.960191, lng: -9.403523, label: " pH =8.1 <br> Matière organique (MO%) = 1.9 <br>Phosphore =  30.2<br> Potassium = 182.8"  },
    { lat: 31.932999, lng: -9.421002, label: " pH =7.2 <br> Matière organique (MO%) = 1.1 <br>Phosphore =  43.9<br> Potassium = 342.3"  },
    { lat: 31.91734, lng: -9.37342,   label: " pH =7.5 <br> Matière organique (MO%) =  3.2<br>Phosphore = 53.2 <br> Potassium = 281.2"  },
    { lat: 31.900853, lng: -9.351086, label: " pH =6.3 <br> Matière organique (MO%) = 3.2 <br>Phosphore = 34.9 <br> Potassium =217.9 "  },
    { lat: 31.914043, lng: -9.279227, label: " pH =6.7 <br> Matière organique (MO%) = 4.6 <br>Phosphore = 46.9 <br> Potassium = 337.0 "  },
    { lat: 31.943712, lng: -9.205426, label: " pH =8.5 <br> Matière organique (MO%) = 4 <br>Phosphore = 46.8 <br> Potassium =335.0"  },
    { lat: 31.940416, lng: -9.171439, label: " pH =7.9 <br> Matière organique (MO%) =  2.1<br>Phosphore =31.0  <br> Potassium = 296.9"  },
    { lat: 31.920637, lng: -9.143278, label: " pH =6.8 <br> Matière organique (MO%) =  1.7<br>Phosphore = 57.1 <br> Potassium = 297.8 "  },
    { lat: 31.907448, lng: -9.112204, label: " pH =8.5 <br> Matière organique (MO%) = 4.3 <br>Phosphore = 55.5 <br> Potassium = 257.2"  },
    { lat: 31.912394, lng: -9.063651, label: " pH =7.4 <br> Matière organique (MO%) =  1.9<br>Phosphore =31.9  <br> Potassium = 192.6"  },
    { lat: 31.893921, lng: -8.946374, label: " pH =6.8 <br> Matière organique (MO%) = 1 <br>Phosphore = 35.4 <br> Potassium =304.4 "  },
    { lat: 31.888674, lng: -9.008859, label: " pH =8.9 <br> Matière organique (MO%) = 3.2 <br>Phosphore = 28.9 <br> Potassium = 308.4"  },
    { lat: 31.865315, lng: -9.008938, label: " pH =6.4 <br> Matière organique (MO%) = 4.4 <br>Phosphore =45.0  <br> Potassium =221.5 "  },
    { lat: 31.862766, lng: -8.980252, label: " pH =8.5 <br> Matière organique (MO%) =  4.4<br>Phosphore = 36.6 <br> Potassium =348.0 "  },
    { lat: 31.863332, lng: -8.951234, label: " pH =6.9 <br> Matière organique (MO%) = 3.7 <br>Phosphore = 50.9 <br> Potassium = 194.0"  },
    { lat: 31.839816, lng: -8.960239, label: " pH =8.2 <br> Matière organique (MO%) =  2.6<br>Phosphore = 26.4 <br> Potassium =180.8 "  },
    { lat: 31.840383, lng: -8.993261, label: " pH =8.7 <br> Matière organique (MO%) =  3.8<br>Phosphore = 21.5 <br> Potassium =301.4 "  },
    { lat: 31.8401, lng: -9.014608,   label: " pH =7.3 <br> Matière organique (MO%) =  3.5<br>Phosphore = 21.5  <br> Potassium =301.4"  },
    { lat: 31.826214, lng: -9.024948, label: " pH =6.9 <br> Matière organique (MO%) =  3.5<br>Phosphore = 44.1 <br> Potassium = 310.6"  },
    { lat: 31.819412, lng: -9.000599, label: " pH =6.4 <br> Matière organique (MO%) =  1.5<br>Phosphore =32.7  <br> Potassium =346.6 "  },
    { lat: 31.80524, lng: -8.979585, label: "  pH =7.2 <br> Matière organique (MO%) =  2.5<br>Phosphore = 21.1 <br> Potassium = 252.7"  },
    { lat: 31.789365, lng: -8.999598, label: " pH =8.1 <br> Matière organique (MO%) =  1.4<br>Phosphore = 17.6 <br> Potassium = 253.1"  },
    
   ];

 
  const customIcon = L.icon({
    iconUrl: '../images/iconfinal.png', // Chemin vers votre image personnalisée
    iconSize: [38, 38], // Taille de l'icône en pixels
    iconAnchor: [19, 38], // Point d'ancrage (centre du bas de l'icône)
    popupAnchor: [0, -38] // Position du popup par rapport à l'icône
});
  // Ajoutez les marqueurs avec popups
  locations.forEach(location => {
    L.marker([location.lat, location.lng] , { icon: customIcon })
      .bindPopup(`
         <div class="popup-content">
            <div class="popup-label">
              <strong>${location.label}</strong>
            </div>
            <div class="popup-button-container">
              <button class="redirectButton" onclick="redirectToSection('redirectButton')"">Voir plus</button>
            </div>
          </div>
      `)
      .addTo(map);
  });
  


});
