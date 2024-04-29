export const SaveCharacter = async (object) => {
    const jsonchar = JSON.stringify(object);
    await localStorage.setItem("character", jsonchar);
}
export const LoadCharacter = async () => {
    const localchar = await localStorage.getItem("character");
    console.log(JSON.parse(localchar));
    return JSON.parse(localchar);
}
export const DeleteCharData = () => {
    localStorage.setItem("character", null);
}
export const SaveInitiative = async (initarr) => {
    const jsoninit = JSON.stringify(initarr);
    console.log(jsoninit);
    await localStorage.setItem("initiative", jsoninit);

}
export const LoadInitiative = async () => {
    const localinit = await localStorage.getItem("initiative");
    console.log(JSON.parse(localinit));
    return JSON.parse(localinit);
}
export const ClearInitiative = () => {
    localStorage.setItem("initiative", null);
}
export const searchAPI = async (category, input) => {
    const response = await fetch("https://www.dnd5eapi.co/api/"+category+"/"+input);
    return await response.json();
}
