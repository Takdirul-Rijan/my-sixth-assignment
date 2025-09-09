const loadAllPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      displayPlants(data.plants);
      displayCategories(data.plants);
    });
};

const displayPlants = (plants) => {
  const container = document.getElementById("plants-container");
  container.innerHTML = "";

  plants.forEach((plant) => {
    // console.log(plant);
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-xl shadow p-4 flex flex-col justify-between";

    card.innerHTML = `
      <img src="${plant.image}" alt="" class="w-full h-40 object-cover rounded-lg mb-3" />
      <h3 class="font-bold text-lg mb-1 text-green-800 cursor-pointer hover:underline">
        ${plant.name}
      </h3>
      <p class="text-sm text-gray-600 mb-2">
        ${plant.description}
      </p>
      <div class="flex justify-between items-center mb-2">
        <span class="badge bg-[#DCFCE7] text-green-800 rounded-full px-3 py-1 text-sm">
          ${plant.category}
        </span>
        <span class="font-semibold">৳${plant.price}</span>
      </div>
      <button class="btn btn-success bg-green-700 rounded-3xl w-full text-white">
        Add to Cart
      </button>
    `;

    card.querySelector("h3").addEventListener("click", () => {
      // console.log("btn cliked");

      openModal(plant);
    });

    card.querySelector("button").addEventListener("click", () => {
      // console.log("cart btnclicked");

      const confirmPurchase = alert(
        `${plant.name} will be added to your cart!\nPrice: ৳${plant.price}`
      );
      addCart(plant);
    });

    container.append(card);
  });
};

const displayCategories = (plants) => {
  const container = document.getElementById("categories-container");
  container.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.innerText = "All Trees";
  allBtn.className =
    "block w-full text-center md:text-left px-4 py-3 rounded-md text-semibold text-grey-900";
  allBtn.onclick = () => {
    activeBtn(allBtn);
    manageSpinner(plants);
  };
  container.appendChild(allBtn);

  const addedCategories = [];

  plants.forEach((plant) => {
    if (!addedCategories.includes(plant.category)) {
      addedCategories.push(plant.category);

      const btn = document.createElement("button");
      btn.innerText = plant.category;
      btn.className =
        "block w-full text-center md:text-left px-4 py-3 rounded-md text-gray-900";

      btn.onclick = () => {
        const filtered = plants.filter((p) => p.category === plant.category);
        manageSpinner(filtered);
        activeBtn(btn);
      };

      container.append(btn);
    }
  });
};

let cart = [];

function addCart(plant) {
  cart.push(plant);
  showCart();
}

function showCart() {
  const container = document.getElementById("cart-container");
  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    // console.log("[0]");

    total += item.price;

    const row = document.createElement("div");
    row.className =
      "flex justify-between items-center bg-[#F0FDF4] rounded-2xl m-2 p-4";

    row.innerHTML = `
    <div class="grid grid-cols-1"><span class="my-2">${item.name}</span>
      <span class="mb-2">৳${item.price}</span ></div>
      
      <button class="text-red-500">❌</button>
    `;

    row.querySelector("button").onclick = () => removeFromCart(index);

    container.appendChild(row);
  });

  document.getElementById("cart-total").innerText = "৳" + total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  showCart();
}
// console.log(cart);

const openModal = (plant) => {
  const modal = document.getElementById("plant-modal");
  modal.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="absolute inset-0 bg-black opacity-40" onclick="closeModal()"></div>
      <div class="bg-white rounded-xl shadow-lg z-10 max-w-xl w-full p-6">
        <div class="flex justify-between items-start">
          <h3 class="text-2xl font-bold text-green-800">${plant.name}</h3>
          <button class="text-gray-500" onclick="closeModal()">✖</button>
        </div>
        <img src="${plant.image}" alt="" class="w-full h-56 object-cover rounded-lg my-4" />
        <p class="text-gray-700 mb-3">${plant.description}</p>
        <div class="flex justify-between items-center">
          <span class="badge bg-[#DCFCE7] text-green-800 px-3 py-1">${plant.category}</span>
          <span class="font-semibold">৳${plant.price}</span>
        </div>
      </div>
    </div>
  `;
};

const closeModal = () => {
  document.getElementById("plant-modal").innerHTML = "";
};

const activeBtn = (btn) => {
  const allBtns = document
    .getElementById("categories-container")
    .querySelectorAll("button");
  allBtns.forEach((b) => b.classList.remove("bg-green-700", "text-white"));
  btn.classList.add("bg-green-700", "text-white");
};

function manageSpinner(list) {
  showSpinner(true);
  setTimeout(() => {
    displayPlants(list);
    showSpinner(false);
  }, 100);
}

function showSpinner(isShow) {
  document.getElementById("spinner").style.display = isShow ? "flex" : "none";
}

loadAllPlants();
