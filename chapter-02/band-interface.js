function unknownBand(band) {
    console.log("This band: " + band.name + ", has: " + band.total_members + " members");
}
var newBand = {
    name: "Black sabbath",
    total_members: 4
};
console.log(unknownBand(newBand));
