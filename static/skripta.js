function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

/*
    document.getElementById('productBtn').addEventListener('click', e => {
        e.preventDefault();
        fetch('http://localhost:8000/admin/torte'
        )
           
            .then( el => {
                
               // document.cookie = `token=;SameSite=Lax`;
                window.location.href = 'torte.html';
            });
        });
 */

        //novo 
        document.getElementById('productBtn').addEventListener('click', e => {
            document.cookie = `token=;SameSite=Lax`;
            window.location.href = 'torte.html';
        });
        //novo

        /*
        document.getElementById('productKolaciBtn').addEventListener('click', e => {
            e.preventDefault();
            fetch('http://localhost:8000/admin/kolaci'
            )
               
                .then( el => {
                
                    window.location.href = 'kolaci.html';
                });
            });

*/



             //novo 
        document.getElementById('productKolaciBtn').addEventListener('click', e => {
            document.cookie = `token=;SameSite=Lax`;
            window.location.href = 'kolaci.html';
        });
        //novo

/*

            document.getElementById('mafiniBtn').addEventListener('click', e => {
                e.preventDefault();
                fetch('http://localhost:8000/api/mafini'
                )
                   
                    .then( el => {
                        
                       // document.cookie = `token=;SameSite=Lax`;
                        window.location.href = 'mafini.html';
                    });
                });
*/


/*
            document.getElementById('usersBtn').addEventListener('click', e => {
                e.preventDefault();
                fetch('http://localhost:8000/admin/users'
                )
                   
                    .then( el => {
                        document.cookie = `token=;SameSite=Lax`;
                        window.location.href = 'users.html';
                    });
                });

*/


        //novo 
        document.getElementById('usersBtn').addEventListener('click', e => {
            document.cookie = `token=;SameSite=Lax`;
            window.location.href = 'users.html';
        });
        //novo


        //novo 
        document.getElementById('mafiniBtn').addEventListener('click', e => {
            document.cookie = `token=;SameSite=Lax`;
            window.location.href = 'mafini.html';
        });
        //novo

        document.getElementById('pageBtn').addEventListener('click', e => {
            e.preventDefault();
            //fetch('http://localhost:8000/admin/torte'
            //)
               
                then( el => {
                
                    window.location.href = 'torte.html';
                });
            });
           
            document.getElementById('productBtn').addEventListener('click', e => {
                e.preventDefault();
                fetch('http://localhost:8000/admin/torte'
                )
                   
                    .then( el => {
                    
                        window.location.href = 'torte.html';
                    });
                });
               

  


    fetch('http://localhost/admin/users', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('usrLst');

            data.forEach( el => {
                lst.innerHTML += `<li>ID: ${el.id}, Name: ${el.name}, E-mail: ${el.email}, Password: ${el.password}</li>`;
            });
        });


        document.getElementById('usrBtn').addEventListener('click', e => {
            e.preventDefault();
    
            const data = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                admin: document.getElementById('admin').checked
            };
    
            fetch('http://127.0.0.1:9000', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then( res => res.json() )
                .then( el => {
                    document.cookie = `token=${el.token};SameSite=Lax`;
                    window.location.href = 'addCake.html';
                });
        });

    document.getElementById('logout').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
        window.location.href = 'login.html';
    });
}