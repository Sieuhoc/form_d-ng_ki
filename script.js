// =====================
// Countdown Timer
// =====================
// Đặt ngày kết thúc sự kiện ở đây (Năm, Tháng - 1, Ngày)
// Adjust countdown timer to 3 days from now
// =====================
// Countdown Timer
// =====================
// Thời gian kết thúc sự kiện: 23h59p59s ngày 31/10/2025
const countDownDate = new Date("2025-10-31T23:59:59").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Cập nhật đồng hồ
    document.getElementById("days").innerText = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;

    // Cập nhật dòng "Còn XX ngày nữa"
    if (document.getElementById("days-left")) {
        document.getElementById("days-left").innerText = 
            distance > 0 ? `Còn ${days} ngày nữa` : "Đã hết hạn!";
    }

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".countdown-timer").innerHTML = "<h4>Đã hết hạn!</h4>";
    }
}, 1000);


// =====================
// Form Submit + Popup
// =====================
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formspree-register-form");
    const thankyouPopup = document.getElementById("thankyou-popup");

    if (form) {
        form.addEventListener("submit", async function(e) {
            e.preventDefault(); // chặn reload + redirect mặc định

            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: "POST",
                    body: formData,
                    headers: { "Accept": "application/json" }
                });

                if (response.ok) {
                    // Hiện popup cảm ơn
                    thankyouPopup.style.display = "flex";
                    form.reset();
                } else {
                    alert("Có lỗi xảy ra, vui lòng thử lại!");
                }
            } catch (error) {
                alert("Không thể kết nối máy chủ, vui lòng thử lại!");
            }
        });
    }
});
