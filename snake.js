var s__selector = snake__body;
var columns__in__table = 10;
var rows__in__table = 10;

function crate__table(columns__in__table, rows__in__table) { 
    document.write('<table border="1">');
    for (var i = 0; i < rows__in__table; i++) {
        document.write('<tr>');
        for (var j = 0; j < columns__in__table; j++) {
            document.write('<td></td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
}