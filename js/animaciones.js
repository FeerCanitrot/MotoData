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

function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    if (content.classList.contains('visible')) {
        content.classList.remove('visible');
    } else {
        document.querySelectorAll('.content').forEach(function(section) {
            section.classList.remove('visible');
        });
        content.classList.add('visible');
    }
}

function toggleExplanation(explanationId) {
    const explanation = document.getElementById(explanationId);
    if (explanation.classList.contains('visible')) {
        explanation.classList.remove('visible');
    } else {
        document.querySelectorAll('.explanation').forEach(function(exp) {
            exp.classList.remove('visible');
        });
        explanation.classList.add('visible');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const concepts = document.querySelectorAll('.concept');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    concepts.forEach(concept => {
        observer.observe(concept);
    });
});
