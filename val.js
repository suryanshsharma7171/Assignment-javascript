function myFunction() {
  
    var day=document.getElementById("d").value;
    var mon=document.getElementById("m").value;
    const x = document.getElementById("mySelect").value;
    if(day=="Day"&&mon=="Month"&&x=="Year")
    {
alert("Please enter date of birth");
document.getElementById("mySelect").style.borderColor = "red",borderwidth ="5";
document.getElementById("d").style.borderColor = "red",borderwidth ="5";
document.getElementById("m").style.borderColor = "red",borderwidth ="5";
    }

    else if(day=="Day")
    {
alert("Please enter a Day");
    }
    else if(mon=="Month")
    {
        alert("Please enter a Month");
    }
   else if(x=="Year")
    {
        alert("Please enter a Year");
    }
    else
    {
    const a = parseInt(x);
    var currentTime = new Date()
var n= currentTime.getFullYear();
var p=Date.parse(n);
var second=1000;
var minute=second*60;
var hour=minute*60;
var day=hour*24;
var month=day*30;
var year=day*365;
var res=Math.round(p/year);
var num=1970;
var add=num+res;
const diff=add-a;
const rest=13;
let messages=[];
if(diff<13)
{
    alert("Sorry Unable to create account You are less than 13 years  ");
    document.getElementById("mySelect").style.borderColor = "red",borderwidth="25";
        return false;
}

else
{
    alert(" You signed up sucessfully!");
}
    }
    document.getElementById("myform").reset();
  
  }
