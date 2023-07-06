const progressBar = document.querySelector('.progress')
const nextBtn = document.querySelector('#next-btn')
const previousBtn = document.querySelector('#previous-btn')

let progress = 0

function updateProgress(){
    progressBar.style.width = progress + '%'
}

function setProgress(num){
    return function(){
        progress += num
        if(progress > 100) progress = 100
        if(progress < 0) progress = 0
        updateProgress()
    }

}

nextBtn.addEventListener('click', setProgress(10))
previousBtn.addEventListener('click', setProgress(-10))