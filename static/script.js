document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.getElementById("card-container");
    const drawButton = document.getElementById("draw-card");

    // Function to draw 3 random cards
    function drawRandomCards() {
        const totalCards = 28;
        const cardsDrawn = [];

        // Clear the card container
        cardContainer.innerHTML = '';

        // Draw 3 unique random cards
        while (cardsDrawn.length < 3) {
            const randomIndex = Math.floor(Math.random() * totalCards) + 1; // Card filenames start from 1
            const cardFilename = `card${randomIndex}.png`;

            // Check if the card is already drawn
            if (!cardsDrawn.includes(cardFilename)) {
                cardsDrawn.push(cardFilename);

                // Create a card element and add it to the container
                const card = document.createElement("div");
                card.classList.add("card");
                const cardImage = document.createElement("img");
                cardImage.src = `static/cards/${cardFilename}`;
                cardImage.alt = cardFilename;
                card.appendChild(cardImage);
                cardContainer.appendChild(card);
            }
        }
    }

    // Event listener for the "Draw a Card" button
    drawButton.addEventListener("click", drawRandomCards);
});



