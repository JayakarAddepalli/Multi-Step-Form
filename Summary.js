if(window.outerWidth<=768){
    // ====================================================To add plan data starts from here=====================================================


let Plan_Name = document.getElementById('planName_s');
let Plan_Range = document.getElementById('planrange_s');
let Plan_Cost = document.getElementById('Cost_s');
let Plan_Cost_Range = document.getElementById('Costrange_s');

let Data_Plan = localStorage.getItem('PlanSelected_s');
let Dataplan = JSON.parse(Data_Plan);

let Addamt = document.getElementById('AddAmt_s');
let Addamtrange = document.getElementById('AmtRange_s');


Plan_Name.textContent = Dataplan.plan;
if(Dataplan.range == 'mo'){
    Plan_Range.textContent = '(Monthly)';
    Plan_Cost_Range.textContent = 'mo';
    
}
else{
    Plan_Range.textContent = '(Yearly)';
    Plan_Cost_Range.textContent = 'ye';
}

Plan_Cost.textContent = Dataplan.cost;




// ====================================================To add plan data ends=====================================================


// ====================================================To add addons data starts from here=====================================================


let ADDONDATA1_s = localStorage.getItem('AddOnData1_s');
let ADDONDATA2_s = localStorage.getItem('AddOnData2_s');
let ADDONDATA3_s = localStorage.getItem('AddOnData3_s');

let addondata1 = JSON.parse(ADDONDATA1_s);
let addondata2 = JSON.parse(ADDONDATA2_s);
let addondata3 = JSON.parse(ADDONDATA3_s);



let divNo1_1 = document.getElementById('indiv1_1_s');
let divNo1_2 = document.getElementById('indiv1_2_s');

let divNo2_1 = document.getElementById('indiv2_1_s');
let divNo2_2 = document.getElementById('indiv2_2_s');

let divNo3_1 = document.getElementById('indiv3_1_s');
let divNo3_2 = document.getElementById('indiv3_2_s');


// console.log(addondata1.AddOn);
if(addondata1.AddOn == 'Online service'){

    divNo1_1.textContent = addondata1.AddOn;
    divNo1_2.textContent = addondata1.AddOnCost;

}
else{

    // console.log(addondata1.AddOn);
    divNo1_1.textContent = addondata1.AddOn;
    divNo1_2.textContent = addondata1.AddOnCost;
}

if(addondata2.AddOn == 'Larger storage'){

    divNo2_1.textContent = addondata2.AddOn;
    divNo2_2.textContent = addondata2.AddOnCost;
}
else{

    divNo2_1.textContent = addondata2.AddOn;
    divNo2_2.textContent = addondata2.AddOnCost;
}

if(addondata3.AddOn == 'Customizable Profile'){

    divNo3_1.textContent = addondata3.AddOn;
    divNo3_2.textContent = addondata3.AddOnCost;
}
else{
    
    divNo3_1.textContent = addondata3.AddOn;
    divNo3_2.textContent = addondata3.AddOnCost;    
}



// ====================================================To add addons data ends=====================================================

if(((addondata1.AddOn == 'Online service') && (addondata2.AddOn == 'Larger storage') && (addondata3.AddOn == 'Customizable Profile'))){
    Addamt.textContent = parseInt(Dataplan.cost) + 5;
    if(Dataplan.range == 'mo'){
        Addamtrange.textContent = 'mo'
    }
    else{
        Addamtrange.textContent = 'ye'
    }


    function summarydetails_s(amt, amtrange){
        this.TotalAmount = amt;
        this.TotalRange = amtrange;
    }
    
    let SummaryDetails_s = new summarydetails_s(Addamt.textContent, Addamtrange.textContent)
    
    let sd_s= JSON.stringify(SummaryDetails_s);
    localStorage.setItem('S_D_s', sd_s);
}

else if(((addondata1.AddOn == 'Online service') && (addondata2.AddOn == 'Larger storage'))){
    Addamt.textContent = parseInt(Dataplan.cost) + 3;
    if(Dataplan.range == 'mo'){
        Addamtrange.textContent = 'mo'
    }
    else{
        Addamtrange.textContent = 'ye'
    }


    function summarydetails_s(amt, amtrange){
        this.TotalAmount = amt;
        this.TotalRange = amtrange;
    }
    
    let SummaryDetails_s = new summarydetails_s(Addamt.textContent, Addamtrange.textContent)
    
    let sd_s = JSON.stringify(SummaryDetails_s);
    localStorage.setItem('S_D_s', sd_s);
}

else if(((addondata1.AddOn == 'Online service') && (addondata3.AddOn == 'Customizable Profile'))){
    Addamt.textContent = parseInt(Dataplan.cost) + 3;
    if(Dataplan.range == 'mo'){
        Addamtrange.textContent = 'mo'
    }
    else{
        Addamtrange.textContent = 'ye'
    }


    function summarydetails_s(amt, amtrange){
        this.TotalAmount = amt;
        this.TotalRange = amtrange;
    }
    
    let SummaryDetails_s = new summarydetails_s(Addamt.textContent, Addamtrange.textContent)
    
    let sd_s = JSON.stringify(SummaryDetails_s);
    localStorage.setItem('S_D_s', sd_s);
}

else if((addondata2.AddOn == 'Larger storage') && (addondata3.AddOn == 'Customizable Profile')){
    Addamt.textContent = parseInt(Dataplan.cost) + 4;
    if(Dataplan.range == 'mo'){
        Addamtrange.textContent = 'mo'
    }
    else{
        Addamtrange.textContent = 'ye'
    }

    function summarydetails_s(amt, amtrange){
        this.TotalAmount = amt;
        this.TotalRange = amtrange;
    }
    
    let SummaryDetails_s = new summarydetails_s(Addamt.textContent, Addamtrange.textContent)
    
    let sd_s = JSON.stringify(SummaryDetails_s);
    localStorage.setItem('S_D_s', sd_s);
}


else if((addondata1.AddOn == 'Online service')){
    Addamt.textContent = parseInt(Dataplan.cost) + 1;
    if(Dataplan.range == 'mo'){
        Addamtrange.textContent = 'mo'
    }
    else{
        Addamtrange.textContent = 'ye'
    }
    

    function summarydetails_s(amt, amtrange){
        this.TotalAmount = amt;
        this.TotalRange = amtrange;
    }
    
    let SummaryDetails_s = new summarydetails_s(Addamt.textContent, Addamtrange.textContent)
    
    let sd_s = JSON.stringify(SummaryDetails_s);
    localStorage.setItem('S_D_s', sd_s);
}

else if((addondata2.AddOn == 'Larger storage')){
    Addamt.textContent = parseInt(Dataplan.cost) + 2;
    if(Dataplan.range == 'mo'){
        Addamtrange.textContent = 'mo'
    }
    else{
        Addamtrange.textContent = 'ye'
    }


    function summarydetails_s(amt, amtrange){
        this.TotalAmount = amt;
        this.TotalRange = amtrange;
    }
    
    let SummaryDetails_s = new summarydetails_s(Addamt.textContent, Addamtrange.textContent)
    
    let sd_s = JSON.stringify(SummaryDetails_s);
    localStorage.setItem('S_D_s', sd_s);

}

else if((addondata3.AddOn == 'Customizable Profile')){
    Addamt.textContent = parseInt(Dataplan.cost) + 2;
    if(Dataplan.range == 'mo'){
        Addamtrange.textContent = 'mo'
    }
    else{
        Addamtrange.textContent = 'ye'
    }


    function summarydetails_s(amt, amtrange){
        this.TotalAmount = amt;
        this.TotalRange = amtrange;
    }
    
    let SummaryDetails_s = new summarydetails_s(Addamt.textContent, Addamtrange.textContent)
    
    let sd_s = JSON.stringify(SummaryDetails_s);
    localStorage.setItem('S_D_s', sd_s);
}



else {
    Addamt.textContent = parseInt(Dataplan.cost);
    if(Dataplan.range == 'mo'){
        Addamtrange.textContent = 'mo'
    }
    else{
        Addamtrange.textContent = 'ye'
    }


    function summarydetails_s(amt, amtrange){
        this.TotalAmount = amt;
        this.TotalRange = amtrange;
    }
    
    let SummaryDetails_s = new summarydetails_s(Addamt.textContent, Addamtrange.textContent)
    
    let sd_s = JSON.stringify(SummaryDetails_s);
    localStorage.setItem('S_D_s', sd_s);
}



}











else if(window.outerWidth>768){
    // ====================================================To add plan data starts from here=====================================================


let Plan_Name = document.getElementById('planName');
let Plan_Range = document.getElementById('planrange');
let Plan_Cost = document.getElementById('Cost');
let Plan_Cost_Range = document.getElementById('Costrange');

let Data_Plan = localStorage.getItem('PlanSelected');
let Dataplan = JSON.parse(Data_Plan);

let Addamt = document.getElementById('AddAmt');
let Addamtrange = document.getElementById('AmtRange');


Plan_Name.textContent = Dataplan.plan;
if(Dataplan.range == 'mo'){
    Plan_Range.textContent = '(Monthly)';
    Plan_Cost_Range.textContent = 'mo';
    
}
else{
    Plan_Range.textContent = '(Yearly)';
    Plan_Cost_Range.textContent = 'ye';
}

Plan_Cost.textContent = Dataplan.cost;




// ====================================================To add plan data ends=====================================================


// ====================================================To add addons data starts from here=====================================================


let ADDONDATA1 = localStorage.getItem('AddOnData1');
let ADDONDATA2 = localStorage.getItem('AddOnData2');
let ADDONDATA3 = localStorage.getItem('AddOnData3');

let addondata1 = JSON.parse(ADDONDATA1);
let addondata2 = JSON.parse(ADDONDATA2);
let addondata3 = JSON.parse(ADDONDATA3);



let divNo1_1 = document.getElementById('indiv1_1');
let divNo1_2 = document.getElementById('indiv1_2');

let divNo2_1 = document.getElementById('indiv2_1');
let divNo2_2 = document.getElementById('indiv2_2');

let divNo3_1 = document.getElementById('indiv3_1');
let divNo3_2 = document.getElementById('indiv3_2');


// console.log(addondata1.AddOn);
if(addondata1.AddOn == 'Online service'){

    divNo1_1.textContent = addondata1.AddOn;
    divNo1_2.textContent = addondata1.AddOnCost;

}
else{

    // console.log(addondata1.AddOn);
    divNo1_1.textContent = addondata1.AddOn;
    divNo1_2.textContent = addondata1.AddOnCost;
}

if(addondata2.AddOn == 'Larger storage'){

    divNo2_1.textContent = addondata2.AddOn;
    divNo2_2.textContent = addondata2.AddOnCost;
}
else{

    divNo2_1.textContent = addondata2.AddOn;
    divNo2_2.textContent = addondata2.AddOnCost;
}

if(addondata3.AddOn == 'Customizable Profile'){

    divNo3_1.textContent = addondata3.AddOn;
    divNo3_2.textContent = addondata3.AddOnCost;
}
else{
    
    divNo3_1.textContent = addondata3.AddOn;
    divNo3_2.textContent = addondata3.AddOnCost;    
}



// ====================================================To add addons data ends=====================================================

if(((addondata1.AddOn == 'Online service') && (addondata2.AddOn == 'Larger storage') && (addondata3.AddOn == 'Customizable Profile'))){
    Addamt.textContent = parseInt(Dataplan.cost) + 5;
    if(Dataplan.range == 'mo'){
        Addamtrange.textContent = 'mo'
    }
    else{
        Addamtrange.textContent = 'ye'
    }


    function summarydetails(amt, amtrange){
        this.TotalAmount = amt;
        this.TotalRange = amtrange;
    }
    
    let SummaryDetails = new summarydetails(Addamt.textContent, Addamtrange.textContent)
    
    let sd = JSON.stringify(SummaryDetails);
    localStorage.setItem('S_D', sd);
}

else if(((addondata1.AddOn == 'Online service') && (addondata2.AddOn == 'Larger storage'))){
    Addamt.textContent = parseInt(Dataplan.cost) + 3;
    if(Dataplan.range == 'mo'){
        Addamtrange.textContent = 'mo'
    }
    else{
        Addamtrange.textContent = 'ye'
    }


    function summarydetails(amt, amtrange){
        this.TotalAmount = amt;
        this.TotalRange = amtrange;
    }
    
    let SummaryDetails = new summarydetails(Addamt.textContent, Addamtrange.textContent)
    
    let sd = JSON.stringify(SummaryDetails);
    localStorage.setItem('S_D', sd);
}

else if(((addondata1.AddOn == 'Online service') && (addondata3.AddOn == 'Customizable Profile'))){
    Addamt.textContent = parseInt(Dataplan.cost) + 3;
    if(Dataplan.range == 'mo'){
        Addamtrange.textContent = 'mo'
    }
    else{
        Addamtrange.textContent = 'ye'
    }


    function summarydetails(amt, amtrange){
        this.TotalAmount = amt;
        this.TotalRange = amtrange;
    }
    
    let SummaryDetails = new summarydetails(Addamt.textContent, Addamtrange.textContent)
    
    let sd = JSON.stringify(SummaryDetails);
    localStorage.setItem('S_D', sd);
}

else if((addondata2.AddOn == 'Larger storage') && (addondata3.AddOn == 'Customizable Profile')){
    Addamt.textContent = parseInt(Dataplan.cost) + 4;
    if(Dataplan.range == 'mo'){
        Addamtrange.textContent = 'mo'
    }
    else{
        Addamtrange.textContent = 'ye'
    }

    function summarydetails(amt, amtrange){
        this.TotalAmount = amt;
        this.TotalRange = amtrange;
    }
    
    let SummaryDetails = new summarydetails(Addamt.textContent, Addamtrange.textContent)
    
    let sd = JSON.stringify(SummaryDetails);
    localStorage.setItem('S_D', sd);
}


else if((addondata1.AddOn == 'Online service')){
    Addamt.textContent = parseInt(Dataplan.cost) + 1;
    if(Dataplan.range == 'mo'){
        Addamtrange.textContent = 'mo'
    }
    else{
        Addamtrange.textContent = 'ye'
    }
    

    function summarydetails(amt, amtrange){
        this.TotalAmount = amt;
        this.TotalRange = amtrange;
    }
    
    let SummaryDetails = new summarydetails(Addamt.textContent, Addamtrange.textContent)
    
    let sd = JSON.stringify(SummaryDetails);
    localStorage.setItem('S_D', sd);
}

else if((addondata2.AddOn == 'Larger storage')){
    Addamt.textContent = parseInt(Dataplan.cost) + 2;
    if(Dataplan.range == 'mo'){
        Addamtrange.textContent = 'mo'
    }
    else{
        Addamtrange.textContent = 'ye'
    }


    function summarydetails(amt, amtrange){
        this.TotalAmount = amt;
        this.TotalRange = amtrange;
    }
    
    let SummaryDetails = new summarydetails(Addamt.textContent, Addamtrange.textContent)
    
    let sd = JSON.stringify(SummaryDetails);
    localStorage.setItem('S_D', sd);

}

else if((addondata3.AddOn == 'Customizable Profile')){
    Addamt.textContent = parseInt(Dataplan.cost) + 2;
    if(Dataplan.range == 'mo'){
        Addamtrange.textContent = 'mo'
    }
    else{
        Addamtrange.textContent = 'ye'
    }


    function summarydetails(amt, amtrange){
        this.TotalAmount = amt;
        this.TotalRange = amtrange;
    }
    
    let SummaryDetails = new summarydetails(Addamt.textContent, Addamtrange.textContent)
    
    let sd = JSON.stringify(SummaryDetails);
    localStorage.setItem('S_D', sd);
}



else {
    Addamt.textContent = parseInt(Dataplan.cost);
    if(Dataplan.range == 'mo'){
        Addamtrange.textContent = 'mo'
    }
    else{
        Addamtrange.textContent = 'ye'
    }


    function summarydetails(amt, amtrange){
        this.TotalAmount = amt;
        this.TotalRange = amtrange;
    }
    
    let SummaryDetails = new summarydetails(Addamt.textContent, Addamtrange.textContent)
    
    let sd = JSON.stringify(SummaryDetails);
    localStorage.setItem('S_D', sd);
}




}