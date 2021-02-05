//Creates a description of a string without cutting off the last word.
const createDescription = (str, length) => {
    if (str.length > length) {
        while (str[length] !== " ") length++
        str = str.substring(0, length) + "...";
    }
    return str;
}

export { createDescription }