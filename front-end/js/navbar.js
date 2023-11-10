document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const check = document.getElementById('check');

    check.addEventListener('change', function () {
        if (this.checked) {
            body.classList.add('sidebar-open');
        } else {
            body.classList.remove('sidebar-open');
        }
    });
});
