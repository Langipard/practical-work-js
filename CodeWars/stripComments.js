function solution(input, markers) {
    let mainArr = input.split("");
    console.log(mainArr);
    for (item of markers) {
        let symbolMarkerId = mainArr.indexOf(item);
        let newLineId = mainArr.indexOf("\n", symbolMarkerId);
        console.log(symbolMarkerId, newLineId);
        (newLineId != -1) ?
            mainArr.splice(symbolMarkerId, (newLineId - symbolMarkerId)) :
            mainArr.splice(symbolMarkerId);
    }
    if (mainArr.lastIndexOf(" ") == mainArr.length - 1) mainArr.pop();
    for (let i = 0; i <= mainArr.length; i++) {
        if (mainArr[i] == "\n" && mainArr[i - 1] == " ") {
            mainArr.splice(i - 1, 1);
        }
    }
    console.log(mainArr);
    let result = mainArr.join("")
    return result;
};

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]), "\n", "apples, plums\npears\noranges")
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]), "\n", "Q\nu\ne")