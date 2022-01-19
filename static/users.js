function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];


    fetch('http://localhost:8000/admin/users', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('userLst');

            data.forEach( el => {
                lst.innerHTML += `<li> Name: ${el.name}, Email: ${el.email}, Password: ${el.password} </li>`;
            });
        });



    document.getElementById('btn').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            admin: document.getElementById('admin').checked,
            moderator: document.getElementById('moderator').checked
        };

        fetch('http://127.0.0.1:9000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( el => {
                document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'users.html';
            });
    });

    document.getElementById('btnUpdate').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            id: document.getElementById('id').value,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            admin: document.getElementById('admin').checked,
            moderator: document.getElementById('moderator').checked
        };

        fetch('http://localhost:8000/admin/users/'+id.value, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( el => {
                document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'users.html';
            });
    });

    document.getElementById('deleteBtn').addEventListener('click', e => {
        e.preventDefault();

    const data = {
            id: document.getElementById('id').value,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            admin: document.getElementById('admin').checked,
            moderator: document.getElementById('moderator').checked
    };
        
    fetch('http://localhost:8000/admin/users/'+id.value, {
        method: 'DELETE', 
        headers: { 'Content-Type': 'application/json'}       
    })
            
        .then( res => res.json() )
        .then( el => {
                
            document.cookie = `token=${el.token};SameSite=Lax`;
            window.location.href = 'users.html';
        });
    }); 


}