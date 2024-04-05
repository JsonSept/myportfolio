
      $(document).mousemove(function(e) {
    const x = e.pageX;
    const y = e.pageY;
    $('#light').css({ left: x, top: y });
});
