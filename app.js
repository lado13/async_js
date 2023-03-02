
fetch('https://fakestoreapi.com/products/', {
    method:'get',
    headers:{
        "Content-Type": "text/xml",
       }
}).then(Response => Response.json())
.then(data =>{
    $('.loader').css('opacity','0')
    for (let i = 0; i < data.length; i++) {
        let row = document.querySelector('.row');
        let col = document.createElement('col');
        row.appendChild(col);
        let name = document.createElement('h4');
        col.appendChild(name);
        let img = document.createElement('img');
        col.appendChild(img);
        let price = document.createElement('h5');
        col.appendChild(price);
        let btn = document.createElement('button');
        col.appendChild(btn);
        btn.innerText = 'see more';       
        name.innerText = data[i].title;
        img.src = data[i].image;
        price.innerText = 'Price: ' + data[i].price + ' $';
        btn.addEventListener('click', function(){
            let id = data[i].id;
            localStorage.setItem('id', id);
            window.location.href  = 'detals.html';
        });
    };
}).catch(fale => {
    let error = document.querySelector('.error');
    error.innerText = 'მონაცემები არ ჩაიტვირთა !!!';
    $('.error').css('color','red');
    $('.loader').css('opacity','0');
});










