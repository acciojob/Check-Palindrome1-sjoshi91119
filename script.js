// complete the given function

function palindrome(str){
//  str.toLowerCase();
//  let verdict  = true;
// 	for(let i = 0;i<str.length;i++){
// 		for( let j = str.length;j>0;j--){
// 			if(String[i]!==String[j]){
// 				verdict = false;
// 			}
// 		}
// 	}
// 	return verdict;
// }
 str.toLowerCase();
 const len = str.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
module.exports = palindrome
