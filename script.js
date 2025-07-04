function toggleBackground() {
    document.body.classList.toggle('dark-bg');
}

document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit-btn');
    const nameInput = document.getElementById('name-input');
    submitBtn.addEventListener('click', function() {
        if (!nameInput.value.trim()) {
            alert('Please enter your name.');
        } else {
            alert('Thank you, ' + nameInput.value + '!');
        }
    });
});