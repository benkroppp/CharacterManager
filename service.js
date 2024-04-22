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