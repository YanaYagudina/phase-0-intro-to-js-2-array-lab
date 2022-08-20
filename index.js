const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(X) {
    cats.push(X)
}
function destructivelyPrependCat(X) {
    cats.unshift(X)
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()

}
function appendCat(x) {
    const copyOfCats = cats.slice();
    copyOfCats.push(x);
    return copyOfCats;
}
function prependCat(x) {
    const copyOfCats = cats.slice();
    copyOfCats.unshift(x);
    return copyOfCats;
}

function removeLastCat() {
    const copyOfCats = [1, ...cats, 1]
    return copyOfCats.slice(1, copyOfCats.length - 2)
        
}
    
function removeFirstCat() {
    const copyOfCats = [...cats]
    copyOfCats.shift()
    return copyOfCats
}