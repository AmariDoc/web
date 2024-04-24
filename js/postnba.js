const formEl = document.querySelector('.form')

formEl.addEventListener('submit'), event => {
    event.preventDefualt();
    const formdata =  new   formadata(formel);
    const data  =  object.formentries(formdata);
    if(data.id ==  ""  ||  data.Team == "" || data.Player == ""){
        $.toaster({ priority : 'danger', title : 'Error', message : "Oops"});
    }
    else {
        fetch('http://localhost:8500/api/v1/nba',{
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)   
        }).then(res => res.json())
        .then(data =>  console.log(data))
        .then(error => console.log(error))
        $.toaster({ priority : 'success', title : 'NBA', message : "Item added"});

    }};