document.addEventListener('DOMContentLoaded', () => {
    const teamButton = document.getElementById('teamButton');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    if (teamButton) {
        teamButton.addEventListener('click', () => {
            popup.classList.add('active');
        });
    }

    if (closePopup) {
        closePopup.addEventListener('click', () => {
            popup.classList.remove('active');
        });
    }

    if (popup) {
        // Close popup when clicking outside the content area
        popup.addEventListener('click', (event) => {
            if (event.target === popup) {
                popup.classList.remove('active');
            }
        });
    }
});