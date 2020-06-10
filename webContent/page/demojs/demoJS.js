// alert("引用外部js文件")

function div(e){
    e.innerHTML="<p>DIV被加载</p>";
}


    let num1=document.getElementById("num1");
    let num2=document.getElementById("num2");
    let symbol=document.getElementById("symbol");
    let res=document.getElementById("res");



function cal(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let symbol=document.getElementById("symbol").value;
    let res=document.getElementById("res");

    console.log(symbol);
    switch (symbol) {
        case "+":
            res.innerText=num1.valueOf()+num2.valueOf();
            break;
        case "-":
            res.innerText=num1.valueOf()-num2.valueOf();
            break;
        case "*":
            res.innerText=num1.valueOf()*num2.valueOf();
            break;
        case "/":
            res.innerText=num1.valueOf()/num2.valueOf();
            break;
        default:
            alert("输入的符号有误");

    }

}
let list=new Array();
list[2]=12;
console.log(list[2]);
let list1=new Array(11,2,3,4,5,6,7);
list1.forEach(i => console.log(i));
let list2=[12,13,14,15,16,17,Date()];
for (let i = 0; i <list2.length ; i++) {
    console.log(list2[i]);
}

{
    let mouseDiv=document.getElementById("mymouse");
    mouseDiv.innerHTML='把鼠标移过来';
    mouseDiv.style.width=200+'px';
    mouseDiv.style.height=200+'px';
    mouseDiv.style.backgroundColor='red';
    mouseDiv.style.textAlign='center';
    mouseDiv.style.lineHeight=200+'px';

    mouseDiv.onmouseover=function(){
        mouseDiv.innerHTML="鼠标在上面";
    }

    mouseDiv.onmouseout=function(){
        mouseDiv.innerText='把鼠标移过来';
    }

}

{
    let newdiv=document.createElement("div");
    console.log(newdiv)
    newdiv.id="new div";
    newdiv.innerText='JS代码创建的元素';
    newdiv.style.width=200+'px';
    newdiv.style.color='red';
    newdiv.style.backgroundColor='white';
    newdiv.style.textAlign='center';
    document.body.appendChild(newdiv);
}

// let num=0;
function animation() {

        let innerdiv=document.createElement('div');
        innerdiv.style.position='absolute';
        innerdiv.style.width='10px';
        innerdiv.style.height='10px';
        innerdiv.style.borderRadius='5px';

        let outdiv=document.getElementById('outDiv');
        outdiv.appendChild(innerdiv);

        let topx=Math.floor(Math.random()*600);
        let lefty=Math.floor(Math.random()*600);

        innerdiv.style.top=topx+'px';
        innerdiv.style.left=lefty+'px';
        innerdiv.style.backgroundColor='RGB('+
            Math.floor(Math.random()*255)+','
            +Math.floor(Math.random()*255)+','
            +Math.floor(Math.random()*255)+')';

        let pos=0;
        let movex=1;
        let movey=1;

        var id=setInterval(fram,10);

        function fram() {

            if(movex==1){
                if(topx>590){
                    movex=-1;
                }
                topx++;
                innerdiv.style.top=topx+'px';
            }
            if(movex==-1){
                if(topx<0){
                    movex=1;
                }
                topx--;
                innerdiv.style.top=topx+'px';
            }

            if(movey==1){
                if(lefty>590){
                    movey=-1;
                }
                lefty++;
                innerdiv.style.left=lefty+'px';
            }

            if(movey==-1){
                if(lefty<0){
                    movey=1;
                }
                lefty--;
                innerdiv.style.left=lefty+'px';
            }
        }
}



