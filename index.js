const input=document.getElementById("numofwords");
const container = document.querySelector(".container");

let numofwords;

const generateword=(n) => {
    let text="";
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i=0;i<n;i++){
        const random=(Math.random()*(letters.length-1)).toFixed(0);
        text+=letters[random];
        // console.log(random);
    }

    return text;
};

console.log(generateword(6))
const paragenerator = () =>{
    numofwords=Number(input.value);

    const para=document.createElement("p");

    let data="";

    for(let i=0;i<numofwords;i++){
        const randomNumber=(Math.random()*15).toFixed(0);
        data+=generateword(randomNumber);
        data+=" ";
    }
    

    para.innerText = data;

    para.setAttribute("class","paras");

    container.append(para);
};