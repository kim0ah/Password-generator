const lengthTag = document.querySelector('#length')
const letterTag = document.querySelector('#letter__yes')
const numberTag = document.querySelector('#numbers')
const symbolTag = document.querySelector('#symbols')
const generateBtn = document.querySelector('.generator__generate')
const passwordTag = document.querySelector('.generator__password')
const errorTag = document.querySelector('.generator__error')
const copyBtn = document.querySelector('.copy__button')

function randomizer(max) {
    let rand = Math.random() * max;
    return Math.floor(rand)
}
let result = ''
generateBtn.addEventListener('click', () => {
    if (lengthTag.value && +lengthTag.value > 7 && +lengthTag.value < 128) {
        const length = +lengthTag.value
        const isLetterChecked = letterTag.checked
        const isNumberChecked = numberTag.checked
        const isSymbolChecked = symbolTag.checked

        const symbolString = '!@#$%^&*()-_=+'
        const numberString = '0123456789'
        const letterString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

        let symbolsForUse = ''

        symbolsForUse = (isNumberChecked ? numberString : '') +
        (isSymbolChecked ? symbolString : '') +
        (isLetterChecked ? letterString : '')

        if (symbolsForUse) {
            for (let i = 0; i < length; i++) {
                const random = randomizer(symbolsForUse.length)
                result = `${result}${symbolsForUse[random]}`
            }
            passwordTag.innerText = result
            errorTag.innerText = ''
            lengthTag.style.border = '1px solid #000'
            copyBtn.style.display = 'inline'
        } else {
            errorTag = 'You should select something'
        }

    } else {
        lengthTag.style.border = '1px solid red'
        errorTag.innerText = 'Please check input length'
    }
})

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(result)
})