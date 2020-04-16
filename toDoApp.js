function addTolist()
{
    var value=document.getElementById("toDoAppInput").value;
    
    if(value!=""){
        var node = document.createElement("LI"); 
        var div = document.createElement("DIV"); 
        div.className = "flex1"       ;                  
        var textnode = document.createTextNode(value); 
        div.appendChild(textnode);
        div.onclick = function() {
           this.className = "flex1 stricked"  
          }
        node.appendChild(div); 
        
        var div = document.createElement("DIV"); 
        div.className = "flex2"       ;                  
        var textnode = document.createTextNode("\u00D7"); 
        div.appendChild(textnode);
        div.onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
        node.appendChild(div);
        
        node.className = "listToDO"                             
        document.getElementById("toDoAppList").appendChild(node); 
        document.getElementById("toDoAppInput").value="";
    }

}