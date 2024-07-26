document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".animated-link");

    links.forEach(link => {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        const loader = document.createElement('div');
        loader.className = 'loader';
        overlay.appendChild(loader);
        link.appendChild(overlay);

        link.addEventListener("click", function(event) {
            event.preventDefault();
            link.classList.add("clicked");

            setTimeout(function() {
                link.classList.remove("clicked");
                link.classList.add("loading");

                setTimeout(function() {
                    window.location.href = link.href;
                }, 1000);
            }, 800);
        });
    });
});