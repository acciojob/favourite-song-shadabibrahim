//your code here
let a = document.createElement('a');
let txt = document.createTextNode("My current favourite song is")
a.appendChild(txt);
a.href = "https://www.youtube.com/watch?v=8sLS2knUa6Y&pp=ygUEc29uZw%3D%3D"

let urlDiv = document.querySelector("#url");

urlDiv.append(a);
