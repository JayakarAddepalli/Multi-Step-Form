if(window.outerWidth<=768){
// ========================================To get the user data starts>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let Persondata_s = localStorage.getItem('userdata_s');
console.log(JSON.parse(Persondata_s));

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<To get the user data ends=================================




// ========================================To get the plan data starts>>>>>>>>>>>>>>>>>>>>>>>>

let Data_Plan_s = localStorage.getItem('PlanSelected_s');
console.log(JSON.parse(Data_Plan_s));

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<To get the plan data ends======================================




// ========================================To get the AddOnData starts>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let ADDONDATA1_s = localStorage.getItem('AddOnData1_s');
let ADDONDATA2_s = localStorage.getItem('AddOnData2_s');
let ADDONDATA3_s = localStorage.getItem('AddOnData3_s');
console.log(JSON.parse(ADDONDATA1_s));
console.log(JSON.parse(ADDONDATA2_s));
console.log(JSON.parse(ADDONDATA3_s));

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<To get the AddOnData ends=================================


let Su_DE_s = localStorage.getItem('S_D_s');

console.log(JSON.parse(Su_DE_s));

alert(`
Person Data : ${Persondata_s} 

Plan : ${Data_Plan_s}

1st AddOn : ${ADDONDATA1_s} 

2st AddOn : ${ADDONDATA2_s} 

3st AddOn : ${ADDONDATA3_s}

Total Cost : ${Su_DE_s}

Thank You for your valuable time
`)
}

else if(window.outerWidth>768){
    // ========================================To get the user data starts>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let Persondata = localStorage.getItem('userdata');
console.log(JSON.parse(Persondata));

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<To get the user data ends=================================




// ========================================To get the plan data starts>>>>>>>>>>>>>>>>>>>>>>>>

let Data_Plan = localStorage.getItem('PlanSelected');
console.log(JSON.parse(Data_Plan));

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<To get the plan data ends======================================




// ========================================To get the AddOnData starts>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let ADDONDATA1 = localStorage.getItem('AddOnData1');
let ADDONDATA2 = localStorage.getItem('AddOnData2');
let ADDONDATA3 = localStorage.getItem('AddOnData3');
console.log(JSON.parse(ADDONDATA1));
console.log(JSON.parse(ADDONDATA2));
console.log(JSON.parse(ADDONDATA3));

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<To get the AddOnData ends=================================


let Su_DE = localStorage.getItem('S_D');

console.log(JSON.parse(Su_DE));

alert(`
Person Data : ${Persondata} 

Plan : ${Data_Plan}

1st AddOn : ${ADDONDATA1} 

2st AddOn : ${ADDONDATA2} 

3st AddOn : ${ADDONDATA3}

Total Cost : ${Su_DE}

Thank You for your valuable time
`)
}