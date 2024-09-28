/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const d = {};

    for(const str of strs){
        const count = new Array(26).fill(0);
        for(const charac of str){
            count[charac.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        const k = count.join('#');
        if(!d[k]){
            d[k] = [];
        }
        d[k].push(str);
    }
    console.log(d);
    return Object.values(d)
};