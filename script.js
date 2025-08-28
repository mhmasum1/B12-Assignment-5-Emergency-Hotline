// Heart Count 

let heartCount = 0;
const heartCounts = document.getElementById("heartCount");
const heartIcons = document.querySelectorAll(".heart-icon");

for (const findIcon of heartIcons) {
    findIcon.addEventListener("click", function (e) {
        e.stopPropagation();
        heartCount = heartCount + 1;
        heartCounts.innerText = heartCount;


    });
}

// Call Buttons

let availableCoins = 100;
const coins = document.getElementById("available-coins");
const calls = document.querySelectorAll("#call-button")
for (const call of calls) {
    call.addEventListener('click', function (e) {
        e.stopPropagation();
        alert("Calling")

    });
}
