//--------------------- BASIC SETUP ---------------
var building = "main";
var level = "l0";
var MIN_ZOOM = 2;
var MAX_ZOOM = 3;
var INITIAL_ZOOM = 2;
var ACTUAL_SIZE_ZOOM = 3;

// creating the slippy map
var map = L.map('map', {
    minZoom: MIN_ZOOM,
    maxZoom: MAX_ZOOM,
    center: [0, -976],
    zoom: INITIAL_ZOOM,
    crs: L.CRS.Simple
});

// image dimensions
var w = 2182,
    h = 1542,
    url = "map/" + building + "-" + level + ".png";

// calculate the edges of the image, in coordinate space
var southWest = map.unproject([0, h], ACTUAL_SIZE_ZOOM);
var northEast = map.unproject([w, 0], ACTUAL_SIZE_ZOOM);
var bounds = new L.LatLngBounds(southWest, northEast);

// add image overlay so that it covers the entire map
overlay = L.imageOverlay(url, bounds);
overlay.addTo(map);

// tell leaflet that map is exactly as big as the image
map.setMaxBounds(bounds);
map.zoomControl.setPosition('bottomright');

//tooltip
$(document).ready(function () {
    // $('#fromTerm').tooltip({'trigger': 'hover', 'title': 'Search here. Or if you wish to look for directions, enter the starting room here. Then, enter the ending room in the next field.'});
    // $('#toTerm').tooltip({'trigger': 'hover', 'title': 'For directions, enter the ending room here. To search for a room, enter in the field next to this.'});
    $('#buildings').tooltip({'trigger': 'hover', 'title': 'Click on the building you wish to navigate to','placement': 'bottom'});
    $('#portalChoice').tooltip({'trigger': 'hover', 'title': 'Choose whether to take the stairs or the lift','placement': 'right'});
});

//--------------------- CHANGING LAYOUT/IMAGE ---------------
var rmLayerName;
var toiletLayerName;
var stairsLayerName;
var liftLayerName;

function changeBuilding(choice){
    building = choice;
    generateLvlBtns(choice);
}

function changeLevel(choice){
    level = choice;
    changeURL(building, level);
    searchMarkerLayerGroup.clearLayers();
    navPolylineLayerGroup.clearLayers();
}

function generateLvlBtns(building){
    // Remove the existing button groups
    //$("#levels").remove();

    let ms = ["l1","l2","l3","l4","l5"];
    let n12 = ["b5","b4","b3","b2","b1","l1"];
    let n34 = ["b4","b3","b2","b1","l1","l2"];

    let header = '<label class="btn btn-secondary building-btn btn-sm">';
    let footer = '</label>\n';

    let final = String("");

    switch (building) {
        case "n1":
        case "n2":
            for (let i=0;i<n12.length;i++){
                let oneButton = header + '<input type="radio" name="levels" id="l' +n12[i]+ '" onclick="changeLevel(\'' +n12[i]+ '\')">' +n12[i].toUpperCase()+ '\n' + footer;
                final += oneButton;
            }
            break;
        case "n3":
        case "n4":
            for (let i=0;i<n34.length;i++){
                let oneButton = header + '<input type="radio" name="levels" id="l' +n34[i]+ '" onclick="changeLevel(\'' +n34[i]+ '\')">' +n34[i].toUpperCase()+ '\n' + footer;
                final += oneButton;
            }
            break;
        case "ms":
            for (let i=0;i<ms.length;i++){
                let oneButton = header + '<input type="radio" name="levels" id="l' +ms[i]+ '" onclick="changeLevel(\'' +ms[i]+ '\')">' +ms[i].toUpperCase()+ '\n' + footer;
                final += oneButton;
            }
            break;
        default:
            break;
    }

    $('#levels-container').html('<div class="btn-group btn-group-toggle" data-toggle="buttons" id="levels">' + final + '</div>');
}

var mapImageInfo = {
    "main": {
      "l0": [2182,1542,0,3,2]
    },
    "ms": {
        "l1": [17381,6634,0,3,0],
        "l2": [15338,4779,0,3,0],
        "l3": [7856,7320,0,3,0],
        "l4": [15439,2623,0,3,0],
        "l5": [15877,2800,0,3,0]
    },
    "n1": {
        "b5": [17605,4052,0,3,0],
        "b4": [15657,2450,0,3,1],
        "b3": [15605,2384,0,3,1],
        "b2": [15888,2588,0,3,1],
        "b1": [15529,1777,0,3,1],
        "l1": [15678,1553,0,3,1]
    },
    "n2": {
        "b5": [17575,2934,0,3,0],
        "b4": [15639,2198,0,3,1],
        "b3": [15716,2192,0,3,1],
        "b2": [15749,2191,0,3,1],
        "b1": [15687,1859,0,3,1],
        "l1" : [15518,1365,0,3,1]
    },
    "n3": {
        "b4": [17791,4245,0,3,0],
        "b3": [15842,3493,0,3,1],
        "b2": [15754,3113,0,3,1],
        "b1": [15842,2835,0,3,1],
        "l1": [15508,2190,0,3,1],
        "l2": [15807,1698,0,3,1]
    },
    "n4": {
        "b4": [17698,4182,0,3,0],
        "b3": [15678,2951,0,3,1],
        "b2": [15649,2677,0,3,1],
        "b1": [6002,829,1,3,2],
        "l1": [15807,2294,0,3,1],
        "l2": [15471,1573,0,3,1]
    }
};

// Create the URL link and change the image overlay
function changeURL(building, level){

    switch (level) {
        case "l41":
        case "l42":
        case "l43":
            window.level="l4";
            level="l4";
            break;
        case "l51":
        case "l52":
            window.level="l5";
            level="l5";
            break;
        default:
            break;
    }

    let url = "map/" + building + "-" + level + ".png";

    // Update image dimensions
    w = mapImageInfo[building][level][0];
    h = mapImageInfo[building][level][1];

    // Re-calculate the edges of the image, in coordinate space
    southWest = map.unproject([0, h], ACTUAL_SIZE_ZOOM);
    northEast = map.unproject([w, 0], ACTUAL_SIZE_ZOOM);
    bounds = new L.LatLngBounds(southWest, northEast);

    MIN_ZOOM = mapImageInfo[building][level][2];
    MAX_ZOOM = mapImageInfo[building][level][3];
    INITIAL_ZOOM = mapImageInfo[building][level][4];

    // Update center, minZoom, maxZoom, initialSizeZoom, URL and bounds
    overlay.setUrl(url);
    overlay.setBounds(bounds);
    map.setMinZoom(MIN_ZOOM);
    map.setMaxZoom(MAX_ZOOM);
    map.setZoom(INITIAL_ZOOM);
    map.setMaxBounds(bounds);

    let buildingName;
    switch (building) {
        case("main"):
            buildingName = "Campus Map";
            $('#viewing-container').text(buildingName);
            break;
        case("ms"):
            buildingName = "Main Spine";
            $('#viewing-container').text(buildingName +' - '+ level.toUpperCase());
            $("#"+building).click();
            //$("#"+level).click();
            break;
        default:
            buildingName = building.toUpperCase();
            $('#viewing-container').text(buildingName +' - '+ level.toUpperCase());
            $("#"+building).click();
            //$("#"+level).click();
            break;
    }

    // Call changeRmLayers()
    changeRmLayers();
}

// Changing layers
function changeRmLayers(){

    // Clear map of any layers - both room and toilet layers
    if (window[rmLayerName]) {map.removeLayer(window[rmLayerName]);}
    if (window[toiletLayerName]) {map.removeLayer(window[toiletLayerName]);}
    if (window[stairsLayerName]) {map.removeLayer(window[stairsLayerName]);}
    if (window[liftLayerName]) {map.removeLayer(window[liftLayerName]);}

    if (building === "main") {
        map.addLayer(campusLayer);
    } else {
        if(map.hasLayer(campusLayer)) {map.removeLayer(campusLayer);}

        // Create a new layer name
        rmLayerName = "roomLayer" + building.toUpperCase() + level;
        toiletLayerName = "toiletLayer" + building.toUpperCase() + level;
        stairsLayerName = "stairsLayer" + building.toUpperCase() + level;
        liftLayerName = "liftLayer" + building.toUpperCase() + level;

        // Call generateRoomLayer() and add layer to map
        window[rmLayerName] = generateRoomLayer();
        window[toiletLayerName] = generateToiletLayer();
        window[stairsLayerName] = generateStairsLayer();
        window[liftLayerName] = generateLiftLayer();
        map.addLayer(window[rmLayerName]);
        map.addLayer(window[toiletLayerName]);
        map.addLayer(window[stairsLayerName]);
        map.addLayer(window[liftLayerName]);
    }
}

var campusLayer = new L.geoJSON(buildings, {
    style: roomStyle,
    coordsToLatLng: function (newlatlng) {
        return (map.unproject([newlatlng[0], newlatlng[1]], map.getMaxZoom()));
    },
    onEachFeature: forEachRoomFeature
});
map.addLayer(campusLayer);

function generateRoomLayer(){
    return new L.geoJSON(rooms, {
        filter: function (feature) {
            if (building !== "ms") {
                return (feature.properties.building === building && feature.properties.level === level);
            } else {
                switch (level){
                    case "l1":
                    case "l2":
                    case "l3":
                        return (feature.properties.building === building && feature.properties.level === level);
                    case "l4":
                        return (feature.properties.building === building && ((feature.properties.level === "l41") || (feature.properties.level === "l42") || (feature.properties.level === "l43")));
                    case "l5":
                        return (feature.properties.building === building && ((feature.properties.level === "l51") || (feature.properties.level === "l52")));
                }
            }
        },
        style: roomStyle,
        coordsToLatLng: function (newlatlng) {
            return (map.unproject([newlatlng[0], newlatlng[1]], map.getMaxZoom()));
        },
        pointToLayer: function (feature, newlatlng) {
            return L.marker(newlatlng);
        },
        onEachFeature: forEachRoomFeature
    });
}

function forEachRoomFeature(feature, layer) {
    if (building !== "main"){ //not campus map
        if (typeof feature.properties.popupContent !== 'undefined' && feature.properties.popupContent !== '') {
            layer.bindPopup("<table style='width:100%'><tr><td><img src='"+feature.properties.imgSrc+"'/></td><td style='vertical-align: top'><span style='font-size: 16px; line-height: 80%; font-weight: bold'>"+feature.properties.name+"</span><br>"+feature.properties.id+"<br><br>"+feature.properties.popupContent+"</td></tr></table>", {
                minWidth:400
            });}
        else {layer.bindPopup("<p><b>"+ feature.properties.name + "</b><br>" + feature.properties.id+"</p>");}

        layer.bindTooltip(feature.properties.name,{
            offset: L.point(0,0),
            permanent: true,
            direction: "center",
            className: "room-labels",
            sticky: true
        });

        layer.toGeoJSON();

        layer.on("click", function (e) {
            roomOnClick(feature.properties.name, feature.properties.id);
        });

        switch(feature.properties.roomType) {
            case ("academic"):
                layer.on('mouseover', function () {this.setStyle({'fillColor': '#b3e698'});});
                break;
            case("eatery"):
                layer.on('mouseover', function () {this.setStyle({'fillColor': '#ff9797'});});
                break;
            case("nonacademic"):
            default:
                layer.on('mouseover', function () {this.setStyle({'fillColor': '#fdcf7b'});});
                break;//not campus map
        }

    } else {
        layer.on("click", function (e) {
            building = feature.properties.building;
            level = "l1";
            changeURL(building, level);
        });
        layer.on('mouseover', function () {this.setStyle({'fillColor': '#cebc00'});});

        layer.bindTooltip(feature.properties.tooltip,{
            className: "building-labels",
            sticky: true
        });
    }

    layer.on('mouseout', function () {this.setStyle({'fillColor': 'transparent'});});

}

map.on("zoomend", function () { //Changing the font size of the tooltip/room names dynamically while zooming in/out
    let zoomLevel = map.getZoom();
    let tooltip = $('.leaflet-tooltip.room-labels');

    switch (zoomLevel) {
        case 0:
            tooltip.css('font-size', 6);
            break;
        case 1:
            tooltip.css('font-size', 12);
            break;
        case 2:
            tooltip.css('font-size', 14);
            break;
        case 3:
        default:
            tooltip.css('font-size', 18);
            break;
    }
});

function generateToiletLayer(){
    let newGeoJson = new L.geoJSON(toilet, {
        filter: function(feature){
            return(feature.properties.building === building && feature.properties.level === level);
        },
        coordsToLatLng: function (newlatlng) {
            return (map.unproject([newlatlng[0], newlatlng[1]], map.getMaxZoom()));
        },
        pointToLayer: toiletsIcons,
        onEachFeature: function (feature, layer) {
            layer.bindTooltip(feature.properties.tooltipContent, {
                sticky:true
            });
        }
    });
    return newGeoJson;
}

// Get the different icons according to the toilet gender
function toiletsIcons(feature, latlng) {
    switch(feature.properties["gender"]) {
        case "m":
            let maletoiletIcon = new L.icon({
                iconUrl: 'images/male.png',
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });
            return L.marker(latlng, {icon: maletoiletIcon});
        case "f":
            let femaletoiletIcon = new L.icon({
                iconUrl: 'images/female.png',
                iconSize:     [30, 30],
                iconAnchor:   [15, 15]
            });
            return L.marker(latlng, {icon: femaletoiletIcon});
        case "h":
            let disabledtoiletIcon = new L.icon({
                iconUrl: 'images/handicapped.png',
                iconSize:     [30, 30],
                iconAnchor:   [15, 15]
            });
            return L.marker(latlng, {icon: disabledtoiletIcon});
    }
}

function toiletsIconsSmall(feature, latlng) {
    switch(feature.properties["gender"]) {
        case "m":
            let maletoiletIcon = new L.icon({
                iconUrl: 'images/male.png',
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });
            return L.marker(latlng, {icon: maletoiletIcon});
        case "f":
            let femaletoiletIcon = new L.icon({
                iconUrl: 'images/female.png',
                iconSize:     [20, 20],
                iconAnchor:   [10, 10]
            });
            return L.marker(latlng, {icon: femaletoiletIcon});
        case "h":
            let disabledtoiletIcon = new L.icon({
                iconUrl: 'images/handicapped.png',
                iconSize:     [20, 20],
                iconAnchor:   [10, 10]
            });
            return L.marker(latlng, {icon: disabledtoiletIcon});
    }
}

function generateStairsLayer(){
    let newGeoJson = new L.geoJSON(stairs, {
        filter: function(feature){
            return(feature.properties.building === building && feature.properties.level === level);
        },
        coordsToLatLng: function (newlatlng) {
            return (map.unproject([newlatlng[0], newlatlng[1]], map.getMaxZoom()));
        },
        pointToLayer: function(feature, latlng) {
            let smallIcon = new L.Icon({
                iconSize: [30, 30],
                iconAnchor: [15, 15],
                iconUrl: 'images/stairs.png'
            });
            return L.marker(latlng, {icon: smallIcon});
        },
        onEachFeature: function (feature, layer) {
            layer.bindTooltip(feature.properties.tooltipContent, {
                sticky:true
            });
        }
    });
    return newGeoJson;
}

function generateLiftLayer(){
    let newGeoJson = new L.geoJSON(lifts, {
        filter: function(feature){
            return(feature.properties.building === building && feature.properties.level === level);
        },
        coordsToLatLng: function (newlatlng) {
            return (map.unproject([newlatlng[0], newlatlng[1]], map.getMaxZoom()));
        },
        pointToLayer: function(feature, latlng) {
            let smallIcon = new L.Icon({
                iconSize: [20, 20],
                iconAnchor: [10, 10],
                iconUrl: 'images/lift.png'
            });
            return L.marker(latlng, {icon: smallIcon});
        },
        onEachFeature: function (feature, layer) {
            layer.bindTooltip(feature.properties.tooltipContent, {
                sticky:true
            });
        }
    });
    return newGeoJson;
}

//--------------------- SIDEBAR ---------------
// create the sidebar instance and add it to the map
var sidebar = L.control.sidebar({container: 'sidebar', autopan: true})
    .addTo(map);

//sidebar.options.autopan = true;

//--------------------- MODAL ---------------
$(document).ready(function(){
		$("#modalWelcome").modal('show');
	});

/*
//--------------- LAYERS ---------------- TODO add more icon layers
var overlayMaps = {
    "Toilets": toiletLayerN4l1,
    "N4": roomLayerN4l1
};

L.control.layers(null,overlayMaps,{collapsed:false}).addTo(map);*/
