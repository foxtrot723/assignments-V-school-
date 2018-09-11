function isValidPhoneNumber(str) {
	if(str.length !== 14 || str[0] !== "(" || str[4] !== ")" || str[5] !== " " || str[9] !== "-" ) {
		return false
    }
    
	for(var i = 1; i < str.length; i++){
		if(i === 4 || i === 5 || i === 9){
			continue
		} else {
			var temp = parseInt(str[i])
			if(typeof temp !== "number") {
				return false
            }
        }
	}
	return true
}

console.log(isValidPhoneNumber('(917) 755-7781' ))