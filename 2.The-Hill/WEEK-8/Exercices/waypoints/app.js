// Waypoint to detect scrolling down from Section 1 to Section 2
new Waypoint({
    element: document.getElementById('section2'),
    handler: function(direction) {
        if (direction === 'down') {
            alert('Are you sure? Things are wild down there.');
        }
    },
    offset: '100%' // Trigger when top of section 2 reaches the top of the viewport
});

// Waypoint to detect scrolling up from Section 2 to Section 1
new Waypoint({
    element: document.getElementById('section2'),
    handler: function(direction) {
        if (direction === 'up') {
            alert('I told you!');
        }
    },
    offset: '0%' // Trigger when bottom of section 2 reaches the bottom of the viewport
});