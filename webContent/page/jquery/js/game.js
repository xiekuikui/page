
function startGame(){
    createBrick(100);
    createBall();
    changeBackgroundColor(12,12,12);
}

function collision(ball,bricks) {


}

function changeBackgroundColor(r,g,b){
    let element=$('#area');
    element.css('background-color',getRGB());
    let rgb=element.attr('background-color');
    console.log(rgb);


    let rdx=1;
    let gdx=1;
    let bdx=1;
    if(r>255||r<0){
        rdx=-rdx;
    }
    if(g>255||g<0){
        gdx=-gdx;
    }
    if(b>255||b<0){
        bdx=-bdx;
    }
}


function createBrick(size) {
    let container=$('#area');
    let elements=new Array(size);

    for (let i = 0; i <elements.length ; i++) {
        let element=$('<div>',{
            class:'brick'
        })
        element.css({
            'background-color':getRGB(),
            'top':getPosition(850),
            'left':getPosition(1920)
        })
        elements[i]=element;
        element.appendTo(container);
    }

    return elements;
}

function createBall(){
    let container=$('#area');
    let element=$('<div>',{
        class:'ball'
    })
    element.css({
        'background-color':getRGB(),
        'top':getPosition(850),
        'left':getPosition(1920)
    })

    container.append(element);
    return element;
}

function getRGB() {
    let rgb='rgb('+
        Math.floor(Math.random()*255)+','+
        Math.floor(Math.random()*255)+','+
        Math.floor(Math.random()*255)+')';

    return rgb;
}

function getPosition(length) {
    return Math.floor(Math.random()*(length-15))+'px';

}