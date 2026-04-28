document.addEventListener('DOMContentLoaded', () => {
    // 1. 初始化 AOS 动画库
    AOS.init({
        duration: 800,
        once: false,
        offset: 100,
        easing: 'ease-out-cubic'
    });

    // 2. 导航栏滚动效果
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });

    // 3. 导航栏当前活动项高亮
    const sections = document.querySelectorAll('main > div, main > section');
    const navLinks = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id') || current;
            }
        });

        // 兼容一下没给 id 的第一个 Bento 容器
        if (scrollY < 300) {
            current = 'home';
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});