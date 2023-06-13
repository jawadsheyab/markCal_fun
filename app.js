let myStudents = ["Ahmad", "Ali", "Anas", "Omar"];
let myStudentsMark = [60, 48, 33, 88];

function markCal() {

    for (let i = 0; i < myStudentsMark.length; i++) {
        if (myStudentsMark[i] <= 49) {
            console.log("Sorry, " + myStudents[i] + " You scored " + myStudentsMark[i] + " and you have Failed!")
        } else if (myStudentsMark[i] >= 50) {
            console.log("Congrats, " + myStudents[i] + " You scored " + myStudentsMark[i] + " and you have Passed!")
        } else {
            console.log("Please Enter a valid number between 0 and 100");
        }
    }

}

markCal();