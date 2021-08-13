$(document).on('change', '#selectValue', () => {
    const selected = document.querySelector('select').value;
    if (selected == 4) {
        $('#regex').css('display', 'block');
    } else {
        $('#regex').css('display', 'none');
    }
});

function deleteElm() {
    const spans = document.querySelectorAll('span');
    spans.forEach(span => {
        span.addEventListener("dblclick", event => event.target.remove());
    })
}

