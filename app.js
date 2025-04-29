function home() {
    window.location.href = 'index.html'
}

function goNew() {
    window.location.href = 'goNew.html'
}


function goBack() {
    window.location.href = 'note.html'
}

function saveNote() {
    const saveValue = document.getElementById('textArea').value
    console.log(`Okay to save ${saveValue}`)
    localStorage.setItem('savedNote', saveValue)
    displayNote()
}

function displayNote() {
    const displayLocal = localStorage.getItem('savedNote') || ''
    document.getElementById('displayNote').innerText = displayLocal
}

window.onload = displayNote()
