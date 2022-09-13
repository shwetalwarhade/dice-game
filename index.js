var n1=Math.random();
n1=n1*6+1;
n1=Math.floor(n1);

document.querySelectorAll('h4')[0].innerText=n1;


var n2=Math.random();
n2=n2*6+1;
n2=Math.floor(n2);

document.querySelectorAll('h4')[1].innerText=n2;

if(n1>n2){
    document.querySelector('h1').innerText="player 1 wins";
}
else if(n2>n1){
    document.querySelector('h1').innerText="player 2 wins";
}
else{
    document.querySelector('h1').innerText="drow";
}
