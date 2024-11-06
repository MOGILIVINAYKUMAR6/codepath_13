// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbarList = document.querySelector('.navbar-list');

menuToggle.addEventListener('click', () => {
    navbarList.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.navbar-list li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarList.classList.remove('active');
    });
});

// Petition form handling
const petitionForm = document.getElementById('petition-form');
const signatureList = document.getElementById('signature-list');

if (petitionForm) {
    petitionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        let isValid = true;

        // Simple validation checks for name and email
        if (nameInput.value.trim() === '') {
            nameInput.classList.add('invalid');
            isValid = false;
        } else {
            nameInput.classList.remove('invalid');
        }

        if (!emailInput.value.includes('@')) {
            emailInput.classList.add('invalid');
            isValid = false;
        } else {
            emailInput.classList.remove('invalid');
        }

        // Add valid signatures to the list
        if (isValid && signatureList) {
            const listItem = document.createElement('li');
            listItem.textContent = `${nameInput.value} - ${emailInput.value}`;
            signatureList.appendChild(listItem);

            // Clear form fields
            nameInput.value = '';
            emailInput.value = '';
        }
    });
}

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Add your contact form submission logic here
        console.log('Contact form submitted');
    });
}
// Add this to your existing script.js file

const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    updateModeToggle();
});

function updateModeToggle() {
    const isDarkMode = body.classList.contains('dark-mode');
    const icon = modeToggle.querySelector('i');
    const text = modeToggle.querySelector('span');

    if (isDarkMode) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        text.textContent = 'Dark Mode';
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        text.textContent = 'Light Mode';
    }
}

// Initialize the toggle button state
updateModeToggle();

// Add this to your existing script.js file

const petitionForm = document.getElementById('petition-form');
const signatureList = document.getElementById('signature-list');
const signatureCount = document.getElementById('signature-count');
let totalSignatures = 0;

petitionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const cityInput = document.getElementById('city');

    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === '') {
        setInvalid(nameInput);
        isValid = false;
    } else {
        setValid(nameInput);
    }

    // Validate email
    if (!isValidEmail(emailInput.value)) {
        setInvalid(emailInput);
        isValid = false;
    } else {
        setValid(emailInput);
    }

    // Validate city
    if (cityInput.value.trim() === '') {
        setInvalid(cityInput);
        isValid = false;
    } else {
        setValid(cityInput);
    }

    // Add valid signature to the list
    if (isValid) {
        const listItem = document.createElement('li');
        listItem.textContent = `${nameInput.value} - ${cityInput.value}`;
        signatureList.appendChild(listItem);

        // Update signature count
        totalSignatures++;
        signatureCount.textContent = totalSignatures;

        // Clear form fields
        petitionForm.reset();
    }
});

function setInvalid(input) {
    input.parentElement.classList.add('invalid');
}

function setValid(input) {
    input.parentElement.classList.remove('invalid');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}