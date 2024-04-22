//imports
import { SaveCharacter, LoadCharacter, DeleteData } from "./service.js";
//element selectors
const managerpage = document.getElementById("managerpage") !== null;
if (!managerpage) {
    const nameElement = document.getElementById("name");
    const classElement = document.getElementById("class");
    const raceElement = document.getElementById("race");
    const alignmentElement = document.getElementById("alignment");
    const form = document.getElementById("creator-form");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const values = {
            name: nameElement.value,
            class: classElement.value,
            race: raceElement.value,
            alignment: alignmentElement.value,
        }
        SaveCharacter(values);
        var test = await LoadCharacter();
        console.log(test);
    })
}
if (managerpage) {
    const deletechar = document.getElementById("delete");
    const nameload = document.getElementById("name-load");
    const classload = document.getElementById("class-load");
    const raceload = document.getElementById("race-load");
    const alignmentload = document.getElementById("alignment-load");
    const char = await LoadCharacter();
    if(char){
    console.log(char);
    nameload.textContent = char.name;
    classload.textContent = char.class;
    raceload.textContent = char.race;
    alignmentload.textContent = char.alignment;
    }

    deletechar.addEventListener("click", (e) => {
        e.preventDefault();
        DeleteData();
    })

}
console.log(managerpage);
LoadCharacter();