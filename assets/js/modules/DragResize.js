class DragResize {
    constructor() {
        this.drag();
        this.setZindex();
        this.handleCursor();
        this.multidrag();
        this.resize();
    }

    drag() {
        $('.draggable').draggable({ containment: "body" }, {            // Setup dragging and containment
            start: (event, ui) => {
                $(event.target).css("z-index", zIndex++)    // Initialize z-index for handelr
            }
        });
    }

    multidrag() {
        $('#multidraggable').multidraggable();
    }

    setZindex() {
        $('#dragZone div').mousedown(function() {                         // Setup z-index handler
            $(this).addClass('top').removeClass('bottom');
            $(this).siblings().removeClass('top').addClass('bottom');
            $(this).css("z-index", zIndex++);
            return zIndex++
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
}