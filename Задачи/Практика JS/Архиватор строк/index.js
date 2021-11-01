let archiverString = (text) => {
    let archiverObject = {};
    text.split("").forEach(item => {
        if (item == "-") return;
        archiverObject[item] = (archiverObject[item] || 0) + 1;
    })
    return archiverObject;
}

console.log(archiverString("aaaaa-bbbbbbb-ccc-ddddddddd-aaa"))