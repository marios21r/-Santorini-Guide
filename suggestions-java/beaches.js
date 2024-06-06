const beaches = {
    kamari: {
        name: "Kamari Beach",
        description: "Kamari Beach is a beautiful black sand beach located on the southeast coast of Santorini. It's perfect for swimming and sunbathing.",
        wind: "North"
    },
    "perivolos-perissa": {
        name: "Perivolos-Perissa Beach",
        description: "Perivolos and Perissa beaches are long stretches of black sand located on the south coast. They are known for their vibrant nightlife and water sports.",
        wind: "South"
    },
    red: {
        name: "Red Beach",
        description: "Red Beach is famous for its striking red volcanic sand and impressive cliffs. It's a unique and picturesque spot perfect for photography.",
        wind: "West"
    },
    vlychada: {
        name: "Vlychada Beach",
        description: "Vlychada Beach is known for its lunar landscape and tranquil environment. The beach has fine grayish sand and fascinating rock formations.",
        wind: "South"
    },
    vourvoulos: {
        name: "Vourvoulos Beach",
        description: "Vourvoulos Beach is a serene and less crowded beach with clear blue waters and golden sand. It's ideal for a peaceful day by the sea.",
        wind: "North"
    },
    pori: {
        name: "Pori Beach",
        description: "Pori Beach is a hidden gem with clear waters and a rocky landscape. It's perfect for those looking to escape the more touristy areas.",
        wind: "North"
    },
    koloumpos: {
        name: "Koloumpos Beach",
        description: "Koloumpos Beach is a secluded beach known for its natural beauty and volcanic rocks. It's a great spot for a quiet and relaxing day.",
        wind: "East"
    },
    monolithos: {
        name: "Monolithos Beach",
        description: "Monolithos Beach is a family-friendly beach with shallow waters and soft sand. It's equipped with facilities and playgrounds for children.",
        wind: "North"
    },
    ammoudi: {
        name: "Ammoudi Bay",
        description: "Ammoudi Bay is a picturesque bay below Oia, known for its stunning sunsets and fresh seafood restaurants. It's a great spot for dining with a view.",
        wind: "West"
    }
};

function showBeach(beachId) {
    const beach = beaches[beachId];
    document.getElementById('large-image').src = `${beachId}.jpg`;
    document.getElementById('beach-name').textContent = beach.name;
    document.getElementById('beach-description').textContent = beach.description;
    document.getElementById('beach-wind').textContent = `Worst wind: ${beach.wind}`;
}
