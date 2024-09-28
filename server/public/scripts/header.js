//Header.js contains all the javascript code to add elements to the <header> </header> element

// Select the header tag
const header = document.querySelector('header');

// Create header container
const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

// Create header-left div
const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

// Create and append logo
const logo = document.createElement('img');
logo.src = '/logo.png';
logo.alt = 'IdeasPath Logo';
headerLeft.appendChild(logo);

// Create and append title
const title = document.createElement('h1');
title.textContent = 'IdeasPath';
headerLeft.appendChild(title);

// Create header-right div
const headerRight = document.createElement('div');
headerRight.className = 'header-right';

// Create and append home button
const homeButton = document.createElement('button');
homeButton.textContent = 'Home';
homeButton.addEventListener('click', function handleClick() {
  window.location = '/';
});

headerRight.appendChild(homeButton);

// Append left and right header divs to header container
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

// Append header container to header tag
header.appendChild(headerContainer);
