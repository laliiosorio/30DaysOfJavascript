
const playSound = e => {
    const audio = document.querySelector(`audio[data-key=${e.code}]`)
    const key = document.querySelector(`.key[data-key=${e.code}]`)
    !audio ? e.stopPropagation() : (audio.currentTime = 0, audio.play(), key.classList.add('playing'), removeTransition())

}

const removeTransition = () => {
    const keys = document.querySelectorAll('.key')
    keys.forEach(key => key.addEventListener('transitionend', e => {
        e.propertyName !== 'transform' ? e.stopPropagation() : key.classList.remove('playing')
    }))
}

window.addEventListener('keydown', playSound)