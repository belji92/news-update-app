const socket = io();
document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const msg = document.getElementById('message').value;
    socket.emit('chat message', msg);
    document.getElementById('message').value = '';
});

socket.on('chat message', function(msg) {
    const li = document.createElement('li');
    li.innerText = msg;
    document.getElementById('messages').appendChild(li);
});
