function create__table(columns__in__table, rows__in__table) { 
    document.write('<table border=1>');
    for (let i = 0; i < rows__in__table; i++) {
        document.write('<tr>');
        for (let j = 0; j < columns__in__table; j++) {
            document.write('<td></td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
}

create__table(10,10);