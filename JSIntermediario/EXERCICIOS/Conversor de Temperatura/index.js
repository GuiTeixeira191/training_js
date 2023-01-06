function converterCelcius() {
    let celcius = document.getElementById('celciusinput').value
    let fahrenheight = celcius * (9/5) + 32
    document.getElementById('resultC').innerHTML = celcius + '°C é igual a ' + fahrenheight + ' °F '
}

function converterFahrenheight() {
    let fahrenheight = document.getElementById('fahrenheightinput').value
    let celcius = (fahrenheight - 32) * 5/9
    document.getElementById('resultF').innerHTML = fahrenheight + ' °F é igual a ' + celcius + ' °C '
}