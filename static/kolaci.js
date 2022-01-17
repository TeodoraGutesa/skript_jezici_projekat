function init(){

    fetch('http://localhost:8000/admin/kolaci', {
       // headers: {
         //   'Authorization': `Bearer ${token}`
        //}
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
    
            /*const data = {
                body: document.getElementById('naziv').value
            };*/

            const data = {
                naziv: document.getElementById('naziv').value,
                cena: document.getElementById('cena').value,
                //password: document.getElementById('password').value,
                //admin: document.getElementById('admin').checked
            };
    
            document.getElementById('naziv').value = '';
            document.getElementById('cena').value = '';
    
            fetch('http://localhost:8000/admin/kolaci', {
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
    
            /*const data = {
                body: document.getElementById('naziv').value
            };*/

            const data = {
                naziv: document.getElementById('naziv').value,
                cena: document.getElementById('cena').value,
                //password: document.getElementById('password').value,
                //admin: document.getElementById('admin').checked
            };
    
            document.getElementById('naziv').value = '';
            document.getElementById('cena').value = '';
    
            fetch('http://localhost:8000/admin/kolaci/9', {
                method: 'PUT',
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

        document.getElementById('deleteBtn').addEventListener('click', e => {
            e.preventDefault();
    
            /*const data = {
                body: document.getElementById('naziv').value
            };*/

            const data = {
                naziv: document.getElementById('naziv').value,
                cena: document.getElementById('cena').value,
                //password: document.getElementById('password').value,
                //admin: document.getElementById('admin').checked
            };
    
            document.getElementById('naziv').value = '';
            document.getElementById('cena').value = '';
    
            fetch('http://localhost:8000/admin/kolaci', {
                method: 'DELETE',
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



    }
