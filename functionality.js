function displayProducts(products, container) {
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("productCard");

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
        img.classList.add("productImage");

        const textContainer = document.createElement("div");
        textContainer.classList.add("productCardText");


        const title = document.createElement("h2");
        title.textContent = product.name;
        title.classList.add("productTitle");

        const price = document.createElement("p");
        price.textContent = `${product.price} лв`;
        price.classList.add("productPrice");

        const desc = document.createElement("p");
        desc.textContent = product.description;
        desc.classList.add("productDescription");

        const buttonWrapper = document.createElement("div")
        buttonWrapper.textContent = "";
        buttonWrapper.classList.add("buttonBuyWrapper")

        const button = document.createElement("button");
        button.textContent = "BUY";
        button.classList.add("buttonBuy");


        productDiv.appendChild(img);
        productDiv.appendChild(textContainer);
        textContainer.appendChild(title);
        textContainer.appendChild(price);
        textContainer.appendChild(desc);
        buttonWrapper.appendChild(button);
        productDiv.appendChild(buttonWrapper);


        container.appendChild(productDiv);
    });
}

fetch('array.json')
    .then(response => response.json())
    .then(data => {
        const appleCategory = data.content.find(cat => cat.categoryName === "Apple");
        const appleContainer = document.getElementById("productContainerApple");

        if (appleCategory) {
            const greenApples = appleCategory.products.filter(
                product => product.color.toLowerCase() === "green"
            );
            displayProducts(greenApples, appleContainer);
        }

        const pearCategory = data.content.find(cat => cat.categoryName === "Pear");
        const pearContainer = document.getElementById("productContainerPear");

        if (pearCategory) {
            const yellowPears = pearCategory.products.filter(
                product => product.color.toLowerCase().includes("yellow")
            );
            displayProducts(yellowPears, pearContainer);
        }

        const ballCategory = data.content.find(cat => cat.categoryName === "Ball");
        const ballContainer = document.getElementById("productContainerBall");

        if (ballCategory) {
            const redBalls = ballCategory.products.filter(
                product => product.color.toLowerCase().includes("red")
            );
            displayProducts(redBalls, ballContainer);
        }
    })
    .catch(error => {
        console.error("Error loading product data:", error);
    });
