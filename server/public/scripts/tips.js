//tips.js contains all the javascript code to add elements to the <main> </main element
// Function to render tips on the homepage
const renderTips = async () => {
    try {
        // Fetch the tip data from the /tips endpoint
        const response = await fetch('/tips');
        const data = await response.json();

        // Point to the element with the ID 'main-content'
        const mainContent = document.getElementById('main-content');

        // Check if there is data
        if (data && data.length > 0) {
            // Loop through the data to create cards for each tip
            data.map(tip => {
                // Create a card div
                const card = document.createElement('div');
                card.className = 'card';

                // Create the top-container div and set the background logo to the tip's image
                const topContainer = document.createElement('div');
                topContainer.className = 'top-container';
                topContainer.style.backgroundImage = `url(${tip.image})`;

                // Create the bottom-container div
                const bottomContainer = document.createElement('div');
                bottomContainer.className = 'bottom-container';

                // Create an h3 element for the tip title
                const tipTitle = document.createElement('h3');
                tipTitle.textContent = tip.title;

                // Create another p element for the tip category
                const tipCategory = document.createElement('p');
                tipCategory.textContent = `Category: ${tip.category}`;

                // Create another p element for the tip text
                const tipText = document.createElement('p');
                tipText.textContent = `${tip.text}`;

                // Create a p element for the tip author 
                const tipsubmittedBy = document.createElement('p');
                tipsubmittedBy.textContent = `Submitted By: ${tip.submittedBy}`;

                // Create an a element for the "Read More" button
                const readMore = document.createElement('a');
                readMore.textContent = 'Read More >';
                readMore.href = `/tips/${tip.id}`;
                readMore.role = 'button';

                // Append the elements to the bottom-container
                bottomContainer.appendChild(tipTitle);
                bottomContainer.appendChild(tipText);   
                bottomContainer.appendChild(tipCategory); 
                bottomContainer.appendChild(tipsubmittedBy);
                bottomContainer.appendChild(readMore);

                // Append top and bottom containers to the card
                card.appendChild(topContainer);
                card.appendChild(bottomContainer);

                // Append the card to the mainContent
                mainContent.appendChild(card);
            });
        } else {
            // If no data is available, display a message
            const noTipsMessage = document.createElement('h2');
            noTipsMessage.textContent = 'No Tips Available 😞';
            mainContent.appendChild(noTipsMessage);
        }
    } catch (error) {
        console.error('Error fetching tips:', error);
    }
};


// Check the current URL and decide what to render
const requestedUrl = window.location.pathname.split('/').pop();

// If the requested URL is not the homepage (i.e., 'index.html'), redirect to the 404 page
if (requestedUrl && requestedUrl !== 'index.html' && requestedUrl !== '') {
    window.location.href = '../404.html';
} else {
    // If on the homepage, render the tips
    renderTips();
}
