function init(){

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length-1];
    

    fetch('http://localhost:7000/admin/torte', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('cakeLst');

            data.forEach( el => {
                lst.innerHTML += `<li> Naziv: ${el.naziv} </li>`;
            });
        });

        document.getElementById('cakeBtn').addEventListener('click', e => {
            e.preventDefault();

            const data = {
                naziv: document.getElementById('naziv').value,
            };
    
            document.getElementById('naziv').value = '';
           
    
            fetch('http://localhost:7000/admin/torte', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
                .then( res => res.json() )
                .then( el => {
                   
                    //novo
                    document.cookie = `token=${el.token};SameSite=Lax`;
                    window.location.href = 'torte.html';
                    //novo

                        //document.getElementById('cakeLst').innerHTML += `<li>Naziv: ${el.naziv}, Cena: ${el.cena} </li>`;
                    
                });
        });

/*
        document.getElementById('deleteCake').addEventListener('click', e => {
            e.preventDefault();

            const data = {
                naziv: document.getElementById('naziv').value,
                id: document.getElementById('id').value
            };
    
            document.getElementById('naziv').value = '';
            document.getElementById('id').value = '';
    
            fetch('http://localhost:8000/admin/torte/'+id.value, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                    //'Authorization': `Bearer ${token}`
                },
               // body: JSON.stringify(data)
            })
                .then( res => res.json() )
                .then( el => {
                          
                    document.cookie = `token=${el.token};SameSite=Lax`;
                    window.location.href = 'torte.html';
                    //document.getElementById('cakeLst').innerHTML += `<li>Naziv: ${el.naziv}, Cena: ${el.cena} </li>`;
                    
                });
        });
*/

document.getElementById('deleteCake').addEventListener('click', e => {
    e.preventDefault();

const data = {
    id: document.getElementById('id').value,
    naziv: document.getElementById('naziv').value,
   
};
    
fetch('http://localhost:7000/admin/torte/'+id.value, {
    method: 'DELETE', 
    headers: { 'Content-Type': 'application/json'}       
})
        
    .then( res => res.json() )
    .then( el => {
            
        document.cookie = `token=${el.token};SameSite=Lax`;
        window.location.href = 'torte.html';
    });
}); 



        document.getElementById('updateCake').addEventListener('click', e => {
            e.preventDefault();

            const data = {
                id: document.getElementById('id').value,
                naziv: document.getElementById('naziv').value
            };

           // document.getElementById('id').value = '';
           // document.getElementById('naziv').value = '';
    
            fetch('http://localhost:7000/admin/torte/'+id.value, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization': `Bearer ${token}`

                },
                body: JSON.stringify(data)
            })
                .then( res => res.json() )
                .then( el => {
                    
                    document.cookie = `token=${el.token};SameSite=Lax`;
                    window.location.href = 'torte.html';
                       // document.getElementById('cakeLst').innerHTML += `<li>Naziv: ${el.naziv}</li>`;
                    
                });
               
        });

       

}