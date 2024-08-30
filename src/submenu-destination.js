
        document.querySelectorAll('.tab-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                // Hapus class active dari semua link dan tab-pane
                document.querySelectorAll('.tab-link').forEach(item => item.classList.remove('active'));
                document.querySelectorAll('.tab-pane').forEach(item => item.classList.remove('active'));

                // Tambahkan class active ke link dan tab-pane yang diklik
                this.classList.add('active');
                document.getElementById(this.getAttribute('data-tab')).classList.add('active');
            });
        });