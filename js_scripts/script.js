// Basic form validation
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out!');
});

//variable for status of the modes
//0 for light
//1 for dark
//2 for dragon
var stat = 0;

// Dark mode toggle
//if Dragon-mode is on, then toggle it off before toggling dark-mode on
const toggleDark = document.getElementById('toggleDark');
toggleDark.addEventListener('click', () => {
    if(stat == 2){
    const toggleDragon = document.getElementById('toggleDragon');
    document.documentElement.classList.toggle('dragon-mode');
    stat = 1;
    }
    else if(stat == 1){
        stat = 0;
    }
    else{
        stat = 1;
    }
    document.documentElement.classList.toggle('dark');
});

// Dragon mode toggle
//if dark-mode is on, then toggle it off before toggling dragon-mode on
const toggleDragon = document.getElementById('toggleDragon');
toggleDragon.addEventListener('click', () => {
    if(stat == 1){
    const toggleDark = document.getElementById('toggleDark');
    document.documentElement.classList.toggle('dark');
    stat = 2;
    }
    else if(stat == 2){
        stat = 0;
    }
    else{
        stat = 2;
    }
    document.documentElement.classList.toggle('dragon-mode');
});

// Dynamic project loading
const projects = [
  {
    title: 'Weather App',
    description: 'A simple weather forecasting app using OpenWeatherMap API.',
    link: '#'
  },
  {
    title: 'To-Do List',
    description: 'A task management app built with JavaScript and Tailwind CSS.',
    link: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with HTML, Tailwind CSS, and JavaScript.',
    link: '#'
  }
];

const projectGrid = document.getElementById('projectGrid');
projects.forEach(project => {
  const div = document.createElement('div');
  div.className = 'bg-white dark:bg-gray-700 p-4 shadow rounded-lg transition-colors duration-500';
  div.innerHTML = `
    <h3 class="text-xl font-bold text-gray-800 dark:text-white">${project.title}</h3>
    <p class="text-gray-600 dark:text-gray-300">${project.description}</p>
    <a href="${project.link}" class="text-blue-600 dark:text-blue-400 hover:underline">View Project</a>
  `;
  projectGrid.appendChild(div);
});
