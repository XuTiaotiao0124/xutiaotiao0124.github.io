document.addEventListener('DOMContentLoaded', function() {
    let seconds = 3;
    const countdownElement = document.getElementById('countdown');
    
    const timer = setInterval(() => {
        seconds--;
        countdownElement.textContent = seconds;
        if(seconds <= 0) clearInterval(timer);
    }, 1000);
});