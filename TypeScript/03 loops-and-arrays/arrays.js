var reviews = [3, 6, 7, 3.5, 2.2];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log("Average = " + total / reviews.length);
