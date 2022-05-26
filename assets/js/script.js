function scrollOff(){
    if (document.querySelector('body').classList.contains('scrollNormal')){
        document.querySelector('body').classList.remove('scrollNormal')
        document.querySelector('body').classList.add('scrollOff')
    } else {
        document.querySelector('body').classList.add('scrollNormal')
        document.querySelector('body').classList.remove('scrollOff')
    }
}