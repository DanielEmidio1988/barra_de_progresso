const progressBar = document.querySelector('.progress')
const nextBtn = document.querySelector('#next-btn')
const previousBtn = document.querySelector('#previous-btn')

let progress = 0

function updateProgress(){
    progressBar.style.width = progress + '%'
}

function nextProgress(){
    progress += 10
    if(progress > 100) progress = 100
    updateProgress()
}

function previousProgress(){
    progress -= 10
    if(progress < 0) progress = 0
    updateProgress()
}

nextBtn.addEventListener('click', nextProgress)
previousBtn.addEventListener('click', previousProgress)