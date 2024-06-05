<?php
session_start();

// Mock data for product prices (in a real application, you would query the database)
$products = [
  1 => ['name' => 'Coffee Beans 1', 'price' => 30000],
  // Add other products as needed
];

// Initialize cart if not already set
if (!isset($_SESSION['cart'])) {
  $_SESSION['cart'] = [];
}

// Get the product ID from the AJAX request
$data = json_decode(file_get_contents('php://input'), true);
$productId = $data['productId'];

if (isset($products[$productId])) {
  // Add product to cart
  if (isset($_SESSION['cart'][$productId])) {
    $_SESSION['cart'][$productId]['quantity'] += 1;
  } else {
    $_SESSION['cart'][$productId] = [
      'name' => $products[$productId]['name'],
      'price' => $products[$productId]['price'],
      'quantity' => 1
    ];
  }

  // Calculate total cart count
  $cartCount = 0;
  foreach ($_SESSION['cart'] as $item) {
    $cartCount += $item['quantity'];
  }

  // Return response
  echo json_encode(['success' => true, 'cartCount' => $cartCount]);
} else {
  echo json_encode(['success' => false, 'message' => 'Product not found']);
}
?>
