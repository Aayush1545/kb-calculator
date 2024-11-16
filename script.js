document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#sheet-table tbody');
    const addRowButton = document.getElementById('add-row-button');
    const calculateSumButton = document.getElementById('calculate-sum-button');
    const saveButton = document.getElementById('save-button');
    const numCols = 5; // Number of columns (excluding the row header)

    // Initialize table with a few rows
  
        addRow(tableBody, numCols, 20);
    

    addRowButton.addEventListener('click', () => {
        addRow(tableBody, numCols, 10);
    });

    calculateSumButton.addEventListener('click', calculateSums);

    saveButton.addEventListener('click', saveTableDataAsPDF);

    tableBody.addEventListener('keydown', handleNavigation);

    // Add event listener for input events to handle auto-fill logic
    tableBody.addEventListener('input', handleAutoFill);
});

function addRow(tableBody, numCols,numRows) {
    for(let i=0; i<numRows ; i++){
    const rowCount = tableBody.rows.length;
    const row = document.createElement('tr');

    const rowHeader = document.createElement('td');
    rowHeader.textContent = rowCount + 1;
    row.appendChild(rowHeader);

    for (let j = 0; j < numCols; j++) {
        const cell = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        cell.appendChild(input);
        row.appendChild(cell);
    }

    tableBody.appendChild(row);
  }
   
}

function handleNavigation(event) {
    const input = event.target;
    if (input.tagName.toLowerCase() !== 'input') return;

    const td = input.parentElement;
    const tr = td.parentElement;
    const table = tr.parentElement;

    const currentRowIndex = Array.from(table.children).indexOf(tr);
    const currentColIndex = Array.from(tr.children).indexOf(td);

    if(event.keyCode=== 32){
            moveFocus(table, currentRowIndex + 1, currentColIndex);
                
    }
    
    else{ 
        switch (event.key) {
        case 'ArrowUp':
            moveFocus(table, currentRowIndex - 1, currentColIndex);
            break;
        case 'ArrowDown':
            moveFocus(table, currentRowIndex + 1, currentColIndex);
            break;
        case 'ArrowLeft':
            moveFocus(table, currentRowIndex, currentColIndex - 1);
            break;
        case 'ArrowRight':
            moveFocus(table, currentRowIndex, currentColIndex + 1);
            break;
        case 'Enter':
            moveFocus(table, currentRowIndex + 1, currentColIndex);
            break;      
    }

  } 
    
}

function moveFocus(table, rowIndex, colIndex) {
    if (rowIndex < 0 || rowIndex >= table.children.length) return;
    const row = table.children[rowIndex];
    if (colIndex < 1 || colIndex >= row.children.length) return; // colIndex starts at 1 because 0 is the row header
    row.children[colIndex].querySelector('input').focus();
}

function handleAutoFill(event) {
    const input = event.target;
        if (input.tagName.toLowerCase() !== 'input') return;
    
        const td = input.parentElement;
        const tr = td.parentElement;
        const rowIndex = Array.from(tr.parentElement.children).indexOf(tr);
        const colIndex = Array.from(tr.children).indexOf(td);
    
        if (colIndex === 1) { // Only trigger auto-fill for the first column (column index 1)
            const value = input.value.toLowerCase();
            const secondColInput = tr.children[2]?.querySelector('input'); // Column index 2 for 3rd column
            const thirdColInput = tr.children[3]?.querySelector('input'); // Column index 3 for 4th column
            const fourthColInput = tr.children[4]?.querySelector('input');
            const fifthColInput = tr.children[5]?.querySelector('input');

            secondColInput.value = '';
            thirdColInput.value = '';
            fourthColInput.value = '';
            fifthColInput.value = '';

            if (value === '4.30' && secondColInput) {
                secondColInput.value = '2.39';
            }
            else if (value === '4.31' && secondColInput) {
                secondColInput.value = '2.52';
            }
            else if (value === '4.32' && secondColInput) {
                secondColInput.value = '2.66';
            }
            else if (value === '4.33' && secondColInput) {
                secondColInput.value = '2.80';
            }
            else if (value === '4.34' && secondColInput) {
                secondColInput.value = '2.95';
            }
            else if (value === '4.35' && secondColInput) {
                secondColInput.value = '3.10';
            }
            else if (value === '4.36' && secondColInput) {
                secondColInput.value = '3.25';
            }
            else if (value === '4.37' && secondColInput) {
                secondColInput.value = '3.41';
            }
            else if (value === '4.38' && secondColInput) {
                secondColInput.value = '3.57';
            }
            else if (value === '4.39' && secondColInput) {
                secondColInput.value = '3.73';
            }
            else if (value === '4.310' && secondColInput) {
                secondColInput.value = '3.90';
            }
            else if (value === '4.311' && secondColInput) {
                secondColInput.value = '4.07';
            }
            else if (value === '4.40' && secondColInput) {
                secondColInput.value = '4.25';
            }
            else if (value === '4.41' && secondColInput) {
                secondColInput.value = '4.42';
            }
            else if (value === '4.42' && secondColInput) {
                secondColInput.value = '4.61';
            }
            else if (value === '4.43' && secondColInput) {
                secondColInput.value = '4.79';
            }
            else if (value === '4.44' && secondColInput) {
                secondColInput.value = '4.98';
            }
            else if (value === '4.45' && secondColInput) {
                secondColInput.value = '5.18';
            }
            else if (value === '4.46' && secondColInput) {
                secondColInput.value = '5.37';
            }
            else if (value === '4.47' && secondColInput) {
                secondColInput.value = '5.57';
            }
            else if (value === '4.48' && secondColInput) {
                secondColInput.value = '5.78';
            }
            else if (value === '4.49' && secondColInput) {
                secondColInput.value = '5.99';
            }
            else if (value === '4.410' && secondColInput) {
                secondColInput.value = '6.20';
            }
            else if (value === '4.411' && secondColInput) {
                secondColInput.value = '6.42';
            }
            else if (value === '4.50' && secondColInput) {
                secondColInput.value = '6.64';
            }
            else if (value === '4.51' && secondColInput) {
                secondColInput.value = '6.86';
            }
            else if (value === '4.52' && secondColInput) {
                secondColInput.value = '7.09';
            }
            else if (value === '4.53' && secondColInput) {
                secondColInput.value = '7.32';
            }
            else if (value === '4.54' && secondColInput) {
                secondColInput.value = '7.55';
            }
            else if (value === '4.55' && secondColInput) {
                secondColInput.value = '7.79';
            }
            else if (value === '4.56' && secondColInput) {
                secondColInput.value = '8.03';
            }
            else if (value === '4.57' && secondColInput) {
                secondColInput.value = '8.28';
            }
            else if (value === '4.58' && secondColInput) {
                secondColInput.value = '8.52';
            }
            else if (value === '4.59' && secondColInput) {
                secondColInput.value = '8.78';
            }
            else if (value === '4.510' && secondColInput) {
                secondColInput.value = '9.03';
            }
            else if (value === '4.511' && secondColInput) {
                secondColInput.value = '9.20';
            }
            else if (value === '4.60' && secondColInput) {
                secondColInput.value = '9.56';
            }
            else if (value === '4.61' && secondColInput) {
                secondColInput.value = '9.82';
            }
            else if (value === '4.62' && secondColInput) {
                secondColInput.value = '10.10';
            }
            else if (value === '4.63' && secondColInput) {
                secondColInput.value = '10.37';
            }
            else if (value === '4.64' && secondColInput) {
                secondColInput.value = '10.65';
            }
            else if (value === '4.65' && secondColInput) {
                secondColInput.value = '10.93';
            }
            else if (value === '4.66' && secondColInput) {
                secondColInput.value = '11.22';
            }
            else if (value === '4.67' && secondColInput) {
                secondColInput.value = '11.51';
            }
            else if (value === '4.68' && secondColInput) {
                secondColInput.value = '11.80';
            }
            else if (value === '4.69' && secondColInput) {
                secondColInput.value = '12.10';
            }
            else if (value === '4.610' && secondColInput) {
                secondColInput.value = '12.40';
            }
            else if (value === '4.611' && secondColInput) {
                secondColInput.value = '12.70';
            }
            else if (value === '4.70' && secondColInput) {
                secondColInput.value = '13.01';
            }
            else if (value === '4.10' && fifthColInput) {
                fifthColInput.value = '0.26';
            }
            else if (value === '4.11' && fifthColInput) {
                fifthColInput.value = '0.31';
            }
            else if (value === '4.12' && fifthColInput) {
                fifthColInput.value = '0.36';
            }
            else if (value === '4.13' && fifthColInput) {
                fifthColInput.value = '0.41';
            }
            else if (value === '4.14' && fifthColInput) {
                fifthColInput.value = '0.47';
            }
            else if (value === '4.15' && fifthColInput) {
                fifthColInput.value = '0.53';
            }
            else if (value === '4.16' && fifthColInput) {
                fifthColInput.value = '0.59';
            }
            else if (value === '4.17' && fifthColInput) {
                fifthColInput.value = '0.66';
            }
            else if (value === '4.18' && fifthColInput) {
                fifthColInput.value = '0.73';
            }
            else if (value === '4.19' && fifthColInput) {
                fifthColInput.value = '0.81';
            }
            else if (value === '4.110' && fifthColInput) {
                fifthColInput.value = '0.89';
            }
            else if (value === '4.111' && fifthColInput) {
                fifthColInput.value = '0.97';
            }
            else if (value === '4.20' && fourthColInput) {
                fourthColInput.value = '1.06';
            }
            else if (value === '4.21' && fourthColInput) {
                fourthColInput.value = '1.15';
            }
            else if (value === '4.22' && fourthColInput) {
                fourthColInput.value = '1.24';
            }
            else if (value === '4.23' && fourthColInput) {
                fourthColInput.value = '1.34';
            }
            else if (value === '4.24' && fourthColInput) {
                fourthColInput.value = '1.44';
            }
            else if (value === '4.25' && fourthColInput) {
                fourthColInput.value = '1.55';
            }
            else if (value === '4.26' && thirdColInput) {
                thirdColInput.value = '1.66';
            }
            else if (value === '4.27' && thirdColInput) {
                thirdColInput.value = '1.77';
            }
            else if (value === '4.28' && thirdColInput) {
                thirdColInput.value = '1.88';
            }
            else if (value === '4.29' && thirdColInput) {
                thirdColInput.value = '2.00';
            }
            else if (value === '4.210' && thirdColInput) {
                thirdColInput.value = '2.13';
            }
            else if (value === '4.211' && thirdColInput) {
                thirdColInput.value = '2.25';
            }
            else if (value === '3.30' && secondColInput) {
                secondColInput.value = '1.82';
            }
            else if (value === '3.31' && secondColInput) {
                secondColInput.value = '1.93';
            }
            else if (value === '3.32' && secondColInput) {
                secondColInput.value = '2.03';
            }
            else if (value === '3.33' && secondColInput) {
                secondColInput.value = '2.14';
            }
            else if (value === '3.34' && secondColInput) {
                secondColInput.value = '2.25';
            }
            else if (value === '3.35' && secondColInput) {
                secondColInput.value = '2.37';
            }
            else if (value === '3.36' && secondColInput) {
                secondColInput.value = '2.48';
            }
            else if (value === '3.37' && secondColInput) {
                secondColInput.value = '2.60';
            }
            else if (value === '3.38' && secondColInput) {
                secondColInput.value = '2.73';
            }
            else if (value === '3.39' && secondColInput) {
                secondColInput.value = '2.85';
            }
            else if (value === '3.310' && secondColInput) {
                secondColInput.value = '2.98';
            }
            else if (value === '3.311' && secondColInput) {
                secondColInput.value = '3.11';
            }
            else if (value === '3.40' && secondColInput) {
                secondColInput.value = '3.25';
            }
            else if (value === '3.41' && secondColInput) {
                secondColInput.value = '3.38';
            }
            else if (value === '3.42' && secondColInput) {
                secondColInput.value = '3.52';
            }
            else if (value === '3.43' && secondColInput) {
                secondColInput.value = '3.66';
            }
            else if (value === '3.44' && secondColInput) {
                secondColInput.value = '3.81';
            }
            else if (value === '3.45' && secondColInput) {
                secondColInput.value = '3.96';
            }
            else if (value === '3.46' && secondColInput) {
                secondColInput.value = '4.11';
            }
            else if (value === '3.47' && secondColInput) {
                secondColInput.value = '4.26';
            }
            else if (value === '3.48' && secondColInput) {
                secondColInput.value = '4.42';
            }
            else if (value === '3.49' && secondColInput) {
                secondColInput.value = '4.58';
            }
            else if (value === '3.410' && secondColInput) {
                secondColInput.value = '4.74';
            }
            else if (value === '3.411' && secondColInput) {
                secondColInput.value = '4.91';
            }
            else if (value === '3.50' && secondColInput) {
                secondColInput.value = '5.07';
            }
            else if (value === '3.51' && secondColInput) {
                secondColInput.value = '5.24';
            }
            else if (value === '3.52' && secondColInput) {
                secondColInput.value = '5.42';
            }
            else if (value === '3.53' && secondColInput) {
                secondColInput.value = '5.59';
            }
            else if (value === '3.54' && secondColInput) {
                secondColInput.value = '5.77';
            }
            else if (value === '3.55' && secondColInput) {
                secondColInput.value = '5.95';
            }
            else if (value === '3.56' && secondColInput) {
                secondColInput.value = '6.14';
            }
            else if (value === '3.57' && secondColInput) {
                secondColInput.value = '6.33';
            }
            else if (value === '3.58' && secondColInput) {
                secondColInput.value = '6.52';
            }
            else if (value === '3.59' && secondColInput) {
                secondColInput.value = '6.71';
            }
            else if (value === '3.510' && secondColInput) {
                secondColInput.value = '6.91';
            }
            else if (value === '3.511' && secondColInput) {
                secondColInput.value = '7.11';
            }
            else if (value === '3.60' && secondColInput) {
                secondColInput.value = '7.31';
            }
            else if (value === '3.61' && secondColInput) {
                secondColInput.value = '7.51';
            }
            else if (value === '3.62' && secondColInput) {
                secondColInput.value = '7.72';
            }
            else if (value === '3.63' && secondColInput) {
                secondColInput.value = '7.93';
            }
            else if (value === '3.64' && secondColInput) {
                secondColInput.value = '8.14';
            }
            else if (value === '3.65' && secondColInput) {
                secondColInput.value = '8.36';
            }
            else if (value === '3.66' && secondColInput) {
                secondColInput.value = '8.58';
            }
            else if (value === '3.67' && secondColInput) {
                secondColInput.value = '8.80';
            }
            else if (value === '3.68' && secondColInput) {
                secondColInput.value = '9.02';
            }
            else if (value === '3.69' && secondColInput) {
                secondColInput.value = '9.25';
            }
            else if (value === '3.610' && secondColInput) {
                secondColInput.value = '9.48';
            }
            else if (value === '3.611' && secondColInput) {
                secondColInput.value = '9.71';
            }
            else if (value === '3.70' && secondColInput) {
                secondColInput.value = '9.95';
            }
            else if (value === '3.10' && fifthColInput) {
                fifthColInput.value = '0.20';
            }
            else if (value === '3.11' && fifthColInput) {
                fifthColInput.value = '0.23';
            }
            else if (value === '3.12' && fifthColInput) {
                fifthColInput.value = '0.27';
            }
            else if (value === '3.13' && fifthColInput) {
                fifthColInput.value = '0.31';
            }
            else if (value === '3.14' && fifthColInput) {
                fifthColInput.value = '0.36';
            }
            else if (value === '3.15' && fifthColInput) {
                fifthColInput.value = '0.40';
            }
            else if (value === '3.16' && fifthColInput) {
                fifthColInput.value = '0.45';
            }
            else if (value === '3.17' && fifthColInput) {
                fifthColInput.value = '0.50';
            }
            else if (value === '3.18' && fifthColInput) {
                fifthColInput.value = '0.56';
            }
            else if (value === '3.19' && fifthColInput) {
                fifthColInput.value = '0.62';
            }
            else if (value === '3.110' && fifthColInput) {
                fifthColInput.value = '0.68';
            }
            else if (value === '3.111' && fifthColInput) {
                fifthColInput.value = '0.74';
            }
            else if (value === '3.20' && fourthColInput) {
                fourthColInput.value = '0.81';
            }
            else if (value === '3.21' && fourthColInput) {
                fourthColInput.value = '0.88';
            }
            else if (value === '3.22' && fourthColInput) {
                fourthColInput.value = '0.95';
            }
            else if (value === '3.23' && fourthColInput) {
                fourthColInput.value = '1.02';
            }
            else if (value === '3.24' && fourthColInput) {
                fourthColInput.value = '1.10';
            }
            else if (value === '3.25' && fourthColInput) {
                fourthColInput.value = '1.18';
            }
            else if (value === '3.26' && thirdColInput) {
                thirdColInput.value = '1.26';
            }
            else if (value === '3.27' && thirdColInput) {
                thirdColInput.value = '1.35';
            }
            else if (value === '3.28' && thirdColInput) {
                thirdColInput.value = '1.44';
            }
            else if (value === '3.29' && thirdColInput) {
                thirdColInput.value = '1.53';
            }
            else if (value === '3.210' && thirdColInput) {
                thirdColInput.value = '1.63';
            }
            else if (value === '3.211' && thirdColInput) {
                thirdColInput.value = '1.72';
            }


            //d-grade

             else if (value === '4.30d' && fifthColInput) {
                fifthColInput.value = '2.39';
            }
            else if (value === '4.31d' && fifthColInput) {
                fifthColInput.value = '2.52';
            }
            else if (value === '4.32d' && fifthColInput) {
                fifthColInput.value = '2.66';
            }
            else if (value === '4.33d' && fifthColInput) {
                fifthColInput.value = '2.80';
            }
            else if (value === '4.34d' && fifthColInput) {
                fifthColInput.value = '2.95';
            }
            else if (value === '4.35d' && fifthColInput) {
                fifthColInput.value = '3.10';
            }
            else if (value === '4.36d' && fifthColInput) {
                fifthColInput.value = '3.25';
            }
            else if (value === '4.37d' && fifthColInput) {
                fifthColInput.value = '3.41';
            }
            else if (value === '4.38d' && fifthColInput) {
                fifthColInput.value = '3.57';
            }
            else if (value === '4.39d' && fifthColInput) {
                fifthColInput.value = '3.73';
            }
            else if (value === '4.310d' && fifthColInput) {
                fifthColInput.value = '3.90';
            }
            else if (value === '4.311d' && fifthColInput) {
                fifthColInput.value = '4.07';
            }
            else if (value === '4.40d' && fifthColInput) {
                fifthColInput.value = '4.25';
            }
            else if (value === '4.41d' && fifthColInput) {
                fifthColInput.value = '4.42';
            }
            else if (value === '4.42d' && fifthColInput) {
                fifthColInput.value = '4.61';
            }
            else if (value === '4.43d' && fifthColInput) {
                fifthColInput.value = '4.79';
            }
            else if (value === '4.44d' && fifthColInput) {
                fifthColInput.value = '4.98';
            }
            else if (value === '4.45d' && fifthColInput) {
                fifthColInput.value = '5.18';
            }
            else if (value === '4.46d' && fifthColInput) {
                fifthColInput.value = '5.37';
            }
            else if (value === '4.47d' && fifthColInput) {
                fifthColInput.value = '5.57';
            }
            else if (value === '4.48d' && fifthColInput) {
                fifthColInput.value = '5.78';
            }
            else if (value === '4.49d' && fifthColInput) {
                fifthColInput.value = '5.99';
            }
            else if (value === '4.410d' && fifthColInput) {
                fifthColInput.value = '6.20';
            }
            else if (value === '4.411d' && fifthColInput) {
                fifthColInput.value = '6.42';
            }
            else if (value === '4.50d' && fifthColInput) {
                fifthColInput.value = '6.64';
            }
            else if (value === '4.51d' && fifthColInput) {
                fifthColInput.value = '6.86';
            }
            else if (value === '4.52d' && fifthColInput) {
                fifthColInput.value = '7.09';
            }
            else if (value === '4.53d' && fifthColInput) {
                fifthColInput.value = '7.32';
            }
            else if (value === '4.54d' && fifthColInput) {
                fifthColInput.value = '7.55';
            }
            else if (value === '4.55d' && fifthColInput) {
                fifthColInput.value = '7.79';
            }
            else if (value === '4.56d' && fifthColInput) {
                fifthColInput.value = '8.03';
            }
            else if (value === '4.57d' && fifthColInput) {
                fifthColInput.value = '8.28';
            }
            else if (value === '4.58d' && fifthColInput) {
                fifthColInput.value = '8.52';
            }
            else if (value === '4.59d' && fifthColInput) {
                fifthColInput.value = '8.78';
            }
            else if (value === '4.510d' && fifthColInput) {
                fifthColInput.value = '9.03';
            }
            else if (value === '4.511d' && fifthColInput) {
                fifthColInput.value = '9.20';
            }
            else if (value === '4.60d' && fifthColInput) {
                fifthColInput.value = '9.56';
            }
            else if (value === '4.61d' && fifthColInput) {
                fifthColInput.value = '9.82';
            }
            else if (value === '4.62d' && fifthColInput) {
                fifthColInput.value = '10.10';
            }
            else if (value === '4.63d' && fifthColInput) {
                fifthColInput.value = '10.37';
            }
            else if (value === '4.64d' && fifthColInput) {
                fifthColInput.value = '10.65';
            }
            else if (value === '4.65d' && fifthColInput) {
                fifthColInput.value = '10.93';
            }
            else if (value === '4.66d' && fifthColInput) {
                fifthColInput.value = '11.22';
            }
            else if (value === '4.67d' && fifthColInput) {
                fifthColInput.value = '11.51';
            }
            else if (value === '4.68d' && fifthColInput) {
                fifthColInput.value = '11.80';
            }
            else if (value === '4.69d' && fifthColInput) {
                fifthColInput.value = '12.10';
            }
            else if (value === '4.610d' && fifthColInput) {
                fifthColInput.value = '12.40';
            }
            else if (value === '4.611d' && fifthColInput) {
                fifthColInput.value = '12.70';
            }
            else if (value === '4.70d' && fifthColInput) {
                fifthColInput.value = '13.01';
            }
            else if (value === '4.20d' && fifthColInput) {
                fifthColInput.value = '1.06';
            }
            else if (value === '4.21d' && fifthColInput) {
                fifthColInput.value = '1.15';
            }
            else if (value === '4.22d' && fifthColInput) {
                fifthColInput.value = '1.24';
            }
            else if (value === '4.23d' && fifthColInput) {
                fifthColInput.value = '1.34';
            }
            else if (value === '4.24d' && fifthColInput) {
                fifthColInput.value = '1.44';
            }
            else if (value === '4.25d' && fifthColInput) {
                fifthColInput.value = '1.55';
            }
            else if (value === '4.26d' && fifthColInput) {
                fifthColInput.value = '1.66';
            }
            else if (value === '4.27d' && fifthColInput) {
                fifthColInput.value = '1.77';
            }
            else if (value === '4.28d' && fifthColInput) {
                fifthColInput.value = '1.88';
            }
            else if (value === '4.29d' && fifthColInput) {
                fifthColInput.value = '2.00';
            }
            else if (value === '4.210d' && fifthColInput) {
                fifthColInput.value = '2.13';
            }
            else if (value === '4.211d' && fifthColInput) {
                fifthColInput.value = '2.25';
            }
            else if (value === '3.30d' && fifthColInput) {
                fifthColInput.value = '1.82';
            }
            else if (value === '3.31d' && fifthColInput) {
                fifthColInput.value = '1.93';
            }
            else if (value === '3.32d' && fifthColInput) {
                fifthColInput.value = '2.03';
            }
            else if (value === '3.33d' && fifthColInput) {
                fifthColInput.value = '2.14';
            }
            else if (value === '3.34d' && fifthColInput) {
                fifthColInput.value = '2.25';
            }
            else if (value === '3.35d' && fifthColInput) {
                fifthColInput.value = '2.37';
            }
            else if (value === '3.36d' && fifthColInput) {
                fifthColInput.value = '2.48';
            }
            else if (value === '3.37d' && fifthColInput) {
                fifthColInput.value = '2.60';
            }
            else if (value === '3.38d' && fifthColInput) {
                fifthColInput.value = '2.73';
            }
            else if (value === '3.39d' && fifthColInput) {
                fifthColInput.value = '2.85';
            }
            else if (value === '3.310d' && fifthColInput) {
                fifthColInput.value = '2.98';
            }
            else if (value === '3.311d' && fifthColInput) {
                fifthColInput.value = '3.11';
            }
            else if (value === '3.40d' && fifthColInput) {
                fifthColInput.value = '3.25';
            }
            else if (value === '3.41d' && fifthColInput) {
                fifthColInput.value = '3.38';
            }
            else if (value === '3.42d' && fifthColInput) {
                fifthColInput.value = '3.52';
            }
            else if (value === '3.43d' && fifthColInput) {
                fifthColInput.value = '3.66';
            }
            else if (value === '3.44d' && fifthColInput) {
                fifthColInput.value = '3.81';
            }
            else if (value === '3.45d' && fifthColInput) {
                fifthColInput.value = '3.96';
            }
            else if (value === '3.46d' && fifthColInput) {
                fifthColInput.value = '4.11';
            }
            else if (value === '3.47d' && fifthColInput) {
                fifthColInput.value = '4.26';
            }
            else if (value === '3.48d' && fifthColInput) {
                fifthColInput.value = '4.42';
            }
            else if (value === '3.49d' && fifthColInput) {
                fifthColInput.value = '4.58';
            }
            else if (value === '3.410d' && fifthColInput) {
                fifthColInput.value = '4.74';
            }
            else if (value === '3.411d' && fifthColInput) {
                fifthColInput.value = '4.91';
            }
            else if (value === '3.50d' && fifthColInput) {
                fifthColInput.value = '5.07';
            }
            else if (value === '3.51d' && fifthColInput) {
                fifthColInput.value = '5.24';
            }
            else if (value === '3.52d' && fifthColInput) {
                fifthColInput.value = '5.42';
            }
            else if (value === '3.53d' && fifthColInput) {
                fifthColInput.value = '5.59';
            }
            else if (value === '3.54d' && fifthColInput) {
                fifthColInput.value = '5.77';
            }
            else if (value === '3.55d' && fifthColInput) {
                fifthColInput.value = '5.95';
            }
            else if (value === '3.56d' && fifthColInput) {
                fifthColInput.value = '6.14';
            }
            else if (value === '3.57d' && fifthColInput) {
                fifthColInput.value = '6.33';
            }
            else if (value === '3.58d' && fifthColInput) {
                fifthColInput.value = '6.52';
            }
            else if (value === '3.59d' && fifthColInput) {
                fifthColInput.value = '6.71';
            }
            else if (value === '3.510d' && fifthColInput) {
                fifthColInput.value = '6.91';
            }
            else if (value === '3.511d' && fifthColInput) {
                fifthColInput.value = '7.11';
            }
            else if (value === '3.60d' && fifthColInput) {
                fifthColInput.value = '7.31';
            }
            else if (value === '3.61d' && fifthColInput) {
                fifthColInput.value = '7.51';
            }
            else if (value === '3.62d' && fifthColInput) {
                fifthColInput.value = '7.72';
            }
            else if (value === '3.63d' && fifthColInput) {
                fifthColInput.value = '7.93';
            }
            else if (value === '3.64d' && fifthColInput) {
                fifthColInput.value = '8.14';
            }
            else if (value === '3.65d' && fifthColInput) {
                fifthColInput.value = '8.36';
            }
            else if (value === '3.66d' && fifthColInput) {
                fifthColInput.value = '8.58';
            }
            else if (value === '3.67d' && fifthColInput) {
                fifthColInput.value = '8.80';
            }
            else if (value === '3.68d' && fifthColInput) {
                fifthColInput.value = '9.02';
            }
            else if (value === '3.69d' && fifthColInput) {
                fifthColInput.value = '9.25';
            }
            else if (value === '3.610d' && fifthColInput) {
                fifthColInput.value = '9.48';
            }
            else if (value === '3.611d' && fifthColInput) {
                fifthColInput.value = '9.71';
            }
            else if (value === '3.70d' && fifthColInput) {
                fifthColInput.value = '9.95';
            }
            else if (value === '3.20d' && fifthColInput) {
                fifthColInput.value = '0.81';
            }
            else if (value === '3.21d' && fifthColInput) {
                fifthColInput.value = '0.88';
            }
            else if (value === '3.22d' && fifthColInput) {
                fifthColInput.value = '0.95';
            }
            else if (value === '3.23d' && fifthColInput) {
                fifthColInput.value = '1.02';
            }
            else if (value === '3.24d' && fifthColInput) {
                fifthColInput.value = '1.10';
            }
            else if (value === '3.25d' && fifthColInput) {
                fifthColInput.value = '1.18';
            }
            else if (value === '3.26d' && fifthColInput) {
                fifthColInput.value = '1.26';
            }
            else if (value === '3.27d' && fifthColInput) {
                fifthColInput.value = '1.35';
            }
            else if (value === '3.28d' && fifthColInput) {
                fifthColInput.value = '1.44';
            }
            else if (value === '3.29d' && fifthColInput) {
                fifthColInput.value = '1.53';
            }
            else if (value === '3.210d' && fifthColInput) {
                fifthColInput.value = '1.63';
            }
            else if (value === '3.211d' && fifthColInput) {
                fifthColInput.value = '1.72';
            }    
            else {
                secondColInput.value = '';
                thirdColInput.value = '';
                fourthColInput.value = '';
                fifthColInput.value = '';
            }
            
        } 
}

function calculateSums() {
    const tableBody = document.querySelector('#sheet-table tbody');
    const sums = [0, 0, 0, 0]; // For columns 2, 3, 4, 5
    let rate=parseFloat(document.getElementById('rate-input').value);
    const dRate=parseFloat(document.getElementById('d-rate-input').value); 
    Array.from(tableBody.rows).forEach(row => {
        for (let i = 0; i < sums.length; i++) {
            const cellValue = parseFloat(row.cells[i + 2].querySelector('input').value) || 0;
            sums[i] += cellValue;
        }
    });
    const total= totalSum(sums,rate);

    const sumsDisplay = document.getElementById('sums-display');
    sumsDisplay.innerHTML = `
    A = ${(sums[0]).toFixed(2)} = Rs. ${((sums[0]).toFixed(2)*rate).toFixed(2)}<br>
    B = ${(sums[1]).toFixed(2)} = Rs. ${((sums[1]).toFixed(2)*(rate-30)).toFixed(2)}<br>
    C = ${(sums[2]).toFixed(2)} = Rs. ${((sums[2]).toFixed(2)*(rate-60)).toFixed(2)}<br>
    D = ${(sums[3]).toFixed(2)} = Rs. ${((sums[3]).toFixed(2)*dRate).toFixed(2)}<br>
    TOTAL = Rs. ${total}
    `;

    return sums; // Return sums for use in PDF generation
}

function totalSum(sums, rate) {
      const dRate=parseFloat(document.getElementById('d-rate-input').value);
    const total = (
        (Number(sums[0].toFixed(2)) * rate) +
        (Number(sums[1].toFixed(2)) * (rate - 30)) +
        (Number(sums[2].toFixed(2)) * (rate - 60)) +
        (Number(sums[3].toFixed(2)) * dRate)
    ).toFixed(2);
    return Number(total);
}

function totalKb(sums) {
    const totalkb = (
        (Number(sums[0].toFixed(2))) +
        (Number(sums[1].toFixed(2))) +
        (Number(sums[2].toFixed(2))) +
        (Number(sums[3].toFixed(2)))
    ).toFixed(2);
    return Number(totalkb);
}

function saveTableDataAsPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Set font styles
    doc.setFont('helvetica', 'normal');

    // Add header
    doc.setFontSize(18);
    doc.text('DETAILS:', 10, 15);

    // Add supplier info
    const nameInput = document.getElementById('name-input').value;
    const veichleNoInput = document.getElementById('veichle-no-input').value;
    const dateInput = document.getElementById('date-input').value;

    let yPos = 30;
    if (nameInput) {
        doc.setFontSize(12);
        doc.text(`Supplier's Name: ${nameInput}`, 10, yPos);
        yPos += 7;
    }
    if (veichleNoInput) {
        doc.setFontSize(12);
        doc.text(`Vehicle No.: ${veichleNoInput}`, 10, yPos);
        yPos += 7;
    }
    if (dateInput) {
        doc.setFontSize(12);
        doc.text(`Date: ${dateInput}`, 10, yPos);
        yPos += 7;
    }

    // Add table
    const table = document.getElementById('sheet-table');
    const rows = table.querySelectorAll('tbody tr');
    const data = [];

    rows.forEach(row => {
        const rowData = [];
        const cells = row.querySelectorAll('td');

        cells.forEach(cell => {
            const input = cell.querySelector('input');
            rowData.push(input ? input.value : cell.textContent);
        });

        data.push(rowData);
    });

    doc.autoTable({
        head: [['', 'Dimension', 'A', 'B', 'C', 'D']],
        body: data,
        startY: yPos + 10,
        headStyles: { fillColor: [0, 0, 0], textColor: [255, 255, 255] },
        alternateRowStyles: { fillColor: [240, 240, 240] },
    });

    // Add sums
    const sums = calculateSums();
    const rate = parseFloat(document.getElementById('rate-input').value) || 0;
      const dRate=parseFloat(document.getElementById('d-rate-input').value) || 0;
    const total = totalSum(sums, rate);
    const totalKb= totalKb(sums);

    doc.setFontSize(12);
    yPos = doc.autoTable.previous.finalY + 10;
    doc.text('Summary:', 10, yPos);
    yPos += 7;

    const sumText =
        `A = ${(sums[0]).toFixed(2)} KB = Rs. ${((sums[0]).toFixed(2) * rate).toFixed(2)}\n` +
        `B = ${(sums[1]).toFixed(2)} KB = Rs. ${((sums[1]).toFixed(2) * (rate - 30)).toFixed(2)}\n` +
        `C = ${(sums[2]).toFixed(2)} KB = Rs. ${((sums[2]).toFixed(2) * (rate - 60)).toFixed(2)}\n` +
        `D = ${(sums[3]).toFixed(2)} KB = Rs. ${((sums[3]).toFixed(2) * dRate).toFixed(2)}\n` +
        `Total =${totalKb} KB =Rs ${total}`;

    doc.text(sumText, 10, yPos + 7);

    // Save the PDF
    doc.save(`${nameInput} - ${veichleNoInput}.pdf`);
}


function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth <= 600;
}
