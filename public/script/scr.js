document.addEventListener("DOMContentLoaded", function() {
    const activePage = window.location.pathname;
    const navLinks = document.querySelectorAll(".active");

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
         if (activePage === linkPath) {
            link.classList.add('current-page');
        }
    });
});


function deleteData() {
    fetch('/delete', {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            window.location.href = '/'; // Redirect to home page
        } else {
            alert('Failed to delete data');
        }
    });
}
