module.exports = function reverse(n) {
    n = n + ""; // convert number to string
    let b = n.split("").slice(1).reverse().join("");
    let c = n.split("").reverse().join("");
    if (n < 0) {
        return b;
    } else {
        return c;
    }
};
