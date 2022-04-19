function palindrome(str) {
	str = str.toLowerCase(); 	// lower case string
	str = trimCharacters(str);	// trim all unwanted characters
	console.log(str);
	
	
	var checkLenth = Math.floor(str.length/2);

	// checking character equality
	for(var i=0; i < checkLenth; i++)
	{
		if(str[i] != str[str.length - i - 1])
			return false;
	}
	
	return true;
}

function trimCharacters(str) {
	var array = str.split(""); // converting string to array
	var tmp = []; // here we store characters are letter 
	
	// checking each character
	for(var i=0; i<str.length; i++)
	{
		// if character is letter add to tmp array
		if(isLetter(array[i]))
		{
			tmp.push(array[i]);
		}
	}

	return tmp.join("");
}

function isLetter(str) {
	return str.length === 1 && str.match(/[a-z0-9]/i);
}

//console.log(palindrome("Race car"));
//console.log(palindrome("1 eye for of 1 eye."));