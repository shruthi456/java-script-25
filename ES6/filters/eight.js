var myLocation = 'Banglore';
function getLocation(ip){
    if (ip){
        let myLocation = getLocationBYIP(ip);
        return myLocation;
    }
    return myLocation;
}
console.log(getLocation());