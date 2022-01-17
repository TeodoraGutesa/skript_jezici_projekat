function init(){

    fetch('http://localhost:8000/api/mafini', {
       // headers: {
         //   'Authorization': `Bearer ${token}`
        //}
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('mafiniLst');

            data.forEach( el => {
                lst.innerHTML += `<li> Naziv: ${el.naziv}, Cena: ${el.cena}</li>`;
            });
        });

        document.getElementById('addBtn').addEventListener('click', e => {
            e.preventDefault();
    
          
            const data = {
                naziv: document.getElementById('naziv').value,
                cena: document.getElementById('cena').value,
                
            };
    
            document.getElementById('naziv').value = '';
            document.getElementById('cena').value = '';
    
            fetch('http://localhost:8000/api/mafini', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                   // 'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
                .then( res => res.json() )
                .then( el => {
                   
                        document.getElementById('mafiniLst').innerHTML += `<li>Naziv: ${el.naziv}, Cena: ${el.cena} </li>`;
                    
                });
        });

        document.getElementById('updateBtn').addEventListener('click', e => {
            e.preventDefault();


            const data = {
                id: document.getElementById('id').value,
                naziv: document.getElementById('naziv').value,
                cena: document.getElementById('cena').value
            };
    
            document.getElementById('id').value = '';
            document.getElementById('naziv').value = '';
            document.getElementById('cena').value = '';
    
            fetch('http://localhost:8000/api/mafini/'+id.value, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                   // 'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
                .then( res => res.json() )
                .then( el => {
                   
                        document.getElementById('mafiniLst').innerHTML += `<li>Naziv: ${el.naziv}, Cena: ${el.cena} </li>`;
                    
                });
        });

        document.getElementById('deleteBtn').addEventListener('click', e => {
            e.preventDefault();
    
            const data = {
                naziv: document.getElementById('naziv').value,
                cena: document.getElementById('cena').value,
               
            };
    
            document.getElementById('id').value = '';
            document.getElementById('naziv').value = '';
            document.getElementById('cena').value = '';
    
            fetch('http://localhost:8000/api/mafini/'+id.value, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                   // 'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
                .then( res => res.json() )
                .then( el => {
                   
                        document.getElementById('mafiniLst').innerHTML += `<li>Naziv: ${el.naziv}, Cena: ${el.cena} </li>`;
                    
                });
        });

    }
