const gallery = document.querySelector('#vehicles-gallery');

const listVehicles = async () => {
  const url = 'http://localhost:3000/vehicles';

  const response = await fetch(url);

  if (response.status === 200) {
    const data = await response.json();

    console.log(data);

    data.forEach((vehicle) => {
      gallery.insertAdjacentHTML(
        'beforeend',
        `<div class="vehicle-image">
          <img src="/assets/images/${vehicle.imageUrl}"/>
          <p>${vehicle.manufacturer} ${vehicle.model}</p>
        </div>`
      );
    });
  }
};

listVehicles();
