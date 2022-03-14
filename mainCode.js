var btn=document.querySelector("button");
var noteSection=document.querySelector("#notes");

btn.onclick= function (e){
    e.preventDefault();
    let name=document.querySelector("#name");
    let content=document.querySelector("#content");

    let newNoteBox = document.createElement("p");
    let newNote=document.createTextNode(name.value+":"+content.value)
    newNoteBox.appendChild(newNote);
    noteSection.appendChild(newNoteBox);


    console.log({name,content,newNoteBox})

}