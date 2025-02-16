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

//Task 2 - Product Price After Discount

//Function expression to calculate the final price after a discount
const calculateDiscount = function(price, discountRate) {
    //Calculating the final price by subtracting the discount from the original price
    const finalPrice = price - (price * discountRate);

    //Logging the final price to the console to two decimal places
    console.log(`Final price: $${finalPrice.toFixed(2)}`);
};

//Test cases - Values can be changed
calculateDiscount(100, 0.2); //Expected output - Final price: $80.00
calculateDiscount(250, 0.15); //Expected output - Final price: $212.50

//Task 3 - Service Fee Calculation

//Arrow function to calculate the service fee based on the service type
const calculateServiceFee = (amount, serviceType) => {
    //Initializing the fee rate to 0
    let feeRate = 0;

    //Assigning different rates based on the service type
    if (serviceType === "Premium") feeRate = 0.15;
    else if (serviceType === "Standard") feeRate = 0.10;
    else if (serviceType === "Basic") feeRate = 0.05;

    //Calculating the fee by multiplying the amount by the fee rate
    const fee = amount * feeRate;

    //Logging the service fee to the console to two decimal places
    console.log(`Service fee: $${fee.toFixed(2)}`);
};

//Test cases - Values can be changed
calculateServiceFee(200, "Premium"); //Expected output - Service fee: $30.00
calculateServiceFee(500, "Standard"); //Expected output - Service fee: $50.00