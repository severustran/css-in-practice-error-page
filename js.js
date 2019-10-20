document.addEventListener("DOMContentLoaded", function() {
    let color = ["#FF6600","#FF0000","#880000","#FF9933","#FF3300","#FF3366"];
    let body = document.body;

    setInterval(createStar, 50);

    function createStar() {
        let star = document.createElement("div");
        star.classList.add("star");
        body.appendChild(star);

        let right = Math.floor(Math.random() * 600);
        let top = Math.floor(Math.random() * screen.height);

        star.style.top = top + "px";
        star.style.background = color[Math.floor(Math.random() * 6)];
        
        setInterval(run, 10);

        function run() {
            right += 3;
            star.style.right = right + "px";
        }
        setTimeout(function() {
            star.remove();
        }, 10000);
    }
});