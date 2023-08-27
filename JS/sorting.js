



document.getElementById("bubble").addEventListener("click",  BubbleSort);



//Generating new array on click
document.getElementById("gen-array").addEventListener("click",div_creater);



//speed
var slider = document.getElementById("myRange");




var container = document.getElementById("array");


function div_creater(){
  
   
    container.innerHTML="";
   
    for(var i=0;i<20;i++)
    {
        
        var value = Math.ceil(Math.random() * 100);
  
        // Creating element div
        var array_ele = document.createElement("div");
  
        // Adding class 'block' to div
        array_ele.classList.add("block");
  
        // Adding style to div
        array_ele.style.height = `${value * 4}px`;
        array_ele.style.transform = `translate(${i * 30}px)`;
  
        // Creating label element for displaying 
        // size of particular block
        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;
  
        // Appending created elements to index.html 
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
        
    }
}




window.onload = div_creater();





