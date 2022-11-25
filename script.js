var string=""
var btns=document.querySelectorAll('button')
Array.from(btns).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string)
            document.querySelector('input').value= string
        }
        else if(e.target.innerHTML =='AC'){
            string=""
            document.querySelector('input').value= string
        }
        else{
            console.log(e.target)
            string=string+e.target.innerHTML
            document.querySelector('input').value= string
        }
    })
})

let keyBoard = document.querySelector("input")
keyBoard.addEventListener('keyup', e =>{

    if(e.keycode === 65 || e.keyCode === 66 || e.keyCode === 67|| e.keyCode === 68|| e.keyCode === 69|| e.keyCode === 70 ||
         e.keyCode === 71 || e.keyCode === 72|| e.keyCode === 73|| e.keyCode === 74|| e.keyCode === 75|| e.keyCode === 76 ||
         e.keyCode === 77 || e.keyCode === 78|| e.keyCode === 79|| e.keyCode === 80|| e.keyCode === 81|| e.keyCode === 82 ||
         e.keyCode === 83 || e.keyCode === 84|| e.keyCode === 85|| e.keyCode === 86|| e.keyCode === 87|| e.keyCode === 88 ||
         e.keyCode === 89 || e.keyCode === 90){
        alert('Only Numbers are allowed');
    }
})
