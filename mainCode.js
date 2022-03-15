var btn=document.querySelector("#addNoteBtn");
var noteSection=document.querySelector("#notes");

btn.onclick= function (e){
    e.preventDefault();
    let name=document.querySelector("#name");
    let content=document.querySelector("#content");

    var newNoteBox = document.createElement("div");
    newNoteBox.className=("noteBox");
    
    let newDeleteBtn=document.createElement("button");
    newDeleteBtn.textContent="🗑️";
    
    
    let newNote = document.createElement("p");
    let newNoteText=document.createTextNode(name.value+":"+content.value)
    newNote.appendChild(newNoteText);
    
    newNoteBox.appendChild(newNote);
    newNoteBox.appendChild(newDeleteBtn);
    noteSection.appendChild(newNoteBox);

    newDeleteBtn.onclick = function() {
        newNoteBox.style.display = 'none';
    }


    console.log({name,content,newNote,newNoteBox,newDeleteBtn})

}