import './style.css'
import { Header } from './components/Header.js'
import { Footer } from './components/Footer.js'
import { Home } from './pages/Home.js'
import { About } from './about.js'

const routes = {
    '/': Home,
    '/about': About
};

const router = async () => {
    const path = window.location.pathname;
    const pageComponent = routes[path] || routes['/'];
    
    const page = pageComponent();
    
    document.querySelector('#app').innerHTML = `
        ${Header()}
        <div id="content">${page.html}</div>
        ${Footer()}
    `;
    
    if (page.init) {
        page.init();
    }
};

const navigate = (url) => {
    window.history.pushState(null, null, url);
    router();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('[data-link]');
        if (link) {
            e.preventDefault();
            navigate(link.href);
        }
    });
    
    router();
});
