
button_table.onclick = function() {   
    let s_table = document.querySelector('#s_table');
    function create__table(parent, columns, rows) { 
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
create__table(s_table, 10,10);       
}