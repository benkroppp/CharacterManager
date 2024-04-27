var initiativeArray = [];
export var temparray = [];
export const BuildInitObject = (text, number) => {
    var temp = {
        name: text,
        init: number
    }
    initiativeArray.push(temp);
    temparray = [...initiativeArray];
    return {
        name: text,
        init: number
    }
}
export const BuildCards = (initobj) =>{
    
    const CardDiv = document.createElement("div");
    CardDiv.textContent = initobj.name + " " + initobj.init;
    console.log(CardDiv);
    return CardDiv;
}