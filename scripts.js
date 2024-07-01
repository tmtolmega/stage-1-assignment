document.addEventListener("DOMContentLoaded", () => {
    const currentTimeUTCElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');

    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(" ")[4];
        const day = now.toLocaleString('en-US', { weekday: 'long' });

        currentTimeUTCElement.textContent = utcTime;
        currentDayElement.textContent = day;
    }

    setInterval(updateTime, 1000);
    updateTime();
});