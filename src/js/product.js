function showProducts(brand) {
  // Hide all product containers
  document
    .querySelectorAll("div[id]")
    .forEach((el) => el.classList.add("hidden"));

  // Show the selected brand's products
  document.getElementById(brand).classList.remove("hidden");
}

// Show default brand (NPP) on page load
document.addEventListener("DOMContentLoaded", () => {
  showProducts("npp");
});