if(window.outerWidth<=768){
    let card1 = document.getElementById("AddOnCard1_s");
    let card2 = document.getElementById("AddOnCard2_s");
    let card3 = document.getElementById("AddOnCard3_s");
    let label1 = document.getElementById('lbl1_s');
    let label2 = document.getElementById('lbl2_s');
    let label3 = document.getElementById('lbl3_s');
    
    
    let AddOnName1 = document.getElementById('AddOn1_s');
    let AddOnName2 = document.getElementById('AddOn2_s');
    let AddOnName3 = document.getElementById('AddOn3_s');
    
    let AddOncost1 = document.getElementById('addOnamt1_s');
    let AddOncost2 = document.getElementById('addOnamt2_s');
    let AddOncost3 = document.getElementById('addOnamt3_s');
    
    
    let Add_On1 = AddOnName1.textContent;
    let Add_On2 = AddOnName2.textContent;
    let Add_On3 = AddOnName3.textContent;
    
    
    let Add_On_cost1 = AddOncost1.textContent;
    let Add_On_cost2 = AddOncost2.textContent;
    let Add_On_cost3 = AddOncost3.textContent;
    
    
    
    let card1_a = document.getElementById("AddOnCard1_a");
    let card2_a = document.getElementById("AddOnCard2_a");
    let card3_a = document.getElementById("AddOnCard3_a");
    let label1_s = document.getElementById('lbl1_s');
    let label2_s = document.getElementById('lbl2_s');
    let label3_s = document.getElementById('lbl3_s');
    
    let c1 =0;
    let c2 =0;
    let c3 = 0;
    
    let c1_s =0;
    let c2_s =0;
    let c3_s = 0;
    
    
        function addones1_s(){
            this.AddOn = '';
            this.AddOnCost = '';
        }
        let Add_Ons1_s = new addones1_s()
    
        // ===================Used JSON.strigify to convert js object to string=======================
        let Add_On_data1_s = JSON.stringify(Add_Ons1_s);
        // =================Used to store the data in localstorage to access it in another webpage========================
        localStorage.setItem('AddOnData1_s', Add_On_data1_s)
        // console.log(Add_On_data1_s);
    
    
    
        function addones2_s(){
            this.AddOn = '';
            this.AddOnCost = '';
        }
        let Add_Ons2_s = new addones2_s()
    
        // ===================Used JSON.strigify to convert js object to string=======================
        let Add_On_data2_s = JSON.stringify(Add_Ons2_s);
        // =================Used to store the data in localstorage to access it in another webpage========================
        localStorage.setItem('AddOnData2_s', Add_On_data2_s)
        // console.log(Add_On_data2_s);
    
    
    
        function addones3_s(){
            this.AddOn = '';
            this.AddOnCost = '';
        }
        let Add_Ons3_s = new addones3_s()
    
    
        // ===================Used JSON.strigify to convert js object to string=======================
        let Add_On_data3_s = JSON.stringify(Add_Ons3_s);
        // =================Used to store the data in localstorage to access it in another webpage========================
        localStorage.setItem('AddOnData3_s', Add_On_data3_s);
        // console.log(Add_On_data3_s);
    
    
    label1.addEventListener('click', () => {
    
    
        c1 += 1;
        if(c1 % 2 != 0){
            card1.style.borderStyle = 'solid';
            card1.style.borderWidth = '2px';
            card1.style.borderColor = 'blue';
    
    
            function addones1_s(Add_On1,Add_On_cost1){
                this.AddOn = Add_On1;
                this.AddOnCost = Add_On_cost1;
            }
            let Add_Ons1_s = new addones1_s(Add_On1,Add_On_cost1)
    
            // ===================Used JSON.strigify to convert js object to string=======================
            let Add_On_data1_s = JSON.stringify(Add_Ons1_s);
            // =================Used to store the data in localstorage to access it in another webpage========================
            localStorage.setItem('AddOnData1_s', Add_On_data1_s)
    
    
            // console.log(Add_On_data1_s);
    
            // =============To add the data to the object================
            if(card2.style.borderColor == 'blue'){
                function addones2_s(Add_On2,Add_On_cost2){
                    this.AddOn = Add_On2;
                    this.AddOnCost = Add_On_cost2;
                }
                let Add_Ons2_s = new addones2_s(Add_On2,Add_On_cost2)
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data2_s = JSON.stringify(Add_Ons2_s);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData2_s', Add_On_data2_s)
                // console.log(Add_On_data2_s);
            }
    
            if(card2.style.borderColor == 'rgb(206,206,206)'){
                function addones2_s(){
                    this.AddOn = '';
                    this.AddOnCost = '';
                }
                let Add_Ons2_s = new addones2_s()
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data2_s = JSON.stringify(Add_Ons2_s);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData2_s', Add_On_data2_s)
                // console.log(Add_On_data2_s);
            }
    
    
            // =============To add the data to the object================
            if(card3.style.borderColor == 'blue'){
                function addones3_s(Add_On3,Add_On_cost3){
                    this.AddOn = Add_On3;
                    this.AddOnCost = Add_On_cost3;
                }
                let Add_Ons3_s = new addones3_s(Add_On3,Add_On_cost3)
    
    
               // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data3_s = JSON.stringify(Add_Ons3_s);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData3_s', Add_On_data3_s);
                // console.log(Add_On_data3_s);
            }
    
            if(card3.style.borderColor == 'rgb(206,206,206)'){
                function addones3_s(){
                    this.AddOn = '';
                    this.AddOnCost = '';
                }
                let Add_Ons3_s = new addones3_s()
    
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data3_s = JSON.stringify(Add_Ons3_s);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData3_s', Add_On_data3_s);
                // console.log(Add_On_data3_s);
            }
    
        }
        else{
            card1.style.borderStyle = 'solid';
            card1.style.borderWidth = '2px';
            card1.style.borderColor = 'rgb(206,206,206)';
    
    
            function addones1_s(){
                this.AddOn = '';
                this.AddOnCost = '';
            }
            let Add_Ons1_s = new addones1_s()
    
            // ===================Used JSON.strigify to convert js object to string=======================
            let Add_On_data1_s = JSON.stringify(Add_Ons1_s);
            // =================Used to store the data in localstorage to access it in another webpage========================
            localStorage.setItem('AddOnData1_s', Add_On_data1_s)
    
            // console.log(Add_On_data1_s);
    
    
            if(card2.style.borderColor == 'blue'){
                function addones2_s(Add_On2,Add_On_cost2){
                    this.AddOn = Add_On2;
                    this.AddOnCost = Add_On_cost2;
                }
                let Add_Ons2_s = new addones2_s(Add_On2,Add_On_cost2)
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data2_s = JSON.stringify(Add_Ons2_s);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData2_s', Add_On_data2_s)
                // console.log(Add_On_data2_s);
            }
    
            if(card2.style.borderColor == 'rgb(206,206,206)'){
                function addones2_s(){
                    this.AddOn = '';
                    this.AddOnCost = '';
                }
                let Add_Ons2_s = new addones2_s()
        
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data2_s = JSON.stringify(Add_Ons2_s);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData2_s', Add_On_data2_s)
                // console.log(Add_On_data2_s);
            }
        
    
    
    
            // =============To add the data to the object================
            if(card3.style.borderColor == 'blue'){
                function addones3_s(Add_On3,Add_On_cost3){
                    this.AddOn = Add_On3;
                    this.AddOnCost = Add_On_cost3;
                }
                let Add_Ons3_s = new addones3_s(Add_On3,Add_On_cost3)
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data3_s = JSON.stringify(Add_Ons3_s);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData3_s', Add_On_data3_s);
                // console.log(Add_On_data3_s);
            }
    
            if(card3.style.borderColor == 'rgb(206,206,206)'){
                function addones3_s(){
                    this.AddOn = '';
                    this.AddOnCost = '';
                }
                let Add_Ons3_s = new addones3_s()
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data3_s = JSON.stringify(Add_Ons3_s);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData3_s', Add_On_data3_s);
                // console.log(Add_On_data3_s);
            }
            
            
        }
        
    
    })
    
    label2.addEventListener('click', () => {
    
        c2 += 1;
        if(c2%2 !=0){
            card2.style.borderStyle = 'solid';
            card2.style.borderWidth = '2px';
            card2.style.borderColor = 'blue';
    
    
            function addones2_s(Add_On2,Add_On_cost2){
                this.AddOn = Add_On2;
                this.AddOnCost = Add_On_cost2;
            }
            let Add_Ons2_s = new addones2_s(Add_On2,Add_On_cost2)
    
            // ===================Used JSON.strigify to convert js object to string=======================
            let Add_On_data2_s = JSON.stringify(Add_Ons2_s);
            // =================Used to store the data in localstorage to access it in another webpage========================
            localStorage.setItem('AddOnData2_s', Add_On_data2_s)
    
    
            // console.log(Add_On_data2_s);
    
            if(card1.style.borderColor == 'blue'){
                function addones1_s(Add_On1,Add_On_cost1){
                    this.AddOn = Add_On1;
                    this.AddOnCost = Add_On_cost1;
                }
                let Add_Ons1_s = new addones1_s(Add_On1,Add_On_cost1)
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data1_s = JSON.stringify(Add_Ons1_s);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData1_s', Add_On_data1_s)
                // console.log(Add_On_data1_s);
            }
                
            if(card1.style.borderColor == 'rgb(206,206,206)'){
                function addones1_s(){
                    this.AddOn = '';
                    this.AddOnCost = '';
                }
                let Add_Ons1_s = new addones1_s()
            
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data1_s = JSON.stringify(Add_Ons1_s);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData1_s', Add_On_data1_s)
                // console.log(Add_On_data1_s);
            
            }
    
    
            if(card3.style.borderColor == 'blue'){
                function addones3_s(Add_On3,Add_On_cost3){
                    this.AddOn = Add_On3;
                    this.AddOnCost = Add_On_cost3;
                }
                let Add_Ons3_s = new addones3_s(Add_On3,Add_On_cost3)
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data3_s = JSON.stringify(Add_Ons3_s);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData3_s', Add_On_data3_s);
                // console.log(Add_On_data3_s);
            }
    
            if(card3.style.borderColor == 'rgb(206,206,206)'){
                function addones3_s(){
                    this.AddOn = '';
                    this.AddOnCost = '';
                }
                let Add_Ons3_s = new addones3_s()
    
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data3_s = JSON.stringify(Add_Ons3_s);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData3_s', Add_On_data3_s);
    
                // console.log(Add_On_data3_s);
    
                }
    
                
    
        }
        else{
            card2.style.borderStyle = 'solid';
            card2.style.borderWidth = '2px';
            card2.style.borderColor = 'rgb(206,206,206)';
    
    
            function addones2_s(){
                this.AddOn = '';
                this.AddOnCost = '';
            }
            let Add_Ons2_s = new addones2_s()
    
            // ===================Used JSON.strigify to convert js object to string=======================
            let Add_On_data2_s = JSON.stringify(Add_Ons2_s);
            // =================Used to store the data in localstorage to access it in another webpage========================
            localStorage.setItem('AddOnData2_s', Add_On_data2_s)
    
            // console.log(Add_On_data2_s);
    
    
                if(card1.style.borderColor == 'blue'){
                    function addones1_s(Add_On1,Add_On_cost1){
                        this.AddOn = Add_On1;
                        this.AddOnCost = Add_On_cost1;
                    }
                    let Add_Ons1_s = new addones1_s(Add_On1,Add_On_cost1)
            
                    // ===================Used JSON.strigify to convert js object to string=======================
                    let Add_On_data1_s = JSON.stringify(Add_Ons1_s);
                    // =================Used to store the data in localstorage to access it in another webpage========================
                    localStorage.setItem('AddOnData1_s', Add_On_data1_s)
                    // console.log(Add_On_data1_s);
    
                }
                if(card1.style.borderColor == 'rgb(206,206,206)'){
                    function addones1_s(){
                        this.AddOn = '';
                        this.AddOnCost = '';
                    }
                    let Add_Ons1_s = new addones1_s()
            
                    // ===================Used JSON.strigify to convert js object to string=======================
                    let Add_On_data1_s = JSON.stringify(Add_Ons1_s);
                    // =================Used to store the data in localstorage to access it in another webpage========================
                    localStorage.setItem('AddOnData1_s', Add_On_data1_s)
                    // console.log(Add_On_data1_s);
    
                }
        
    
                if(card3.style.borderColor == 'blue'){
                    function addones3_s(Add_On3,Add_On_cost3){
                        this.AddOn = Add_On3;
                        this.AddOnCost = Add_On_cost3;
                    }
                    let Add_Ons3_s = new addones3_s(Add_On3,Add_On_cost3)
    
    
                    // ===================Used JSON.strigify to convert js object to string=======================
                    let Add_On_data3_s = JSON.stringify(Add_Ons3_s);
                    // =================Used to store the data in localstorage to access it in another webpage========================
                    localStorage.setItem('AddOnData3_s', Add_On_data3_s);
                    // console.log(Add_On_data3_s);
    
                }
    
                if(card3.style.borderColor == 'rgb(206,206,206)'){
                    function addones3_s(){
                        this.AddOn = '';
                        this.AddOnCost = '';
                    }
                    let Add_Ons3_s = new addones3_s()
    
    
                    // ===================Used JSON.strigify to convert js object to string=======================
                    let Add_On_data3_s = JSON.stringify(Add_Ons3_s);
                    // =================Used to store the data in localstorage to access it in another webpage========================
                    localStorage.setItem('AddOnData3_s', Add_On_data3_s);
                    // console.log(Add_On_data3_s);
    
                }
    
    
        }
    
    
    })
    
    
    label3.addEventListener('click', () => {
        c3 += 1;
    
        if(c3%2 != 0){
            card3.style.borderStyle = 'solid';
            card3.style.borderWidth = '2px';
            card3.style.borderColor = 'blue'
    
    
            function addones3_s(Add_On3,Add_On_cost3){
                this.AddOn = Add_On3;
                this.AddOnCost = Add_On_cost3;
            }
            let Add_Ons3_s = new addones3_s(Add_On3,Add_On_cost3)
    
    
            // ===================Used JSON.strigify to convert js object to string=======================
            let Add_On_data3_s = JSON.stringify(Add_Ons3_s);
            // console.log(Add_On_data3_s);
    
            // =================Used to store the data in localstorage to access it in another webpage========================
            localStorage.setItem('AddOnData3_s', Add_On_data3_s);
    
    
    
                if(card1.style.borderColor == 'blue'){
                    function addones1_s(Add_On1,Add_On_cost1){
                        this.AddOn = Add_On1;
                        this.AddOnCost = Add_On_cost1;
                    }
                    let Add_Ons1_s = new addones1_s(Add_On1,Add_On_cost1)
            
                    // ===================Used JSON.strigify to convert js object to string=======================
                    let Add_On_data1_s = JSON.stringify(Add_Ons1_s);
                    // =================Used to store the data in localstorage to access it in another webpage========================
                    localStorage.setItem('AddOnData1_s', Add_On_data1_s)
                    // console.log(Add_On_data1_s);
    
                }
                if(card1.style.borderColor == 'rgb(206,206,206)'){
                    function addones1_s(){
                        this.AddOn = '';
                        this.AddOnCost = '';
                    }
                    let Add_Ons1_s = new addones1_s()
            
                    // ===================Used JSON.strigify to convert js object to string=======================
                    let Add_On_data1_s = JSON.stringify(Add_Ons1_s);
                    // =================Used to store the data in localstorage to access it in another webpage========================
                    localStorage.setItem('AddOnData1_s', Add_On_data1_s)
    
                    // console.log(Add_On_data1_s);
    
                }
    
    
                if(card2.style.borderColor == 'blue'){
                function addones2_s(Add_On2,Add_On_cost2){
                    this.AddOn = Add_On2;
                    this.AddOnCost = Add_On_cost2;
                }
                let Add_Ons2_s = new addones2_s(Add_On2,Add_On_cost2)
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data2_s = JSON.stringify(Add_Ons2_s);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData2_s', Add_On_data2_s)
    
                // console.log(Add_On_data2_s);
    
                }
    
                if(card2.style.borderColor == 'rgb(206,206,206)'){
                    function addones2_s(){
                        this.AddOn = '';
                        this.AddOnCost = '';
                    }
                    let Add_Ons2_s = new addones2_s()
        
                    // ===================Used JSON.strigify to convert js object to string=======================
                    let Add_On_data2_s = JSON.stringify(Add_Ons2_s);
                    // =================Used to store the data in localstorage to access it in another webpage========================
                    localStorage.setItem('AddOnData2_s', Add_On_data2_s)
    
                // console.log(Add_On_data2_s);
    
                }
        
        }
        else{
            card3.style.borderStyle = 'solid';
            card3.style.borderWidth = '2px';
            card3.style.borderColor = 'rgb(206,206,206)'
    
    
            function addones3_s(){
                this.AddOn = '';
                this.AddOnCost = '';
            }
            let Add_Ons3_s = new addones3_s()
    
    
            // ===================Used JSON.strigify to convert js object to string=======================
            let Add_On_data3_s = JSON.stringify(Add_Ons3_s);
            // =================Used to store the data in localstorage to access it in another webpage========================
            localStorage.setItem('AddOnData3_s', Add_On_data3_s);
    
            // console.log(Add_On_data3_s);
    
    
                if(card1.style.borderColor == 'blue'){
                    function addones1_s(Add_On1,Add_On_cost1){
                        this.AddOn = Add_On1;
                        this.AddOnCost = Add_On_cost1;
                    }
                    let Add_Ons1_s = new addones1_s(Add_On1,Add_On_cost1)
            
                    // ===================Used JSON.strigify to convert js object to string=======================
                    let Add_On_data1_s = JSON.stringify(Add_Ons1_s);
                    // =================Used to store the data in localstorage to access it in another webpage========================
                    localStorage.setItem('AddOnData1_s', Add_On_data1_s)
    
                // console.log(Add_On_data1_s);
    
                }
                if(card1.style.borderColor == 'rgb(206,206,206)'){
                    function addones1_s(){
                        this.AddOn = '';
                        this.AddOnCost = '';
                    }
                    let Add_Ons1_s = new addones1_s()
            
                    // ===================Used JSON.strigify to convert js object to string=======================
                    let Add_On_data1_s = JSON.stringify(Add_Ons1_s);
                    // =================Used to store the data in localstorage to access it in another webpage========================
                    localStorage.setItem('AddOnData1_s', Add_On_data1_s)
    
                // console.log(Add_On_data1_s);
    
                }
    
    
                if(card2.style.borderColor == 'blue'){
                function addones2_s(Add_On2,Add_On_cost2){
                    this.AddOn = Add_On2;
                    this.AddOnCost = Add_On_cost2;
                }
                let Add_Ons2_s = new addones2_s(Add_On2,Add_On_cost2)
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data2_s = JSON.stringify(Add_Ons2_s);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData2_s', Add_On_data2_s)
    
                // console.log(Add_On_data2_s);
    
                }
    
                if(card2.style.borderColor == 'rgb(206,206,206)'){
                    function addones2_s(){
                        this.AddOn = '';
                        this.AddOnCost = '';
                    }
                    let Add_Ons2_s = new addones2_s()
        
                    // ===================Used JSON.strigify to convert js object to string=======================
                    let Add_On_data2_s = JSON.stringify(Add_Ons2_s);
                    // =================Used to store the data in localstorage to access it in another webpage========================
                    localStorage.setItem('AddOnData2_s', Add_On_data2_s)
    
                // console.log(Add_On_data2_s);
    
                }
    
            
        }
    
        
    })
    
    // console.log(card1);
    
    label1_s.addEventListener('click', () => {
        c1_s += 1;
        if(c1_s % 2 != 0){
            card1_a.style.borderStyle = 'solid';
            card1_a.style.borderWidth = '2px';
            card1_a.style.borderColor = 'rgb(206,206,206)';
        }
        else{
            card1_a.style.borderStyle = 'solid';
            card1_a.style.borderWidth = '2px';
            card1_a.style.borderColor = 'blue';
        }
    
    })
    
    label2_s.addEventListener('click', () => {
    
        c2_s += 1;
        if(c2_s % 2 != 0){
            card2_a.style.borderStyle = 'solid';
            card2_a.style.borderWidth = '2px';
            card2_a.style.borderColor = 'rgb(206,206,206)';
        }
        else{
            card2_a.style.borderStyle = 'solid';
            card2_a.style.borderWidth = '2px';
            card2_a.style.borderColor = 'blue';
        }
    
    })
    
    
    label3_s.addEventListener('click', () => {
        c3_s += 1;
        if(c3_s % 2 != 0){
            card3_a.style.borderStyle = 'solid';
            card3_a.style.borderWidth = '2px';
            card3_a.style.borderColor = 'blue';
        }
        else{
            card3_a.style.borderStyle = 'solid';
            card3_a.style.borderWidth = '2px';
            card3_a.style.borderColor = 'rgb(206,206,206)';
        }
    })
}

else if(window.outerWidth>768){
    let card1 = document.getElementById("AddOnCard1");
    let card2 = document.getElementById("AddOnCard2");
    let card3 = document.getElementById("AddOnCard3");
    let label1 = document.getElementById('lbl1');
    let label2 = document.getElementById('lbl2');
    let label3 = document.getElementById('lbl3');
    
    
    let AddOnName1 = document.getElementById('AddOn1');
    let AddOnName2 = document.getElementById('AddOn2');
    let AddOnName3 = document.getElementById('AddOn3');
    
    let AddOncost1 = document.getElementById('addOnamt1');
    let AddOncost2 = document.getElementById('addOnamt2');
    let AddOncost3 = document.getElementById('addOnamt3');
    
    
    let Add_On1 = AddOnName1.textContent;
    let Add_On2 = AddOnName2.textContent;
    let Add_On3 = AddOnName3.textContent;
    
    
    let Add_On_cost1 = AddOncost1.textContent;
    let Add_On_cost2 = AddOncost2.textContent;
    let Add_On_cost3 = AddOncost3.textContent;
    
    
    
    let card1_a = document.getElementById("AddOnCard1_a");
    let card2_a = document.getElementById("AddOnCard2_a");
    let card3_a = document.getElementById("AddOnCard3_a");
    let label1_s = document.getElementById('lbl1_s');
    let label2_s = document.getElementById('lbl2_s');
    let label3_s = document.getElementById('lbl3_s');
    
    let c1 =0;
    let c2 =0;
    let c3 = 0;
    
    let c1_s =0;
    let c2_s =0;
    let c3_s = 0;
    
    
        function addones1(){
            this.AddOn = '';
            this.AddOnCost = '';
        }
        let Add_Ons1 = new addones1()
    
        // ===================Used JSON.strigify to convert js object to string=======================
        let Add_On_data1 = JSON.stringify(Add_Ons1);
        // =================Used to store the data in localstorage to access it in another webpage========================
        localStorage.setItem('AddOnData1', Add_On_data1)
        // console.log(Add_On_data1);
    
    
    
        function addones2(){
            this.AddOn = '';
            this.AddOnCost = '';
        }
        let Add_Ons2 = new addones2()
    
        // ===================Used JSON.strigify to convert js object to string=======================
        let Add_On_data2 = JSON.stringify(Add_Ons2);
        // =================Used to store the data in localstorage to access it in another webpage========================
        localStorage.setItem('AddOnData2', Add_On_data2)
        // console.log(Add_On_data2);
    
    
    
        function addones3(){
            this.AddOn = '';
            this.AddOnCost = '';
        }
        let Add_Ons3 = new addones3()
    
    
        // ===================Used JSON.strigify to convert js object to string=======================
        let Add_On_data3 = JSON.stringify(Add_Ons3);
        // =================Used to store the data in localstorage to access it in another webpage========================
        localStorage.setItem('AddOnData3', Add_On_data3);
        // console.log(Add_On_data3);
    
    
    label1.addEventListener('click', () => {
    
    
        c1 += 1;
        if(c1 % 2 != 0){
            card1.style.borderStyle = 'solid';
            card1.style.borderWidth = '2px';
            card1.style.borderColor = 'blue';
    
    
            function addones1(Add_On1,Add_On_cost1){
                this.AddOn = Add_On1;
                this.AddOnCost = Add_On_cost1;
            }
            let Add_Ons1 = new addones1(Add_On1,Add_On_cost1)
    
            // ===================Used JSON.strigify to convert js object to string=======================
            let Add_On_data1 = JSON.stringify(Add_Ons1);
            // =================Used to store the data in localstorage to access it in another webpage========================
            localStorage.setItem('AddOnData1', Add_On_data1)
    
    
            // console.log(Add_On_data1);
    
            // =============To add the data to the object================
            if(card2.style.borderColor == 'blue'){
                function addones2(Add_On2,Add_On_cost2){
                    this.AddOn = Add_On2;
                    this.AddOnCost = Add_On_cost2;
                }
                let Add_Ons2 = new addones2(Add_On2,Add_On_cost2)
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data2 = JSON.stringify(Add_Ons2);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData2', Add_On_data2)
                // console.log(Add_On_data2);
            }
    
            if(card2.style.borderColor == 'rgb(206,206,206)'){
                function addones2(){
                    this.AddOn = '';
                    this.AddOnCost = '';
                }
                let Add_Ons2 = new addones2()
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data2 = JSON.stringify(Add_Ons2);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData2', Add_On_data2)
                // console.log(Add_On_data2);
            }
    
    
            // =============To add the data to the object================
            if(card3.style.borderColor == 'blue'){
                function addones3(Add_On3,Add_On_cost3){
                    this.AddOn = Add_On3;
                    this.AddOnCost = Add_On_cost3;
                }
                let Add_Ons3 = new addones3(Add_On3,Add_On_cost3)
    
    
               // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data3 = JSON.stringify(Add_Ons3);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData3', Add_On_data3);
                // console.log(Add_On_data3);
            }
    
            if(card3.style.borderColor == 'rgb(206,206,206)'){
                function addones3(){
                    this.AddOn = '';
                    this.AddOnCost = '';
                }
                let Add_Ons3 = new addones3()
    
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data3 = JSON.stringify(Add_Ons3);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData3', Add_On_data3);
                // console.log(Add_On_data3);
            }
    
        }
        else{
            card1.style.borderStyle = 'solid';
            card1.style.borderWidth = '2px';
            card1.style.borderColor = 'rgb(206,206,206)';
    
    
            function addones1(){
                this.AddOn = '';
                this.AddOnCost = '';
            }
            let Add_Ons1 = new addones1()
    
            // ===================Used JSON.strigify to convert js object to string=======================
            let Add_On_data1 = JSON.stringify(Add_Ons1);
            // =================Used to store the data in localstorage to access it in another webpage========================
            localStorage.setItem('AddOnData1', Add_On_data1)
    
            // console.log(Add_On_data1);
    
    
            if(card2.style.borderColor == 'blue'){
                function addones2(Add_On2,Add_On_cost2){
                    this.AddOn = Add_On2;
                    this.AddOnCost = Add_On_cost2;
                }
                let Add_Ons2 = new addones2(Add_On2,Add_On_cost2)
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data2 = JSON.stringify(Add_Ons2);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData2', Add_On_data2)
                // console.log(Add_On_data2);
            }
    
            if(card2.style.borderColor == 'rgb(206,206,206)'){
                function addones2(){
                    this.AddOn = '';
                    this.AddOnCost = '';
                }
                let Add_Ons2 = new addones2()
        
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data2 = JSON.stringify(Add_Ons2);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData2', Add_On_data2)
                // console.log(Add_On_data2);
            }
        
    
    
    
            // =============To add the data to the object================
            if(card3.style.borderColor == 'blue'){
                function addones3(Add_On3,Add_On_cost3){
                    this.AddOn = Add_On3;
                    this.AddOnCost = Add_On_cost3;
                }
                let Add_Ons3 = new addones3(Add_On3,Add_On_cost3)
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data3 = JSON.stringify(Add_Ons3);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData3', Add_On_data3);
                // console.log(Add_On_data3);
            }
    
            if(card3.style.borderColor == 'rgb(206,206,206)'){
                function addones3(){
                    this.AddOn = '';
                    this.AddOnCost = '';
                }
                let Add_Ons3 = new addones3()
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data3 = JSON.stringify(Add_Ons3);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData3', Add_On_data3);
                // console.log(Add_On_data3);
            }
            
            
        }
        
    
    })
    
    label2.addEventListener('click', () => {
    
        c2 += 1;
        if(c2%2 !=0){
            card2.style.borderStyle = 'solid';
            card2.style.borderWidth = '2px';
            card2.style.borderColor = 'blue';
    
    
            function addones2(Add_On2,Add_On_cost2){
                this.AddOn = Add_On2;
                this.AddOnCost = Add_On_cost2;
            }
            let Add_Ons2 = new addones2(Add_On2,Add_On_cost2)
    
            // ===================Used JSON.strigify to convert js object to string=======================
            let Add_On_data2 = JSON.stringify(Add_Ons2);
            // =================Used to store the data in localstorage to access it in another webpage========================
            localStorage.setItem('AddOnData2', Add_On_data2)
    
    
            // console.log(Add_On_data2);
    
            if(card1.style.borderColor == 'blue'){
                function addones1(Add_On1,Add_On_cost1){
                    this.AddOn = Add_On1;
                    this.AddOnCost = Add_On_cost1;
                }
                let Add_Ons1 = new addones1(Add_On1,Add_On_cost1)
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data1 = JSON.stringify(Add_Ons1);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData1', Add_On_data1)
                // console.log(Add_On_data1);
            }
                
            if(card1.style.borderColor == 'rgb(206,206,206)'){
                function addones1(){
                    this.AddOn = '';
                    this.AddOnCost = '';
                }
                let Add_Ons1 = new addones1()
            
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data1 = JSON.stringify(Add_Ons1);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData1', Add_On_data1)
                // console.log(Add_On_data1);
            
            }
    
    
            if(card3.style.borderColor == 'blue'){
                function addones3(Add_On3,Add_On_cost3){
                    this.AddOn = Add_On3;
                    this.AddOnCost = Add_On_cost3;
                }
                let Add_Ons3 = new addones3(Add_On3,Add_On_cost3)
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data3 = JSON.stringify(Add_Ons3);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData3', Add_On_data3);
                // console.log(Add_On_data3);
            }
    
            if(card3.style.borderColor == 'rgb(206,206,206)'){
                function addones3(){
                    this.AddOn = '';
                    this.AddOnCost = '';
                }
                let Add_Ons3 = new addones3()
    
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data3 = JSON.stringify(Add_Ons3);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData3', Add_On_data3);
    
                // console.log(Add_On_data3);
    
                }
    
                
    
        }
        else{
            card2.style.borderStyle = 'solid';
            card2.style.borderWidth = '2px';
            card2.style.borderColor = 'rgb(206,206,206)';
    
    
            function addones2(){
                this.AddOn = '';
                this.AddOnCost = '';
            }
            let Add_Ons2 = new addones2()
    
            // ===================Used JSON.strigify to convert js object to string=======================
            let Add_On_data2 = JSON.stringify(Add_Ons2);
            // =================Used to store the data in localstorage to access it in another webpage========================
            localStorage.setItem('AddOnData2', Add_On_data2)
    
            // console.log(Add_On_data2);
    
    
                if(card1.style.borderColor == 'blue'){
                    function addones1(Add_On1,Add_On_cost1){
                        this.AddOn = Add_On1;
                        this.AddOnCost = Add_On_cost1;
                    }
                    let Add_Ons1 = new addones1(Add_On1,Add_On_cost1)
            
                    // ===================Used JSON.strigify to convert js object to string=======================
                    let Add_On_data1 = JSON.stringify(Add_Ons1);
                    // =================Used to store the data in localstorage to access it in another webpage========================
                    localStorage.setItem('AddOnData1', Add_On_data1)
                    // console.log(Add_On_data1);
    
                }
                if(card1.style.borderColor == 'rgb(206,206,206)'){
                    function addones1(){
                        this.AddOn = '';
                        this.AddOnCost = '';
                    }
                    let Add_Ons1 = new addones1()
            
                    // ===================Used JSON.strigify to convert js object to string=======================
                    let Add_On_data1 = JSON.stringify(Add_Ons1);
                    // =================Used to store the data in localstorage to access it in another webpage========================
                    localStorage.setItem('AddOnData1', Add_On_data1)
                    // console.log(Add_On_data1);
    
                }
        
    
                if(card3.style.borderColor == 'blue'){
                    function addones3(Add_On3,Add_On_cost3){
                        this.AddOn = Add_On3;
                        this.AddOnCost = Add_On_cost3;
                    }
                    let Add_Ons3 = new addones3(Add_On3,Add_On_cost3)
    
    
                    // ===================Used JSON.strigify to convert js object to string=======================
                    let Add_On_data3 = JSON.stringify(Add_Ons3);
                    // =================Used to store the data in localstorage to access it in another webpage========================
                    localStorage.setItem('AddOnData3', Add_On_data3);
                    // console.log(Add_On_data3);
    
                }
    
                if(card3.style.borderColor == 'rgb(206,206,206)'){
                    function addones3(){
                        this.AddOn = '';
                        this.AddOnCost = '';
                    }
                    let Add_Ons3 = new addones3()
    
    
                    // ===================Used JSON.strigify to convert js object to string=======================
                    let Add_On_data3 = JSON.stringify(Add_Ons3);
                    // =================Used to store the data in localstorage to access it in another webpage========================
                    localStorage.setItem('AddOnData3', Add_On_data3);
                    // console.log(Add_On_data3);
    
                }
    
    
        }
    
    
    })
    
    
    label3.addEventListener('click', () => {
        c3 += 1;
    
        if(c3%2 != 0){
            card3.style.borderStyle = 'solid';
            card3.style.borderWidth = '2px';
            card3.style.borderColor = 'blue'
    
    
            function addones3(Add_On3,Add_On_cost3){
                this.AddOn = Add_On3;
                this.AddOnCost = Add_On_cost3;
            }
            let Add_Ons3 = new addones3(Add_On3,Add_On_cost3)
    
    
            // ===================Used JSON.strigify to convert js object to string=======================
            let Add_On_data3 = JSON.stringify(Add_Ons3);
            // console.log(Add_On_data3);
    
            // =================Used to store the data in localstorage to access it in another webpage========================
            localStorage.setItem('AddOnData3', Add_On_data3);
    
    
    
                if(card1.style.borderColor == 'blue'){
                    function addones1(Add_On1,Add_On_cost1){
                        this.AddOn = Add_On1;
                        this.AddOnCost = Add_On_cost1;
                    }
                    let Add_Ons1 = new addones1(Add_On1,Add_On_cost1)
            
                    // ===================Used JSON.strigify to convert js object to string=======================
                    let Add_On_data1 = JSON.stringify(Add_Ons1);
                    // =================Used to store the data in localstorage to access it in another webpage========================
                    localStorage.setItem('AddOnData1', Add_On_data1)
                    // console.log(Add_On_data1);
    
                }
                if(card1.style.borderColor == 'rgb(206,206,206)'){
                    function addones1(){
                        this.AddOn = '';
                        this.AddOnCost = '';
                    }
                    let Add_Ons1 = new addones1()
            
                    // ===================Used JSON.strigify to convert js object to string=======================
                    let Add_On_data1 = JSON.stringify(Add_Ons1);
                    // =================Used to store the data in localstorage to access it in another webpage========================
                    localStorage.setItem('AddOnData1', Add_On_data1)
    
                    // console.log(Add_On_data1);
    
                }
    
    
                if(card2.style.borderColor == 'blue'){
                function addones2(Add_On2,Add_On_cost2){
                    this.AddOn = Add_On2;
                    this.AddOnCost = Add_On_cost2;
                }
                let Add_Ons2 = new addones2(Add_On2,Add_On_cost2)
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data2 = JSON.stringify(Add_Ons2);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData2', Add_On_data2)
    
                // console.log(Add_On_data2);
    
                }
    
                if(card2.style.borderColor == 'rgb(206,206,206)'){
                    function addones2(){
                        this.AddOn = '';
                        this.AddOnCost = '';
                    }
                    let Add_Ons2 = new addones2()
        
                    // ===================Used JSON.strigify to convert js object to string=======================
                    let Add_On_data2 = JSON.stringify(Add_Ons2);
                    // =================Used to store the data in localstorage to access it in another webpage========================
                    localStorage.setItem('AddOnData2', Add_On_data2)
    
                // console.log(Add_On_data2);
    
                }
        
        }
        else{
            card3.style.borderStyle = 'solid';
            card3.style.borderWidth = '2px';
            card3.style.borderColor = 'rgb(206,206,206)'
    
    
            function addones3(){
                this.AddOn = '';
                this.AddOnCost = '';
            }
            let Add_Ons3 = new addones3()
    
    
            // ===================Used JSON.strigify to convert js object to string=======================
            let Add_On_data3 = JSON.stringify(Add_Ons3);
            // =================Used to store the data in localstorage to access it in another webpage========================
            localStorage.setItem('AddOnData3', Add_On_data3);
    
            // console.log(Add_On_data3);
    
    
                if(card1.style.borderColor == 'blue'){
                    function addones1(Add_On1,Add_On_cost1){
                        this.AddOn = Add_On1;
                        this.AddOnCost = Add_On_cost1;
                    }
                    let Add_Ons1 = new addones1(Add_On1,Add_On_cost1)
            
                    // ===================Used JSON.strigify to convert js object to string=======================
                    let Add_On_data1 = JSON.stringify(Add_Ons1);
                    // =================Used to store the data in localstorage to access it in another webpage========================
                    localStorage.setItem('AddOnData1', Add_On_data1)
    
                // console.log(Add_On_data1);
    
                }
                if(card1.style.borderColor == 'rgb(206,206,206)'){
                    function addones1(){
                        this.AddOn = '';
                        this.AddOnCost = '';
                    }
                    let Add_Ons1 = new addones1()
            
                    // ===================Used JSON.strigify to convert js object to string=======================
                    let Add_On_data1 = JSON.stringify(Add_Ons1);
                    // =================Used to store the data in localstorage to access it in another webpage========================
                    localStorage.setItem('AddOnData1', Add_On_data1)
    
                // console.log(Add_On_data1);
    
                }
    
    
                if(card2.style.borderColor == 'blue'){
                function addones2(Add_On2,Add_On_cost2){
                    this.AddOn = Add_On2;
                    this.AddOnCost = Add_On_cost2;
                }
                let Add_Ons2 = new addones2(Add_On2,Add_On_cost2)
    
                // ===================Used JSON.strigify to convert js object to string=======================
                let Add_On_data2 = JSON.stringify(Add_Ons2);
                // =================Used to store the data in localstorage to access it in another webpage========================
                localStorage.setItem('AddOnData2', Add_On_data2)
    
                // console.log(Add_On_data2);
    
                }
    
                if(card2.style.borderColor == 'rgb(206,206,206)'){
                    function addones2(){
                        this.AddOn = '';
                        this.AddOnCost = '';
                    }
                    let Add_Ons2 = new addones2()
        
                    // ===================Used JSON.strigify to convert js object to string=======================
                    let Add_On_data2 = JSON.stringify(Add_Ons2);
                    // =================Used to store the data in localstorage to access it in another webpage========================
                    localStorage.setItem('AddOnData2', Add_On_data2)
    
                // console.log(Add_On_data2);
    
                }
    
            
        }
    
        
    })
    
    // console.log(card1);
    
    label1_s.addEventListener('click', () => {
        c1_s += 1;
        if(c1_s % 2 != 0){
            card1_a.style.borderStyle = 'solid';
            card1_a.style.borderWidth = '2px';
            card1_a.style.borderColor = 'rgb(206,206,206)';
        }
        else{
            card1_a.style.borderStyle = 'solid';
            card1_a.style.borderWidth = '2px';
            card1_a.style.borderColor = 'blue';
        }
    
    })
    
    label2_s.addEventListener('click', () => {
    
        c2_s += 1;
        if(c2_s % 2 != 0){
            card2_a.style.borderStyle = 'solid';
            card2_a.style.borderWidth = '2px';
            card2_a.style.borderColor = 'rgb(206,206,206)';
        }
        else{
            card2_a.style.borderStyle = 'solid';
            card2_a.style.borderWidth = '2px';
            card2_a.style.borderColor = 'blue';
        }
    
    })
    
    
    label3_s.addEventListener('click', () => {
        c3_s += 1;
        if(c3_s % 2 != 0){
            card3_a.style.borderStyle = 'solid';
            card3_a.style.borderWidth = '2px';
            card3_a.style.borderColor = 'blue';
        }
        else{
            card3_a.style.borderStyle = 'solid';
            card3_a.style.borderWidth = '2px';
            card3_a.style.borderColor = 'rgb(206,206,206)';
        }
    })
}



