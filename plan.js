// 'use strict'

// ==========================Larger screen starts================================

if(window.outerWidth<=768){
    let card1 = document.getElementById("card1_s");
    let card2 = document.getElementById("card2_s");
    let card3 = document.getElementById("card3_s");
    
    let value1 = document.getElementById("val1_s");
    let value2 = document.getElementById("val2_s");
    let value3 = document.getElementById("val3_s");
    
    let Yeval1 = document.getElementById("yeval1_s");
    let Yeval2 = document.getElementById("yeval2_s");
    let Yeval3 = document.getElementById("yeval3_s");
    
    let Arcade = document.getElementById('Arcadehead_s');
    let Adavanced = document.getElementById('Advancedhead_s');
    let Pro = document.getElementById('Prohead_s');
    
    let c1 = 0
    let plan = document.getElementById("flexSwitchCheckDefault_s");
    
    let mon = document.getElementById("month_s");
    let yea = document.getElementById("yearly_s");
    
    let Freemonth1 = document.querySelector('.Free1_s');
    let Freemonth2 = document.querySelector('.Free2_s');
    let Freemonth3 = document.querySelector('.Free3_s');
    
    
    let A_p = '';
    let Cost = ''; 
    let rangeV = '';
    
    function plan_data_s(A_p, Cost, rangeV){
        this.plan = A_p;
        this.cost = Cost;
        this.range = rangeV;
    }
    
    let planData_s = new plan_data_s(A_p, Cost, rangeV)
    
    let DataPlan_s = JSON.stringify(planData_s);
    // console.log(DataPlan_s);
    localStorage.setItem('PlanSelected_s', DataPlan_s)
    
    
    
    card1.addEventListener('click', () => {
    
        // console.log('ye');
        let value1 = document.getElementById("val1_s");
    
        let Yeval1 = document.getElementById("yeval1_s");
    
        let Arcade = document.getElementById('Arcadehead_s');
    
        card1.style.borderStyle = 'solid';
        card1.style.borderWidth = '2px';
        card1.style.borderColor = 'blue';
    
    
        card2.style.borderStyle = 'solid';
        card2.style.borderWidth = '1px';
        card2.style.borderColor = 'rgb(206, 206, 206)';
        
    
    
        card3.style.borderStyle = 'solid';
        card3.style.borderWidth = '1px';
        card3.style.borderColor = 'rgb(206, 206, 206)';
    
    
        let A_p = Arcade.textContent;
        let Cost = value1.textContent; 
        let rangeV = Yeval1.textContent;
    
        function plan_data_s(A_p, Cost, rangeV){
            this.plan = A_p;
            this.cost = Cost;
            this.range = rangeV;
        }
    
        let planData_s = new plan_data_s(A_p, Cost, rangeV)
    
        let DataPlan_s = JSON.stringify(planData_s);
        // console.log(DataPlan_s);
        localStorage.setItem('PlanSelected_s', DataPlan_s)
        
    })
    
    
    card2.addEventListener('click', () => {
    
        let value2 = document.getElementById("val2_s");
    
        let Yeval2 = document.getElementById("yeval2_s");
    
        let Adavanced = document.getElementById('Advancedhead_s');
    
    
        card2.style.borderStyle = 'solid';
        card2.style.borderWidth = '2px';
        card2.style.borderColor = 'blue'
    
        card1.style.borderStyle = 'solid';
        card1.style.borderWidth = '1px';
        card1.style.borderColor = 'rgb(206, 206, 206)';
    
    
        card3.style.borderStyle = 'solid';
        card3.style.borderWidth = '1px';
        card3.style.borderColor = 'rgb(206, 206, 206)';
    
        let A_p = Adavanced.textContent;
        let Cost = value2.textContent; 
        let rangeV = Yeval2.textContent;
    
        function plan_data_s(A_p, Cost, rangeV){
            this.plan = A_p;
            this.cost = Cost;
            this.range = rangeV;
        }
    
        let planData_s = new plan_data_s(A_p, Cost, rangeV)
    
        let DataPlan_s = JSON.stringify(planData_s);
        // console.log(DataPlan_s);
        localStorage.setItem('PlanSelected_s', DataPlan_s)
    
    })
    
    
    card3.addEventListener('click', () => {
    
        let value3 = document.getElementById("val3_s");
    
        let Yeval3 = document.getElementById("yeval3_s");
    
        let Pro = document.getElementById('Prohead_s');
    
        card3.style.borderStyle = 'solid';
        card3.style.borderWidth = '2px';
        card3.style.borderColor = 'blue'
    
        card1.style.borderStyle = 'solid';
        card1.style.borderWidth = '1px';
        card1.style.borderColor = 'rgb(206, 206, 206)';
    
    
        card2.style.borderStyle = 'solid';
        card2.style.borderWidth = '1px';
        card2.style.borderColor = 'rgb(206, 206, 206)';
    
        let A_p = Pro.textContent;
        let Cost = value3.textContent; 
        let rangeV = Yeval3.textContent;
    
        function plan_data_s(A_p, Cost, rangeV){
            this.plan = A_p;
            this.cost = Cost;
            this.range = rangeV;
        }
    
        let planData_s = new plan_data_s(A_p, Cost, rangeV)
    
        let DataPlan_s = JSON.stringify(planData_s);
        // console.log(DataPlan_s);
        localStorage.setItem('PlanSelected_s', DataPlan_s)
    })
    
    
    plan.addEventListener('click', ()=>{
        c1 += 1
        if (c1 % 2 != 0) {
            mon.style.color = "rgb(188, 188, 188)";
            yea.style.color = "blue";
            value1.textContent = value1.textContent*10;
            value2.textContent = value2.textContent*10;
            value3.textContent = value3.textContent*10;
            Yeval1.textContent = 'ye';
            Yeval2.textContent = 'ye';
            Yeval3.textContent = 'ye';
            Freemonth1.style.display = 'block';
            Freemonth2.style.display = 'block';
            Freemonth3.style.display = 'block';
    
    
            // console.log(card1.style.borderColor);
    
    
            if(card1.style.borderColor == 'blue'){
                let A_p = Arcade.textContent;
                let Cost = value1.textContent; 
                let rangeV = Yeval1.textContent;
    
                function plan_data_s(A_p, Cost, rangeV){
                    this.plan = A_p;
                    this.cost = Cost;
                    this.range = rangeV;
                }
    
                let planData_s = new plan_data_s(A_p, Cost, rangeV)
    
                let DataPlan_s = JSON.stringify(planData_s);
                // console.log(DataPlan_s);
                localStorage.setItem('PlanSelected_s', DataPlan_s)
            }
            else if(card2.style.borderColor == 'blue'){
                let A_p = Adavanced.textContent;
                let Cost = value2.textContent; 
                let rangeV = Yeval2.textContent;
    
                function plan_data_s(A_p, Cost, rangeV){
                    this.plan = A_p;
                    this.cost = Cost;
                    this.range = rangeV;
                }
                
                let planData_s = new plan_data_s(A_p, Cost, rangeV)
    
                let DataPlan_s = JSON.stringify(planData_s);
                // console.log(DataPlan_s);
                localStorage.setItem('PlanSelected_s', DataPlan_s)
            }
            else if(card3.style.borderColor == 'blue'){
                let A_p = Pro.textContent;
                let Cost = value3.textContent; 
                let rangeV = Yeval3.textContent;
    
                function plan_data_s(A_p, Cost, rangeV){
                    this.plan = A_p;
                    this.cost = Cost;
                    this.range = rangeV;
                }
    
                let planData_s = new plan_data_s(A_p, Cost, rangeV)
    
                let DataPlan_s = JSON.stringify(planData_s);
                // console.log(DataPlan_s);
                localStorage.setItem('PlanSelected_s', DataPlan_s)
            }
            else{
                let A_p = '';
                let Cost = ''; 
                let rangeV = '';
    
                function plan_data_s(A_p, Cost, rangeV){
                    this.plan = A_p;
                    this.cost = Cost;
                    this.range = rangeV;
                }
    
                let planData_s = new plan_data_s(A_p, Cost, rangeV)
    
                let DataPlan_s = JSON.stringify(planData_s);
                // console.log(DataPlan_s);
                localStorage.setItem('PlanSelected_s', DataPlan_s)
            }
            
        }
        else{
            mon.style.color = "blue";
            yea.style.color = "rgb(188, 188, 188)";
            value1.textContent = value1.textContent/10;
            value2.textContent = value2.textContent/10;
            value3.textContent = value3.textContent/10;
            Yeval1.textContent = 'mo';
            Yeval2.textContent = 'mo';
            Yeval3.textContent = 'mo';
            Freemonth1.style.display = 'none';
            Freemonth2.style.display = 'none';
            Freemonth3.style.display = 'none';
            if(card1.style.borderColor == 'blue'){
                let A_p = Arcade.textContent;
                let Cost = value1.textContent; 
                let rangeV = Yeval1.textContent;
    
                function plan_data_s(A_p, Cost, rangeV){
                    this.plan = A_p;
                    this.cost = Cost;
                    this.range = rangeV;
                }
    
                let planData_s = new plan_data_s(A_p, Cost, rangeV)
    
                let DataPlan_s = JSON.stringify(planData_s);
                // console.log(DataPlan_s);
                localStorage.setItem('PlanSelected_s', DataPlan_s)
            }
            else if(card2.style.borderColor == 'blue'){
                let A_p = Adavanced.textContent;
                let Cost = value2.textContent; 
                let rangeV = Yeval2.textContent;
    
                function plan_data_s(A_p, Cost, rangeV){
                    this.plan = A_p;
                    this.cost = Cost;
                    this.range = rangeV;
                }
    
                let planData_s = new plan_data_s(A_p, Cost, rangeV)
    
                let DataPlan_s = JSON.stringify(planData_s);
                // console.log(DataPlan_s);
                localStorage.setItem('PlanSelected_s', DataPlan_s)
            }
            else if(card3.style.borderColor == 'blue'){
                let A_p = Pro.textContent;
                let Cost = value3.textContent; 
                let rangeV = Yeval3.textContent;
    
                function plan_data_s(A_p, Cost, rangeV){
                    this.plan = A_p;
                    this.cost = Cost;
                    this.range = rangeV;
                }
    
                let planData_s = new plan_data_s(A_p, Cost, rangeV)
    
                let DataPlan_s = JSON.stringify(planData_s);
                // console.log(DataPlan_s);
                localStorage.setItem('PlanSelected_s', DataPlan_s)
            }
            else{
                let A_p = '';
                let Cost = ''; 
                let rangeV = '';
    
                function plan_data_s(A_p, Cost, rangeV){
                    this.plan = A_p;
                    this.cost = Cost;
                    this.range = rangeV;
                }
    
                let planData_s = new plan_data_s(A_p, Cost, rangeV)
    
                let DataPlan_s = JSON.stringify(planData_s);
                // console.log(DataPlan_s);
                localStorage.setItem('PlanSelected_s', DataPlan_s)
            }
            
    
    
        }
    
    })
}

else if(window.outerWidth > 768){
    let card1 = document.getElementById("card1");
    let card2 = document.getElementById("card2");
    let card3 = document.getElementById("card3");
    
    let value1 = document.getElementById("val1");
    let value2 = document.getElementById("val2");
    let value3 = document.getElementById("val3");
    
    let Yeval1 = document.getElementById("yeval1");
    let Yeval2 = document.getElementById("yeval2");
    let Yeval3 = document.getElementById("yeval3");
    
    let Arcade = document.getElementById('Arcadehead');
    let Adavanced = document.getElementById('Advancedhead');
    let Pro = document.getElementById('Prohead');
    
    let c1 = 0
    let plan = document.getElementById("flexSwitchCheckDefault");
    
    let mon = document.getElementById("month");
    let yea = document.getElementById("yearly");
    
    let Freemonth1 = document.querySelector('.Free1');
    let Freemonth2 = document.querySelector('.Free2');
    let Freemonth3 = document.querySelector('.Free3');
    
    
    let A_p = '';
    let Cost = ''; 
    let rangeV = '';
    
    function plan_data(A_p, Cost, rangeV){
        this.plan = A_p;
        this.cost = Cost;
        this.range = rangeV;
    }
    
    let planData = new plan_data(A_p, Cost, rangeV)
    
    let DataPlan = JSON.stringify(planData);
    // console.log(DataPlan);
    localStorage.setItem('PlanSelected', DataPlan)
    
    
    
    card1.addEventListener('click', () => {
    
        // console.log('ye');
        let value1 = document.getElementById("val1");
    
        let Yeval1 = document.getElementById("yeval1");
    
        let Arcade = document.getElementById('Arcadehead');
    
        card1.style.borderStyle = 'solid';
        card1.style.borderWidth = '2px';
        card1.style.borderColor = 'blue';
    
    
        card2.style.borderStyle = 'solid';
        card2.style.borderWidth = '1px';
        card2.style.borderColor = 'rgb(206, 206, 206)';
        
    
    
        card3.style.borderStyle = 'solid';
        card3.style.borderWidth = '1px';
        card3.style.borderColor = 'rgb(206, 206, 206)';
    
    
        let A_p = Arcade.textContent;
        let Cost = value1.textContent; 
        let rangeV = Yeval1.textContent;
    
        function plan_data(A_p, Cost, rangeV){
            this.plan = A_p;
            this.cost = Cost;
            this.range = rangeV;
        }
    
        let planData = new plan_data(A_p, Cost, rangeV)
    
        let DataPlan = JSON.stringify(planData);
        // console.log(DataPlan);
        localStorage.setItem('PlanSelected', DataPlan)
        
    })
    
    
    card2.addEventListener('click', () => {
    
        let value2 = document.getElementById("val2");
    
        let Yeval2 = document.getElementById("yeval2");
    
        let Adavanced = document.getElementById('Advancedhead');
    
    
        card2.style.borderStyle = 'solid';
        card2.style.borderWidth = '2px';
        card2.style.borderColor = 'blue'
    
        card1.style.borderStyle = 'solid';
        card1.style.borderWidth = '1px';
        card1.style.borderColor = 'rgb(206, 206, 206)';
    
    
        card3.style.borderStyle = 'solid';
        card3.style.borderWidth = '1px';
        card3.style.borderColor = 'rgb(206, 206, 206)';
    
        let A_p = Adavanced.textContent;
        let Cost = value2.textContent; 
        let rangeV = Yeval2.textContent;
    
        function plan_data(A_p, Cost, rangeV){
            this.plan = A_p;
            this.cost = Cost;
            this.range = rangeV;
        }
    
        let planData = new plan_data(A_p, Cost, rangeV)
    
        let DataPlan = JSON.stringify(planData);
        // console.log(DataPlan);
        localStorage.setItem('PlanSelected', DataPlan)
    
    })
    
    
    card3.addEventListener('click', () => {
    
        let value3 = document.getElementById("val3");
    
        let Yeval3 = document.getElementById("yeval3");
    
        let Pro = document.getElementById('Prohead');
    
        card3.style.borderStyle = 'solid';
        card3.style.borderWidth = '2px';
        card3.style.borderColor = 'blue'
    
        card1.style.borderStyle = 'solid';
        card1.style.borderWidth = '1px';
        card1.style.borderColor = 'rgb(206, 206, 206)';
    
    
        card2.style.borderStyle = 'solid';
        card2.style.borderWidth = '1px';
        card2.style.borderColor = 'rgb(206, 206, 206)';
    
        let A_p = Pro.textContent;
        let Cost = value3.textContent; 
        let rangeV = Yeval3.textContent;
    
        function plan_data(A_p, Cost, rangeV){
            this.plan = A_p;
            this.cost = Cost;
            this.range = rangeV;
        }
    
        let planData = new plan_data(A_p, Cost, rangeV)
    
        let DataPlan = JSON.stringify(planData);
        // console.log(DataPlan);
        localStorage.setItem('PlanSelected', DataPlan)
    })
    
    
    plan.addEventListener('click', ()=>{
        c1 += 1
        if (c1 % 2 != 0) {
            mon.style.color = "rgb(188, 188, 188)";
            yea.style.color = "blue";
            value1.textContent = value1.textContent*10;
            value2.textContent = value2.textContent*10;
            value3.textContent = value3.textContent*10;
            Yeval1.textContent = 'ye';
            Yeval2.textContent = 'ye';
            Yeval3.textContent = 'ye';
            Freemonth1.style.display = 'block';
            Freemonth2.style.display = 'block';
            Freemonth3.style.display = 'block';
    
    
            // console.log(card1.style.borderColor);
    
    
            if(card1.style.borderColor == 'blue'){
                let A_p = Arcade.textContent;
                let Cost = value1.textContent; 
                let rangeV = Yeval1.textContent;
    
                function plan_data(A_p, Cost, rangeV){
                    this.plan = A_p;
                    this.cost = Cost;
                    this.range = rangeV;
                }
    
                let planData = new plan_data(A_p, Cost, rangeV)
    
                let DataPlan = JSON.stringify(planData);
                // console.log(DataPlan);
                localStorage.setItem('PlanSelected', DataPlan)
            }
            else if(card2.style.borderColor == 'blue'){
                let A_p = Adavanced.textContent;
                let Cost = value2.textContent; 
                let rangeV = Yeval2.textContent;
    
                function plan_data(A_p, Cost, rangeV){
                    this.plan = A_p;
                    this.cost = Cost;
                    this.range = rangeV;
                }
    
                let planData = new plan_data(A_p, Cost, rangeV)
    
                let DataPlan = JSON.stringify(planData);
                // console.log(DataPlan);
                localStorage.setItem('PlanSelected', DataPlan)
            }
            else if(card3.style.borderColor == 'blue'){
                let A_p = Pro.textContent;
                let Cost = value3.textContent; 
                let rangeV = Yeval3.textContent;
    
                function plan_data(A_p, Cost, rangeV){
                    this.plan = A_p;
                    this.cost = Cost;
                    this.range = rangeV;
                }
    
                let planData = new plan_data(A_p, Cost, rangeV)
    
                let DataPlan = JSON.stringify(planData);
                // console.log(DataPlan);
                localStorage.setItem('PlanSelected', DataPlan)
            }
            else{
                let A_p = '';
                let Cost = ''; 
                let rangeV = '';
    
                function plan_data(A_p, Cost, rangeV){
                    this.plan = A_p;
                    this.cost = Cost;
                    this.range = rangeV;
                }
    
                let planData = new plan_data(A_p, Cost, rangeV)
    
                let DataPlan = JSON.stringify(planData);
                // console.log(DataPlan);
                localStorage.setItem('PlanSelected', DataPlan)
            }
            
        }
        else{
            mon.style.color = "blue";
            yea.style.color = "rgb(188, 188, 188)";
            value1.textContent = value1.textContent/10;
            value2.textContent = value2.textContent/10;
            value3.textContent = value3.textContent/10;
            Yeval1.textContent = 'mo';
            Yeval2.textContent = 'mo';
            Yeval3.textContent = 'mo';
            Freemonth1.style.display = 'none';
            Freemonth2.style.display = 'none';
            Freemonth3.style.display = 'none';
            if(card1.style.borderColor == 'blue'){
                let A_p = Arcade.textContent;
                let Cost = value1.textContent; 
                let rangeV = Yeval1.textContent;
    
                function plan_data(A_p, Cost, rangeV){
                    this.plan = A_p;
                    this.cost = Cost;
                    this.range = rangeV;
                }
    
                let planData = new plan_data(A_p, Cost, rangeV)
    
                let DataPlan = JSON.stringify(planData);
                // console.log(DataPlan);
                localStorage.setItem('PlanSelected', DataPlan)
            }
            else if(card2.style.borderColor == 'blue'){
                let A_p = Adavanced.textContent;
                let Cost = value2.textContent; 
                let rangeV = Yeval2.textContent;
    
                function plan_data(A_p, Cost, rangeV){
                    this.plan = A_p;
                    this.cost = Cost;
                    this.range = rangeV;
                }
    
                let planData = new plan_data(A_p, Cost, rangeV)
    
                let DataPlan = JSON.stringify(planData);
                // console.log(DataPlan);
                localStorage.setItem('PlanSelected', DataPlan)
            }
            else if(card3.style.borderColor == 'blue'){
                let A_p = Pro.textContent;
                let Cost = value3.textContent; 
                let rangeV = Yeval3.textContent;
    
                function plan_data(A_p, Cost, rangeV){
                    this.plan = A_p;
                    this.cost = Cost;
                    this.range = rangeV;
                }
    
                let planData = new plan_data(A_p, Cost, rangeV)
    
                let DataPlan = JSON.stringify(planData);
                // console.log(DataPlan);
                localStorage.setItem('PlanSelected', DataPlan)
            }
            else{
                let A_p = '';
                let Cost = ''; 
                let rangeV = '';
    
                function plan_data(A_p, Cost, rangeV){
                    this.plan = A_p;
                    this.cost = Cost;
                    this.range = rangeV;
                }
    
                let planData = new plan_data(A_p, Cost, rangeV)
    
                let DataPlan = JSON.stringify(planData);
                // console.log(DataPlan);
                localStorage.setItem('PlanSelected', DataPlan)
            }
            
    
    
        }
    
    })
}

