for(let i=0;i<100;i++){
    for(let j=0;j<100;j++){
        if(document.getElementsByClassName('Cato')[j].innerText=='Others'){
            document.getElementsByClassName('Cato')[j].style.backgroundColor='#222831'
        }else if(document.getElementsByClassName('Cato')[j].innerText=='Cleaning'){
            document.getElementsByClassName('Cato')[j].style.backgroundColor='#ff9c6d'
        }else if(document.getElementsByClassName('Cato')[j].innerText=='Work'){
            document.getElementsByClassName('Cato')[j].style.backgroundColor='#7fa99b'
        }else if(document.getElementsByClassName('Cato')[j].innerText=='School'){
            document.getElementsByClassName('Cato')[j].style.backgroundColor='#005689'
        }else if(document.getElementsByClassName('Cato')[j].innerText=='Personal'){
            document.getElementsByClassName('Cato')[j].style.backgroundColor='#004445'
        }
    }
}

if(document.querySelector('#CheckBox').checked){
    console.log("hello");
    document.querySelector('#task-div').style.textDecoration = "overline";
}
console.log(document.getElementsByClassName('Cato')[i].innerText);