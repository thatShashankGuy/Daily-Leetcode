
var reverseWords = function(s){
    let trimmedStr = s.split(/\s+/).filter(word => word)
    return trimmedStr.reverse().join(" ");

}