
// step-1 add click event handler with submit btn
document.getElementById('btn-submit').addEventListener('click',function(){
    // step - 2 add
    const userNames =document.getElementById('exampleFormControlInput1');
    const Name = userNames.value;
    // step -3 
    const UserPass =document.getElementById('exampleFormControlInput11');
    const Password = UserPass.value;
    // step -4

    if(Name === 'Md. Mahidur Rahman' && Password === 'bably12345') {
        window.location.href='index.html';
    }
    else{
       alert("please required fullifill. Otherwise not login you.!");
    }
});

// index script
