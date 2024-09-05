// Function to filter state names with less than 7 characters
const filterShortStateName = (arr) => arr.filter((str) => str.length < 7);

// Function to filter words that start with a vowel
const filterStartVowel = (arr) => arr.filter((str) => /^[aeiouAEIOU]/.test(str));

// Helper function to count vowels in a string
const isVowel = (str) => {
    let count = 0;
    for (let char of str.toLowerCase()) {
        if ('aeiou'.includes(char)) {
            count++;
        }
    }
    return count >= 5;
};

// Function to filter strings containing at least 5 vowels
const filter5Vowels = (arr) => arr.filter((str) => isVowel(str));

// Helper function to check if a string contains only one distinct vowel
const isDVowel = (str) => {
    let vowelsFound = new Set();
    for (let char of str.toLowerCase()) {
        if ('aeiou'.includes(char)) {
            vowelsFound.add(char);
        }
    }
    return vowelsFound.size === 1;
};

// Function to filter strings with only one distinct vowel
const filter1DistinctVowel = (arr) => arr.filter((str) => isDVowel(str));

// Helper function to check if a string contains at least one vowel
const hasVowel = (str) => /[aeiouAEIOU]/.test(str);

// Function to filter an array of objects based on given conditions
const multiFilter = (arrOb) => arrOb.filter((ob) => (
    ob.capital.length >= 8
    && !/^[aeiouAEIOU]/.test(ob.name)
    && hasVowel(ob.tag)
    && ob.region !== "South"
));


