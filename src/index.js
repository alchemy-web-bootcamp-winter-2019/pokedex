const formNode = document.getElementById('user-form');

formNode.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(formNode);

    const user = {
        name: formData.get('name')
    };

    const json = JSON.stringify(user);
    window.localStorage.setItem('user', json);
    window.location = '../pokedex.html';
});