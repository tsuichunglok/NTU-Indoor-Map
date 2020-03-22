function sameBuildDiffLevelsFn(fromLevel,toLevel,type) {

    let directionsSet =[];

    //Special case for FROM MSl3: go to l2 first
    if (fromLevel === "l3" && toLevel!== "l41" && toLevel !== "l2"){ //initially not going to l2 or l41
        directionsSet.push("a");
    }

    //Special case for TO MSl3: go to l2 first
    if (toLevel === "l3" && fromLevel!== "l41" && fromLevel !== "l2"){ //initially not from l2 or l41
        directionsSet.push("b");
    }

    //1st set - fromRm: original, toRM: escalator/stairs (toPortal)
    // let toPortal = findNearestPortal(frLvlGraph[3], portalChoice, frLvlGraph[0], toLvlGraph[2]); //Returns: [0]portal id and [1]corresponding ids
    directionsSet.push("c");

    if (type ==="now"){ //are we pushing it to directions sets or plotting the route out NOW
        directionsSet.push("d")
    }

    //2nd set - fromRm: corresponding escalator/stairs (), toRM: final destination
    // let correspondingID = findCorrespondingPortal(toPortal, toLvlGraph[2]); //Returns: correspondingID
    directionsSet.push("e");

    //Special case for TO MSl3: push remaining graph
    if (toLevel === "l3" && fromLevel!== "l41" && fromLevel !== "l2"){ //initially not from l2 or l41
        directionsSet.push("f");
    }
    return directionsSet;
}

module.exports = sameBuildDiffLevelsFn;