document.addEventListener('DOMContentLoaded', function () {
    fetch('/.netlify/functions/getUsers')
        .then(response => response.json())
        .then(users => {
            const usersContainer = document.getElementById('users');
            const userList = users.map(user =>
               `  <h2>Users</h2>
               <li>Name :${user.username} - Email :${user.email}, 
               Signed up on: ${user.signup_date}</li>`)
            .join('');
            usersContainer.innerHTML = `<ul>${userList}</ul>`;
        })
        .catch(error => console.error('Error fetching users:', error));





    fetch('/.netlify/functions/getProducts')
        .then(response => response.json())
        .then(products => {
            const productsContainer = document.getElementById('products');
            const productList = products.map(product => `
          
                <h2>Products</h2>
                  <li class="product-item">
                    <span class="product-name">${product.product_name}</span>
                    <span class="product-price">$${product.product_price}</span>
                    <span class="product-category">Category: ${product.category}</span>
                  </li>
                `).join('');
            productsContainer.innerHTML = `<ul class="product-list">${productList}</ul>`;
        })
        .catch(error => console.error('Error fetching products:', error));


    fetch('/.netlify/functions/getOrders')
        .then(response => response.json())
        .then(orders => {
            const ordersContainer = document.getElementById('orders');
            const orderList = orders.map(order=> `
            <h2>Orders</h2>
            <li class="order-item">
              <span class="order-id">${order.order_id}</span>
              <span class="username">$${order.username}</span>
              <span class="product-name>: ${order.product_name}</span>
              <span class="quantity>: ${order.quantity}</span>
              <span class="order_date>: ${order.order_date}</span>  
            </li>
          `).join('');
      ordersContainer.innerHTML = `<ul class="order-list">${orderList}</ul>`;
           
        })
        .catch(error => console.error('Error fetching orders:', error));
});