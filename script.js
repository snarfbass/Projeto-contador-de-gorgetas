function claculateTip(event) {
  event.preventDefault();   
let bill = document.getElementById('bill').value;
let servicequal = document.getElementById('sevicequal');
let nunofpeople = document.getElementById('people').value;

  if(bill== ''  | servicequal == 0 ){
       alert("Por favor preencha os valores")
       return;
  }
  if(nunofpeople == '' | nunofpeople <= 1){
    nunofpeople = 1;
    document.getElementById('each').style.display = "none";
  }else{
    document.getElementById('each').style.display = "block";
  }

    let total = (bill * servicequal) | nunofpeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totaltip').style.display = "block";
}



document.getElementById('totaltip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsform').addEventListener('submit', claculateTip);