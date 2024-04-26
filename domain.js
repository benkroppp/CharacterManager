var initiativeArray = [];
var temparray = [];
export const BuildInitObject = (text, number) => {
    var temp = {
        name: text,
        init: number
    }
    //initiativeArray = [...temp].sort((a, b) => parseInt(a.init) - parseInt(b.init));
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