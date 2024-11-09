document.getElementById("searchButton").addEventListener("click", function() {
    const query = document.getElementById("search").value.trim(); // Get user input and trim whitespace
    const url = `superheroes.php?query=${encodeURIComponent(query)}`; // Encode the query for the URL

    fetch(url)
        .then(response => response.text()) // Expect text format as PHP outputs HTML
        .then(data => {
            document.getElementById("result").innerHTML = data; // Display the data in the result div
        })
        .catch(error => {
            console.error("Error fetching superheroes:", error);
            document.getElementById("result").innerHTML = "An error occurred while searching.";
        });
});
