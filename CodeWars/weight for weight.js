function orderWeight(string) {
    newWeight = (a, b) => {
        let a1 = a.split("").reduce((prev, next) => { return +prev + +next });
        let b1 = b.split("").reduce((prev, next) => { return +prev + +next });
        if (a1 == b1) {
            return (a > b || -(a < b))
        }
        return a1 - b1;
    }
    return string.split(" ").sort(newWeight).join(" ");
}

console.log('out', orderWeight('112 14 170 63 233100 29 65 156 138 67 77 79 324612 144435 143275 335392 477504 460549 96194 281479 347984'));
console.log('exp', '112 14 170 233100 63 29 65 138 156 67 77 79 324612 144435 143275 335392 477504 460549 96194 281479 347984');


console.log('out', orderWeight('200 41 113 114 52 25 109 83 155 76 59 161330 450231 274111 93131 440830 432353 274292 320986 371567 29858'));
console.log('exp', '200 113 41 114 25 52 109 155 83 76 161330 59 450231 274111 93131 440830 432353 274292 320986 371567 29858');