
const baseUrl = "http://localhost:1337"

//load home data
document.addEventListener('DOMContentLoaded', function() {
    // API endpoint URL
    const apiUrl = 'http://localhost:1337/api/homes?populate=mainlogo&populate=backgroundimages';

    // Make the API call using fetch
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Handle the API response data
            console.log('API Response:', data.data[0].attributes.mainlogo.data.attributes.url);
            updateHtml(data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error fetching data:', error);
        });
});

// Function to update HTML content with the image URL
function updateHtml(data) {
    const imageContainer = document.getElementById('imageContainer');

    // Set the image source attribute with the retrieved URL
    imageContainer.src = baseUrl + data.data[0].attributes.mainlogo.data.attributes.url;
}