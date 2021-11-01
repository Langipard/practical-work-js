function countSmileys(arr) {
    let result = 0;
    arr.map(item => {
        let smileId = null;
        let eyeId = null;
        let noseId = null;
        let arrFace = item.split("");
        smileId = arrFace.indexOf(")");
        if (smileId < arrFace.indexOf("D")) {
            smileId = arrFace.indexOf("D");
        }
        eyeId = arrFace.indexOf(":");
        if (eyeId < arrFace.indexOf(";")) {
            eyeId = arrFace.indexOf(";");
        }
        if (smileId == 2) {
            noseId = arrFace.indexOf("-");
            if (noseId < arrFace.indexOf("~")) {
                noseId = arrFace.indexOf("~");
            }
        }

        console.log('eye:', eyeId, "smile:", smileId, "nose:", noseId)
        if (eyeId < smileId && (noseId == null || noseId == 1) &&
            (eyeId == 0 && (smileId == 1 || smileId == 2))) {
            result++;
        }
    })
    return result;
}

// console.log(countSmileys([]), 0);
console.log(countSmileys([':D', ':~)', ';~D', ':)']), 4);
console.log(countSmileys([";-( ", ";-(", ":-)", ";>", ";>", ":o)", ":)"]), 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);