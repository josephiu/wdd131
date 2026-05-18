const DAYS =  6;
const LIMIT = 30;
let studtentReport = [11, 42, 33. 64, 29, 37, 44];

studtentReport.forEach(function (studtentReport){
    if (studtentReport > LIMIT) {
        console.log("Student passed with a score of " + studtentReport);
    } else {
        console.log("Student failed with a score of " + studtentReport);
    }
});


