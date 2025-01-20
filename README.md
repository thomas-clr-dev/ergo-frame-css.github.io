<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coaching Bien-Être et Productivité</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="font-sans text-gray-800 leading-relaxed">

    <!-- Header -->
    <header class="bg-gradient-to-r from-purple-700 to-blue-500 text-white text-center py-16 px-6">
        <h1 class="text-4xl font-bold mb-4">Atteignez vos objectifs et retrouvez votre équilibre avec notre coaching personnalisé !</h1>
        <p class="text-lg mb-6">Coaching en ligne pour gérer votre temps, réduire le stress, et augmenter votre productivité, sans sacrifier votre bien-être.</p>
        <a href="#form" class="inline-block bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-orange-600 transition">Réservez une consultation gratuite</a>
    </header>

    <!-- Présentation du service -->
    <section class="bg-gray-100 text-center py-16 px-6">
        <h2 class="text-3xl font-bold text-purple-700 mb-6">Pourquoi choisir notre coaching ?</h2>
        <p class="text-lg mb-6">Notre programme de coaching en ligne vous aide à atteindre vos objectifs personnels et professionnels grâce à des méthodes prouvées et un accompagnement sur-mesure.</p>
        <ul class="space-y-4">
            <li class="text-lg">✔️ Flexibilité : séances en ligne adaptées à votre emploi du temps.</li>
            <li class="text-lg">✔️ Coaching personnalisé : des solutions qui correspondent à vos besoins.</li>
            <li class="text-lg">✔️ Outils pratiques : accès à des guides, des checklists et des suivis détaillés.</li>
        </ul>
    </section>

    <!-- Témoignages clients -->
    <section class="bg-gradient-to-r from-[#ff9a9e] via-[#fad0c4] to-[#a18cd1] text-center py-16 px-6">
        <h2 class="text-3xl font-bold text-black mb-6">Ce que disent nos clients</h2>
        <div class="space-y-8">
            <div class="text-black-800 p-6 rounded-l max-w-xl mx-auto">
                <p class="italic">"Grâce à ce coaching, j'ai appris à mieux organiser mes journées et à prendre du temps pour moi. J'ai retrouvé un équilibre que je croyais perdu."</p>
                <span class="block mt-4 font-bold text-purple-700">- Marie L.</span>
            </div>
        </div>
    </section>

    <!-- Visuels et interactivité -->
    <section class="bg-gray-100 text-center py-16 px-6">
        <h2 class="text-3xl font-bold text-purple-700 mb-6">Accompagnement adapté à tous</h2>
        <img src="./assets/media/coaching.jpg" alt="Pendant un coaching" class="max-w-lg mx-auto rounded-lg shadow mb-6">
        <p class="text-lg">Découvrez comment notre coaching peut transformer votre vie.</p>
    </section>

    <!-- Formulaire et feedback immédiat -->
    <section id="form" class="bg-gradient-to-r from-blue-500 to-purple-700 text-white text-center py-16 px-6">
        <h2 class="text-3xl font-bold mb-6">Réservez votre consultation gratuite</h2>
        <form action="/submit" method="POST" class="max-w-lg mx-auto space-y-6">
            <div>
                <label for="name" class="block text-lg font-semibold mb-2">Nom :</label>
                <input type="text" id="name" name="name" required class="w-full p-3 rounded-lg border border-gray-300 text-gray-800">
            </div>
            <div>
                <label for="email" class="block text-lg font-semibold mb-2">Email :</label>
                <input type="email" id="email" name="email" required class="w-full p-3 rounded-lg border border-gray-300 text-gray-800">
            </div>
            <button type="submit" class="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">Envoyer</button>
        </form>
        <p class="hidden mt-4 text-green-500 font-semibold">Merci ! Votre consultation gratuite est réservée.</p>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center py-6">
        <p class="mb-4">© 2025 Coaching Bien-Être et Productivité. Tous droits réservés.</p>
    </footer>

</body>
</html>
