// Get the menu container element
const menuContainer = document.getElementById('menu-container');

// Define the initial menu data
let menuData = [
  { name: 'Grilled Chicken Burger', price: 12.99 },
  { name: 'Veggie Delight', price: 10.99 },
  { name: 'Coca-Cola', price: 2.99 },
  { name: 'Fresh Lemonade', price: 3.99 }
];

// Load the menu data from local storage if available
if (localStorage.getItem('menuData')) {
  menuData = JSON.parse(localStorage.getItem('menuData'));
}

// Function to render the menu
function renderMenu() {
  // Clear the menu container
  menuContainer.innerHTML = '';

  // Loop through the menu data and create menu items
  menuData.forEach((menuItem) => {
    const menuItemElement = document.createElement('div');
    menuItemElement.classList.add('menu-item');

    const menuItemNameElement = document.createElement('span');
    menuItemNameElement.classList.add('menu-item-name');
    menuItemNameElement.textContent = menuItem.name;

    const menuItemPriceElement = document.createElement('span');
    menuItemPriceElement.classList.add('menu-item-price');
    menuItemPriceElement.textContent = `$${menuItem.price.toFixed(2)}`;

    menuItemElement.appendChild(menuItemNameElement);
    menuItemElement.appendChild(menuItemPriceElement);

    menuContainer.appendChild(menuItemElement);
  });
}

// Render the menu initially
renderMenu();