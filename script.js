function shortcut(str1, str2) {
    if (!str1 || !str2) {
        return '';
    }

    const firstLetterStr1 = str1.charAt(0).toUpperCase();
    const firstLetterStr2 = str2.charAt(0).toUpperCase();

    return `${firstLetterStr1}${firstLetterStr2}`;
}

// Examples
console.log(shortcut("Amnesty", "International")); // Output: 'AI'
console.log(shortcut("Hello", "world")); // Output: 'Hw'
console.log(shortcut("", "International")); // Output: ''
console.log(shortcut("Amnesty", "")); // Output: ''

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
