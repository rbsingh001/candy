// Function to add a candy item to localStorage
function addCandy() {
    // Get the values from the input fields
    const name = document.getElementById('name').value;
    const description = document.getElementById('des').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('qty').value;
  
    // Create an object to represent the candy item
    const candyItem = {
      name: name,
      description: description,
      price: price,
      quantity: quantity,
    };
  
    // Check if localStorage already has candy items
    let candyItems = JSON.parse(localStorage.getItem('candyItems')) || [];
  
    // Add the new candy item to the array
    candyItems.push(candyItem);
  
    // Update localStorage with the new array
    localStorage.setItem('candyItems', JSON.stringify(candyItems));
  
    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('des').value = '';
    document.getElementById('price').value = '';
    document.getElementById('qty').value = '';
  
    // Refresh the candy list
    displayCandyList();
  }
  
  // Function to display the candy items on the screen
  function displayCandyList() {
    const ul = document.getElementById('ul');
    ul.innerHTML = ''; // Clear the existing list
  
    // Get candy items from localStorage
    let candyItems = JSON.parse(localStorage.getItem('candyItems')) || [];
  
    // Loop through the candy items and create list items for each
    candyItems.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `${item.name} - ${item.description} - Price: ${item.price} - Quantity: ${item.quantity}
      <button onclick="buyCandy1(${index})">Buy-1</button><button onclick="buyCandy2(${index})">Buy-2</button>
      <button onclick="buyCandy3(${index})">Buy-3</button>`;
      ul.appendChild(li);
    });
  }
  
  // Function to update the stock when buying candy
  function buyCandy1(index) {
    let candyItems = JSON.parse(localStorage.getItem('candyItems')) || [];
  
    if (candyItems[index] && candyItems[index].quantity > 0) {
      candyItems[index].quantity--;
      localStorage.setItem('candyItems', JSON.stringify(candyItems));
    }
  
    displayCandyList(); // Refresh the candy list
  }

  function buyCandy2(index) {
    let candyItems = JSON.parse(localStorage.getItem('candyItems')) || [];
  
    if (candyItems[index] && candyItems[index].quantity > 0) {
      candyItems[index].quantity = candyItems[index].quantity - 2;
      localStorage.setItem('candyItems', JSON.stringify(candyItems));
    }
  
    displayCandyList(); // Refresh the candy list
  }

  function buyCandy3(index) {
    let candyItems = JSON.parse(localStorage.getItem('candyItems')) || [];
  
    if (candyItems[index] && candyItems[index].quantity > 0) {
      candyItems[index].quantity = candyItems[index].quantity - 3;
      localStorage.setItem('candyItems', JSON.stringify(candyItems));
    }
  
    displayCandyList(); // Refresh the candy list
  }
  
  // Initial display of candy items when the page loads
  displayCandyList();
  