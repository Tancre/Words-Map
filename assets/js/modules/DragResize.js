class DragResize {
    constructor() {
        this.zIndex = 3;
        this.drag();
        this.setZindex();
        this.handleCursor();
        this.multidrag();
        //this.test();
        //this.resize();
    }

    drag() {
        $('.draggable').draggable({ containment: "window" }, {            // Setup dragging and containment
            start: (event, ui) => {
                $(event.target).css("z-index", this.zIndex++)    // Initialize z-index for handelr
                console.log(event.target);
            }
        });
    }

    multidrag() {
        $('#multidraggable').multidraggable();
    }

    setZindex() {
        $('#dragZone div').click(event => {                              // Setup z-index handler
            $(event.target).addClass('top').removeClass('bottom');
            $(event.target).siblings().removeClass('top').addClass('bottom');
            $(event.target).css("z-index", this.zIndex++);
        });
    }

    handleCursor() {
        $('.draggable')
            .on("mousedown", () => $('.draggable').css('cursor', 'grabbing'))
            .on("mouseup mouseleave", () => $('.draggable').css('cursor', 'grab'));
    }

    resize() {
        $(".resizable").resizable({ aspectRatio: true, maxHeight: 900, minHeight: 10 });
        $(".resizableOriz").resizable({ aspectRatio: true, maxHeight: 500, minHeight: 10 });
    }

    test() {
        function detectspecialkeys(e) {
            var evtobj = window.event ? event : e
            if (evtobj.altKey || evtobj.ctrlKey || evtobj.shiftKey)
                alert("you pressed one of the 'Alt', 'Ctrl', or 'Shift' keys")
        }
        document.onkeypress = detectspecialkeys();
        $('.draggable')
            .click(function (e) {
                if (e.ctrlKey) {
                    $(this).toggleClass("selected");
                }
            })
    }
}

// function draggable() {
//     let a = 3;
//     drag(a);
//     setZindex(a);
//     handleCursor();
// }

// function drag(a) {
//     $('.draggable').draggable({ containment: "window" }, {            // Setup dragging and containment
//         start: (event, ui) => $(this).css("z-index", a++)    // Initialize z-index for handelr
//     });
// }

// function setZindex(a) {
//     $('#dragZone div').click(() => {                              // Setup z-index handler
//         $(this).addClass('top').removeClass('bottom');
//         $(this).siblings().removeClass('top').addClass('bottom');
//         $(this).css("z-index", a++);
//     });
// }

// function handleCursor() {
//     $('.draggable')
//         .on("mousedown", () => $('.draggable').css('cursor', 'grabbing'))
//         .on("mouseup mouseleave", () => $('.draggable').css('cursor', 'grab'));
// }

// function resize() {
//     $(".resizable").resizable({ aspectRatio: true, maxHeight: 900, minHeight: 10 });
//     $(".resizableOriz").resizable({ aspectRatio: true, maxHeight: 500, minHeight: 10 });
// }