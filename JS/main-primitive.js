



document.getElementById("bubble").addEventListener("click", bubblesort);



//Generating new array on click
document.getElementById("gen-array").addEventListener("click",update_array_size);







var cont=document.getElementById("mk");

const arr = [];

function div_creater(){
  
    arr.length = 0;
    cont.innerHTML="";
   
    for(var i=0;i<10;i++)
    {
        
       var b = document.createElement('div');
       b.className = "skills";
        let temp = (Math.ceil(Math.random() * 99));
        console.log(temp);
       b.style.height =temp +'%';
       arr.push(b);
       document.getElementById('mk').appendChild(b);   
        
    }
}




function update_array_size()
{
    
    div_creater();
}



window.onload=update_array_size();


