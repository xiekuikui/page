

function  addEmp() {



    let input_id=$('#insert-id input').val().trim();
    let input_name=$('#insert-name input').val().trim();
    let input_dept=$('#insert-dept input').val().trim();
    let input_salary=$('#insert-salary input').val().trim();

    if(isNull(input_id)||isNull(input_name)||isNull(input_dept)||isNull(input_salary)){
        alert("员工信息不能为空！");
        return;
    }

    let $tr=$('<tr>');
    let $id_td=$('<td>');
    let $name_td=$('<td>');
    let $dept_td=$('<td>');
    let $salary_td=$('<td>');
    let $check_td=$('<td><input type="checkbox"></td>');

    $id_td.addClass("emp-id");
    $name_td.addClass('emp-name');
    $dept_td.addClass('emp-dept');
    $salary_td.addClass('emp-salary');

    $id_td.text(input_id);
    $name_td.text(input_name);
    $dept_td.text(input_dept);
    $salary_td.text(input_salary);

    let empList=$('.emp-id');
    if(isInList(input_id,empList)){
        let table=$('#emp-table tbody');
        $tr.append($id_td).append($name_td).append($dept_td).append($salary_td).append($check_td);
        table.append($tr);
        check_td=$('#emp-table tbody tr:last td:last');
        check_td.on('click','input',function () {
            if($(this).prop('checked')){
                $(this).parent().parent().addClass("danger");
            }else{
                $(this).parent().parent().removeClass('danger');
            }
        });

    }else{
        alert('员工已存在，ID重复！');
        return false;
    }
}

function  updateEmp() {
    alert('功能未启用');

}

function deleteEmp() {

    alert('供能暂未启用');

}


function isNull(element) {
    //console.log(element);
    if (element == null || element == '' || element == undefined){
        return true;
    }else {
        return false;
    }

}

function isInList(V,elements) {
    let flag=true;
    elements.each(function () {
        //console.log($(this).text()==V);
        //console.log(V);

        if(V==$(this).text()){
            flag=false;
            return false;
        }
   });

    return flag;

}

function checked() {
    //console.log($(this))
    $(this).parent().parent().addClass('success');
    //console.log(1212121);
}