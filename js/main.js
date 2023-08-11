function hover() {
    const pfpElement = document.getElementById('pfp');
    pfpElement.classList.add('hovered');
    setTimeout(function() {
        pfpElement.setAttribute('src', 'img/bg_hover.png');
        pfpElement.classList.remove('hovered');
    }, 200); // Adjust the time according to your needs
}

function unhover() {
    const pfpElement = document.getElementById('pfp');
    pfpElement.classList.add('hovered');
    setTimeout(function() {
        pfpElement.setAttribute('src', 'img/bg.png');
        pfpElement.classList.remove('hovered');
    }, 200); // Adjust the time according to your needs
}

function hide(){
    const pfpElement = document.getElementById('pfp');
    if(pfpElement.style.display == 'none'){
        pfpElement.style.display = '';
    }

    else{
        pfpElement.style.display = 'none';  
    }
}
