// ------------SIDEBAR---------
const menuItems = document.querySelectorAll(".menu-list");

// --------------messages-------------
const messageNotification = document.querySelector('#message-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');


// ---------bg-------

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');



// --------THEME-------
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');

const colorActive = () => {
    colorPalette.forEach(color => {
        color.classList.remove('active');
    })
}

// --------------Notification popup-------------
const changeActive = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click' , () => {
        changeActive();
        item.classList.add('active');
    
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display= 'none';
        }else{
            document.querySelector('.notification-popup').style.display= 'block';
            document.querySelector('.notification-count').style.display= 'none';
        }
    })
})

// ---------THEME----------

// --------open theme modal----------
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// ---------close theme modal----------

const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme'))
    {
        themeModal.style.display = 'none';
    }
}

// ---------function calls----------
theme.addEventListener('click', openThemeModal);
themeModal.addEventListener('click', closeThemeModal);


// ----------MESSAGES-------------

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelectorAll('h4').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }
    })

}

messageSearch.addEventListener('keyup', searchMessage);


// =-----------------------------
messageNotification.addEventListener('click' ,() => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    document.querySelector('#message-notifications .notification-count').style.display = 'none';
   setTimeout(() => {
    messages.style.boxShadow = 'none';
   }, 2000);
})



// ---------------change primary colors--------

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        colorActive();
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue' , primaryHue);
    })
})


// ------bg-------

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
    root.style.setProperty('--light-color-lightness' , lightColorLightness);
    root.style.setProperty('--white-color-lightness' , whiteColorLightness);
    root.style.setProperty('--dark-color-lightness' , darkColorLightness);
}

bg1.addEventListener('click', () => {
    bg1.classList.add('active');

    bg2.classList.remove('active');
    bg3.classList.remove('active');

    window.location.reload();

})


bg2.addEventListener('click', () => {
    darkColorLightness ='95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    bg2.classList.add('active');

    bg1.classList.remove('active');
    bg3.classList.remove('active');

    changeBg();
})

bg3.addEventListener('click', () => {
    darkColorLightness ='95%' ;
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    
    bg3.classList.add('active');
    
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBg();
})

