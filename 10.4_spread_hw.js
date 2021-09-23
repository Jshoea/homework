const filterOutOdds= (...args) => args.filter( n => n % 2 === 0)

const findMin = (...args) => Math.min(...args)
//we slide in the array then pass it through math.min

const mergeObj = (obj1, obj2) =>({...obj1, ...obj2})
//this will return the keys and values of the 2 obj that are passed

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(x => x *2)]

const removeRandom = items => {
    let randItem = Math.floor(Math.random()* items.length);
    return [...items.slice(0, randItem), items.slice(randItem +1)];
}

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj [key] = val; //our inputted value becomes paired w new key
    return newObj;
}

const removeKey = (obj,key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}