const filterShortStateName = (arr) => arr.filter((str) => str.length < 7) 
const words = ['spray', 'eletee', 'exuberanti', 'destruction', 'apresent'];
// console.log(filterShortStateName(words))
const filterStartVowel = (arr) => arr.filter((str) => (str[0] == "A"||str[0] == "a"||str[0] == "E"||str[0] == "e"||str[0] == "I"||str[0] == "i"||str[0] == "O"||str[0] == "o"||str[0] == "U"||str[0] == "u"))
// console.log(filterStartVowel(words))
const isVowel = (str) =>{
    let count = 0
    for (let i=0; i<str.length;i++){        
        if ((str[i] == "A"||str[i] == "a"||str[i] == "E"||str[i] == "e"||str[i] == "I"||str[i] == "i"||str[i] == "O"||str[i] == "o"||str[i] == "U"||str[i] == "u")){
            count++
        }
    }
    return count >= 5
}

const filter5Vowels = (arr) => arr.filter((str) => isVowel(str))
// console.log(filter5Vowels(words))
const isDVowel = (str) =>{
    let vowel = ""
    for (let i=0; i<str.length;i++){        
        if ((str[i].toLowerCase() == "a"||str[i].toLowerCase() == "e"||str[i].toLowerCase() == "i"||str[i].toLowerCase() == "o"||str[i].toLowerCase() == "u")){
            if (vowel == ""){
                vowel = str[i].toLowerCase()
            }
            if (vowel != str[i].toLowerCase()){
                return false
            }
        }
    }
    if (vowel = ""){
        return false
    }
    return true
}
const filter1DistinctVowel = (arr) => arr.filter((str)=> isDVowel(str))
// console.log(filter1DistinctVowel(words))
const hasVowel = (str) =>{
    for (let i=0; i<str.length;i++){        
        if ((str[i].toLowerCase() == "a"||str[i].toLowerCase() == "e"||str[i].toLowerCase() == "i"||str[i].toLowerCase() == "o"||str[i].toLowerCase() == "u")){
            return true
        }
    }
    return false
}
const multiFilter = (arrOb) => arrOb.filter((Ob) => (Ob.capital.length >= 8 && !hasVowel(Ob.name[0]) && hasVowel(Ob.tag) && Ob.region) != "South")