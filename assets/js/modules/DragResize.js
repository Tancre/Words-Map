class DragResize {
    constructor() {
        this.zIndex = 3;
        this.drag();
        this.setZindex();
        this.handleCursor();
        this.multidrag();
        this.resize();
    }

    drag() {
        $('.draggable').draggable({ containment: "body" }, {            // Setup dragging and containment
            start: (event, ui) => {
                $(event.target).css("z-index", this.zIndex++)    // Initialize z-index for handelr
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
}