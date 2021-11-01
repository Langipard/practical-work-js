// function sortArray(array) {
//     for (let i = 0; i <= array.length; i++) {
//         if (array[i] % 2 == 0) continue;
//         for (let j = 0; j <= array.length; j++) {
//             if (i == j || array[j] % 2 == 0) continue;
//             if ((array[i] > array[j] && i < j) || (array[i] < array[j] && i > j)) {
//                 [array[i], array[j]] = [array[j], array[i]];
//             }
//         }
//     }
//     return array;
// }

function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    console.log(odd);
    return array.map((x) => x % 2 ? odd.shift() : x);
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]), []);