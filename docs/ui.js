//imports
import { SaveCharacter, LoadCharacter, DeleteCharData, SaveInitiative, LoadInitiative, ClearInitiative } from "./service.js";
import { BuildInitObject, BuildCards, temparray } from "./domain.js";
//element selectors
const managerpage = document.getElementById("managerpage") !== null;
const index = document.getElementById("index") !== null;
const tracker = document.getElementById("tracker");
if (index) {
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
    const assignChar = async () => {
        return await LoadCharacter();
    }
    const char = await LoadCharacter();
    const form = document.getElementById("saveordelete");
    form.addEventListener("submit", (e) =>{
        e.preventDefault();
    })
    const renderChar = (bool) =>{
    if(bool){
    console.log(char);
    nameload.textContent +=": " + char.name;
    classload.textContent += ": " + char.class;
    raceload.textContent += ": " + char.race;
    alignmentload.textContent += ": " + char.alignment;
    console.log("we're getting here");
    } else {
    nameload.textContent = "";
    nameload.textContent = "Character Name";
    classload.textContent = "Class";
    raceload.textContent = "Race";
    alignmentload.textContent = "Alignment";
    console.log("why");
    }
}
    renderChar(char);
    deletechar.addEventListener("click", (e) => {
        console.log("why are you doing this");
        e.preventDefault();
        DeleteCharData();
        renderChar(false);
    })

}
if(tracker){
    const container = document.getElementById("card-container");
    const delet = document.getElementById("clearinitiative");
    delet.addEventListener("click", (e) => {
        e.preventDefault();
        ClearInitiative();
        container.replaceChildren();
    })
    var load = await LoadInitiative();
    var temp;
    console.log(load);
    if(load !== null){
        console.log(load);
        for(var i = 0; i < load.length; i++) {
            console.log(load[i]);
            temp = BuildInitObject(load[i].name, load[i].init);
            console.log(temp);
            container.appendChild(BuildCards(temp));
        }
    }
    const form = document.getElementById("initform");
    const char = document.getElementById("charinput");
    const init = document.getElementById("initiative");

    const saveinit = document.getElementById("saveinitiative");
    saveinit.addEventListener("click", () => {
        console.log("is this working?")
        SaveInitiative(temparray);
    })
    var newinitobj;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(char.value + " " + init.value);
        newinitobj = BuildInitObject(char.value, init.value);
        
        container.appendChild(BuildCards(newinitobj));
    })
}
console.log(managerpage);
LoadCharacter();