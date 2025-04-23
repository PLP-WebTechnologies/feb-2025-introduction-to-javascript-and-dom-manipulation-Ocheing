// Change text and style
document.getElementById("change-btn").addEventListener("click", () => {
    const text = document.getElementById("info-text");
    text.textContent = "The text has been changed!";
    text.style.color = "white";
    text.style.backgroundColor = "teal";
    text.style.padding = "10px";
  });
  
  // Add or remove an item
  document.getElementById("toggle-btn").addEventListener("click", () => {
    const list = document.getElementById("item-list");
    const existingItem = document.getElementById("dynamic-item");
  
    if (existingItem) {
      list.removeChild(existingItem);
    } else {
      const newItem = document.createElement("li");
      newItem.textContent = "Dynamically Added Item";
      newItem.id = "dynamic-item";
      list.appendChild(newItem);
    }
  });
  