// Code your solution in this file.

function lowerCaseDrivers(array) {
    let lowerDrivers = array.map(driver => driver.toLowerCase())
    return lowerDrivers;
}

function nameToAttributes(array) {
    let splitNames = array.map(name => name.split(" "));
    let resultArr = [];
        for (const n of splitNames) {
            let first = n[0];
            let last = n[1];
            let obj = {"firstName": first, "lastName": last}
            resultArr.push(obj);
        }
    return resultArr;
}

function attributesToPhrase(drivers) {
    let result = drivers.map(d => d.name + " is from " + d.hometown)
    return result;
}