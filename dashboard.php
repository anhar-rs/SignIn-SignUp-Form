<?php


?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/x-icon" href="./images/favicon-32x32.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>product preview card component</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" rel="stylesheet">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./style.css">
</head>

<body>
  <main class="bg-cream">
    <div class="card bg-white">
      <div class="image">
        <picture>
          <source media="(min-width:40rem)" srcset="./images/image-product-desktop.jpg">
          <source media="(min-width:465px)" srcset="./images/image-product-mobile.jpg">
          <img src="./images/image-product-mobile.jpg" alt="Flowers" style="width:auto;">
        </picture>
      </div>
      <div class="desc">
        <p class="uppercase mono-space text-grayish-blue fs-tiny mb-500">perfume </p>
        <h1 class="primary-heading text-very-dark-blue mb-300">Gabrielle Essence Eau De Parfum</h1>
        <p class="text-grayish-blue mb-900 paragraph">
          A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of
          CHANEL.
        </p>
        <div class="price mb-800">
          <span class="primary-heading text-cyan">$149.99</span>
          <span class="text-grayish-blue line-through">$169.99</span>
        </div>
        <button class="button text-white ">
          <img src="./images/icon-cart.svg" alt="cart icon">
          Add to Cart
        </button>
      </div>
    </div>
  </main>
</body>

</html>