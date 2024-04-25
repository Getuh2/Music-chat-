document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for anchor links
    // Previous JavaScript code for smooth scrolling

    // Adding event listener for post submission
    document.getElementById('submit-post').addEventListener('click', () => {
        const caption = document.getElementById('post-caption').value;
        const image = document.getElementById('post-image').files[0];
        
        // Basic validation
        if (caption.trim() === '' && !image) {
            alert('Please enter a caption or select an image.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const postsContainer = document.getElementById('feed-posts');
            const newPost = document.createElement('div');
            newPost.className = 'feed-post';
            newPost.innerHTML = `
                <p>${caption}</p>
                ${image ? `<img src="${e.target.result}" alt="User post" />` : ''}
                <!-- Add comment section here -->
            `;
            postsContainer.prepend(newPost); // Add the new post to the top of the feed

            // Clear the input fields
            document.getElementById('post-caption').value = '';
            document.getElementById('post-image').value = '';
        };

        if (image) {
            reader.readAsDataURL(image); // This will trigger `reader.onload`
        } else {
            reader.onload({ target: { result: null } }); // Directly trigger if no image
        }
    });
});

