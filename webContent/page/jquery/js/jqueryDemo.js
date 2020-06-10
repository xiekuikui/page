//@ts-check
$('document').ready(function () {
    let elementdiv = $('#clock');
    elementdiv.css('background', 'lightgray');
    elementdiv.css({'color': 'red', 'border': 'black 1px solid', 'width': '1920px', 'height': '20px'});
    elementdiv.css('text-align','center');
    elementdiv.innerText = 'jQuery选择器设置的div样式';


    let flag = true;
    // elementdiv.click(function () {
    //     let elementTemp= $("#clock");
    //     if (flag){
    //         elementTemp.css('background','red');
    //         flag=false;
    //     }
    //     else{
    //         elementTemp.css('background','blue');
    //         flag=true;
    //     }
    // })

    elementdiv.click(function () {

        setInterval(fram, 300);

        function fram() {
            let rgb = 'rgb(' +
                Math.floor(Math.random() * 255) + ',' +
                Math.floor(Math.random() * 255) + ',' +
                Math.floor(Math.random() * 255) + ')';
            elementdiv.css('background', rgb);

        }
    })
})



