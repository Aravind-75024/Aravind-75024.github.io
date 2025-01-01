const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
   // Chatbot interaction
   const chatbotBtn = document.getElementById('chat-btn');
   chatbotBtn.addEventListener('click', () => {
       alert("How can we assist you today?");
   });