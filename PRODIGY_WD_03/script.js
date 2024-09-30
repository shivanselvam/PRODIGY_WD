let totalCost = 0;
let orderItems = [];

function addToCart(cost, itemName) {
    totalCost += cost;
    orderItems.push(itemName);
    
    // Update order details and total amount
    document.getElementById("total-amount").innerText = `$${totalCost.toFixed(2)}`;
    document.getElementById("order-details").innerText = `Items ordered: ${orderItems.join(', ')}`;
}

function buyNow() {
    if (orderItems.length === 0) {
        alert("No items in the cart to buy.");
        return;
    }
    
    // Open a new tab with order success message
    let newWindow = window.open("", "_blank");
    newWindow.document.write(`
        <html>
        <head>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: white;
                    border: 20px solid green;
                    text-align: center;
                    font-family: Arial, sans-serif;
                }
                .container {
                    padding: 20px;
                }
                .tick {
                    font-size: 100px;
                    color: green;
                }
                h1 {
                    color: green;
                }
                p {
                    font-size: 18px;
                    color: black;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="tick">&#10004;</div>
                <h1>Ordered Successfully!</h1>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Items: ${orderItems.join(', ')}</p>
            </div>
        </body>
        </html>
    `);
}
