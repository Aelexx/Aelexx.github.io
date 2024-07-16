function userTxt(text) {
    document.getElementById('cnt_vow').innerHTML = vowels(text)
    document.getElementById('cnt_cons').innerHTML = consonants(text)
    document.getElementById('cnt_sym').innerHTML = symbols(text)
    document.getElementById('cnt_spa').innerHTML = spaces(text)
}

function vowels(text) {
    return text.split(/[aeiou]/gi).length - 1
}

function consonants(text) {
    return text.split(/[qwrtypsdfghjklzxcvbnm]/ig).length - 1
}

function symbols(text) {
    return text.split(/[,:;.]/ig).length - 1
}

function spaces(text) {
    return text.split(/[' ']/gi).length - 1
}