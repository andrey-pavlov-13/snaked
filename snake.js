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

    button_table.onclick = function() {
        s_table.innerHTML = "";
        create_table(s_table, 10,10);
    }

    table_cleaner.onclick = function cleaner(elementID){
        s_table.innerHTML = "";
    }

    click.onclick = function (event) {
        let rows_value = document.getElementById("table_rows").value;
        let columns_value = document.getElementById("table_columns").value;
        console.log(rows_value, columns_value);
        // alert(rows_value);
    }
})