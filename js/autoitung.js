function UpdateCost() {


    if(document.getElementById("crad").checked==true){
      //document.getElementById('totalcost').value = document.getElementById("crad").value;
      document.getElementById("item12").checked = true;
      document.getElementById("item13").checked = false;
      document.getElementById("item14").checked = false;
    }else if(document.getElementById("drad").checked==true){
      //document.getElementById('totalcost').value = document.getElementById("drad").value;
      document.getElementById("item12").checked = false;
      document.getElementById("item13").checked = true;
      document.getElementById("item14").checked = false;
    }else if(document.getElementById("erad").checked==true){
      //document.getElementById('totalcost').value = document.getElementById("erad").value;
      document.getElementById("item12").checked = false;
      document.getElementById("item13").checked = false;
      document.getElementById("item14").checked = true;
    }

  var sum = 0;
  var totalcost=parseFloat(document.getElementById('totalcost').value) ;
  var gn, elem;
  for (i=0; i<17; i++) {
    gn = 'item'+i;
    elem = document.getElementById(gn);
    if (elem.checked == true) { sum += Number(elem.value); }
  }
  //document.getElementById('totalcost').value = sum.toFixed(2);
  document.getElementById('totalcost').value = sum.toFixed(2);

  document.getElementById('total').innerHTML = "Rp "+format(sum.toFixed(2));
  // alert(document.getElementById('totalcost').value);
} 


//var currentValue = 0;
function handleClick(myRadio) {
    bx=myRadio;
    var cbs = document.getElementsByTagName('input');

    if(document.getElementById("arad").checked==true){

      document.getElementById("proda").style.borderColor = "red";
      document.getElementById("prodb").style.borderColor = "grey";
      document.getElementById("proda").style.borderWidth = "4px";
      document.getElementById("prodb").style.borderWidth = "1px";
      for(var i=0; i < cbs.length; i++) {
         if(cbs[i].type == 'checkbox') {
           cbs[i].checked = bx.unchecked;
         }
       }

      //document.getElementById('totalcost').value = document.getElementById("arad").value;
      document.getElementById("item15").checked = true;
      document.getElementById("item16").checked = false;
      document.getElementById("item0").disabled = false;
      document.getElementById("item1").disabled = false;
      document.getElementById("item2").disabled = false;
      document.getElementById("item3").disabled = false;
      document.getElementById("item4").disabled = false;
      document.getElementById("item5").disabled = false;
      document.getElementById("item6").disabled = false;
      document.getElementById("item7").disabled = false;
      document.getElementById("item8").disabled = true;
      document.getElementById("item9").disabled = true;
      document.getElementById("item10").disabled = true;
      document.getElementById("item11").disabled = true;
    }else if(document.getElementById("brad").checked==true){
      document.getElementById("proda").style.borderColor = "grey";
      document.getElementById("proda").style.borderWidth = "1px";
      document.getElementById("prodb").style.borderColor = "red";
      document.getElementById("prodb").style.borderWidth = "4px";
      for(var i=0; i < cbs.length; i++) {
       if(cbs[i].type == 'checkbox') {
         cbs[i].checked = bx.unchecked;
       }
     }
      //document.getElementById('totalcost').value = document.getElementById("brad").value;
      document.getElementById("item15").checked = false;
      document.getElementById("item16").checked = true;
      document.getElementById("item0").disabled = true;
      document.getElementById("item1").disabled = true;
      document.getElementById("item2").disabled = true;
      document.getElementById("item3").disabled = true;
      document.getElementById("item4").disabled = false;
      document.getElementById("item5").disabled = false;
      document.getElementById("item6").disabled = true;
      document.getElementById("item7").disabled = true;
      document.getElementById("item8").disabled = false;
      document.getElementById("item9").disabled = false;
      document.getElementById("item10").disabled = false;
      document.getElementById("item11").disabled = false;
    }


}


const format = num => {
    const n = String(num),
          p = n.indexOf('.')
    return n.replace(
        /\d(?=(?:\d{3})+(?:\.|$))/g,
        (m, i) => p < 0 || i < p ? `${m},` : m
    )
}