function mainDirectionsFn (fromLevelGraph, toLevelGraph) {

    if (fromLevelGraph[0] === toLevelGraph[0]) { // 3a. SAME BUILDING AND LEVEL: one graph required
        return ("case 1");

    } else if (fromLevelGraph[1] === toLevelGraph[1]) { //3b. SAME BUILDING, DIFFERENT LEVELS: go to lift/stairs
        return ("case 2");

    } else { //3c. DIFFERENT BUILDING
        if (fromLevelGraph[1] === "ms") { //Check if starting point is MS. Yes: M-->NM
            if (fromLevelGraph[2] === toLevelGraph[2]){ //Both same level? Yes: SBSL-->SBSL
                return ("case 3");
            } else { //No: Check if NM is connected to MS
                if (((toLevelGraph[1] === "n1" || toLevelGraph[1] === "n2") && toLevelGraph[2] === "l1") || ((toLevelGraph[1] === "n4" || toLevelGraph[1] === "n3") && (toLevelGraph[2] === "l1" || toLevelGraph[2] === "l2"))) { //Yes: SBDL(MS)-->SBSL
                    return ("case 4");
                } else if (((toLevelGraph[1] === "n1"||toLevelGraph[1] ==="n2") && fromLevelGraph[2] === "l1") || ((toLevelGraph[1] === "n4"|| toLevelGraph[1] === "n3") && (fromLevelGraph[2] === "l1"|| fromLevelGraph[2] === "l2"))) { //No: Check if MS connected to NM. If yes: SBSL (MS)-->SBDL
                    return ("case 5");
                } else { //No: SBDL(MS to l1)-->SBDL
                    return ("case 6");
                }
            }
        } else if (toLevelGraph[1] === "ms") { //Check if destination is MS. Yes: NM-->M
            if (fromLevelGraph[2] === toLevelGraph[2]){ //Both same level? Yes: SBSL-->SBSL
                return ("case 7");
            } else { //No: Check if NM is connected to MS
                if (((fromLevelGraph[1] === "n1"||fromLevelGraph[1] ==="n2") && fromLevelGraph[2] === "l1") || ((fromLevelGraph[1] === "n4"||fromLevelGraph[1] ==="n3") && (fromLevelGraph[2] === "l1"|| fromLevelGraph[2] === "l2"))) { //Yes: SBSL-->SBDL(MS)
                    return ("case 8");
                } else if (((fromLevelGraph[1] === "n1"||fromLevelGraph[1] ==="n2") && toLevelGraph[2] === "l1") || ((fromLevelGraph[1] === "n4"||fromLevelGraph[1] ==="n3") && (toLevelGraph[2] === "l1"||toLevelGraph[2] ==="l2"))) { //No: Check if MS connected to NM. If yes: SBDL-->SBSL (MS)
                    return ("case 9");
                } else { //No: SBDL(NM to l1)-->SBDL(MS)
                    return ("case 10");
                }
            }
        } else { //NM-->NM. Check if they are connected to MS
            let fromConnected = Boolean(((fromLevelGraph[1] === "n1"||fromLevelGraph[1] ==="n2") && fromLevelGraph[2] === "l1") || ((fromLevelGraph[1] === "n4"||fromLevelGraph[1] ==="n3") && (fromLevelGraph[2] === "l1"||fromLevelGraph[2] === "l2")));
            let toConnected = Boolean(((toLevelGraph[1] === "n1"||toLevelGraph[1] ==="n2") && toLevelGraph[2] === "l1") || ((toLevelGraph[1] === "n4"||toLevelGraph[1] === "n3") && (toLevelGraph[2] === "l1"||toLevelGraph[2] ==="l2")));

            if ((fromLevelGraph[2] === toLevelGraph[2]) && fromConnected) { //Both same level and connected to MS? Yes: SBSL-->SBSL(MS)-->SBSL
                return ("case 11");
            } else {
                if (fromConnected && toConnected) { //Both are connected to MS: SBSL(NM)-->SBDL(MS)-->SBSL [e.g. N4l2 --> N3l1]
                    return ("case 12");
                } else if (fromConnected && !toConnected) { //NM1 connected: SBSL(NM1)-->SBSL(MS)-->SBDL(NM2)
                    return ("case 13");
                } else if (!fromConnected && toConnected) { //SBDL(NM1 to l1/2)--> SBSL(MS)--> SBSL
                    return ("case 14");
                } else { //SBDL(NM1 to l1)-->SBSL(MS)-->SBDL(l1 to NM2)
                    return ("case 15");
                }
            }
        }
    }
}

module.exports = mainDirectionsFn;