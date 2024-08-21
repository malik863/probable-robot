
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a FormData object from the form
    const formData = new FormData(event.target);

    // Convert FormData to a plain object
    const data = Object.fromEntries(formData.entries());

    // Convert the object to a string
    const dataString = Object.entries(data)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');

    // Create a Blob with the form data string
    const blob = new Blob([dataString], { type: 'text/plain' });

    // Create a link element
    const link = document.createElement('a');

    // Set the download attribute with a filename
    link.download = 'formData.txt';

    // Create an object URL for the Blob and set it as the href of the link
    link.href = URL.createObjectURL(blob);

    // Programmatically click the link to trigger the download
    link.click();

    // Clean up by revoking the object URL
    URL.revokeObjectURL(link.href);
});
