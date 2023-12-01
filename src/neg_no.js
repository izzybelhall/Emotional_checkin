fetch("../quotes.json")
  .then((response) => response.json())
  .then((data) => {
    // Select a random quote from the data
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];

    // Display the random quote and author in HTML
    document.getElementById("quote").textContent = `"${randomQuote.quote}"`;
    document.getElementById("author").textContent = `- ${randomQuote.author}`;
  })
  .catch((error) => console.error("Error fetching data:", error));
