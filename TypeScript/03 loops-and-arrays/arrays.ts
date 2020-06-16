let reviews: number[] = [3, 6, 7, 3.5, 2.2];
let total: number = 0;
for(let i = 0; i < reviews.length; i++){
    console.log(reviews[i]);
    total += reviews[i];
}
console.log("Average = " + total / reviews.length)