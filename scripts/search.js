$("#fromTerm, #toTerm").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#searchBtn").click();
    }
});

// Set the room name in the from term field
var roomOnClick = function(roomName, roomID){
    $('#toTerm').val(roomName + " @ " + roomID);
};

// Autocomplete
$( function() {
    $( "#fromTerm, #toTerm" ).autocomplete({
        source: rooms.map(({properties})=>properties).map(({id}) => id).map(function (d,i) {
            let c = rooms.map(({properties})=>properties).map(({name})=>name);
            return String(c[i]) + " @ "+ d
        })
    });
} );

var searchMarkerLayerGroup = L.layerGroup().addTo(map);

function swapPressed() {
    let fromTerm = $('#fromTerm').val();
    let toTerm =  $('#toTerm').val();
    console.log(fromTerm);
    console.log(toTerm);
    $('#toTerm').val(fromTerm);
    $('#fromTerm').val(toTerm);
}

// When search is pressed, check if it's a simple search or looking for directions
function searchPressed(){

    let fromTerm = $('#fromTerm').val();
    let toTerm = $('#toTerm').val();
    if ((fromTerm != null && fromTerm !== '')||(toTerm != null && toTerm !== '')){
        // Remove any markers
        searchMarkerLayerGroup.clearLayers();
        navPolylineLayerGroup.clearLayers();
        $("#dirControl").remove();
        $("#detailsControl").remove();

        if (fromTerm != null && fromTerm !== '' && toTerm != null && toTerm !== ''){
            directions()
        } else if (toTerm === null || toTerm === ''){
            search(fromTerm)
        } else {
            search(toTerm)
        }
    }

    // if (fromTerm.val() != null && fromTerm.val() !== '') {
    //     // Remove any markers
    //     searchMarkerLayerGroup.clearLayers();
    //     navPolylineLayerGroup.clearLayers();
    //     $("#dirControl").remove();
    //     $("#detailsControl").remove();
    //
    //     // Check if it's a directions or a search
    //     if ($('#toTerm').val().length > 0) {}
    //     else {search()}
    // }

}

function removeAt(roomName) { //Returns ID if autocomplete suggestion is selected. Else, return the same word
    let n = roomName.lastIndexOf('@');
    if (n !== -1) {roomName = roomName.substring(n+2,roomName.length);}
    console.log(roomName);
    return roomName;
}

// Search Function
function search(roomName){
    // Get the room name from the search bar (first entry)
    // Caps should not matter. search for name/ID
    let roomNameOriginal = removeAt(roomName);
    let roomNameRegex = new RegExp("\\b" + roomNameOriginal + "\\b", "gi");

    // Loop through the GEOJson file to match the room name
    for(let i = 0; i < rooms.length; i++) {
        if(roomNameRegex.test(rooms[i].properties.name) || roomNameRegex.test(rooms[i].properties.id)){
            building = rooms[i].properties.building;
            level = rooms[i].properties.level;
            changeURL(building,level);
            let roomCoord = rooms[i].geometry.coordinates;
            let lat = (roomCoord[0][0][0] + roomCoord[0][2][0])/2;
            let lng = (roomCoord[0][0][1] + roomCoord[0][1][1])/2;
            map.setView(map.unproject(L.point(lat, lng)),0);
            console.log(map.unproject(L.point(lat, lng)));
            L.marker(map.unproject(L.point(lat, lng),map.getMaxZoom())).addTo(searchMarkerLayerGroup);
            sidebar.close('menu');
            return;
        }
    }
    alert("Can't find: " +roomNameOriginal+ ". Room does not exist!");
}
