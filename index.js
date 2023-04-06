let aElement = document.getElementById("A");
let bElement = document.getElementById("B");
let colorContainer = document.getElementById("color-container");



let dropDown1Ele = document.getElementById("drop-down-1");
let dropDown2Ele = document.getElementById("drop-down-2");
let dropDown3Ele = document.getElementById("drop-down-3");
let dropDown4Ele = document.getElementById("drop-down-4");

let colorObj = {
    color : "bg-dark" 
};

let finalObject ={};







function changeColorToInfo(){
    if (colorObj.color == "bg-dark"){
        colorObj.color = "bg-info";
        colorContainer.classList.remove("bg-dark");
        colorContainer.classList.add("bg-info"); 
    }
    else{
        colorContainer.classList.remove("bg-warning");
        colorContainer.classList.add("bg-info"); 
    }
    
} 


function changeColorToWarning(){
    if (colorObj.color == "bg-dark"){
        colorObj.color = "bg-warning";
        colorContainer.classList.remove("bg-dark");
        colorContainer.classList.add("bg-warning");
    }
    else{
        colorContainer.classList.remove("bg-info");
        colorContainer.classList.add("bg-warning"); 
    }
}


aElement.addEventListener("click", changeColorToInfo);
bElement.addEventListener("click", changeColorToWarning);



function setNextDropDown(event, dropDownEle, optionsList){
    

    optionsList.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        dropDownEle.appendChild(optionElement);
      });
    
} 

let dropDown2List = {


    
        Engineering : { "select option":[],  ECE:["Select Option","Communications", "AnalogCircuits","DigitalCircuits"],   CSE:["Select Option","Python","JavaScript"],  EEE:["Select Option","PowerElectronics","Machines"]},
        
        
        Schooling : {"select option":[],Class8:["Select Option","Maths8","Phyics8","Chemistry8"],Class9:["Select Option","Maths9","Phyics9","Chemistry9"],Class10:["Select Option","Maths10","Phyics10","Chemistry10"]},
        
        
        Intermediate :   {"select option":[],Class11:["Select Option","Maths11","Phyics11","Chemistry11"],Class12:["Select Option","Math12","Phyics12","Chemistry12"]} 
    
}

let dropDown1Value = null;

let selectedField = document.createElement("h1")

selectedField.classList.add("text-center","p-5")
selectedField.style.color = "white"
colorContainer.appendChild(selectedField)

let selectedBranch = document.createElement("h1")

selectedBranch.classList.add("text-center","p-5")
selectedBranch.style.color = "white"
colorContainer.appendChild(selectedBranch)

let selectedSubject = document.createElement("h1")

selectedSubject.classList.add("text-center","p-5")
selectedSubject.style.color = "white"
colorContainer.appendChild(selectedSubject)



dropDown1Ele.addEventListener("change", function(event){    
    dropDown1Value = event.target.value;
    dropDown2Ele.options.length = 0;
    dropDown3Ele.options.length = 0;
    dropDown4Ele.selectedIndex = 0;
    finalObject["dropDown1"] = event.target.value;
    selectedBranch.textContent = ""
    selectedSubject.textContent = ""
    selectedField.textContent = "Field selected :- " + finalObject["dropDown1"]
    
    setNextDropDown(event, dropDown2Ele, Object.keys(dropDown2List[event.target.value]));
    
})

dropDown2Ele.addEventListener("change", function(event){ 
    dropDown3Ele.options.length = 0; 
    finalObject["dropDown2"] = event.target.value; 
    selectedSubject.textContent = "" 
    selectedBranch.textContent = "Branch selected :- " + finalObject["dropDown2"]
    
    setNextDropDown(event, dropDown3Ele, dropDown2List[dropDown1Value][event.target.value]);
})

dropDown3Ele.addEventListener("change", function(event){ 
    
    dropDown4Ele.selectedIndex = 1;
    finalObject["dropDown3"] = event.target.value; 
    selectedSubject.textContent = "Subject selected :- " + finalObject["dropDown3"]   
})

dropDown4Ele.addEventListener("change", function(event){ 
    
    finalObject["dropDown4"] = event.target.value; 
    console.log(finalObject); 
    
})

