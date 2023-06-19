// Sample data for demonstration purposes
const initialPlaylist = ['Song 1', 'Song 2', 'Song 3'];
const initialSuggestions = ['Suggestion 1', 'Suggestion 2', 'Suggestion 3'];

// Function to generate the DJ's playlist
function generatePlaylist() {
    const playlistElement = document.getElementById('playlist');
    playlistElement.innerHTML = '';

    initialPlaylist.forEach(song => {
        const li = document.createElement('li');
        li.textContent = song;
        playlistElement.appendChild(li);
    });
}

// Function to generate the listener suggestions
function generateSuggestions() {
    const suggestionElement = document.getElementById('suggestions');
    suggestionElement.innerHTML = '';

    initialSuggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        suggestionElement.appendChild(li);
    });
}

// Event listener for submitting the listener suggestion
document.getElementById('suggestionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const songInput = document.getElementById('songInput');
    const suggestion = songInput.value;
    songInput.value = '';

    const li = document.createElement('li');
    li.textContent = suggestion;

    const suggestionElement = document.getElementById('suggestions');
    suggestionElement.appendChild(li);
});



// Generate the initial playlist and suggestions
generatePlaylist();
generateSuggestions();
document.getElementById("partyForm").addEventListener("submit", function(event) {
    event.preventDefault();
  


    // Get form values
    var partyName = document.getElementById("partyName").value;
    var partyAddress = document.getElementById("partyAddress").value;
    var partyDateTime = document.getElementById("partyDateTime").value;
  
    // Create object to store party details
    var partyDetails = {
      name: partyName,
      address: partyAddress,
      dateTime: partyDateTime
    };
  
    // Convert object to JSON string
    var partyDetailsJSON = JSON.stringify(partyDetails);
  
    // Store party details in localStorage
    localStorage.setItem("partyDetails", partyDetailsJSON);
  
    // Submit the form
    event.target.submit();
  });
  

  window.addEventListener("DOMContentLoaded", function() {
    
    // Retrieve party details from localStorage
    var partyDetailsJSON = localStorage.getItem("partyDetails");
    var partyDetails = JSON.parse(partyDetailsJSON);
  
    // Display party details on the page find party
    var partyDetailsContainer = document.getElementById("partyDetailsContainer");
    partyDetailsContainer.innerHTML =
      "<p><strong>Party Name:</strong> " + partyDetails.name + "</p>" +
      "<p><strong>Party Address:</strong> " + partyDetails.address + "</p>" +
      "<p><strong>Party Date and Time:</strong> " + partyDetails.dateTime + "</p>";
  
    // Clear the party details from localStorage
    localStorage.removeItem("partyDetails");
  });
  