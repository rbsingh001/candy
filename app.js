
var url = 'https://crudcrud.com/api/663b929a549445cca1a5e6d7a85565f5';

// Function to add a candy item
function addCandy() {

  // Get the values from the input fields

  const name = document.getElementById('name').value;
  const description = document.getElementById('des').value;
  const price = document.getElementById('price').value;
  const quantity = document.getElementById('qty').value;


  axios.post(`${url}/candys`, {
    name: name,
    description: description,
    price: price,
    quantity: quantity,
  })
    .then(res => displayCandyList())
    .catch(err => console.log(err))

  document.getElementById('name').value = '';
  document.getElementById('des').value = '';
  document.getElementById('price').value = '';
  document.getElementById('qty').value = '';

}

function displayCandyList() {
  const ul = document.getElementById('ul');
  ul.innerHTML = ''; // Clear the existing list

  axios.get(`${url}/candys`)
    .then(res => {
      const candies = res.data;
      candies.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - ${item.description} - Price: ${item.price} - Quantity: ${item.quantity}
          <button onclick="buyCandy1('${item._id}')">Buy-1</button>

          <button onclick="buyCandy2('${item._id}')">Buy-2</button>
          <button onclick="buyCandy3('${item._id}')">Buy-3</button>`;
        
        li.setAttribute('id', `${item._id}`)
        ul.appendChild(li);
        
      })
    })
    .catch(err => console.error(err));
}


function buyCandy1(id) {
  axios.get(`${url}/candys/${id}`)
    .then(res => {
      const candy = res.data;
      
      axios.put(`${url}/candys/${id}`, {
        name: candy.name,
        description: candy.description,
        price: candy.price,
        quantity: candy.quantity - 1,
      })
        .then(() => {
          displayCandyList();
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}

function buyCandy2(id) {
  axios.get(`${url}/candys/${id}`)
    .then(res => {
      const candy = res.data;
      
      axios.put(`${url}/candys/${id}`, {
        name: candy.name,
        description: candy.description,
        price: candy.price,
        quantity: candy.quantity - 2,
      })
        .then(() => {
          displayCandyList();
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}

function buyCandy3(id) {
  axios.get(`${url}/candys/${id}`)
    .then(res => {
      const candy = res.data;
      
      axios.put(`${url}/candys/${id}`, {
        name: candy.name,
        description: candy.description,
        price: candy.price,
        quantity: candy.quantity -3,
      })
        .then(() => {
          displayCandyList();
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}

displayCandyList();
