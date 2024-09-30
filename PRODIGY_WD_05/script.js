// Function for login (basic, no validation)
function login() {
  alert("Logged in successfully!");
  window.location.href = "app.html"; // Redirect to the main application
}

// Function for "Use for Free" option
function useForFree() {
  window.location.href = "app.html"; // Skip login and go to the main app
}

// Function to create a post (from previous version)
function createPost() {
  const postContent = document.getElementById('post-content').value;
  const postTags = document.getElementById('post-tags').value;

  if (postContent.trim() === "") {
      alert("Post content cannot be empty!");
      return;
  }

  const postFeed = document.getElementById('post-feed');
  const newPost = document.createElement('div');
  newPost.classList.add('post');
  
  const postText = document.createElement('p');
  postText.textContent = postContent;
  newPost.appendChild(postText);

  if (postTags.trim() !== "") {
      const tags = document.createElement('p');
      tags.classList.add('tags');
      tags.textContent = 'Tags: ' + postTags;
      newPost.appendChild(tags);
  }

  postFeed.appendChild(newPost);

  document.getElementById('post-content').value = '';
  document.getElementById('post-tags').value = '';
}

// Function to send a chat message (from previous version)
function sendMessage() {
  const chatInput = document.getElementById('chat-input').value;

  if (chatInput.trim() === "") {
      alert("Message cannot be empty!");
      return;
  }

  const chatBox = document.getElementById('chat-box');
  const newMessage = document.createElement('li');
  newMessage.textContent = chatInput;

  chatBox.appendChild(newMessage);

  document.getElementById('chat-input').value = '';
}
