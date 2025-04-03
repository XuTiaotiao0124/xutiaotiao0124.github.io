document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    let seconds = 3;
    
    function updateCountdown() {
        countdownElement.textContent = seconds;
        countdownElement.style.fontSize = `${Math.min(10, 5 + seconds)}vmin`;
        seconds--;
        
        if(seconds < 0) {
            clearInterval(timer);
            countdownElement.style.opacity = '0';
        }
    }

    updateCountdown(); // 立即显示初始值
    const timer = setInterval(updateCountdown, 1000);
});