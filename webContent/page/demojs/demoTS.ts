function f(name:string) {
    alert(name);

}

interface defScreen{
    width:string;
    height:string;
}

let thisScreen={width:'1920',height:'1080'};

function getsize(screen:defScreen){
    alert("宽度"+screen.width
    +'\n高度'+screen.height);

}
