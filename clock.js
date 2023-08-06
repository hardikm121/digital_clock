function updateTime() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");
    const dayElement = document.getElementById("day");

    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const dateString = now.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
 const dayString = now.toLocaleDateString("en-US", {  weekday: 'long' });

    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
    dayElement.textContent = dayString;
}

updateTime(); 

setInterval(updateTime, 1000);
