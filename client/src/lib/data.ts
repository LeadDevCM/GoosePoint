
// Products Data
export const products = [
  {
    id: "shellstock-oysters",
    title: "Shellstock Oysters",
    price: "$14.00 – $18.00",
    description: "Fresh oysters from the pristine waters of Willapa Bay delivered from our farm to your door. We sell Goose Point Oysters live in the shell. If you’re planning on eating them raw, extra small and small oysters in the shell are the way to go. If you’re barbecuing or cooking in-shell try our small thru medium in shell oysters.",
    fullDescription: "Fresh oysters from the pristine waters of Willapa Bay delivered from our farm to your door. We sell Goose Point Oysters live in the shell, or as preshucked BlueSeals™. If you’re planning on eating them raw, extra small and small oysters in the shell or BlueSeals™ are the way to go. If you’re barbecuing or cooking in-shell try our small thru medium in shell oysters. Serve them on the half shell or on the barbecue. Either way they’ll be a huge hit. Our live shell-stock oysters are available in extra small, small, medium and large.",
    images: [
      "https://goosepoint.com/wp-content/uploads/2016/07/hell-oysters-bag.jpg",
      "https://goosepoint.com/wp-content/uploads/2016/07/hp-oysters-open.jpg"
    ],
    category: "Fresh Oysters",
    options: [
      { name: "Size", values: ["X-Small", "Small", "Medium"] }
    ]
  },
  {
    id: "pre-shucked-blueseal",
    title: "Pre-Shucked BlueSeal™",
    price: "$18.00 – $20.00",
    description: "High quality, high-pressure, shucked-in-the-shell oysters by the dozen. Individually pouched and processed with nothing but water pressure.",
    fullDescription: "Our Fresher Under Pressure promise to you; Goose Point BlueSeal™ high pressure processed oysters are our best oysters yet, specially selected from our beds and cultivated for high meat quality with uniform shape and size. Individually pouched and processed with nothing but water pressure, the oyster retains all its natural moisture, texture and flavor for safety assured, convenient, quality dining.",
    images: [
      "https://goosepoint.com/wp-content/uploads/2016/07/High-Pressure.jpg",
      "https://goosepoint.com/wp-content/uploads/2016/07/hell-oysters-blue-band-bag.jpg",
      "https://goosepoint.com/wp-content/uploads/2016/07/hp-oysters-closed.jpg",
      "https://goosepoint.com/wp-content/uploads/2016/07/hp-oysters-open.jpg"
    ],
    category: "Shucked Oysters",
    options: [
      { name: "Size", values: ["X-Small", "Small"] }
    ]
  },
  {
    id: "oyster-shooters",
    title: "Oyster Shooters",
    price: "$24.00 – $96.00",
    description: "Goose Point Oyster Shooters are packed under our HACCP food safety program, fresh with one of our extra small fresh Willapa Bay oyster meats using our zesty signature cocktail sauce.",
    fullDescription: "Go Ahead, Take a Shot! At Goose Point we don’t stop at live in-shell, BlueSeals™’ or shucked oysters. We also offer specialty consumer oyster products such as our popular Oyster Shooters. Goose Point Oyster Shooters are packed under our HACCP food safety program, fresh with one of our extra small fresh Willapa Bay oyster meats using our zesty signature cocktail sauce and presented in a traditional shot glass.",
    images: [
      "https://goosepoint.com/wp-content/uploads/2016/07/shooter-commercial-served-several.jpg",
      "https://goosepoint.com/wp-content/uploads/2016/07/shooter-lid-off.jpg",
      "https://goosepoint.com/wp-content/uploads/2016/07/shooter-6-1.jpg",
      "https://goosepoint.com/wp-content/uploads/2016/07/shooter-lid-on.jpg"
    ],
    category: "Apparel & Gifts",
    options: [
      { name: "Case Size", values: ["6", "12", "24"] }
    ]
  },
  {
    id: "smoked-oysters",
    title: "Smoked Oysters",
    price: "$14.00 – $41.00",
    description: "Our premium plump Willapa Bay oyster meats custom smoked for us by Josephson’s Smokehouse just down the road in Astoria, Oregon.",
    fullDescription: "Our premium plump Willapa Bay oyster meats custom smoked for us by Josephson’s Smokehouse just down the road in Astoria, Oregon. Josephson’s is a traditional seafood smokehouse, family-owned and has operated for over ninety years and four generations. Particular about cutting no corners in their old world and modern processing techniques, Josephson’s only uses #1 grade natural ingredients and natural alderwood smoke.",
    images: [
      "https://goosepoint.com/wp-content/uploads/2016/07/smoked_oysters-1.jpg",
      "https://goosepoint.com/wp-content/uploads/2016/07/smoked-served-big.jpg",
      "https://goosepoint.com/wp-content/uploads/2016/07/smoked-served-home.jpg",
      "https://goosepoint.com/wp-content/uploads/2016/07/smokedserved-home-cracker.jpg"
    ],
    category: "Pantry",
    options: [
      { name: "Size", values: [".25 lb", "1 lb"] }
    ]
  },
  {
    id: "bbq-dinner-bundle",
    title: "BBQ Dinner Bundle",
    price: "$60.00",
    description: "Everything you need for a perfect seafood feast.",
    fullDescription: "Get ready for the ultimate seafood BBQ. This bundle includes a curated selection of our finest shellfish perfect for grilling. Includes oysters, clams, and our signature sauces.",
    images: [
      "https://goosepoint.com/wp-content/uploads/2020/05/dinnerbundle-scaled.jpg"
    ],
    category: "Bundles",
    options: []
  },
  {
    id: "shucking-knife",
    title: "Shucking Knife",
    price: "$12.50",
    description: "Professional grade tool for opening your oysters with ease.",
    fullDescription: "The essential tool for any oyster lover. This professional-grade shucking knife features a durable blade and an ergonomic handle designed to make opening oysters safe and easy.",
    images: [
      "https://goosepoint.com/wp-content/uploads/2024/08/logo-knife-cutting-board.jpg"
    ],
    category: "Tools",
    options: []
  },
  {
    id: "salmon-jerky",
    title: "Smoked Salmon Jerky",
    price: "$12.00",
    description: "Wild caught smoked salmon jerky. A healthy, protein-rich snack.",
    fullDescription: "Delicious, wild-caught smoked salmon jerky. The perfect healthy snack for on-the-go or enjoying with a cold drink. Rich in protein and Omega-3s.",
    images: [
      "https://goosepoint.com/wp-content/uploads/2020/05/20200521_115057-1-300x300.jpg"
    ],
    category: "Pantry",
    options: []
  }
];

// Recipes Data
export const recipes = [
  {
    id: "classic-oyster-shooters",
    title: "Classic Oyster Shooters",
    image: "https://goosepoint.com/wp-content/uploads/2016/07/shooter-commercial-served-several.jpg",
    time: "10 min",
    servings: "4",
    difficulty: "Easy",
    description: "The perfect start to any gathering. Spicy, briny, and invigorating.",
    ingredients: [
      "12 Fresh Shucked Oysters (Extra Small)",
      "1/2 cup Cocktail Sauce",
      "1 Lemon (cut into wedges)",
      "Vodka (optional)",
      "Celery stalks for garnish"
    ],
    instructions: [
      "Place one fresh oyster into each shot glass.",
      "Top with a teaspoon of cocktail sauce.",
      "Add a splash of vodka if desired.",
      "Squeeze fresh lemon juice over the top.",
      "Garnish with a small celery stalk and serve immediately."
    ]
  },
  {
    id: "willapa-bay-clam-bake",
    title: "Willapa Bay Clam Bake",
    image: "https://goosepoint.com/wp-content/themes/goosepoint/img/clam-bake.png",
    time: "45 min",
    servings: "6",
    difficulty: "Medium",
    description: "A rustic one-pot meal featuring clams, corn, potatoes, and sausage.",
    ingredients: [
      "5 lbs Manila Clams",
      "1 lb Andouille Sausage, sliced",
      "2 lbs Baby Red Potatoes",
      "4 ears of Corn, halved",
      "1 onion, chopped",
      "2 cups White Wine",
      "1/2 cup Butter"
    ],
    instructions: [
      "In a large pot, brown the sausage over medium heat.",
      "Add onions and cook until softened.",
      "Add potatoes, corn, wine, and butter. Cover and simmer for 15-20 minutes until potatoes are tender.",
      "Add the clams to the pot. Cover and steam for 5-8 minutes until clams have opened.",
      "Discard any clams that did not open.",
      "Serve hot with crusty bread to soak up the broth."
    ]
  },
  {
    id: "smoked-oyster-dip",
    title: "Smoked Oyster Dip",
    image: "https://goosepoint.com/wp-content/uploads/2016/07/smoked_oysters-1.jpg",
    time: "15 min",
    servings: "8",
    difficulty: "Easy",
    description: "Rich, creamy, and packed with umami flavor from our smoked oysters.",
    ingredients: [
      "2 cans (8oz) Smoked Oysters, drained and chopped",
      "8oz Cream Cheese, softened",
      "1/4 cup Sour Cream",
      "2 tbsp Worcestershire Sauce",
      "1 tsp Garlic Powder",
      "Green onions for garnish",
      "Crackers for serving"
    ],
    instructions: [
      "In a bowl, mix cream cheese, sour cream, Worcestershire sauce, and garlic powder until smooth.",
      "Gently fold in the chopped smoked oysters.",
      "Transfer to a serving bowl and chill for at least 30 minutes to let flavors meld.",
      "Garnish with chopped green onions and serve with your favorite crackers."
    ]
  }
];
