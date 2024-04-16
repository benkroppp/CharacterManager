//imports
import { SaveCharacter, LoadCharacter, DeleteData } from "./service.js";
//element selectors
const managerpage = document.getElementById("managerpage") !== null;
if(!managerpage){
const form = document.getElementById("creator-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    const values = Object.fromEntries(data.entries());
    SaveCharacter(values);
})
}
if(managerpage){
    const deletechar = document.getElementById("delete");
    deletechar.addEventListener("click", (e) => {
        e.preventDefault();
        DeleteData();
    })
}
console.log(managerpage);
LoadCharacter();