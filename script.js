// ==========================================
// STUDENT DATA
// ==========================================

// Student names
const studentNames = [
    "Ali",
    "Ahmed",
    "Sara",
    "Ayesha",
    "Bilal"
];

// Data Mining marks
const dataMining = [
    75,
    60,
    45,
    80,
    55
];

// Web Programming marks
const webProgramming = [
    82,
    70,
    50,
    85,
    48
];

// Operating Systems marks
const operatingSystems = [
    78,
    65,
    42,
    90,
    52
];

// ==========================================
// CLASS VARIABLES
// ==========================================

let totalClassMarks = 0;
let highestPercentage = 0;
let lowestPercentage = 100;

let passedStudents = 0;
let failedStudents = 0;

// Get HTML element where student cards
// will be displayed
const studentReports = document.getElementById("studentReports");

// ==========================================
// PROCESS EACH STUDENT
// ==========================================

for (let i = 0; i < studentNames.length; i++) {

    // --------------------------------------
    // Calculate total marks
    // --------------------------------------

    let total =
        dataMining[i] +
        webProgramming[i] +
        operatingSystems[i];

    // --------------------------------------
    // Calculate average marks
    // --------------------------------------

    let average = total / 3;

    // --------------------------------------
    // Calculate percentage
    // --------------------------------------

    // Three subjects
    // Each subject is out of 100
    // Maximum total = 300

    let percentage = (total / 300) * 100;

    // --------------------------------------
    // Determine grade
    // --------------------------------------

    let grade;

    if (percentage >= 80) {

        grade = "A";

    } else if (percentage >= 70) {

        grade = "B";

    } else if (percentage >= 60) {

        grade = "C";

    } else if (percentage >= 50) {

        grade = "D";

    } else {

        grade = "F";
    }

    // --------------------------------------
    // Determine Pass or Fail
    // --------------------------------------

    /*
       Student passes if:

       1. Overall percentage is at least 50%
       AND
       2. Student has at least 40 marks
          in every subject
    */

    let passed =
        percentage >= 50 &&
        dataMining[i] >= 40 &&
        webProgramming[i] >= 40 &&
        operatingSystems[i] >= 40;

    let status;

    if (passed) {

        status = "Pass";
        passedStudents++;

    } else {

        status = "Fail";
        failedStudents++;
    }

    // --------------------------------------
    // Determine whether total is Even/Odd
    // --------------------------------------

    let evenOrOdd;

    if (total % 2 === 0) {

        evenOrOdd = "Even";

    } else {

        evenOrOdd = "Odd";
    }

    // --------------------------------------
    // Class calculations
    // --------------------------------------

    // Add total marks to class total
    totalClassMarks += total;

    // Find highest percentage
    if (percentage > highestPercentage) {

        highestPercentage = percentage;
    }

    // Find lowest percentage
    if (percentage < lowestPercentage) {

        lowestPercentage = percentage;
    }

    // ======================================
    // CONSOLE OUTPUT
    // ======================================

    console.log("----------------------------------------");
    console.log("Student Name:", studentNames[i]);
    console.log("Data Mining:", dataMining[i]);
    console.log("Web Programming:", webProgramming[i]);
    console.log("Operating Systems:", operatingSystems[i]);
    console.log("Total Marks:", total);
    console.log("Average Marks:", average.toFixed(2));
    console.log("Percentage:", percentage.toFixed(2) + "%");
    console.log("Grade:", grade);
    console.log("Status:", status);
    console.log("Total is:", evenOrOdd);

    // ======================================
    // CREATE STUDENT CARD FOR WEB PAGE
    // ======================================

    let statusClass = passed ? "pass" : "fail";

    let evenOddClass =
        evenOrOdd === "Even" ? "even" : "odd";

    let studentCard = document.createElement("div");

    studentCard.className = "student-card";

    studentCard.innerHTML = `
        <h3>${studentNames[i]}</h3>

        <div class="marks">
            <p>
                <strong>Data Mining:</strong>
                ${dataMining[i]}
            </p>

            <p>
                <strong>Web Programming:</strong>
                ${webProgramming[i]}
            </p>

            <p>
                <strong>Operating Systems:</strong>
                ${operatingSystems[i]}
            </p>
        </div>

        <div class="result">

            <p>
                <strong>Total Marks:</strong>
                ${total}
            </p>

            <p>
                <strong>Average:</strong>
                ${average.toFixed(2)}
            </p>

            <p>
                <strong>Percentage:</strong>
                ${percentage.toFixed(2)}%
            </p>

            <p>
                <strong>Grade:</strong>
                ${grade}
            </p>

            <p>
                <strong>Status:</strong>
                <span class="${statusClass}">
                    ${status}
                </span>
            </p>

            <p>
                <strong>Total is:</strong>
                <span class="${evenOddClass}">
                    ${evenOrOdd}
                </span>
            </p>

        </div>
    `;

    // Add card to page
    studentReports.appendChild(studentCard);
}

// ==========================================
// CLASS AVERAGE
// ==========================================

let classAverage =
    totalClassMarks / studentNames.length;

// ==========================================
// DISPLAY CLASS REPORT
// ==========================================

document.getElementById("classAverage").textContent =
    classAverage.toFixed(2) + "%";

document.getElementById("highestPercentage").textContent =
    highestPercentage.toFixed(2) + "%";

document.getElementById("lowestPercentage").textContent =
    lowestPercentage.toFixed(2) + "%";

document.getElementById("passedStudents").textContent =
    passedStudents;

document.getElementById("failedStudents").textContent =
    failedStudents;

// ==========================================
// CONSOLE CLASS REPORT
// ==========================================

console.log("\n========================================");
console.log("           CLASS REPORT");
console.log("========================================");

console.log(
    "Class Average:",
    classAverage.toFixed(2) + "%"
);

console.log(
    "Highest Percentage:",
    highestPercentage.toFixed(2) + "%"
);

console.log(
    "Lowest Percentage:",
    lowestPercentage.toFixed(2) + "%"
);

console.log(
    "Students Passed:",
    passedStudents
);

console.log(
    "Students Failed:",
    failedStudents
);

console.log("========================================");
