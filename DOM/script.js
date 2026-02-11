const form = document.getElementById('task-form');
const list = document.getElementById("task-list");

form.addEventListener('submit', (e) => {
   e.preventDefault();
   const text = document.getElementById('task-input');
   //console.log(`a${text.value.trim()}b`);

   if (text.value.trim() != false) {
      const list = document.getElementById('task-list');
      const newElement = document.createElement('li');
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      const textspan = document.createElement("span");
      textspan.textContent = text.value;
      const edt_btn = document.createElement("span");
      edt_btn.textContent = " edit ";
      edt_btn.classList.add('edit-btn');
      const del_btn = document.createElement("span");
      del_btn.textContent = " delete ";
      del_btn.classList.add("delete-btn");
      newElement.append(checkbox, textspan, edt_btn, del_btn);
      list.appendChild(newElement)
      console.log(list)
   }

})
list.addEventListener('click', (e) => {
   console.log(e.target.classList);
   if (e.target.classList.value == 'delete-btn') {
      const li = e.target.closest('li');
      console.log(li);
      li.remove();
   }
   if (e.target.classList.value == 'edit-btn') {
      const li = e.target.closest('li');
      console.log(li);
      const text = li.querySelector("span");
      const inp = document.getElementById("task-input");
      console.log(inp.value);
      inp.value = text.textContent;
      inp.addEventListener("blur", (e) => {
         text.textContent = inp.value.trim();
      });
   }
});