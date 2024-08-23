document.addEventListener("DOMContentLoaded", () => {
    const networkErrorDiv = document.getElementById("networkError");

    // Show error message
    const showError = (message) => {
        networkErrorDiv.textContent = message;
        networkErrorDiv.style.display = "block";
    };

    // Hide error message
    const hideError = () => {
        networkErrorDiv.style.display = "none";
    };

    // Detect when the user goes offline
    window.addEventListener("offline", () => {
        showError("You're currently offline. Please check your internet connection.");
    });

    // Detect when the user comes back online
    window.addEventListener("online", hideError);

    // Handle resource loading errors
    window.addEventListener("error", (event) => {
        const isResourceError = event.target.tagName === 'IMG' || event.target.tagName === 'SCRIPT' || event.target.tagName === 'LINK';

        if (isResourceError) {
            showError("We're having trouble loading some resources. Please check your connection.");
        }
    }, true);
});
