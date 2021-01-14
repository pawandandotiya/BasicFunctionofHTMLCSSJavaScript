function dochange()
{
  alert('you clicked my button with JS function');
}
function myFunction() 
{
  var txt;
  var r = confirm("Press a button!");
  if (r == true) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}

function changecolor()
{
  var divEl1= document.color("div1");
  var divEl2= document.color("div2");
  divEl1.myclass="blueback";
  divEl2.myclass2="orangeback";
}