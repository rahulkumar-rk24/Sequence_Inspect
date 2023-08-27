

var baaa = [];

    
var cont=document.getElementById("mk");
  
var delay_time;       
var c_delay;//This is updated ov every div change so that visualization is visible.



function swap(arr,x,y){

    return new Promise((resolve)=>{
    const style1 = window.getComputedStyle(arr[x]);
    const style2 = window.getComputedStyle(arr[y]);
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
    arr[x].style.height = transform2;
    arr[y].style.height = transform1;

    window.requestAnimationFrame(function() {
  
        // For waiting for .25 sec
        setTimeout(() => {
            cont.insertBefore(arr[x], arr[y]);
            resolve();
        }, 200);
    });
});

}





 async function bubblesort(delay = 100)
{
    
    for(var i=0;i<arr.length;i++)
    {
        for(var j=0;j<arr.length-1;j++)
        {
            var temp1 = parseInt(arr[j].style.height);
            var temp2 = parseInt(arr[j+1].style.height);

            arr[j].style.backgroundColor = "#FF4949";
            arr[j+1].style.backgroundColor = "#FF4949";

            await new Promise((resolve)=>

                setTimeout(()=> {
                    resolve();
                },delay)
            );
            
            console.log("run");

            var temp1 = parseInt( arr[j].style.height) ;
            var temp2 = parseInt(arr[j+1].style.height);

            if(temp1>=temp2)
            {
                await swap(arr,j,j+1)
               
               
          
            }


            arr[j].style.backgroundColor = "#98a69e"; //gray
            arr[j+1].style.backgroundColor = "#98a69e";




        }

        
    

        
    }

    

   

}