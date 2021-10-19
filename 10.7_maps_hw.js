new Set([1,2,3,4])
//{1,2,3,4}

[...new Set("refree")].join("")
//"ref"

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
/* 0: arrary is true , 1: array is false
*/

const hasDuplicate = arr=> new Set(arr).size !==arr.length
//sets are unique, so if we have an entry that is duplicate it doesnt count and lowers the length of the resulting array

function isVowel (char){
    return "aeiou".includes(char);
}
function vowelCounter (str) {
    const vowelMap = new Map ();
    for (let char of str) {
        let lowerCaseChr = char.toLowerCase()
        if (isVowel(lowerCaseChar)){
            if (vowelMap.has(lowerCaseChr)){
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) +1);
            } else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
}