function init(){

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch('http://localhost:7000/admin/kolaci', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('kolaciLst');

            data.forEach( el => {
                lst.innerHTML += `<li> Naziv: ${el.naziv}, Cena: ${el.cena}</li>`;
            });
        });

        document.getElementById('kolaciBtn').addEventListener('click', e => {
            e.preventDefault();

            const data = {
                naziv: document.getElementById('naziv').value,
                cena: document.getElementById('cena').value
            };
    
            document.getElementById('naziv').value = '';
            document.getElementById('cena').value = '';
    
            fetch('http://localhost:7000/admin/kolaci', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                   // 'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
                .then( res => res.json() )
                .then( el => {
                   
                        document.getElementById('kolaciLst').innerHTML += `<li>Naziv: ${el.naziv}, Cena: ${el.cena} </li>`;
                    
                });
        });

      

    document.getElementById('updateBtn').addEventListener('click', e => {
    e.preventDefault();

    const data = {
                id: document.getElementById('id').value,
                naziv: document.getElementById('naziv').value,
                cena: document.getElementById('cena').value
    };
    
    fetch('http://localhost:7000/admin/kolaci/'+id.value, {
    method: 'PUT', 
    headers: { 'Content-Type': 'application/json'},  
    body: JSON.stringify(data)     
    })
        
    .then( res => res.json() )
    .then( el => {
            
        document.cookie = `token=${el.token};SameSite=Lax`;
        window.location.href = 'kolaci.html';
    });
}); 


    document.getElementById('deleteBtn').addEventListener('click', e => {
    e.preventDefault();

    const data = {
        id: document.getElementById('id').value,
        naziv: document.getElementById('naziv').value,
        cena: document.getElementById('cena').value
};
    
    fetch('http://localhost:7000/admin/kolaci/'+id.value, {
        method: 'DELETE', 
        headers: { 'Content-Type': 'application/json'}       
    })
        
    .then( res => res.json() )
    .then( el => {
            
        document.cookie = `token=${el.token};SameSite=Lax`;
        window.location.href = 'kolaci.html';
    });
}); 

}
