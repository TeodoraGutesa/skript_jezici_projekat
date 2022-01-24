function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

/*
    document.getElementById('productBtn').addEventListener('click', e => {
        e.preventDefault();
        fetch('http://localhost:7000/admin/torte'
        )
           
            .then( el => {
            
                window.location.href = 'torte.html';
            });
        });
       
        document.getElementById('productKolaciBtn').addEventListener('click', e => {
            e.preventDefault();
            fetch('http://localhost:7000/admin/kolaci'
            )
               
                .then( el => {
                
                    window.location.href = 'kolaci.html';
                });
            });
*/
            document.getElementById('mafiniBtn').addEventListener('click', e => {
                document.cookie = `token=;SameSite=Lax`;
                window.location.href = 'mafini.html';
            });
           
            document.getElementById('productKolaciBtn').addEventListener('click', e => {
                document.cookie = `token=;SameSite=Lax`;
                window.location.href = 'kolaci.html';
            });

            document.getElementById('productBtn').addEventListener('click', e => {
                document.cookie = `token=;SameSite=Lax`;
                window.location.href = 'torte.html';
            });


        }
       