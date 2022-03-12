var numKids=[0,2,1,3];
var spouse=["Lexido","Rakeish","Chris","Kevin"];
var city=["Dallas","Miami","New York City","Los Angeles"];
var job=["Mechanic","Spy","Chemist","Banker"];

var xx=Math.floor(Math.random()*4)

function fortune(job,city,spouse,numKids){
document.write("You will be a "+job+ " in "+city+", and married to "+spouse+" with "+numKids+" kids.");
}
fortune (job[xx],city[xx],spouse[xx],numKids[xx])
