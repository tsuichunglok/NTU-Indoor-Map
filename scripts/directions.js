// Directions Function
var navPolylineLayerGroup = L.layerGroup().addTo(map);
let portalChoice = "Stairs";

$('#portalChoice').click(function() {
    let radioValue = $("input[name='portalChoice']:checked").val();
    if(radioValue){portalChoice=radioValue;}
    searchPressed();
});

function directions(){

    // 1. Get the starting and end points and their respective nodes
    let fromRm = removeAt($('#fromTerm').val());
    let toRm = removeAt($('#toTerm').val());

    // 2. Find the building and level nodes that we should locate
    let fromLevelGraph = findLevelNodes(fromRm); //Returns: [0]graphN4l1, [1]building, [2]level, [3]id
    let toLevelGraph = findLevelNodes(toRm); //Returns: [0]graphN4l1, [1]building, [2]level, [3]id

    if (fromLevelGraph[3] === toLevelGraph[3]) {alert("Same room entered!")}

    // 3. Create an empty list to contain all the final directions graphs that need to be plotted
    let directionsSets = [];

    if (fromLevelGraph[0] === toLevelGraph[0]) { // 3a. SAME BUILDING AND LEVEL: one graph required
        shortestPathCombined(fromLevelGraph, fromLevelGraph[3], toLevelGraph[3]);
        sidebar.close('menu');

    } else if (fromLevelGraph[1] === toLevelGraph[1]) { //3b. SAME BUILDING, DIFFERENT LEVELS: go to lift/stairs
        //3bi. Ask user if he wishes to take the stairs or the lift
        sameBuildDiffLvl(portalChoice, fromLevelGraph, toLevelGraph, directionsSets,"now");
        createNavControls(directionsSets);

    } else { //3c. DIFFERENT BUILDING
        if (fromLevelGraph[1] === "ms") { //Check if starting point is MS. Yes: M-->NM
            if (fromLevelGraph[2] === toLevelGraph[2]){ //Both same level? Yes: SBSL-->SBSL
                directionsSets.push([fromLevelGraph, fromLevelGraph[3], findMainDoor("main", ["",toLevelGraph[1],toLevelGraph[2]])]);
                directionsSets.push([toLevelGraph, findMainDoor("norm", toLevelGraph), toLevelGraph[3]]);
            } else { //No: Check if NM is connected to MS
                if (((toLevelGraph[1] === "n1" || toLevelGraph[1] === "n2") && toLevelGraph[2] === "l1") || ((toLevelGraph[1] === "n4" || toLevelGraph[1] === "n3") && (toLevelGraph[2] === "l1" || toLevelGraph[2] === "l2"))) { //Yes: SBDL(MS)-->SBSL
                    sameBuildDiffLvl(portalChoice,fromLevelGraph,["graphMS" + toLevelGraph[2],"ms",toLevelGraph[2],findMainDoor("main", ["",toLevelGraph[1],toLevelGraph[2]])],directionsSets);
                    directionsSets.push([toLevelGraph, findMainDoor("norm", toLevelGraph), toLevelGraph[3]]);
                } else if (((toLevelGraph[1] === "n1"||toLevelGraph[1] ==="n2") && fromLevelGraph[2] === "l1") || ((toLevelGraph[1] === "n4"|| toLevelGraph[1] === "n3") && (fromLevelGraph[2] === "l1"|| fromLevelGraph[2] === "l2"))) { //No: Check if MS connected to NM. If yes: SBSL (MS)-->SBDL
                    directionsSets.push([fromLevelGraph, fromLevelGraph[3], findMainDoor("main", ["",toLevelGraph[1],fromLevelGraph[2]])]);
                    sameBuildDiffLvl(portalChoice,["graph"+toLevelGraph[1].toUpperCase()+fromLevelGraph[2],toLevelGraph[1],fromLevelGraph[2], findMainDoor("norm", ["graph"+toLevelGraph[1].toUpperCase()+fromLevelGraph[2]])],toLevelGraph,directionsSets);
                } else { //No: SBDL(MS to l1)-->SBDL
                    sameBuildDiffLvl(portalChoice,fromLevelGraph,["graphMSl1","ms","l1",findMainDoor("main", ["",toLevelGraph[1],"l1"])],directionsSets);
                    sameBuildDiffLvl(portalChoice,["graph"+toLevelGraph[1].toUpperCase()+"l1",toLevelGraph[1],"l1", findMainDoor("norm", "graph"+toLevelGraph[1].toUpperCase()+"l1")],toLevelGraph,directionsSets);
                }
            }
        } else if (toLevelGraph[1] === "ms") { //Check if destination is MS. Yes: NM-->M
            if (fromLevelGraph[2] === toLevelGraph[2]){ //Both same level? Yes: SBSL-->SBSL
                directionsSets.push([fromLevelGraph, fromLevelGraph[3], findMainDoor("norm", fromLevelGraph)]);
                directionsSets.push([toLevelGraph, findMainDoor("main", ["",fromLevelGraph[1],toLevelGraph[2]]), toLevelGraph[3]]);
            } else { //No: Check if NM is connected to MS
                if (((fromLevelGraph[1] === "n1"||fromLevelGraph[1] ==="n2") && fromLevelGraph[2] === "l1") || ((fromLevelGraph[1] === "n4"||fromLevelGraph[1] ==="n3") && (fromLevelGraph[2] === "l1"|| fromLevelGraph[2] === "l2"))) { //Yes: SBSL-->SBDL(MS)
                    directionsSets.push([fromLevelGraph, fromLevelGraph[3], findMainDoor("norm", fromLevelGraph)]);
                    sameBuildDiffLvl(portalChoice, ["graphMS" + fromLevelGraph[2],"ms",fromLevelGraph[2],findMainDoor("main", ["",fromLevelGraph[1],fromLevelGraph[2]])],toLevelGraph,directionsSets);
                } else if (((fromLevelGraph[1] === "n1"||fromLevelGraph[1] ==="n2") && toLevelGraph[2] === "l1") || ((fromLevelGraph[1] === "n4"||fromLevelGraph[1] ==="n3") && (toLevelGraph[2] === "l1"||toLevelGraph[2] ==="l2"))) { //No: Check if MS connected to NM. If yes: SBDL-->SBSL (MS)
                    sameBuildDiffLvl(portalChoice,fromLevelGraph,["graph"+fromLevelGraph[1].toUpperCase()+toLevelGraph[2],fromLevelGraph[1],toLevelGraph[2], findMainDoor("norm", ["graph"+fromLevelGraph[1].toUpperCase()+toLevelGraph[2]])],directionsSets);
                    directionsSets.push([toLevelGraph, findMainDoor("main", ["",fromLevelGraph[1],toLevelGraph[2]]),toLevelGraph[3]]);
                } else { //No: SBDL(NM to l1)-->SBDL(MS)
                    sameBuildDiffLvl(portalChoice,fromLevelGraph,["graph"+fromLevelGraph[1].toUpperCase()+"l1",fromLevelGraph[1],"l1", findMainDoor("norm", ["graph"+fromLevelGraph[1].toUpperCase()+"l1"])],directionsSets);
                    sameBuildDiffLvl(portalChoice,["graphMSl1","ms","l1",findMainDoor("main", ["",fromLevelGraph[1],"l1"])],toLevelGraph,directionsSets);
                }
            }
        } else { //NM-->NM. Check if they are connected to MS
            let fromConnected = Boolean(((fromLevelGraph[1] === "n1"||fromLevelGraph[1] ==="n2") && fromLevelGraph[2] === "l1") || ((fromLevelGraph[1] === "n4"||fromLevelGraph[1] ==="n3") && (fromLevelGraph[2] === "l1"||fromLevelGraph[2] === "l2")));
            let toConnected = Boolean(((toLevelGraph[1] === "n1"||toLevelGraph[1] ==="n2") && toLevelGraph[2] === "l1") || ((toLevelGraph[1] === "n4"||toLevelGraph[1] === "n3") && (toLevelGraph[2] === "l1"||toLevelGraph[2] ==="l2")));

            if ((fromLevelGraph[2] === toLevelGraph[2]) && fromConnected) { //Both same level and connected to MS? Yes: SBSL-->SBSL(MS)-->SBSL
                directionsSets.push([fromLevelGraph, fromLevelGraph[3], findMainDoor("norm", fromLevelGraph)]);
                directionsSets.push([["graphMS" + fromLevelGraph[2],"ms",fromLevelGraph[2]], findMainDoor("main", ["",fromLevelGraph[1],fromLevelGraph[2]]), findMainDoor("main", ["",toLevelGraph[1],toLevelGraph[2]])]);
                directionsSets.push([toLevelGraph, findMainDoor("norm", toLevelGraph), toLevelGraph[3]]);
            } else {
                if (fromConnected && toConnected) { //Both are connected to MS: SBSL(NM)-->SBDL(MS)-->SBSL [e.g. N4l2 --> N3l1]
                    directionsSets.push([fromLevelGraph, fromLevelGraph[3], findMainDoor("norm", fromLevelGraph)]);
                    sameBuildDiffLvl(portalChoice, ["graphMS" + fromLevelGraph[2],"ms",fromLevelGraph[2],findMainDoor("main", ["",fromLevelGraph[1],fromLevelGraph[2]])],["graphMS" + toLevelGraph[2],"ms",toLevelGraph[2],findMainDoor("main", ["",toLevelGraph[1],toLevelGraph[2]])],directionsSets);
                    directionsSets.push([toLevelGraph, findMainDoor("norm", toLevelGraph), toLevelGraph[3]]);
                } else if (fromConnected && !toConnected) { //NM1 connected: SBSL(NM1)-->SBSL(MS)-->SBDL(NM2)
                    directionsSets.push([fromLevelGraph, fromLevelGraph[3], findMainDoor("norm", fromLevelGraph)]);
                    directionsSets.push([["graphMS"+fromLevelGraph[2],"ms",fromLevelGraph[2]], findMainDoor("main", ["",fromLevelGraph[1],fromLevelGraph[2]]), findMainDoor("main", ["",toLevelGraph[1],fromLevelGraph[2]])]);
                    sameBuildDiffLvl(portalChoice, ["graph"+toLevelGraph[1].toUpperCase()+fromLevelGraph[2],toLevelGraph[1],fromLevelGraph[2],findMainDoor("norm", ["graph"+toLevelGraph[1].toUpperCase()+fromLevelGraph[2]])],toLevelGraph,directionsSets);
                } else if (!fromConnected && toConnected) { //SBDL(NM1 to l1/2)--> SBSL(MS)--> SBSL
                    sameBuildDiffLvl(portalChoice,fromLevelGraph,["graph"+fromLevelGraph[1].toUpperCase()+toLevelGraph[2],fromLevelGraph[1],toLevelGraph[2], findMainDoor("norm", ["graph"+fromLevelGraph[1].toUpperCase()+toLevelGraph[2]])],directionsSets);
                    directionsSets.push([["graphMS"+toLevelGraph[2],"ms",toLevelGraph[2]], findMainDoor("main", ["",fromLevelGraph[1],toLevelGraph[2]]), findMainDoor("main", ["",toLevelGraph[1],toLevelGraph[2]])]);
                    directionsSets.push([toLevelGraph, findMainDoor("norm", toLevelGraph), toLevelGraph[3]]);
                } else { //SBDL(NM1 to l1)-->SBSL(MS)-->SBDL(l1 to NM2)
                    sameBuildDiffLvl(portalChoice,fromLevelGraph,["graph"+fromLevelGraph[1].toUpperCase()+"l1",fromLevelGraph[1],"l1", findMainDoor("norm", ["graph"+fromLevelGraph[1].toUpperCase()+"l1"])],directionsSets);
                    directionsSets.push([["graphMSl1","ms","l1"], findMainDoor("main", ["",fromLevelGraph[1],"l1"]), findMainDoor("main", ["",toLevelGraph[1],"l1"])]);
                    sameBuildDiffLvl(portalChoice,["graph"+toLevelGraph[1].toUpperCase()+"l1",toLevelGraph[1],"l1", findMainDoor("norm", ["graph"+toLevelGraph[1].toUpperCase()+"l1"])],toLevelGraph,directionsSets);
                }
            }
        }
        createNavControls(directionsSets);
    }

    function findLevelNodes(room){
        let roomName = new RegExp(room, "i");
        for(let i = 0; i < rooms.length; i++) {
            if(roomName.test(rooms[i].properties.name) || roomName.test(rooms[i].properties.id)){
                let building = rooms[i].properties.building;
                let level = rooms[i].properties.level;
                let rmID = rooms[i].properties.id;
                return (['graph' +building.toUpperCase()+level, building, level, rmID]);
            }
        }
        alert("Can't find: " +room+ ". Room does not exist!");
    }

    function sameBuildDiffLvl(portalChoice,fromLevelGraph,toLevelGraph,directionsSet,type) {

        let frLvlGraph = fromLevelGraph;
        let toLvlGraph = toLevelGraph;

        //Special case for FROM MSl3: go to l2 first
        if (fromLevelGraph[2] === "l3" && toLevelGraph[2]!== "l41" && toLevelGraph[2] !== "l2"){ //initially not going to l2 or l41
            directionsSet.push([fromLevelGraph, fromLevelGraph[3], "STl3-LWN"]);
            frLvlGraph = ["graphMSl2","ms","l2","STl2-LWN"];
        }

        //Special case for TO MSl3: go to l2 first
        if (toLevelGraph[2] === "l3" && fromLevelGraph[2]!== "l41" && fromLevelGraph[2] !== "l2"){ //initially not from l2 or l41
            toLvlGraph = ["graphMSl2","ms","l2","STl2-LWN"];
        }

        //1st set - fromRm: original, toRM: escalator/stairs (toPortal)
        let toPortal = findNearestPortal(frLvlGraph[3], portalChoice, frLvlGraph[0], toLvlGraph[2]); //Returns: [0]portal id and [1]corresponding ids
        directionsSet.push([frLvlGraph, frLvlGraph[3], toPortal[0]]);

        if (type ==="now"){ //are we pushing it to directions sets or plotting the route out NOW
            shortestPathCombined(frLvlGraph, frLvlGraph[3], toPortal[0]);
        }

        //2nd set - fromRm: corresponding escalator/stairs (), toRM: final destination
        let correspondingID = findCorrespondingPortal(toPortal, toLvlGraph[2]); //Returns: correspondingID
        directionsSet.push([toLvlGraph, correspondingID, toLvlGraph[3]]);

        //Special case for TO MSl3: push remaining graph
        if (toLevelGraph[2] === "l3" && fromLevelGraph[2]!== "l41" && fromLevelGraph[2] !== "l2"){ //initially not from l2 or l41
            directionsSet.push([toLevelGraph, "STl3-LWN", toLevelGraph[3]]);
        }
    }

    function findNearestPortal(room, portalChoice, levelGraph, toLevel){
        let lvlGraph = eval(levelGraph);
        let portalRgx = new RegExp(portalChoice + ".*"); //Create a new RegExp
        let levelRgx = new RegExp(".*"+toLevel+".*");

        //build a graph
        let graphReturned = constructGraph(levelGraph);

        let paths= [];
        //Find all the stairs/lifts (portals)
        for(let i = 0; i < lvlGraph.length; i++) {
            if (portalRgx.test(lvlGraph[i].name)){
                for (let k = 0; k < lvlGraph[i].corresponding.length; k++){
                    if (levelRgx.test(lvlGraph[i].corresponding[k])){
                        //calculate shortest path to the individual portals
                        let shortestPath = findShortestPath(graphReturned[0],room,lvlGraph[i].id,graphReturned[1]);
                        let sum=0;
                        for (let i=shortestPath.length; i--;) {sum+=shortestPath[i].data;}
                        paths.push([sum,lvlGraph[i].id,lvlGraph[i].corresponding]);
                        break;
                    }
                }
            }
        }

        //select the one with the shortest edgeCost
        let minEdge = 1/0; //infinity
        let minID = 0;
        let correspondingPortal = [];
        for(let i=0;i<paths.length;i++){
            if (paths[i][0] < minEdge){
                minEdge = paths[i][0];
                minID = paths[i][1];
                correspondingPortal = paths[i][2];
            }
        }
        return ([minID,correspondingPortal]);
    }

    function findCorrespondingPortal(toPortal,level) {
        let rgx = new RegExp(".*" + level + ".*"); //Create a new RegExp
        for (let i = 0; i < toPortal[1].length; i++) { //Loop through the entire array and test if it matches with toLevelGraph[2]
            if (rgx.test(toPortal[1][i])) {
                return toPortal[1][i];
            }
        }
    }

    function findMainDoor(type, levelGraph) { //Find the main door
        let lvlGraph;
        let mainDoor = "Main Door";

        if (type === "main") {
            lvlGraph = eval("graphMS"+levelGraph[2]);
            mainDoor = "Main Door (" +levelGraph[1].toUpperCase()+ ")";
        } else {lvlGraph= eval(levelGraph[0]);}

        //Loop through lvlGraph to find "main door"
        for(let i = 0; i < lvlGraph.length; i++) {
            if (lvlGraph[i].name === mainDoor){return lvlGraph[i].id;}
        }
    }
}

function createNavControls(directionsSet){
    // Remove the existing button groups
    $("#dirControl").remove();

    let numOfPages = directionsSet.length;
    let header = '<label class="btn btn-secondary nav-btn navIns-btn">';
    let footer = '</label>\n';
    let final = String("");
    let setNum = 0;

    //changePage(pageNum,building,level)
    while (numOfPages !== 0){
        let step = setNum+1;
        let oneButton = header + '<input type="radio" name="options" id="p' +setNum+ '" onclick="changePage(\'' +directionsSet[setNum][0][0]+ '\',\'' +directionsSet[setNum][0][1]+ '\',\'' +directionsSet[setNum][0][2]+ '\',\'' +directionsSet[setNum][1]+ '\',\'' +directionsSet[setNum][2] +'\')">' +'<b>Step '+step+'</b>: ' +findRoom(directionsSet[setNum],directionsSet[setNum][1])+ ' &rarr; '  +findRoom(directionsSet[setNum],directionsSet[setNum][2])+ '\n' + footer;
        final += oneButton;
        numOfPages--;
        setNum++;
    }

    $('#dirControl-container').html('<i>Please click to view:</i><br><div class="btn-group btn-group-vertical btn-group-toggle" data-toggle="buttons" id="dirControl">' + final + '</div>');

    sidebar.open('menu');

    shortestPathCombined(directionsSet[0][0],directionsSet[0][1],directionsSet[0][2]);

    function findRoom(directionsSet,roomID) {
        let lvlGraph = eval(directionsSet[0][0]);
        for(let i = 0; i < lvlGraph.length; i++) {if (roomID === lvlGraph[i].id){return lvlGraph[i].name;}}
    }
}

function changePage(levelGraph, building, level, frRm, toRm){
    //toLevelGraph, matchedPortal, finalDestination
    //1. Change image overlay
    if (level === "l41"|| level === "l42" || level ==="l43") {level = "l4";}
    if (level === "l51"|| level === "l52") {level = "l5";}

    window.building = building;
    window.level = level;
    changeURL(building,level);
    //2. Construct graph and plot shortest path
    //2a. Same building, different level: 2nd set - fromRm: escalator/stair, toRm: original
    let graphReturned = constructGraph(levelGraph);
    let shortestPath = findShortestPath(graphReturned[0], frRm, toRm, graphReturned[1]);
    plotShortestPath(shortestPath);
}

function shortestPathCombined(levelGraph, fromRm, toRm) {
    let graphReturned = constructGraph(levelGraph[0]);
    let shortestPath = findShortestPath(graphReturned[0], fromRm, toRm, graphReturned[1]);
    plotShortestPath(shortestPath);

    //Change the map's view
    building = levelGraph[1];
    level = levelGraph[2];
    changeURL(building,level);
}

function findShortestPath(graph, fromRm, toRm, gNodes) {
    // Find shortestPath
    let dijkstra = new jKstra.algos.Dijkstra(graph);
    let shortestPath = dijkstra.shortestPath(findRoom(fromRm), findRoom(toRm), {
        edgeCost: function(e) {return e.data;}
    });

    function findRoom(room) {
        for (let i = 0; i < gNodes.length; i++) {
            if (gNodes[i].data.id === room || gNodes[i].data.label === room) {
                return gNodes[i];
            }
        }
    }

    return shortestPath;
}

function plotShortestPath(shortestPath) {

    // Constructing the path
    let path = shortestPath.map(function (e) {return e.from.data.coord;});
    let last = shortestPath.map(function (e) {return e.to.data.coord;});
    path.push(last.pop());

    let newPath = [];
    path.forEach(function (item) {
        newPath.push(map.unproject(L.point(item), map.getMaxZoom()))
    });

    //Calculate estimated distance and time
    let dist = Math.ceil(shortestPath[shortestPath.length-1].to._dijkstra.fCost*0.005);
    let time = Math.ceil(dist/1.4/60);

    //$('#detailsControl-container').html('<div id="detailsControl"><b>' + dist + 'm, ~' + time +'s</b></div>');

    var polyL = L.polyline(newPath, {color: 'red'})
        .bindTooltip('<div id="detailsControl"><b>Estimated Time & Distance:</b> ' + dist + 'm, ' + time +'min</div>', {sticky:true})
        .addTo(navPolylineLayerGroup);

    L.polylineDecorator(polyL, {
        patterns: [
            {offset: 0, repeat: 40, symbol: L.Symbol.arrowHead({pixelSize: 10, pathOptions: {fillOpacity: 1, color:"red"}})}
        ]
    }).addTo(navPolylineLayerGroup);

    map.fitBounds(polyL.getBounds()); // zoom the map to the polyline
}

function constructGraph(levelGraph){
    navPolylineLayerGroup.clearLayers();
    // Construct the graph
    let graph = new jKstra.Graph();
    let gNodes = []; // to easily keep references to the node objects
    let lvlGraph = eval(levelGraph);

    // Generate nodes
    for(let i = 0; i < lvlGraph.length; i++) {
        let node = JSON.parse('{"id": "' + lvlGraph[i].id + '", "label": "' + lvlGraph[i].name + '"}');
        node.coord = lvlGraph[i].coordinates;
        node.connected = lvlGraph[i].connected;
        //node.ins = lvlGraph[i].ins;
        gNodes.push(graph.addVertex(node));
    }

    // Add edges
    for (let i=0; i < gNodes.length; i++){ //For every entry in gNodes
        gNodes[i].data.connected.forEach(function(element){ //For every element in the array "connected"
            for (let j=0; j < gNodes.length; j++){ //Loop through dictionary in levelGraphs.js
                if (element === gNodes[j].data.id){ //Find the "connected" element
                    let coord = gNodes[j].data.coord; //Find the coordinates of the "connected" element
                    let dist = Math.hypot(gNodes[i].data.coord[0]-coord[0], gNodes[i].data.coord[1]-coord[1]); // Calculate the hypot
                    graph.addEdge(gNodes[i], gNodes[j], dist); //addEdgePair
                }
            }
        });
    }
    return([graph,gNodes]);
}
