let sun  = document.getElementById("sun");
let moon= document.getElementById("moon");
document.querySelector('[aria-label="toggle"]').addEventListener('click', function() {
            document.documentElement.classList.toggle('dark');
            moon.classList.add("hidden")
            sun.classList.remove("hidden")
});