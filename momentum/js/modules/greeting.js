export default function showGreeting() {
    const greeting = document.querySelector('.greeting');
    const hours = new Date().getHours();
    const timeOfDay = getTimeOfDay(hours);
    const greetingMessage = `Good ${timeOfDay},`;

    greeting.textContent = greetingMessage;
}

export function getTimeOfDay(hours) {
    const timesOfDay = ["night", "morning", "afternoon", "evening"];
    return timesOfDay[Math.floor(hours / 6)];
}