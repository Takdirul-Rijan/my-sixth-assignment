const loadAllPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayPlants(data.plants));
};

const displayPlants = (plants) => {
  const container = document.getElementById("plants-container");
  container.innerHTML = "";

  plants.forEach((plant) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-xl shadow p-4 flex flex-col justify-between";

    card.innerHTML = `
      <img src="${plant.image}" alt="" class="w-full h-40 object-cover rounded-lg mb-3" />
      <h3 class="font-bold text-lg mb-1 text-green-800">${plant.name}</h3>
      <p class="text-sm text-gray-600 mb-2">${plant.description}</p>
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

    container.append(card);
  });
};

loadAllPlants();
