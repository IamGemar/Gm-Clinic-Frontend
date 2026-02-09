console.log("Booking JS loaded");
document.getElementById('bookingForm').addEventListener("submit", async function(e){
    e.preventDefault();
    const Data = {
        FirstName: document.getElementById('firstname').value,
        LastName: document.getElementById('lastname').value,
        Email: document.getElementById('email').value,
        ContactNumber: document.getElementById('phone').value,
        ServiceType: document.getElementById('services').value,
        AppointmentDate: document.getElementById('bookingdate').value,
    }
    const response = await fetch('http://localhost:5241/bookings',{
        method: 'POST',
        headers:{ "Content-Type": "application/json" },
        body: JSON.stringify(Data)
    })
    if (response.ok) {
        alert("Booking added!");
        this.reset();
    } else {
        alert("Failed to add booking.");
    }
})