let IS_PART_TIME=1;
let IS_FULL_TIME=2
let EMP_RATE_PER_HOUR=20;

let empHrs=0;
let empWage=0;

let empCheck=Math.floor(Math.random()*10)%3;
if(empCheck==IS_PART_TIME)
	empHrs=4;
else if(empCheck==IS_FULL_TIME)
	empHrs=8;
else
	empHrs=0;

empWage=empHrs*EMP_RATE_PER_HOUR;


