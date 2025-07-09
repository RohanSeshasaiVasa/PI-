function showProductLink(link) {
        alert("Product link: " + link);
        const displayDiv = document.getElementById('product-link-display');
        displayDiv.innerHTML = `Product link: type yourself`;
}

function toggleBackground() {
    document.body.classList.toggle('dark-bg');
}