function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];


    document.getElementById('productBtn').addEventListener('click', e => {
        e.preventDefault();
        fetch('http://localhost:8000/admin/torte'
        )
           
            .then( el => {
            
                window.location.href = 'torte.html';
            });
        });
       
        document.getElementById('productKolaciBtn').addEventListener('click', e => {
            e.preventDefault();
            fetch('http://localhost:8000/admin/kolaci'
            )
               
                .then( el => {
                
                    window.location.href = 'kolaci.html';
                });
            });


        }
       