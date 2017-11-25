/*
Write a loop that makes 7 calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
########

*/

function makeTriangle () {
    var str = "#";
    for (var i = 0; i < 8; i++) {
      console.log(str);
      str += "#";
    }
}
console.log(makeTriangle());
