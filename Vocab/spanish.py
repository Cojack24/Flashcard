import random

# List of 100 words and their translations
vocabulary = {
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
}

def view_vocabulary():
    """Display all words and their translations."""
    print("Your Vocabulary:")
    for word, translation in vocabulary.items():
        print(f"{word} -> {translation}")
    print()

def add_word():
    """Add a new word and its translation to the vocabulary."""
    word = input("Enter the word in English: ").strip()
    translation = input("Enter the translation: ").strip()

    if word in vocabulary:
        print(f"'{word}' is already in the vocabulary.\n")
    else:
        vocabulary[word] = translation
        print(f"Added '{word}' -> '{translation}' to the vocabulary.\n")

def remove_word():
    """Remove a word from the vocabulary."""
    word = input("Enter the word you want to remove: ").strip()

    if word in vocabulary:
        del vocabulary[word]
        print(f"Removed '{word}' from the vocabulary.\n")
    else:
        print(f"'{word}' is not in the vocabulary.\n")

def quiz_user():
    """Quiz the user with 10 random words from the vocabulary."""
    words = random.sample(list(vocabulary.items()), min(10, len(vocabulary)))
    score = 0

    for word, translation in words:
        answer = input(f"What is the translation of '{word}'? ").strip()
        if answer.lower() == translation.lower():
            print("Correct!\n")
            score += 1
        else:
            print(f"Wrong. The correct answer is '{translation}'.\n")

    print(f"Quiz complete! You scored {score}/{len(words)}.\n")

def main():
    """Main program to manage vocabulary."""
    while True:
        print("Vocabulary Trainer")
        print("1. View all words")
        print("2. Add a word")
        print("3. Remove a word")
        print("4. Quiz yourself")
        print("5. Exit")

        choice = input("Choose an option: ").strip()

        if choice == "1":
            view_vocabulary()
        elif choice == "2":
            add_word()
        elif choice == "3":
            remove_word()
        elif choice == "4":
            quiz_user()
        elif choice == "5":
            print("Chau!")
            break
        else:
            print("Invalid choice. Please try again.\n")

if __name__ == "__main__":
    main()