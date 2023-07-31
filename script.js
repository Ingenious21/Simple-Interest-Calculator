function compute() {
    // Get the principal amount, rate, and number of years from the inputs
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const years = parseInt(document.getElementById("years").value);

    // Calculate simple interest
    const interest = (principal * rate * years) / 100;

    // Display the result
    document.getElementById("result").textContent = "Interest: " + interest.toFixed(2);
}

// Update the displayed rate value when the range input changes
document.getElementById("rate").addEventListener("input", function() {
    document.getElementById("rate_val").textContent = this.value;
});

// Call compute() initially to display the initial interest value
compute();
