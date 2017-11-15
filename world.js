window.onload=function(){
    let button = document.getElementById("lookup");
    let checkbox = document.getElementById("checkbox");
    let country = document.getElementById("country");
    button.addEventListener("click",function(){
       let request=new XMLHttpRequest();
       request.onreadystatechange=function(){
           if (request.readyState ===4 && request.status ===200)
           {
              document.getElementById("result").innerHTML="<h3>Result</h3>"+request.responseText;
           }
       };
       if(checkbox.checked){
           request.open("GET","world.php?all=true",true);
       }else{
           request.open("GET","world.php?country="+country.value,true);
       }
       request.send();
    });
};