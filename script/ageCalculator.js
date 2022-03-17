function getAge(date) { 
    let diff = Date.now() - date.getTime();
    let age = new Date(diff); 
    return Math.abs(age.getUTCFullYear() - 1970);   
}

let ageResult = getAge(new Date(1999, 8, 2));
    
document.getElementById("aboutAge").innerHTML = ageResult;

