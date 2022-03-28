function addNote() {
   let addBtn = document.querySelector("#addBtn");
   let name = document.querySelector("#name");
   let content = document.querySelector("#content");
   let notes = document.querySelector("#notes");

   let box = document.createElement("div");
   box.className = "form-control";

   let row = document.createElement("div");
   row.className = "row";

   let text = document.createElement("div");
   text.className = "col-10";
   text.appendChild(document.createTextNode(name.value + ":" + content.value));

   let rmBtn = document.createElement("button");
   rmBtn.className = "col-2 btn btn-primary";
   rmBtn.textContent = "🗑️";

   row.appendChild(text);
   row.appendChild(rmBtn);
   box.appendChild(row);
   notes.appendChild(box);

   rmBtn.onclick = function () {
      box.style.display = "none";
   };

   console.log({ addBtn, name, content, box, row, text, rmBtn });
}
