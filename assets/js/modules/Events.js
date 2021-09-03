
// Update minimap on changes
window.addEventListener('keyup', () => minimapInit());
window.addEventListener('mouseup', () => minimapInit());

// const miniMap = document.querySelector('#map');
// miniMap.addEventListener('dragstart', () => {
//     const dragSelection = document.querySelector('.ui-selectable-helper');
//     dragSelection.classList.add("no-outline");
// })

// miniMap.addEventListener('mouseup', () => {
//     const dragSelection = document.querySelector('.ui-selectable-helper');
//     dragSelection.classList.remove("no-outline");
// })

// Toggle Regex Input
$(document).on('change', '#selectValue', () => {
    const selected = document.querySelector('select').value;
    if (selected == 4) {
        $('#regex').css('display', 'block');
    } else {
        $('#regex').css('display', 'none');
    }
});

// Delete elements
function deleteElm() {
    // Double click
    const spans = document.querySelectorAll('span');
    spans.forEach(span => span.addEventListener("dblclick", event => event.target.remove()));

    // Delete key
    $(document).keydown(function( event ) {
        if ( event.which == 46 ) {
            event.preventDefault();
            const selected = document.querySelectorAll('.ui-selected');
            selected.forEach(elt => elt.remove());
        }
    });
}