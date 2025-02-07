function btn() {
    // Clear previous error messages
    document.getElementById('name1').innerHTML = '';
    document.getElementById('name2').innerHTML = '';
    document.getElementById('name3').innerHTML = '';
    document.getElementById('name4').innerHTML = '';
    document.getElementById('god').innerHTML = '';

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Validate fields
    var isValid = true;

    // Validate Name
    if (name.trim() === "") {
        document.getElementById('name1').innerHTML = "Name is required!";
        isValid = false;
    }

    // Validate Email
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.trim() === "") {
        document.getElementById('name2').innerHTML = "Email is required!";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('name2').innerHTML = "Please enter a valid email address!";
        isValid = false;
    }

    // Validate Subject
    if (subject.trim() === "") {
        document.getElementById('name3').innerHTML = "Subject is required!";
        isValid = false;
    }

    // Validate Message
    if (message.trim() === "") {
        document.getElementById('name4').innerHTML = "Message is required!";
        isValid = false;
    }

    // If form is valid
    if (isValid) {
        document.getElementById('god').innerHTML = "Form submitted successfully!";
    } else {
        document.getElementById('god').innerHTML = "";
    }
}


// counter
const counters = document.querySelectorAll('.counter h2');
counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target') // Get target value
        const current = +counter.innerText; // Current value
        const increment = target / 50 // Adjust speed here
        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 200); // Update every 10ms
            // } else {
            // counter.innerText = target; // Ensure the final value matches the target
        }
    };
    updateCounter();
});
// slider testimomials
// text Animation header
new Typed('.typed', {
    strings: [" Web Developer", " Wordpress Developer", " Web Designer", " Freelancer"],
    typeSpeed: 100,       // Speed of typing
    backSpeed: 50,       // Speed of deleting
    loop: true,          // Loop the animation
    backDelay: 1000,     // Delay before deleting
});
//   close
















