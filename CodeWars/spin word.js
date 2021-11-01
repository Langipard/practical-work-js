function spinWords(string) {
    let result = string.split(" ").map(item => {
        if (item.length > 4) {
            return item.split("").reverse().join("");
        }
        else return item;
    }).join(" ")
    return result;
}

console.log(spinWords("белые вороны сели за окном"))