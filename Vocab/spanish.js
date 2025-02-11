const vocabulary = {
    "Hello": "Hola",
    "Goodbye": "Chau",
    "Please": "Por favor",
    "Thank you": "Gracias",
    "You're welcome": "De nada",
    "Excuse me": "Disculpá",
    "Sorry": "Perdón",
    "Yes": "Sí",
    "No": "No",
    "Maybe": "Capas",
    "Man": "Hombre",
    "Woman": "Mujer",
    "Boy": "Chico",
    "Girl": "Chica",
    "Friend": "Amigo/a",
    "Teacher": "Profesor/a",
    "Student": "Estudiante",
    "Family": "Familia",
    "Child": "Niño/a",
    "Neighbor": "Vecino/a",
    "House": "Casa",
    "School": "Escuela",
    "Work": "Trabajo",
    "Market": "Mercado",
    "Street": "Calle",
    "Car": "Auto",
    "Bus": "Colectivo",
    "Train": "Tren",
    "Taxi": "Remís",
    "Bike": "Bicicleta",
    "Water": "Agua",
    "Bread": "Pan",
    "Meat": "Carne",
    "Chicken": "Pollo",
    "Fish": "Pescado",
    "Cheese": "Queso",
    "Milk": "Leche",
    "Coffee": "Café",
    "Tea": "Té",
    "Beer": "Cerveza",
    "Phone": "Teléfono",
    "Money": "Dinero",
    "Clothes": "Ropa",
    "Bag": "Bolsa",
    "Shoes": "Zapatos",
    "Book": "Libro",
    "Keys": "llaves",
    "Pen": "Lápiz",
    "Glasses": "Anteojos",
    "Watch": "Reloj",
    "City": "Ciudad",
    "Park": "Parque",
    "Hotel": "Hotel",
    "Airport": "Aeropuerto",
    "Beach": "Playa",
    "Mountain": "Montaña",
    "River": "Río",
    "Plaza/Square": "Plaza",
    "Museum": "Museo",
    "Stadium": "Estadio",
    "Day": "Día",
    "Night": "Noche",
    "Morning": "Mañana",
    "Afternoon": "Tarde",
    "Week": "Semana",
    "Month": "Mes",
    "Year": "Año",
    "Today": "Hoy",
    "Tomorrow": "Mañana",
    "Rain": "Lluve",
    "To eat": "Comer",
    "To drink": "Tomar",
    "To run": "Correr",
    "To walk": "Caminar",
    "To sleep": "Dormir",
    "To speak": "Hablar",
    "To listen": "Escuchar",
    "To buy": "Comprar",
    "To work": "Trabajar",
    "To live": "Vivir",
    "Good": "Bueno/a",
    "Bad": "Malo/a",
    "Happy": "Feliz",
    "Sad": "Triste",
    "Big": "Grande",
    "Small": "Poquito",
    "Hot": "Caliente",
    "Cold": "Frío/a",
    "Easy": "Fácil",
    "Difficult": "Difícil",
    "Now": "Ahora",
    "Later": "Después",
    "Here": "Acá",
    "There": "Allí",
    "Why": "¿Por qué?",
    "How": "¿Cómo?",
    "What": "¿Qué?",
    "Who": "¿Quién?",
    "Where": "¿Dónde?",
    "When": "¿Cuándo?",
    "Boludo": "Idiot",
    "Welcome": "Bienvenido",
    "Good Serve": "Buen Sace",
    "How Much Is It?": "Cuantos es?",
    "I Won": "Yo Gane",
    "I Lost": "Yo Perdi",
    "I Love It": "Me Encanta",
    // Add more words as needed
};

const words = Object.entries(vocabulary);
let currentIndex = 0;
let isFlipped = false;

function updateCard() {
    document.getElementById("word").textContent = words[currentIndex][0];
    document.getElementById("translation").textContent = words[currentIndex][1];
    document.getElementById("flashcard").classList.remove("flipped");
    isFlipped = false;
}

function flipCard() {
    isFlipped = !isFlipped;
    document.getElementById("flashcard").classList.toggle("flipped", isFlipped);
}

function nextCard() {
    currentIndex = (currentIndex + 1) % words.length;
    updateCard();
}

// Initialize first card
updateCard();
