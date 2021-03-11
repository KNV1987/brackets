module.exports = function check(str, bracketsConfig) {
    str = str.split("");
    let objBrackets = {};
    let acc = [];
    let openIndex;
    let closeIndex;
    if (str.length % 2 !== 0) return false;
    for (let i = 0; i < bracketsConfig.length; i++) {
        objBrackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }
    for (let j = 0; j < str.length; j++) {
        openIndex = Object.keys(objBrackets).indexOf(str[j]);
        if (
            openIndex > -1 &&
            acc.indexOf(str[j]) > -1 &&
            objBrackets[str[j]] === str[j]
        ) {
            closeIndex = Object.values(objBrackets).indexOf(str[j]);
            if (
                closeIndex > -1 &&
                objBrackets[acc[acc.length - 1]] === str[j]
            ) {
                acc.pop();
            }
            continue;
        }
        if (openIndex > -1) {
            acc.push(str[j]);
            continue;
        }
        closeIndex = Object.values(objBrackets).indexOf(str[j]);
        if (closeIndex > -1 && objBrackets[acc[acc.length - 1]] === str[j]) {
            acc.pop();
        }
    }
    console.log(acc);
    return acc.length === 0;
};
