// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbarList = document.querySelector('.navbar-list');

if (menuToggle && navbarList) {
    menuToggle.addEventListener('click', () => {
        navbarList.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    const navLinks = navbarList.querySelectorAll('li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarList.classList.remove('active');
        });
    });
}

// Petition form handling
const petitionForm = document.getElementById('petition-form');
const signatureList = document.getElementById('signature-list');
const signatureCount = document.getElementById('signature-count');
let totalSignatures = 0;

if (petitionForm) {
    petitionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const cityInput = document.getElementById('city');

        let isValid = true;

        // Validate inputs
        isValid = validateInput(nameInput) && isValid;
        isValid = validateEmail(emailInput) && isValid;
        isValid = validateInput(cityInput) && isValid;

        // Add valid signature to the list
        if (isValid && signatureList) {
            const listItem = document.createElement('li');
            listItem.textContent = `${nameInput.value} - ${cityInput.value}`;
            signatureList.appendChild(listItem);

            // Update signature count
            if (signatureCount) {
                totalSignatures++;
                signatureCount.textContent = totalSignatures;
            }

            // Clear form fields
            petitionForm.reset();
        }
    });
}

function validateInput(input) {
    if (input.value.trim() === '') {
        setInvalid(input);
        return false;
    } else {
        setValid(input);
        return true;
    }
}

function validateEmail(input) {
    if (!isValidEmail(input.value)) {
        setInvalid(input);
        return false;
    } else {
        setValid(input);
        return true;
    }
}

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

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Add your contact form submission logic here
        console.log('Contact form submitted');
    });
}

// Mode toggle
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

if (modeToggle && body) {
    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        updateModeToggle();
    });

    function updateModeToggle() {
        const isDarkMode = body.classList.contains('dark-mode');
        const icon = modeToggle.querySelector('i');
        const text = modeToggle.querySelector('span');

        if (icon && text) {
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
    }

    // Initialize the toggle button state
    updateModeToggle();
}
