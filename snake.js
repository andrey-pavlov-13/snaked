'use strict';

function create_table(parent, columns, rows) {
    let table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    parent.appendChild(table);
}

document.addEventListener('DOMContentLoaded', function () {
    const button_table = document.getElementById('button_table');
    const table_cleaner = document.getElementById('table_cleaner');
    const click = document.getElementById('click');
    const s_table = document.getElementById('s_table');   

    table_cleaner.onclick = function cleaner(elementID){
        s_table.innerHTML = "";
    }
    
    button_table.onclick = function() {
        s_table.innerHTML = "";
        let rows_value = document.getElementById("table_rows").value;
        let columns_value = document.getElementById("table_columns").value;
        let rows_int = parseInt(rows_value);
        let columns_int = parseInt(columns_value);
        console.log(typeof rows_int, typeof columns_int);
        console.log(rows_int, columns_int);
        if (Number.isInteger(rows_int) && Number.isInteger(columns_int)) {
            if (1<=rows_int && 21>rows_int && 1<=columns_int && 21>columns_int) {
              create_table(s_table, rows_int, columns_int);  
            } else {
            console.log('Неверное указаны данные'); 
            }
        } else {
            console.log('Неверно указанны данные');
        }
        
    }

})