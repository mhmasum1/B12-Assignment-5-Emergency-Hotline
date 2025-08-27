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