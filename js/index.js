console.log("Love Calculator");
function checkloveper(){

    let name = document.getElementById('name').value;
    let lname = document.getElementById('lname').value;
  
    if(name == ""){
     alert('Please enter your name');
    }else if (name.length <=2 ) {
     alert('Min lenght is 3')
    }else if(!isNaN(name)){
     alert('Numbers are not allowed');
    }
  
    else if(lname == ""){
     alert('Please enter your love name');
    }else if (lname.length <=2 ) {
     alert('Min lenght is 3')
    }else if(!isNaN(lname)){
     alert('Numbers are not allowed');
    }
    else{
    let lovdata = Math.random() * 100;
    lovdata = Math.floor(lovdata);
    document.getElementById('lovevalue').value = lovdata + "%"; 
    }
}