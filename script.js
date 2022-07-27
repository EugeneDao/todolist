let newnotedate = document.getElementById("newnotedate");
let prioritynum = document.getElementById("prioritynum");
const submitbtn = document.getElementById("");
let i=0;
//? function save data
function submitEvent(){
    let newtask = document.getElementById("newnote").value;
    const node = document.createElement('li');
    const txtnode = document.createTextNode(`${newtask}`)
   node.setAttribute('id', `listid${i}`);
    node.appendChild(txtnode);
    let a = document.getElementById('myList').appendChild(node);
    node.onclick = function () {
        this.parentElement.removeChild(this);
        let b = document.getElementById('myList2').appendChild(node)
    };
    i++
}


