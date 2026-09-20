      // โหลด menu1.html
       fetch("menu.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;

            // ✅ re-bind toggle หลังจากเมนูถูก inject
            const sidebarToggle = document.body.querySelector('#sidebarToggle');
            if (sidebarToggle) {
                sidebarToggle.addEventListener('click', event => {
                    event.preventDefault();
                    document.body.classList.toggle('sb-sidenav-toggled');
                });
            }
        });
    
       // โหลด footer.html
       fetch("footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;

            // ✅ re-bind toggle หลังจากเมนูถูก inject
            const sidebarToggle = document.body.querySelector('#sidebarToggle');
            if (sidebarToggle) {
                sidebarToggle.addEventListener('click', event => {
                    event.preventDefault();
                    document.body.classList.toggle('sb-sidenav-toggled');
                });
            }
        });