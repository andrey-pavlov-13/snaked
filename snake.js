
button_table.onclick = function() {
    document.getElementById("s_table").innerHTML = "";   
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

table_cleaner.onclick = function cleaner(elementID){
    document.getElementById("s_table").innerHTML = "";
}

