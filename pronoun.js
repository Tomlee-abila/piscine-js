const pronoun = (str) => {
    let words = ["i", "you", "he", "she", "it", "they", "we"];
    let result = {};
    let arr = str.toLowerCase().split(/\s+|,|\n/).filter(word => word !== '');
    
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (words.includes(word)) {
            if (!result[word]) {
                result[word] = {word: [], count: 0};
            }
            result[word].count++;
            if (i + 1 < arr.length && !words.includes(arr[i+1])) {
                if (!result[word].word.includes(arr[i+1])) {
                    result[word].word.push(arr[i+1]);
                }
            }
        }
    }
    return result;
};