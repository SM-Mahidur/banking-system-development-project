
// step-1 add click event handler with submit btn
document.getElementById('btn-submit').addEventListener('click',function(){
    // step - 2 add
    const userNames =document.getElementById('exampleFormControlInput1');
    const Name = userNames.value;
    // step -3 
    const UserPass =document.getElementById('exampleFormControlInput11');
    const Password = UserPass.value;
    // step -4

    if(Name === 'Mahidur' && Password === '865125') {
        window.location.href='bank.html';
    }
    else{
       alert("please required fullifill. Otherwise not login you.!");
    }
});

// index script
