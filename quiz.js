const vocabulary = {
    "Hello": ["Hola"],
    "Goodbye": ["Chau"],
    "Please": ["Por favor", "Porfi"],
    "Thank you": ["Gracias"],
    "You're welcome": ["De nada"],
    "Excuse me": ["Disculpa", "Perdón"],
    "Sorry": ["Perdón", "Perdon"],
    "Yes": ["Sí", "Si"],
    "No": ["No"],
    "Maybe": ["Capaz"],
    "Man": ["Hombre"],
    "Woman": ["Mujer"],
    "Boy": ["Chico"],
    "Girl": ["Chica"],
    "Friend": ["Amigo", "Amiga"],
    "Teacher": ["Profesor", "Profesora"],
    "Student": ["Estudiante"],
    "Family": ["Familia"],
    "Child": ["Niño", "Niña", "Nino", "Nina"],
    "Neighbor": ["Vecino", "Vecina"],
    "House": ["Casa"],
    "School": ["Escuela"],
    "Work": ["Trabajo"],
    "Market": ["Mercado"],
    "Street": ["Calle"],
    "Car": ["Auto", "Coche"],
    "Bus": ["Colectivo", "Autobús", "Autobus"],
    "Train": ["Tren"],
    "Taxi": ["Remís", "Remis", "Taxi"],
    "Bike": ["Bicicleta"],
    "Water": ["Agua"],
    "Bread": ["Pan"],
    "Meat": ["Carne"],
    "Chicken": ["Pollo"],
    "Fish": ["Pescado"],
    "Cheese": ["Queso"],
    "Milk": ["Leche"],
    "Coffee": ["Café", "Cafe"],
    "Tea": ["Té", "Te"],
    "Beer": ["Cerveza"], ["Birra"],
    "Phone": ["Teléfono", "Telefono"],
    "Money": ["Dinero"],
    "Clothes": ["Ropa"],
    "Bag": ["Bolsa"],
    "Shoes": ["Zapatos"],
    "Book": ["Libro"],
    "Keys": ["Llaves"],
    "Pen": ["Lápiz", "Lapiz", "Lapicera"],
    "Glasses": ["Anteojos", "Gafas"],
    "Watch": ["Reloj"],
    "City": ["Ciudad"],
    "Park": ["Parque"],
    "Hotel": ["Hotel"],
    "Airport": ["Aeropuerto"],
    "Beach": ["Playa"],
    "Mountain": ["Montaña", "Montana"],
    "River": ["Río", "Rio"],
    "Museum": ["Museo"],
    "Stadium": ["Estadio"],
    "Day": ["Día", "Dia"],
    "Night": ["Noche"],
    "Morning": ["Mañana", "Manana"],
    "Afternoon": ["Tarde"],
    "Week": ["Semana"],
    "Month": ["Mes"],
    "Year": ["Año", "Ano"],
    "Today": ["Hoy"],
    "Tomorrow": ["Mañana", "Manana"],
    "Rain": ["Lluvia"],
    "To eat": ["Comer"],
    "To drink": ["Tomar", "Beber"],
    "To run": ["Correr"],
    "To walk": ["Caminar"],
    "To sleep": ["Dormir"],
    "To speak": ["Hablar"],
    "To listen": ["Escuchar"],
    "To buy": ["Comprar"],
    "To work": ["Trabajar"],
    "To live": ["Vivir"],
    "Good": ["Bueno"],
    "Bad": ["Malo"],
    "Happy": ["Feliz"],
    "Sad": ["Triste"],
    "Big": ["Grande"],
    "Small": ["Pequeño", "Chiquito", "Pequeno"],
    "Hot": ["Caliente"],
    "Cold": ["Frío", "Frio"],
    "Easy": ["Fácil", "Facil"],
    "Difficult": ["Difícil", "Dificil"],
    "Now": ["Ahora"],
    "Later": ["Después", "Despues"],
    "Here": ["Acá", "Aqui"],
    "There": ["Allí", "Alla"],
    "Why": ["¿Por qué?", "Por que"],
    "How": ["¿Cómo?", "Como"],
    "What": ["¿Qué?", "Que"],
    "Who": ["¿Quién?", "Quien"],
    "Where": ["¿Dónde?", "Donde"],
    "When": ["¿Cuándo?", "Cuando"],
    "Idiot": ["Boludo"],
    "Welcome": ["Bienvenido", "Bienvenida"],
    "Good Serve": ["Buen Saque"],
    "How Much Is It?": ["¿Cuánto es?", "Cuanto es"],
    "I Won": ["Yo Gané", "Yo Gane"],
    "I Lost": ["Yo Perdí", "Yo Perdi", "Perdi"],
    "I Love It": ["Me Encanta"]
};

const words = Object.entries(vocabulary);
let currentIndex = 0;
let score = 0;
let quizWords = [];

function startQuiz() {
    quizWords = [...words].sort(() => 0.5 - Math.random()).slice(0, 15);
    currentIndex = 0;
    score = 0;
    updateScore();
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
    const correctAnswers = quizWords[currentIndex][1].map(ans => ans.toLowerCase());
    const flashcard = document.getElementById("flashcard");
    const translationText = document.getElementById("translation");

    // Normalize strings to remove accents
    const normalizeText = (text) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    if (correctAnswers.some(ans => normalizeText(ans) === normalizeText(userAnswer))) {
        flashcard.classList.add("correct");
        score++;
    } else {
        flashcard.classList.add("incorrect");
    }

    updateScore();

    // Flip the card and show the correct answers
    translationText.textContent = correctAnswers.join(" / ");
    flashcard.classList.add("flipped");

    setTimeout(() => {
        flashcard.classList.remove("correct", "incorrect", "flipped"); 
        nextCard();
    }, 2000);
}

function updateScore() {
    document.getElementById("score").textContent = `Score: ${score}/15`;
}

function nextCard() {
    currentIndex++;
    updateCard();
}

document.addEventListener("DOMContentLoaded", () => {
    startQuiz();
    document.getElementById("play-again-btn").addEventListener("click", startQuiz);
});
