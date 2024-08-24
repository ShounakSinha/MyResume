// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default jump

            const targetId = this.getAttribute('href'); // Get the #id to scroll to
            const targetElement = document.querySelector(targetId);

            // Use smooth scrolling
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Form Submission Handling (You'll need a backend for this)
const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // 1. Get form data:
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 2. Basic validation (you can add more robust checks):
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields!');
        return;
    }

    // 3. Prepare data for backend (e.g., send to server using AJAX)
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // 4. Example AJAX request (you'll need a server-side script)
    fetch('/your-backend-endpoint', { // Replace with your actual endpoint
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        // 5. Handle response (e.g., display success/error message)
        if (response.ok) {
            alert('Message sent successfully!');
            contactForm.reset(); // Clear the form
        } else {
            alert('There was an error sending your message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message.');
    });
});

// ... (previous JavaScript code remains unchanged) ...

// Skills Section Animation
document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, { threshold: 0.5 });

    skillItems.forEach(item => {
        observer.observe(item);
    });
});

// Skill hover effect
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#FFD700';
        item.querySelector('.skill-icon').style.backgroundColor = '#0c0c0c';
        item.querySelector('.skill-icon i').style.color = '#FFD700';
        item.querySelector('h3').style.color = '#0c0c0c';
    });

    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '#1a1a1a';
        item.querySelector('.skill-icon').style.backgroundColor = '#FFD700';
        item.querySelector('.skill-icon i').style.color = '#0c0c0c';
        item.querySelector('h3').style.color = '#FFD700';
    });
});

