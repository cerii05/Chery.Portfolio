const homePage = document.getElementById('home-page');
homePage.addEventListener('click', function() {
    window.location.href = 'index.html'
});

const emailBtn = document.getElementById('emailBtn');
emailBtn.addEventListener('click', () => {
  window.location.href = 'mailto:cherycamberly@gmail.com';
});

const projectBtn = document.getElementById('projectBtn');
projectBtn.addEventListener('click', () => {
  window.location.href = 'projects.html';
});
