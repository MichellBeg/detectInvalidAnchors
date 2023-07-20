window.onload = function () {
    console.log('Running detectInvalidAnchors()');

    // Get all <a> elements in the current web page
    var links = document.getElementsByTagName('a');

    // Iterate over all <a> elements
    for (var i = 0; i < links.length; i++) {
        var link = links[i];

        // If href is not set or is empty
        if (!link.hasAttribute('href') || link.getAttribute('href').trim() === '') {
            console.log('Found <a> without href or with empty href: ', link);

            // Addclass that highlight content to the <a> element
            link.classList.add('invalid-href');
        }
    }

    console.log('detectInvalidAnchors() finished');
};