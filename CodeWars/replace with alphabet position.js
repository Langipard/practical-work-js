function alphabetPosition(text) {
    let arrKey = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", 'r', "s", "t", "u", "v", "w", "x", "y", "z"];
    let resultArray = text.toLowerCase().split("").map(item => {
        item = arrKey.findIndex(key => key == item) + 1;
        return item;
    }).filter(key => key > 0).join(" ");
    console.log(resultArray);
    return resultArray;
}

alphabetPosition("text AAAAAA ssss  Da FF adfsgasf FAF Ef AFDd");