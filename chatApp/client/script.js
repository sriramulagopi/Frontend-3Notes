const socket = io();

// fetch => to get something from server

const btn = document.getElementById('join-chat');
const input = document.getElementById('username-input');
const form = document.getElementById('form');
const chatroomContainer = document.querySelector(".chatroom-container");
const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const messageContainer = document.getElementById('message-container');

let username = '';

btn.addEventListener('click',(event)=>{
    event.preventDefault();
    username = input.value;
    if(username){
        // show chat page
        chatroomContainer.style.display = 'block';
        // hide form
        form.style.display = 'none';
    }
})

sendButton.addEventListener('click',()=>{
    let data = {
        id: socket.id, /// why we are writting this
        username: username,
        message: messageInput.value,
    }
    socket.emit('sending message event',data);
    renderMessage(data, "SENT");
})

// <div class="message">hey (recieved)</div>
// <div class="message sent">hi (sent)</div>

function renderMessage(data,typeOfMessage){
    const messageDiv = document.createElement('div');
    messageDiv.innerText = `${data.username} : ${data.message}`;
    if(typeOfMessage === 'SENT'){
        messageDiv.setAttribute('class','message sent');
    }
    else{
        messageDiv.setAttribute('class','message');
    }
    messageContainer.appendChild(messageDiv);
    messageInput.value="";
}


// io.emit('io spreading message',data);


socket.on('io spreading message',(data)=>{
    if(socket.id !== data.id){
        renderMessage(data,'RECIEVED');
    }
})

