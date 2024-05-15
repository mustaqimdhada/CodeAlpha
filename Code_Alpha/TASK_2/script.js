const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalAmount = document.getElementById('total-amount');
expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

    if (expenseName && !isNaN(expenseAmount)) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${expenseName}</td>
            <td>Rs ${expenseAmount.toFixed(2)}</td>
            <td>
                <button class="edit-btn" onclick="editExpense(this)">Edit</button>
                <button class="delete-btn" onclick="deleteExpense(this)">Delete</button>
            </td>
        `;
        expenseList.appendChild(newRow);
        const currentTotal = parseFloat(totalAmount.textContent.replace('Rs ', ''));
        const newTotal = currentTotal + expenseAmount;
        totalAmount.textContent = `Rs ${newTotal.toFixed(2)}`;
        expenseForm.reset();
    }
});
function editExpense(button) {
    const row = button.closest('tr');
    const cells = row.querySelectorAll('td');

    const expenseName = cells[0].textContent;
    const expenseAmount = parseFloat(cells[1].textContent.replace('Rs ', ''));
    document.getElementById('expense-name').value = expenseName;
    document.getElementById('expense-amount').value = expenseAmount;
    row.remove();
    const currentTotal = parseFloat(totalAmount.textContent.replace('Rs ', ''));
    const newTotal = currentTotal - expenseAmount;
    totalAmount.textContent = `Rs ${newTotal.toFixed(2)}`;
}
function deleteExpense(button) {
    const row = button.closest('tr');
    const cells = row.querySelectorAll('td');
    const expenseAmount = parseFloat(cells[1].textContent.replace('Rs ', ''));
    row.remove();
    const currentTotal = parseFloat(totalAmount.textContent.replace('Rs ', ''));
    const newTotal = currentTotal - expenseAmount;
    totalAmount.textContent = `Rs ${newTotal.toFixed(2)}`;
}
