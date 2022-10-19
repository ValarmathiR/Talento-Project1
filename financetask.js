function display()
{
    var x=document.getElementById("Select").value
    if(x=="Finance")
    {
        document.getElementById("finance").style.display=" ";
        document.getElementById("sales").style.display="none";
    }
    else if(x=="Sales")
    {
        document.getElementById("finance").style.display="none";
        document.getElementById("sales").style.display = "block ";
    }
    else if(x=="All")
    {
        document.getElementById("finance").style.display="block";
        document.getElementById("sales").style.display="block";
    }
}
  
// document.getElementById('input').addEventListener("keyup", keyupfun)
// function keyupfun()
// {
//     var a=document.getElementsByClassName('fin-box');
//     for(var i=0;i<a.length;i++)
//     {
//         var val=document.getElementById('input').value.toLowerCase();
//         if(a[i].innerHTML.toLowerCase().indexOf(val) != -1)
//         {
//             a[i].style.display=' ';
//         }
//         else{
//             a[i].style.display='none';
//         }
//     }
// }

function search()
{
    let input = document.getElementById('input').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('fin-box');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="";                 
        }
    }
}


