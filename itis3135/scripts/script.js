
function loadNavigation(jsonFile, containerId, separator) {
    fetch(jsonFile)
        .then((response) => response.json())
        .then((data) => {
            const navContainer = document.getElementById(containerId);
            data.forEach((item, index) => {
                const navLink = document.createElement("a");
                navLink.href = item.url;
                navLink.textContent = item.name;

                if (index > 0) {
                    navContainer.append(separator);
                }
                navContainer.appendChild(navLink);
            });
        })
        .catch((error) => console.error(`Error loading ${jsonFile}:`, error));
    }

    function loadFooterText() {
        const footerText = document.getElementById("footer-text");
        footerText.innerHTML = `
            Page Built by,
            <a href="https://www.freecodecamp.org/certification/Shelton_Latham/javascript-algorithms-and-data-structures-v8">
                Certified in JS
            </a>
            <a href="../sheltonllc.co/index.html">Silly Lizard Enterprises</a> &copy; 2024
            <a href="../about.html"><i>"Get a Grip, Dominate the Game"<i></a>
        `;
    }

document.addEventListener("DOMContentLoaded", function() {
    loadNavigation("../components/nav_main.json", "header-nav", " || ");
    loadNavigation("../components/nav_footer.json", "footer-nav", " | ");
    loadFooterText();

});

function validateHTML() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
}

function validateCSS() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all`, "_blank");
}

function validateAIM() {
    window.open("https://webaim.org/search/?q=afsd", "_blank");
}
