// let date = new Date();
// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();

let windChill = calculateWindChill(2, 3)

document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById("windChill").innerHTML = `${windChill}°C`;




function calculateWindChill(t, v){
    return 13.12 + 0.6215*t - 11.37*(v**0.16) + 0.3965*t*(v**0.16)

}

