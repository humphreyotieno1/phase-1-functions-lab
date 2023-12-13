//Question one
function distanceFromHqInBlocks(block) {
    const streetHq = 42;
    const distance_blocks = Math.abs(block - streetHq);
    return distance_blocks;
}

//Question two
function distanceFromHqInFeet (block) {
    const d_Blocks = distanceFromHqInBlocks(block);
    const blockInFeet = 264;
    const distanceInFeet = d_Blocks * blockInFeet;
    return distanceInFeet;
}

//Question three
function distanceTravelledInFeet(start, stop) {
    const feetPerBlock = 264;
    const distance_Feet = Math.abs(stop - start) * feetPerBlock;
    return distance_Feet;
}

//Question 4
function calculatesFarePrice (start, stop) {
    const d_feet = distanceTravelledInFeet(start, stop);

    if (d_feet <= 400) {
        return 0;
    } else if (d_feet > 400 && d_feet <= 2000) {
        return (d_feet - 400) * 0.02;
    } else if (d_feet > 2000 && d_feet <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}

//one
const block = 50;
const myBlocks = distanceFromHqInBlocks(block);
console.log(`Distance from Hq is: ${myBlocks} blocks`);

//two
const myDist_Feet = distanceFromHqInFeet(block);
console.log(`The distance from Hq is ${myDist_Feet} feet`);

//three
const start = 34;
const stop = 38;
const below = 30;
const totalDistance = distanceTravelledInFeet(start, stop);
const totalBelow = distanceTravelledInFeet(start, below);
console.log(`The distance between ${start} to ${stop} is: ${totalDistance} feet`);
console.log(`The distance between ${start} to ${below} is: ${totalBelow} feet`);

const fare = calculatesFarePrice(34, 38);
console.log(`The fare is $${fare}`);