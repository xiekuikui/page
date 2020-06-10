function createTableaByInput(){

    $('table').empty();

    let col=$('#col').val();
    let row=$('#row').val();
    let table=$('<table></table>');
    //table.empty();
    for(let i=0;i<row;i++){
        let tr=$('<tr></tr>');
        tr.appendTo(table);
        tr.css({
            'border':'solid black 1px',
        })
        for(let j=0;j<col;j++){
            let td=$('<td>测试</td>');
            td.css({
                'border':'solid black 1px',
                'width':'65px',
                'height':'20px'
            })
            td.appendTo(tr);
        }
    }
    table.appendTo('body')
}

function createTable(col,row){
    let table=$('<table></table>');
    for(let i=0;i<row;i++){
        let tr=$('<tr></tr>');
        tr.appendTo(table);
        tr.css({
            'border':'solid black 1px',
        })
        for(let j=0;j<col;j++){
            let td=$('<td>测试</td>');
            td.css({
                'border':'solid black 1px',
                'width':'65px',
                'height':'20px'
            })
            td.appendTo(tr);
        }
    }
    table.appendTo('body')
}

$('document').ready(function () {
    //createTable();
   // createTable(26,13)
})

