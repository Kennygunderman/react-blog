//Creates a description of a string without cutting off the last word.
const createDescription = (str, length) => {
    if (str.length > length) {
        while (str[length] !== " ") length++
        str = str.substring(0, length) + "...";
    }
    return str;
}

const stripHTML = (htmlStr) => {
    return htmlStr.replace(/<\/?[^>]+(>|$)/g, "");
}

export { createDescription, stripHTML }