var sp2 = document.getElementById("sp1");
var heading = document.createElement("h1");
var h1_text= document.createTextNode("Todo App");
heading.setAttribute("id","h1");
heading.appendChild(h1_text);
sp2.appendChild(heading);



// Create Input

var div = document.getElementById('div_box');
var input = document.createElement('input'); 
input.setAttribute("type", "text");
input.setAttribute('id','inpu_id');
input.setAttribute("size", "30");
input.setAttribute('placeholder','Enter work');
div.appendChild(input);

// Button todo
var main = document.getElementById("div_box");
var button = document.createElement('button');
var text= document.createTextNode("Add");
button.setAttribute("class","btn btn-info");
button.setAttribute("id",'btn');
button.appendChild(text);
main.appendChild(button);
button.setAttribute('onclick','myFunc()');




function myFunc(){
    if(document.getElementById("inpu_id").value===""){
        alert("Please enter value");
        
    }
    else{
    var div2 = document.createElement('div');
    div2.setAttribute("id",'div_box2')
    var ul = document.createElement("ul");
    ul.setAttribute("class","list-group");
    var li = document.createElement('li');
    li.setAttribute("id", document.getElementById("inpu_id").value);
    li.setAttribute("class","list-group-item list-group-item-secondary");
    var inpu= document.createTextNode(document.getElementById("inpu_id").value);
    console.log(inpu);
    li.appendChild(inpu);
    ul.appendChild(li);
    div2.appendChild(ul);
    div.appendChild(div2);  
   

    
    // btn for edit

    var btn1 = document.createElement("button");
    var btn1_text=document.createTextNode("Update");
    btn1.setAttribute("class","btn btn-success")
    btn1.setAttribute("id","btn_create")

    btn1.appendChild(btn1_text);
    li.appendChild(btn1);
    btn1.addEventListener('click', function () {
        var x = this.parentNode;
        console.log("x",x);
        var edit = prompt("enter value",x.id)
        console.log("text",edit);
        li.innerText = edit
        li.appendChild(btn1)
        li.appendChild(btn2)

        if(edit===""){
            alert("fill value");
                div2.remove();
        }
        
    })
  



    
    //  btn for delete
    var btn2 = document.createElement("button");
    var btn2_text=document.createTextNode("Cancel");
    btn2.setAttribute("class","btn btn-danger");
    btn2.setAttribute("id","btn3")
    btn2.appendChild(btn2_text);
    li.appendChild(btn2);
    btn2.addEventListener("click", function () {
        btn2.parentNode.remove()
    })
    var un= document.getElementById("inpu_id").value="";

     
    
  

}
}


