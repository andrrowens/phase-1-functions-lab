// Code your solution in this file!
function distanceFromHqInBlocks(location){
   const hq = 42  
   return location - hq
};

const result = distanceFromHqInBlocks(50)
console.log(result);

function distanceFromHqInFeet(){
    const blockLengthInFeet = 264
    console.log(result)
    console.log(blockLengthInFeet)
    return result * blockLengthInFeet
};

function distanceTravelledInFeet(start, destination){
    const blockLengthInFeet = 264
    const blockDistance = destination - start
    console.log(blockDistance)
    return blockDistance * blockLengthInFeet
};

distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);