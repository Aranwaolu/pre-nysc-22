const navButton = document.querySelector('.mobile-nav-btn');
let navHide = true
navButton.addEventListener('click', () => {
    // hamburgerAnim();
    if(navHide) {
        document.querySelector('.mobile-nav-wrap').classList.add('show');
        document.querySelector('.mobile-nav-wrap').classList.remove('hide');
        document.querySelectorAll('.mobile-span')[0].style.display = 'none';
        document.querySelectorAll('.mobile-span')[1].style.transform = 'rotate(45deg)';
        document.querySelectorAll('.mobile-span')[2].style.transform = 'rotate(-45deg)'
        document.querySelectorAll('.mobile-span')[2].style.marginTop = '-3px'
        document.querySelectorAll('.mobile-span')[1].style.marginTop = '0'
    } else {
        document.querySelector('.mobile-nav-wrap').classList.add('hide');
        document.querySelector('.mobile-nav-wrap').classList.remove('show');

        document.querySelectorAll('.mobile-span')[0].style.display = 'block';
        document.querySelectorAll('.mobile-span')[1].style.transform = 'rotate(0)';
        document.querySelectorAll('.mobile-span')[2].style.transform = 'rotate(0)'
        document.querySelectorAll('.mobile-span')[2].style.marginTop = '5px'
        document.querySelectorAll('.mobile-span')[1].style.marginTop = '5px'
    }
    navHide = !navHide;
})
