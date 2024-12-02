const tutorials = [
    {
        title: "JavaScript Basics",
        intro: "Introduction to JavaScript, the language of the web.",
        details: [
            { heading: "What is it:", description: "The behavior of a website. It allows for a website to be interactive." },
            { 
                heading: "What can you do with it:",
                list: [
                    "Respond to user actions",
                    "Validate form inputs",
                    "Create dynamic content"
                ]
            }
        ]
    },
    {
        title: "CSS Basics",
        intro: "Learn how to style your websites with CSS.",
        details: [
            { heading: "What is it:", description: "Style your pages using CSS. For example, the header above with links can be customized using CSS." },
            { 
                heading: "What can you do with it:",
                list: [
                    "Apply colors, fonts, spacing, and layouts",
                    "Make a website responsive",
                    "Add animations and transitions for visual effects"
                ]
            }
        ]
    },
    {
        title: "HTML Basics",
        intro: "Understand the structure of web pages using HTML.",
        details: [
            { heading: "What is it:", description: "The structure of a webpage, like headings, paragraphs, images, links, etc." },
            { 
                heading: "What can you do with it:",
                list: [
                    "Make websites",
                    "Create headings, paragraphs, links, etc.",
                    "Organize elements into a hierarchy"
                ]
            }
        ]
    }
];

function loadTutorials() {
    const container = document.getElementById("tutorials-container");

    tutorials.forEach((tutorial) => {
        const section = document.createElement("section");

        const title = document.createElement("h2");
        title.textContent = tutorial.title;
        section.appendChild(title);

        const intro = document.createElement("p");
        intro.textContent = tutorial.intro;
        section.appendChild(intro);

        tutorial.details.forEach((detail) => {
            const detailHeading = document.createElement("p");
            detailHeading.innerHTML = `<strong>${detail.heading}</strong> ${detail.description || ''}`;
            section.appendChild(detailHeading);

            if (detail.list) {
                const list = document.createElement("ul");
                detail.list.forEach((item) => {
                    const listItem = document.createElement("li");
                    listItem.textContent = item;
                    list.appendChild(listItem);
                });
                section.appendChild(list);
            }
        });

        container.appendChild(section);
    });
}

document.addEventListener("DOMContentLoaded", loadTutorials);
