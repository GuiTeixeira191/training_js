document
    .querySelector("select[name='estado']")
    .addEventListener('change', (e) => {
        alert('Mudou o estado para: ' + e.target.value)
    })