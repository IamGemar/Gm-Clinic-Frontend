flatpickr("#calendar",{
    inline: true,
    minDate: "today",
    dateFormat: "Y-m-d",
    disable: [
        function(date) {
            return (date.getDay() === 0);
        }
    ]
})