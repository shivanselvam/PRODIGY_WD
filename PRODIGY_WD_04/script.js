function login() {
  const username = document.getElementById('username').value;
  if (username) {
      document.getElementById('login-section').style.display = 'none';
      document.getElementById('dashboard').style.display = 'flex';
      document.getElementById('chat-header').innerText = `Logged in as ${username}`;
  } else {
      alert('Please enter a username');
  }
}

function startPrivateChat(contactName) {
  document.getElementById('chat-header').innerText = `Private chat with ${contactName}`;
  document.getElementById('chat-area').innerHTML = ''; // Clear chat area for private messages
}

function startGroupChat(groupName) {
  document.getElementById('chat-header').innerText = `Group chat: ${groupName}`;
  document.getElementById('chat-area').innerHTML = ''; // Clear chat area for group messages
}

function sendMessage() {
  const messageBox = document.getElementById('message-box');
  const message = messageBox.value;
  if (message) {
      const chatArea = document.getElementById('chat-area');
      const newMessage = document.createElement('div');
      newMessage.innerText = message;
      chatArea.appendChild(newMessage);
      messageBox.value = ''; // Clear the input box after sending
      chatArea.scrollTop = chatArea.scrollHeight; // Scroll to the bottom
  } else {
      alert('Please type a message');
  }
}
