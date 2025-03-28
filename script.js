document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    
    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('active');
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.custom-dropdown')) {
            dropdown.classList.remove('active');
        }
    });
});
document.getElementById('contact-form').addEventListener('submit', function(event) {  
    event.preventDefault();  
    var name = document.getElementById('name').value;  
    var email = document.getElementById('email').value;  
    var message = document.getElementById('message').value;  
    var subject = 'Новое Сообщение от ' + name;  
    var body = 'Email: ' + email + '\n\n' + message;  
    var mailtoLink = 'mailto:sashabessonov@icloud.com?subject=' + encodeURI(subject) + '&body=' + encodeURI(body);  
    window.location.href = mailtoLink;  
});