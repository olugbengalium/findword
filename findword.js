function findWord(easyPuzzle, word){
    splitted = word.split('')
    let result = true
    let p = 0
    let foundword = []
            for (i in easyPuzzle){
                for (j in easyPuzzle){
                    let b = i
                    if ((easyPuzzle[i][j] == splitted[0])){
                        for (t in splitted){
                        if ((easyPuzzle[b][j] == splitted[t])){
                            foundword.push(splitted[t])
                        } else{foundword=[]}                   
                    b++
                        }
                    let foundword2= foundword.join("")
                    return foundword2 === word?true:false
                }
                }
            }
}

let easyPuzzle = [
    ['b', 'a', 't'],
    ['i', 'i', 'p'],
    ['t', 'o', 'n']
];

let hardPuzzle = [
    ['y', 'o', 't', 'v'],
    ['k', 'c', 'p', 's'],
    ['t', 'h', 'n', 's'],
    ['t', 'a', 'o', 'e'],
    ['t', 't', 'a', 'i'],
];

console.log(findWord(easyPuzzle, 'bit')); // should print true
console.log(findWord(easyPuzzle, 'bat')); // should print false
console.log(findWord(hardPuzzle, 'chat')); // should print true
console.log(findWord(hardPuzzle, 'set')); // should print false
console.log(findWord(hardPuzzle, 'i')); // should print true
