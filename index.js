const display = document.getElementById('display');

function appendToDisplay(input)
{
display.value += input;
}



function calculator()
{
    try{

display.value = eval(display.value);
}
catch(error)

{
    display.value = "error";
}
}
 

function cleardisplay()
{
getElementById('display').innerHTML = " ";
}
window.alert("calculator");