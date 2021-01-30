function flightBookingCounter(quantity, isBooking) {
    const bookingNumber = document.getElementById(quantity + "-count").value;
    const currentBookingNumber = parseInt(bookingNumber);

    let totalBookingNumber = currentBookingNumber;
    if (isBooking == true) {
        totalBookingNumber = currentBookingNumber + 1;
    }
    if (isBooking == false && currentBookingNumber > 0) {
        totalBookingNumber = currentBookingNumber - 1;
    }
    document.getElementById(quantity + "-count").value = totalBookingNumber;

    const bookingAmount = document.getElementById("subtotal-amount").value;
    const currentBookingAmount = parseInt(bookingAmount);
    let totalBookingAmount = 0;
    if (quantity == "ticket") {
        totalBookingAmount = totalBookingNumber * 150;
    }
    if (quantity == "economy") {
        totalBookingAmount = totalBookingNumber * 100;
    }

    subtotal();
}

function subtotal() {
    const totalTicket = getTotal("ticket");
    const totalEconomy = getTotal("economy");

    const totalBookingPrice = totalTicket * 150 + totalEconomy * 100;
    document.getElementById("subtotal-amount").innerText = "$" + totalBookingPrice;

    const tax = document.getElementById("tax-amount").value;
    const taxAmount = parseInt(tax);
    const totalTax = totalBookingPrice * 0.1;
    document.getElementById("tax-amount").innerText = "$" + totalTax;

    const bookingNumber = document.getElementById("total-price").value;
    const currentBookingNumber = parseInt(bookingNumber);
    const totalAmount = totalBookingPrice + totalTax;
    document.getElementById("total-price").innerText = "$" + totalAmount;
}

function getTotal(quantity) {
    const currentTotalCount = document.getElementById(quantity + "-count").value;
    const totalCount = parseInt(currentTotalCount);
    return totalCount;
}

document.getElementById("book-now").addEventListener("click", function () {
    document.getElementById("success-message").style.display = "block";
})