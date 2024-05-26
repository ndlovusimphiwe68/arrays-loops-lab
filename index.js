// Activity One: Crop Planning Arrays Setup
let springCrops = ['carrots', 'lettuce', 'radishes'];
let summerCrops = ['corn', 'tomatoes', 'cucumbers'];
let autumnCrops = ['pumpkins', 'squash', 'broccoli'];
let winterCrops = ['kale', 'spinach', 'brussels sprouts'];

// Adding crops to arrays
summerCrops.push('watermelon', 'peppers', 'eggplant', 'zucchini');
springCrops.unshift('peas', 'beans', 'asparagus');
autumnCrops.pop();
autumnCrops.pop();
winterCrops.shift();

// Printing the length of each array
console.log(springCrops.length); // Spring crops length
console.log(summerCrops.length); // Summer crops length
console.log(autumnCrops.length); // Autumn crops length
console.log(winterCrops.length); // Winter crops length

// Displaying crop plans
console.log('Spring Crops:', springCrops);
console.log('Summer Crops:', summerCrops);
console.log('Autumn Crops:', autumnCrops);
console.log('Winter Crops:', winterCrops);

// Activity Two: Harvesting Simulation Setup
let harvest = [];

// Harvesting crops
for (let i = 0; i < springCrops.length; i++) {
    harvest.push(springCrops[i]);
}
for (let i = 0; i < summerCrops.length; i++) {
    harvest.push(summerCrops[i]);
}
for (let i = 0; i < autumnCrops.length; i++) {
    harvest.push(autumnCrops[i]);
}
for (let i = 0; i < winterCrops.length; i++) {
    harvest.push(winterCrops[i]);
}

// Function to log harvest
function logHarvest(harvestedCrops, season) {
    console.log(`The crops of the ${season} are: ${harvestedCrops.join(', ')}`);
}

logHarvest(springCrops, 'spring');
logHarvest(summerCrops, 'summer');
logHarvest(autumnCrops, 'autumn');
logHarvest(winterCrops, 'winter');
