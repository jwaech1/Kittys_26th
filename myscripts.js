var Button1 = document.getElementById('Button1');
var Button2 = document.getElementById('Button2');
var Box1 = document.getElementById('Box1');
var Box2 = document.getElementById('Box2');

Button1.onclick = function changeColor(){
    if(ChangeMe.style.background == 'red'){
        ChangeMe.style.background = 'blue';
    }else{
        ChangeMe.style.background = 'red';
        } 
}

Button2.onclick = function changeColor2(){
    if(Box2.style.background == 'green'){
        Box2.style.background = 'purple';
    }else{
        Box2.style.background = 'green';
        } 
}
