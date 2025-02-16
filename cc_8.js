//Task 1 - Employee Salary Calculation

//Function to calculate net salary based on the base salary, bonus, and tax rate
function calculateSalary(baseSalary, bonus, taxRate) {
    //Calculating net salary by adding the base salary and bonus, then subtracting the tax
    const netSalary = (baseSalary + bonus) - (baseSalary * taxRate);

    //Logging the net salary to the console to two decimal places
    console.log(`Net salary: $${netSalary.toFixed(2)}`);
};

//Test cases - Values can be changed
calculateSalary(5000, 500, 0.1); //Expected output - Net salary: $5000.00
calculateSalary(7000, 1000, 0.15); //Expected output - Net salary: $6950.00