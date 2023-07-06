// Code your solution here
function findMatching (array, name) {
    return array.filter(item => item.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(array, name) {
    return array.filter(item => item.substr(0,name.length) === name)
}

function matchName (array, name) {
    return array.filter(item => item.name === name)
}