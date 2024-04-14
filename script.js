function updateTicketValidity() {
    const purchaseDate = new Date(parseInt(document.getElementById('purchase-date').dataset.timestamp, 10));
    const currentTime = new Date();
    let diff = Math.floor((currentTime - purchaseDate) / 1000); // difference in seconds

    let hours = Math.floor(diff / 3600);
    let minutes = Math.floor(60-(diff % 3600) / 60);
    let seconds = diff % 60;

    // Display time with leading zeros if less than 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('validity').innerText = `Квиток дійсний - ${hours}:${minutes}:${seconds}`;

    // Decrease seconds by 1 every second
    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    // Time's up, update ticket validity
                    clearInterval(intervalId); // Stop the interval
                    document.getElementById('validity').innerText = 'Квиток закінчився';
                }
            }
        }
        // Display updated time with leading zeros if necessary
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        document.getElementById('validity').innerText = `Квиток дійсний - ${minutes}:${seconds}`;
    }, 1000);
}

window.onload = function() {
    // Set purchase date
    const purchaseDate = new Date();
    purchaseDate.setMinutes(purchaseDate.getMinutes() - Math.floor(Math.random() * (12 - 2 + 1)) - 3);
    document.getElementById('purchase-date').setAttribute('data-timestamp', purchaseDate.getTime());
    document.getElementById('purchase-date').innerText = formatDate(purchaseDate);

    // Update ticket validity
    updateTicketValidity();

    // Generate random ticket number
    const ticketNumber = Math.floor(Math.random() * (329675 - 320456 + 1)) + 320456;
    document.getElementById('ticket-number').innerText = ticketNumber;
}

function formatDate(date) {
    const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
    const monthIndex = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `Придбано  ${day} ${months[monthIndex]} о ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

window.onload = function() {
    // Set purchase date
    const purchaseDate = new Date();
    purchaseDate.setMinutes(purchaseDate.getMinutes() - Math.floor(Math.random() * (12 - 2 + 1)) - 3);
    document.getElementById('purchase-date').setAttribute('data-timestamp', purchaseDate.getTime());
    document.getElementById('purchase-date').innerText = formatDate(purchaseDate);

    // Update ticket validity
    updateTicketValidity();

    // Generate random ticket number
    const ticketNumber = Math.floor(Math.random() * (329675 - 320456 + 1)) + 320456;
    document.getElementById('ticket-number').innerText = ticketNumber;
}