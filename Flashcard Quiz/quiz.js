const vocabulary = {
    "Hello": "Hola",
    "Goodbye": "Chau",
    "Please": "Por favor",
    "Thank you": "Gracias",
    "You're welcome": "De nada",
    "Excuse me": "Disculpa",
    "Sorry": "Perdon",
    "Yes": "Si",
    "No": "No",
    "Maybe": "Capas",
    "Man": "Hombre",
    "Woman": "Mujer",
    "Boy": "Chico",
    "Girl": "Chica",
    "Friend": "Amigo",
    "Teacher": "Profesor",
    "Student": "Estudiante",
    "Family": "Familia",
    "Child": "Nino",
    "Neighbor": "Vecino",
    "House": "Casa",
    "School": "Escuela",
    "Work": "Trabajo",
    "Market": "Mercado",
    "Street": "Calle",
    "Car": "Auto",
    "Bus": "Colectivo",
    "Train": "Tren",
    "Taxi": "Remis",
    "Bike": "Bicicleta",
    "Water": "Agua",
    "Bread": "Pan",
    "Meat": "Carne",
    "Chicken": "Pollo",
    "Fish": "Pescado",
    "Cheese": "Queso",
    "Milk": "Leche",
    "Coffee": "Cafe",
    "Tea": "Te",
    "Beer": "Cerveza",
    "Phone": "Telefono",
    "Money": "Dinero",
    "Clothes": "Ropa",
    "Bag": "Bolsa",
    "Shoes": "Zapatos",
    "Book": "Libro",
    "Keys": "Llaves",
    "Pen": "Lapiz",
    "Glasses": "Anteojos",
    "Watch": "Reloj",
    "City": "Ciudad",
    "Park": "Parque",
    "Hotel": "Hotel",
    "Airport": "Aeropuerto",
    "Beach": "Playa",
    "Mountain": "Montana",
    "River": "Rio",
    "Museum": "Museo",
    "Stadium": "Estadio",
    "Day": "Dia",
    "Night": "Noche",
    "Morning": "Manana",
    "Afternoon": "Tarde",
    "Week": "Semana",
    "Month": "Mes",
    "Year": "Ano",
    "Today": "Hoy",
    "Tomorrow": "Manana",
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
    "Good": "Bueno",
    "Bad": "Malo",
    "Happy": "Feliz",
    "Sad": "Triste",
    "Big": "Grande",
    "Small": "Poquito",
    "Hot": "Caliente",
    "Cold": "Frio",
    "Easy": "Facil",
    "Difficult": "Dificil",
    "Now": "Ahora",
    "Later": "Despues",
    "Here": "Aca",
    "There": "Alli",
    "Why": "Por que",
    "How": "Como",
    "What": "Que",
    "Who": "Quien",
    "Where": "Donde",
    "When": "Cuando",
    "Boludo": "Idiot",
    "Welcome": "Bienvenido",
    "Good Serve": "Buen Sace",
    "How Much Is It?": "Cuanto es",
    "I Won": "Yo Gane",
    "I Lost": "Yo Perdi",
    "I Love It": "Me Encanta"
};

const words = Object.entries(vocabulary);
let currentIndex = 0;
let score = 0;
let quizWords = [];

function startQuiz() {
    quizWords = words.sort(() => 0.5 - Math.random()).slice(0, 15);
    currentIndex = 0;
    score = 0;
    document.getElementById("score").textContent = "Score: 0/15";
    document.getElementById("answer").style.display = "block";
    document.getElementById("submit-btn").style.display = "block";
    document.getElementById("play-again-btn").style.display = "none";
    updateCard();
}

function updateCard() {
    if (currentIndex >= quizWords.length) {
        document.getElementById("word").textContent = "Quiz Complete!";
        document.getElementById("translation").textContent = "";
        document.getElementById("answer").style.display = "none";
        document.getElementById("submit-btn").style.display = "none";
        document.getElementById("score").textContent = `Final Score: ${score}/15`;
        document.getElementById("play-again-btn").style.display = "block";
        return;
    }

    document.getElementById("word").textContent = quizWords[currentIndex][0];
    document.getElementById("translation").textContent = "";
    document.getElementById("flashcard").classList.remove("flipped", "incorrect", "correct");
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = quizWords[currentIndex][1].toLowerCase();
    const flashcard = document.getElementById("flashcard");
    const translationText = document.getElementById("translation");

    if (userAnswer === correctAnswer) {
        flashcard.classList.add("correct");
        score++;
    } else {
        flashcard.classList.add("incorrect");
    }

    // Update the score display
    document.getElementById("score").textContent = `Score: ${score}/15`;

    // Flip the card and show the correct answer
    translationText.textContent = quizWords[currentIndex][1];
    flashcard.classList.add("flipped");

    setTimeout(() => {
        flashcard.classList.remove("correct", "incorrect", "flipped"); 
        nextCard();
    }, 2000);
}


function nextCard() {
    currentIndex++;
    updateCard();
}

startQuiz();

document.getElementById("play-again-btn").addEventListener("click", startQuiz);
