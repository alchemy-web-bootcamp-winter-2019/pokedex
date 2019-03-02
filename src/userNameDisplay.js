export default function userNameDisplay(user) {
    const userNameNode = document.getElementById('user-name');
    userNameNode.textContent = user.name + '\'s ';
}