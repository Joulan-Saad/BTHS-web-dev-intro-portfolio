function getRandomInteger(lower, upper)
{
	//Returns a random integer within the upper and lower limit provided by the variables lower and upper
	
	//R = parseInt(rnd * (upper - (lower-1)) + lower)
	var multiplier = upper - (lower - 1);
	var rnd = parseInt(Math.random() * multiplier) + lower;
	
	return rnd;
}

function countDuplicates(array,itm)
{
/*
Searches an array with for a specific item and returns the number of times that item appears in that array
*/
	var itmCount = 0
	
	for (var i = 0; i < array.length; i++)
			if (itm == array[i])
					itmCount++;
			
	return itmCount;
}

function indexesOf(array, itm)
{
/*
Searches an array for a specific item and generates a list of all the positions where that item appears
*/
	var idxList = [];
	
	for (var i = 0; i < array.length; i++)
			if (itm == array[i])
				idxList.push(i);
			
	return idxList;
}