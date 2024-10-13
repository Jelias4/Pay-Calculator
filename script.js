function calculateGrossPay() {
    const payPerHour = parseFloat(document.getElementById("pay").value);
    const hoursWorked = parseFloat(document.getElementById("hours").value);
    
    if (isNaN(payPerHour) || isNaN(hoursWorked)) {
        alert("Please enter valid numbers for both fields.");
        return;
    }

    const grossPay = payPerHour * hoursWorked;
    document.getElementById("result").innerHTML = `Gross Pay: $${grossPay.toFixed(2)}`;
}
