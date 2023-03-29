let lyrics="";
for(let i=99;i>=0;i--){
	if(i>=2){
	lyrics+=i+" bottles of beer on the wall, "+i+" bottles of beer.</br>";
	lyrics+="Take one down, pass it around, "+(i-1)+" bottles of beer on the wall.</br></br>";
	}
	else if(i>=1){
	lyrics+=i+" bottle of beer on the wall, "+i+" bottle of beer.</br>";
	lyrics+="Take one down, pass it around, no more bottles of beer on the wall.</br></br>";
	}
	else{
	lyrics+="No more bottles of beer on the wall, no more bottles of beer</br>";
	lyrics+="Go to the store and buy some more, 99 bottles of beer on the wall";
	}
}
document.getElementById("lyrics").innerHTML=lyrics;