// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};

document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    
    stars.forEach(star => {
      star.addEventListener('click', function() {
        const rating = this.getAttribute('data-rating');
        setRating(rating);
      });
    });

    function setRating(rating) {
      stars.forEach(star => {
        if (star.getAttribute('data-rating') <= rating) {
          star.classList.add('star-full');
        } else {
          star.classList.remove('star-full');
        }
      });
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
  // Initialize cart count
  let cartCount = 0;

  // Update cart notification
  const updateCartNotification = () => {
    const cartNotification = document.getElementById('cart-notification');
    cartNotification.textContent = cartCount;
  };

  // Add to cart button click event
  const addToCartButtons = document.querySelectorAll('.product-icons a:first-child');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      cartCount++;
      updateCartNotification();
    });
  });

  // Initialize feather icons
  feather.replace();
});
document.addEventListener('DOMContentLoaded', () => {
  // Initialize cart count
  let cartCount = 0;

  // Update cart notification
  const updateCartNotification = () => {
    const cartNotification = document.getElementById('cart-notification');
    cartNotification.textContent = cartCount;
  };

  // Add to cart button click event
  const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      cartCount++;
      updateCartNotification();
    });
  });

  // Initialize feather icons
  feather.replace();
});
document.addEventListener('DOMContentLoaded', () => {
  // Initialize feather icons
  feather.replace();

  // Add to cart button click event
  const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const productId = button.getAttribute('data-product-id');

      // Send AJAX request to PHP backend
      fetch('add_to_cart.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productId: productId })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Update cart notification
          const cartNotification = document.getElementById('cart-notification');
          cartNotification.textContent = data.cartCount;
        }
      })
      .catch(error => console.error('Error:', error));
    });
  });
});
