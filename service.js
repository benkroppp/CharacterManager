export const SaveCharacter = async (object) => {
    const jsonchar = JSON.stringify(object);
    await localStorage.setItem("character", jsonchar);
}
export const LoadCharacter = async () => {
    const localchar = await localStorage.getItem("character");
    console.log(JSON.parse(localchar));
    return JSON.parse(localchar);
}
export const DeleteData = () => {
    localStorage.clear();
}
export const SaveInitiative = async (initobj) => {
    const jsoninit = JSON.stringify(initobj);
    await localStorage.setItem("initiative", jsoninit)
}
export const LoadInitiative = async () => {
    const localinit = await localStorage.getItem("initiative");
    console.log(JSON.parse(localinit));
    return JSON.parse(localinit);
}