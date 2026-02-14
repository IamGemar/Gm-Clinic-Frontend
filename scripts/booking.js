const bookingData = {
    service: "",
    date: "",
    time: "",
    fullName: "",
    age: "",
    email: "",
    phone: ""
}
document.querySelectorAll(".service-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        bookingData.service = btn.dataset.service;
        updateReview();
    });
});
document.getElementById("calendar").addEventListener("change", e => {
    bookingData.date = e.target.value;
    updateReview();
});
document.querySelectorAll(".time-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        bookingData.time = btn.dataset.time;
        updateReview();
    });
});
["fullName", "age", "email", "phone"].forEach(id => {
    document.getElementById(id).addEventListener("input", e => {
        bookingData[id] = e.target.value;
        updateReview();
    });
});
function updateReview() {
    document.getElementById("reviewService").textContent = bookingData.service || "N/A";
    document.getElementById("reviewDate").textContent = bookingData.date || "N/A";
    document.getElementById("reviewTime").textContent = bookingData.time || "N/A";
    document.getElementById("reviewName").textContent = bookingData.fullName || "N/A";
    document.getElementById("reviewAge").textContent = bookingData.age || "N/A";
    document.getElementById("reviewEmail").textContent = bookingData.email || "N/A";
    document.getElementById("reviewPhone").textContent = bookingData.phone || "N/A";
}
document.getElementById("confirmBooking").addEventListener("click", () => {
    if(!bookingData.service || !bookingData.date || !bookingData.time || !bookingData.fullName || !bookingData.age || !bookingData.email || !bookingData.phone) {
        alert("Please fill in all fields.");
        return;
    }
    alert("FrontEnd pa sana yadi di pa naga gana!");
});