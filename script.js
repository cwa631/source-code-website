// Set the current year
document.getElementById('year').textContent = new Date().getFullYear();

// Projects with `isFree` flag
const projects = [
    {
        title: 'Memory Game',
        category: 'game',
        description: 'Bring fun and interactivity to your projects with this Memory Game built entirely in JavaScript, HTML, and CSS! 🎮✨',
        image: 'assets/memory game.png',
        demo: 'https://cwa631.github.io/Memory-Game/',
        source: 'https://buymeacoffee.com/codewithaditya631/e/455797',
        isFree: true
    },
    {
        title: 'Tic Tac Toe',
        category: 'game',
        description: 'Tic Tac Toe Game in HTML, CSS & JavaScript | Play With Friends on Same Device 🎮',
        image: 'assets/tic-tac-toe game.png',
        demo: 'https://cwa631.github.io/Tic-Tac-Toe-Game/',
        source: 'https://buymeacoffee.com/codewithaditya631/e/456337',
        isFree: true
    },
    {
        title: 'Snake Game',
        category: 'game',
        description: 'A fast, responsive HTML/CSS/JS snake game — use arrow keys or swipe to eat food, grow your snake, and beat your high score. Smooth animations and mobile-friendly controls.',
        image: 'assets/snake game.png',
        demo: 'https://cwa631.github.io/Snake-Game/',
        source: 'https://buymeacoffee.com/codewithaditya631/e/456337',
        isFree: true
    },
    {
        title: '3D Portfolio Website',
        category: 'portfolio',
        description: 'Own a Stunning 3D Portfolio WebsiteReady!Elevate your personal brand or freelance business with a professional 3D Portfolio Website! 🚀',
        image: 'assets/3D Portfolio.png',
        demo: 'https://youtube.com/shorts/TPkoc6vIaE8?si=Xq0w329ZJ-UGdF15',
        source: 'https://buymeacoffee.com/codewithaditya631/e/454098',
        isFree: false
    },
    {
        title: 'Add To Cart Shopping Cart',
        category: 'ecommerce',
        description: '🚀 Take your web development projects to the next level with this fully functional Add To Cart Shopping Cart System built using HTML, CSS, and JavaScript.',
        image: 'assets/shopping cart.png',
        demo: 'https://youtube.com/shorts/fyNsO1lqthg?si=4clGzeIMB2-vy1Hv',
        source: 'https://buymeacoffee.com/codewithaditya631/e/453811',
        isFree: false
    },


        {
        title: 'AI Chatbot Project',
        category: 'other',
        description: '🚀 Build your own AI Chatbot using HTML, CSS, and JavaScript with this complete project',
        image: 'assets/ai chatbot.png',
        demo: '#',
        source: 'https://buymeacoffee.com/codewithaditya631/e/452848',
        isFree: false
    },

        {
        title: 'Animated Radial Menu',
        category: 'other',
        description: '🚀 Take your web development projects to the next level with this fully functional Add To Cart Shopping Cart System built using HTML, CSS, and JavaScript.',
        image: 'assets/radial menu.png',
        demo: 'https://youtube.com/shorts/kuyFEeYQlCA?si=G7r_5rJtO968w77I',
        source: 'https://buymeacoffee.com/codewithaditya631/e/454357',
        isFree: false
    },

        {
        title: 'Animated Login Form ',
        category: 'other',
        description: 'we’ll design a modern, responsive login form with smooth animations — no JavaScript required. Perfect for beginners and front-end developers who want to enhance their web design skills.',
        image: 'assets/login form.png',
        demo: '#',
        source: 'https://buymeacoffee.com/codewithaditya631/e/451766',
        isFree: false
    },
    {
        title: '✨ CSS Animated Responsive Cards Hover Effects',
        category: 'other',
        description: 'Enhance your website with modern, fully responsive animated cards built using only HTML & CSS. Lightweight, customizable, and mobile-friendly—perfect for portfolios, business sites, and product showcases.',
        image: 'assets/responsive card.png',
        demo: '#',
        source: 'https://buymeacoffee.com/codewithaditya631/e/456808',
        isFree: false
    },
{
    title: 'CSS Glassmorphism Cards Hover Effects',
    category: 'other',
    description: 'Create stunning glassmorphism cards with hover effects using only HTML & CSS. Frosted glass blur, smooth hover animation, and modern UI design — perfect for websites & portfolios! 💎✨',
    image: 'assets/Glassmorphism Cards Hover Effects .png',
    demo: '#',
    source: 'https://buymeacoffee.com/codewithaditya631/e/464321',
    isFree: false
}

];

const grid = document.getElementById('projectsGrid');
const template = document.getElementById('projectTemplate');
const tabs = document.querySelectorAll('.tab-btn');

function renderProjects(filter = 'all') {
    grid.innerHTML = '';
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

    filtered.forEach(p => {
        const card = template.content.cloneNode(true);
        card.querySelector('img').src = p.image;
        card.querySelector('h4').textContent = p.title;

        // Set description
        const descPara = card.querySelector('p');
        descPara.textContent = p.description;

        // Create Free Badge if applicable
        if (p.isFree) {
            const badge = document.createElement('span');
            badge.textContent = 'Free';
            badge.className = 'free-badge ml-2';
            descPara.appendChild(badge);
        }

        card.querySelector('.demo-btn').href = p.demo;
        card.querySelector('.source-btn').href = p.source;
        grid.appendChild(card);
    });
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('tab-active'));
        tab.classList.add('tab-active');
        renderProjects(tab.dataset.tab);
    });
});

renderProjects();
