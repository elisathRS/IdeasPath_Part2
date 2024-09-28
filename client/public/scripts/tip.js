
// This is for the detail page (to show one tip)
const renderTip = async () => {
    // Parse the ID from the URL
    const requestedID = parseInt(window.location.href.split('/').pop());

    // Fetch the tip data from the /tip endpoint
    const response = await fetch('/tips');
    const data = await response.json();

    // Get the element with ID tip-content
    const tipContent = document.getElementById('tip-content');

    // variable to store the selected tip
    let tip;

    // If data is not null, find the tip by ID
    if (data) {
        tip = data.find(tip => tip.id === requestedID);
    }

    // Conditionally render based on whether tip is found
    if (tip) {
        // Populate tip details
        document.getElementById('image').src = tip.image;
        document.getElementById('title').textContent = tip.title;
        document.getElementById('text').textContent = `${tip.text}`;
        document.getElementById('category').textContent = `Category: ${tip.category}`;
        document.getElementById('submittedBy').textContent = `submitted By: ${tip.submittedBy}`;

        // Set the page title to the tip's title
        document.title = tip.title;
    } else {
        // If no gift is found, display "No Gifts Available"
        const noTiptMessage = document.createElement('h2');
        noTiptMessage.textContent = 'No Tips Available 😞';
        noTiptMessage.appendChild(noTiptMessage);
    }
}

// Call the renderTip function on the gift detail page
renderTip();
