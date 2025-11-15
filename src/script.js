// Add click handlers to navigation buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.navButton');
    
    // GitHub button - first button
    buttons[0].addEventListener('click', function() {
        window.open('https://github.com/haileylwb/LockedIn', '_blank');
    });
    
    // Devpost button - second button
    buttons[1].addEventListener('click', function() {
        // TODO: Replace with actual Devpost project URL
        window.open('https://devpost.com/software/ur-poopin', '_blank');
    });
});

