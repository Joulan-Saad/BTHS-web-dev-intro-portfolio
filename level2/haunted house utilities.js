/*
incomplete because it's not neccessary as of right now
function createVariables()
{
	
}
*/
function displayStats()
{
	if(sessionStorage.Health < 0)
	{
		sessionStorage.Health = 0;
	}
	healthText.innerHTML = sessionStorage.Health;
	redCoinsFound.innerHTML = sessionStorage.redcoinamount;
	foundStars.innerHTML = sessionStorage.starsFound;
}
/*
for testing only

function coinnotfound()
{
	sessionStorage.redcoin1 = "not found"
}

*/