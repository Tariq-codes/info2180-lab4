document.getElementById("searchButton").addEventListener("click", function() {
    fetch("superheroes.php")
        .then(response => response.text())
        .then(html => {
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = ""; // Clear previous results

            // Create a temporary element to parse the HTML
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = html; 

            // Find the list items in the temporary div
            const heroes = tempDiv.querySelectorAll("li");
            if (heroes.length > 0) {
                heroes.forEach(hero => {
                    const heroElement = document.createElement("p");
                    heroElement.textContent = hero.textContent; 
                    resultDiv.appendChild(heroElement); 
                });
            } 
        })
});
