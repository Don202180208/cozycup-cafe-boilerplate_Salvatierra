document.addEventListener("DOMContentLoaded", function () {
    const coffeeData = [
        { name: "Espresso", description: "Strong and concentrated coffee", price: "₱140", img: "images/espresso.jpg" },
        { name: "Latte", description: "Coffee with steamed milk", price: "₱168", img: "images/latte.jpg" },
        { name: "Cappuccino", description: "Coffee with equal parts of steamed milk and foam", price: "₱196", img: "images/cappuccino.jpg" },
        { name: "Americano", description: "Espresso shot diluted with hot water", price: "₱112", img: "images/americano.jpg" },
        { name: "Macchiato", description: "Espresso with a small amount of foamed milk", price: "₱157", img: "images/macchiato.jpg" },
        { name: "Mocha", description: "Espresso with steamed milk and chocolate", price: "₱196", img: "images/mocha.jpg" },
        { name: "Flat White", description: "Espresso with steamed milk", price: "₱168", img: "images/flatwhite.jpg" },
        { name: "Iced Coffee", description: "Cold coffee with ice", price: "₱140", img: "images/icedcoffee.jpg" },
        { name: "Frappuccino", description: "Blended coffee drink with ice and other ingredients such as whipped cream and syrup", price: "₱224", img: "images/frappuccino.jpg" },
        { name: "Affogato", description: "Espresso poured over a scoop of vanilla ice cream", price: "₱196", img: "images/affogato.jpg" }
    ];
    
    const pastryData = [
        { name: "Pain au Chocolat", description: "Chocolate-filled pastry", price: "₱154", img: "images/pain_au_chocolat.jpg" },
        { name: "Tarte Tatin", description: "Upside-down caramelized apple tart", price: "₱196", img: "images/tarte_tatin.jpg" },
        { name: "Mille-feuille", description: "Layered puff pastry and cream pastry", price: "₱224", img: "images/mille_feuille.jpg" },
        { name: "Madeleine", description: "Small shell-shaped sponge cakes", price: "₱56", img: "images/madeleine.jpg" },
        { name: "Opera Cake", description: "Almond sponge cake soaked in coffee syrup", price: "₱252", img: "images/opera_cake.jpg" },
        { name: "Petit Four", description: "Small bite-sized confectionery or savoury appetizer", price: "₱28", img: "images/petit_four.jpg" },
        { name: "Canele", description: "Small French pastry flavored with rum and vanilla", price: "₱112", img: "images/canele.jpg" },
        { name: "Palmier", description: "Butterfly-shaped puff pastry", price: "₱126", img: "images/palmier.jpg" },
        { name: "Profiterole", description: "Choux pastry ball filled with whipped cream", price: "₱98", img: "images/profiterole.jpg" },
        { name: "Tarte au Citron", description: "Tart with lemon filling", price: "₱182", img: "images/tarte_au_citron.jpg" }
    ];
    

    function createMenuItems(menuData, menuOptionsId) {
        const menu = document.getElementById(menuOptionsId);

        menuData.forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.className = "menu-item";
            menuItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p class="description">${item.description}</p>
                <p class="price">${item.price}</p>
            `;
            menu.appendChild(menuItem);
        });
    }

    createMenuItems(coffeeData, "coffee-options");
    createMenuItems(pastryData, "pastry-options");
});



document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Subscribed to the newsletter!");
});
