function searchFn(roomName){

    let roomNameOriginal = removeAt(roomName);
    let roomNameRegex = new RegExp("\\b" + roomNameOriginal + "\\b", "gi");

    // Loop through the GEOJson file to match the room name
    for(let i = 0; i < rooms.length; i++) {
        if(roomNameRegex.test(rooms[i].properties.name) || roomNameRegex.test(rooms[i].properties.id)){
            building = rooms[i].properties.building;
            level = rooms[i].properties.level;
            // changeURL(building,level);
            // let roomCoord = rooms[i].geometry.coordinates;
            // let lat = (roomCoord[0][0][0] + roomCoord[0][2][0])/2;
            // let lng = (roomCoord[0][0][1] + roomCoord[0][1][1])/2;
            // L.marker(map.unproject(L.point(lat, lng),map.getMaxZoom())).addTo(searchMarkerLayerGroup);
            // map.setView(map.unproject(L.point(lat, lng)), 0);
            // sidebar.close('menu');
            return rooms[i].geometry.coordinates;
        }
    }
    return("Warning");
}

function removeAt(roomName) { //Returns ID if autocomplete suggestion is selected. Else, return the same word
    let n = roomName.lastIndexOf('@');
    if (n !== -1) {roomName = roomName.substring(n+2,roomName.length);}
    return roomName;
}

var rooms = [
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-03",
            "name": "One-Stop @ SAC (SAO)",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[1567,2253],[1567,1458],[2388,1458],[2388,1740],[2542,1740],[2542,2253]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-05",
            "name": "Student Activities Centre (SAC)",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[713,3727],[455,3533],[258,3274],[133,2970],[89,2648],[130,2323],[258,2016],[455,1760],[710,1560],[745,1612],[954,1513],[1077,1482],[1290,1453],[1552,1453],[1557,2256],[1876,2259],[1880,3090],[1418,3089],[1418,3175],[1063,3177]]]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "building": "ms",
            "level": "l1",
            "id": "NS3-01-06",
            "name": "Global Lounge",
            "roomType": "nonacademic",
            "popupContent": ""
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[1355,3965],[1355,3904],[1018,3859],[718,3732],[1065,3183],[1421,3184],[1421,3296],[1595,3298],[1595,3511],[1695,3513],[1695,3965]]]
        }
    }
    ];

module.exports = searchFn;

