

// console.log(window);

// console.log(window.outerWidth);




if(window.outerWidth <= 768){
    let submitbtn = document.getElementById('Submitbtn_s');

    submitbtn.addEventListener('click', () => {
        let UN = document.getElementById('name_s').value;
        let UE = document.getElementById('email_s').value;
        let UNum = document.getElementById('number_s').value;
    
        function persondata_s(){
            this.PersonName = UN;
            this.PersonEmail = UE;
            this.PersonNumber = UNum;
        }
        
        let UserData_s = new persondata_s(UN, UE, UNum);
    
        let Data_s = JSON.stringify(UserData_s);
    
        localStorage.setItem('userdata_s',Data_s);
    
    })

}

else if(window.outerWidth > 768){
    let submitbtn = document.getElementById('Submitbtn');

    submitbtn.addEventListener('click', () => {
        let UN = document.getElementById('name').value;
        let UE = document.getElementById('email').value;
        let UNum = document.getElementById('number').value;

        function persondata(){
            this.PersonName = UN;
            this.PersonEmail = UE;
            this.PersonNumber = UNum;
        }
        
        let UserData = new persondata(UN, UE, UNum);

        let Data = JSON.stringify(UserData);

        localStorage.setItem('userdata',Data);

})

}

















