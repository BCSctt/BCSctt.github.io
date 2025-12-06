// JS objects for the featured pets
const featuredPets = [
    {
        name: "Luna",
        type: "Cat",
        age: "2 years",
        image: "images/cat2.jpg",
        description: "Shy at first but very cuddly once she knows you."
    },
    {
        name: "Buddy",
        type: "Dog",
        age: "3 years",
        image: "images/dog2.jpg",
        description: "Loves walks, toys, and kids!"
    },
    {
        name: "Milo",
        type: "Cat",
        age: "1 year",
        image: "images/cat1.jpg",
        description: "Playful and curious, great for active families."
    }
];

// Building the Featured Friends list from the objects above
function renderFeaturedPets() {
    const list = document.getElementById("featuredPets");
    if (!list) return;

    featuredPets.forEach(pet => {
        const item = document.createElement("li");
        item.className = "featured-pet";

        const img = document.createElement("img");
        img.src = pet.image;
        img.alt = pet.name + " the " + pet.type;

        const info = document.createElement("div");
        info.className = "featured-pet-info";

        const name = document.createElement("h3");
        name.textContent = pet.name;

        const details = document.createElement("p");
        details.className = "small mb-1";
        details.textContent = pet.type + " . " + pet.age;

        const desc = document.createElement("p");
        desc.className = "small mb-0";
        desc.textContent = pet.description;

        info.appendChild(name);
        info.appendChild(details);
        info.appendChild(desc);

        item.appendChild(img);
        item.appendChild(info);

        list.appendChild(item);
    });
}

// sessionStorage to track how many times this page
// has been viewed in the current browser session
function updateVisitCount() {
    const visitElement = document.getElementById("visitCount");
    if (!visitElement) return;

    let visits = sessionStorage.getItem("homeVisits");

    if (visits === null) {
        visits = 0;
    }
    else {
        visits = parseInt(visits, 10) || 0;
    }

    visits += 1;
    sessionStorage.setItem("homeVisits", visits.toString());

    visitElement.textContent = 
        "You have viewed this page " + visits + " time(s) during this session.";       
}

// simple JS to make newsletter form feel more interactive
function handleNewsletterSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById("newsletterName");
    const emailInput = document.getElementById("newsletterEmail");
    const messageElement = document.getElementById("newsletterMessage");

    if (!nameInput || !emailInput || !messageElement) return;

    const name = nameInput.ariaValueMax.trim();

    // store name in sessionStorage just for practice
    if (name) {
        sessionStorage.setItem("newsletterName", name);
    }

    messageElement.textContent = 
        "Thanks" + (name ? ", " + name : "") +
        "! We will email you with upcoming events and new pets!";

    // clearning the form
    event.target.reset();
}

//Contact form on contact.html
function setupContactForm() {
    const contactForm = document.getElementById("contactForm");
    if (!contactForm) return;

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("contactName");
        const emailInput = document.getElementById("contactEmail");
        const reasonInputs = document.querySelectorAll("input[name='contactReason']");
        const messageElement = document.getElementById("contactMessage");

        if (!nameInput || !emailInput || !messageElement) return;

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        let reasonValue = "";
        reasonInputs.forEach(function (radio) {
            if (radio.checked) {
                reasonValue = radio.value;
            }
        });

        // Store some info in sessionStorage just for demo purposes
        if (name) {
            sessionStorage.setItem("contactName", name);
        }
        if (reasonValue) {
            sessionStorage.setItem("contactReason", reasonValue);
        }

        let reasonText = "";
        if (reasonValue === "adopt") {
            reasonText = "adopting a pet";
        } else if (reasonValue === "volunteer") {
            reasonText = "volunteering or fostering";
        } else if (reasonValue === "donate") {
            reasonText = "donations";
        } else if (reasonValue === "other") {
            reasonText = "your question";
        }

        messageElement.textContent =
            "Thank you" + (name ? ", " + name : "") +
            "! We have received your message" +
            (reasonText ? " about " + reasonText : "") +
            (email ? " and will reply to " + email + " soon." : ".");

        contactForm.reset();
    });
}

// run everything when page has loaded
document.addEventListener("DOMContentLoaded", function () {
    renderFeaturedPets();
    updateVisitCount();

    const form = document.getElementById("newsletterForm");
    if (form) {
        form.addEventListener("submit", handleNewsletterSubmit);
    }

    setupContactForm();
});