document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const urlInput = document.getElementById('urlInput').value;
    const shortUrl = generateShortUrl(urlInput);

    // Display the result
    document.getElementById('result').innerHTML = `
        <p>Shortened URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a></p>
    `;
});

// Function to generate a short URL (for demonstration purposes)
function generateShortUrl(originalUrl) {
    const baseUrl = "http://short.url/"; // Replace with your base URL
    const randomString = Math.random().toString(36).substring(2, 8); // Generate a random string
    return baseUrl + randomString;
}
