const sec5 = document.querySelector('.sec5');

sec5.onclick = (e) => {
    showAnswer(e);
}

function showAnswer(e) {
    if (e.target.matches('.showmore')) {
        e.target.nextElementSibling.nextElementSibling.classList.toggle('showup');
    }
}


