window.addEventListener('load', () => {
    // Get all <a> elements in the current web page
    let links = document.querySelectorAll('a');

    // Output start message
    console.log('Found <a> without href or with empty href');
    console.log('========== START ==========');

    // Iterate over all <a> elements
    links.forEach(link => {
        // If href is not set or is empty
        if (!link.hasAttribute('href') || link.getAttribute('href').trim() === '') {
            console.log(link);

            // Addclass that highlight content to the <a> element
            link.classList.add('invalid-href');
        }
    });

    // Output end message
    console.log('=========== END ===========');
});