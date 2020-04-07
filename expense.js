class Expense {
    constructor(name, priceBeforeTax, tax) {
        this.name = name;
        this.priceBeforeTax = priceBeforeTax;
        this.tax = tax;
    }

    getTotalCost() {
        console.log(this.priceBeforeTax + this.tax);
    }
}

const printerExpense = ['Printer toner', 50, 5];
const expense = new Expense(...printerExpense);

console.log(expense);
expense.getTotalCost();