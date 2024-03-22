document.addEventListener('DOMContentLoaded', function () {
    fetch('/.netlify/functions/getUsers')
        .then(response => response.json())
        .then(users => {
            const usersContainer = document.getElementById('users');
            const userList = users.map(user => `<li>${user.username} - ${user.email}, Signed up on: ${user.signup_date}</li>`).join('');
            usersContainer.innerHTML = `<ul>${userList}</ul>`;
        })
        .catch(error => console.error('Error fetching users:', error));

    fetch('/.netlify/functions/getProducts')
        .then(response => response.json())
        .then(products => {
            const productsContainer = document.getElementById('products');
            const productList = products.map(product => `<li>${product.product_name} - ${product.product_price}, Category: ${product.category}</li>`).join('');
            productsContainer.innerHTML = `<ul>${productList}</ul>`;
            // Display products data similarly to users
        })
        .catch(error => console.error('Error fetching products:', error));

    fetch('/.netlify/functions/getOrders')
        .then(response => response.json())
        .then(orders => {
            const ordersContainer = document.getElementById('orders');
            // Display orders data similarly to users
        })
        .catch(error => console.error('Error fetching orders:', error));
});