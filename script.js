function calculate() {
    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);
    let s5 = Number(document.getElementById("sub5").value);

    if (
        [s1, s2, s3, s4, s5].some(mark => isNaN(mark) || mark < 0 || mark > 100)
    ) {
        document.getElementById("result").innerHTML =
            "Please enter valid marks (0-100) for all subjects.";
        return;
    }

    let total = s1 + s2 + s3 + s4 + s5;
    let percentage = total / 5;

    let grade;

    if (percentage >= 90)
        grade = "A+";
    else if (percentage >= 80)
        grade = "A";
    else if (percentage >= 70)
        grade = "B";
    else if (percentage >= 60)
        grade = "C";
    else if (percentage >= 50)
        grade = "D";
    else
        grade = "F";

    let status = (s1 >= 35 && s2 >= 35 && s3 >= 35 && s4 >= 35 && s5 >= 35)
        ? "Pass"
        : "Fail";

    document.getElementById("result").innerHTML = `
        Total Marks: ${total}/500 <br>
        Percentage: ${percentage.toFixed(2)}% <br>
        Grade: ${grade} <br>
        Status: ${status}
    `;
}