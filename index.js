const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

//Method 1

// toggleBtn.addEventListener('click', () => {
//     sidebar.classList.contains('show-sidebar') ? sidebar.classList.remove('show-sidebar') : sidebar.classList.add('show-sidebar');
// });

//Method 2

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});

// Adding close button functionality

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
});