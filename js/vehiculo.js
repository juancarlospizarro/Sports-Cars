// Obtener el parámetro 'title' de la URL
const params = new URLSearchParams(window.location.search);
const vehicleTitle = params.get('title');

// Datos de ejemplo para los vehículos
const vehicleData = {
    sports1: {
        title: "Sports 1",
        image: "https://cdn.topgear.es/sites/navi.axelspringer.es/public/media/image/2021/12/audi-r8-v10-performance-rwd-2568145.jpg?tf=3840x",
        description: "Este es el Sports 1, un coche deportivo de alto rendimiento."
    },
    sports2: {
        title: "Sports 2",
        image: "https://img.remediosdigitales.com/1f0857/nissan_350z_68/1366_2000.jpeg",
        description: "Este es el Sports 2, un vehículo elegante y potente."
    },
    sports3: {
        title: "Sports 3",
        image: "https://cdn.topgear.es/sites/navi.axelspringer.es/public/bmw-m3-e46.jpg?tf=2048x",
        description: "Este es el Sports 3, diseñado para los entusiastas de la velocidad."
    },
    sports4: {
        title: "Sports 4",
        image: "https://carnovo.com/wp-content/uploads/2017/10/de-4.jpg",
        description: "Este es el Sports 4, un modelo único en su clase."
    },
    sports5: {
        title: "Sports 5",
        image: "https://carnovo.com/wp-content/uploads/2017/10/de-4.jpg",
        description: "Este es el Sports 4, un modelo único en su clase."
    },
    sports6: {
        title: "Sports 6",
        image: "https://carnovo.com/wp-content/uploads/2017/10/de-4.jpg",
        description: "Este es el Sports 4, un modelo único en su clase."
    }
};

// Verifica si el vehículo existe en los datos
if (vehicleData[vehicleTitle]) {
    const data = vehicleData[vehicleTitle];
    document.title = "Sports Cars: " + data.title;
    document.getElementById('vehicle-title').textContent = data.title;
    document.getElementById('vehicle-image').src = data.image;
    document.getElementById('vehicle-description').textContent = data.description;
} else {
    // Si el título no coincide, muestra un mensaje de error
    document.getElementById('vehicle-container').innerHTML = "<h1>Vehículo no encontrado</h1>";
}