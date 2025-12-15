import { db } from "./db";
import { products, recipes, blogPosts } from "@shared/schema";

const productsData = [
  {
    id: "shellstock-oysters",
    title: "Shellstock Oysters",
    price: "$14.00 – $18.00",
    description: "Fresh oysters from the pristine waters of Willapa Bay delivered from our farm to your door. We sell Goose Point Oysters live in the shell. If you're planning on eating them raw, extra small and small oysters in the shell are the way to go. If you're barbecuing or cooking in-shell try our small thru medium in shell oysters.",
    fullDescription: "Fresh oysters from the pristine waters of Willapa Bay delivered from our farm to your door. We sell Goose Point Oysters live in the shell, or as preshucked BlueSeals™. If you're planning on eating them raw, extra small and small oysters in the shell or BlueSeals™ are the way to go. If you're barbecuing or cooking in-shell try our small thru medium in shell oysters. Serve them on the half shell or on the barbecue. Either way they'll be a huge hit. Our live shell-stock oysters are available in extra small, small, medium and large.",
    images: [
      "/assets/images/new/oysters-lemon-knife.jpg",
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
    fullDescription: "Go Ahead, Take a Shot! At Goose Point we don't stop at live in-shell, BlueSeals™' or shucked oysters. We also offer specialty consumer oyster products such as our popular Oyster Shooters. Goose Point Oyster Shooters are packed under our HACCP food safety program, fresh with one of our extra small fresh Willapa Bay oyster meats using our zesty signature cocktail sauce and presented in a traditional shot glass.",
    images: [
      "/assets/images/new/shooters-closeup.jpg",
      "/assets/images/new/shooters-combo.jpg",
      "/assets/images/new/shooters-glasses.jpg",
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
    description: "Our premium plump Willapa Bay oyster meats custom smoked for us by Josephson's Smokehouse just down the road in Astoria, Oregon.",
    fullDescription: "Our premium plump Willapa Bay oyster meats custom smoked for us by Josephson's Smokehouse just down the road in Astoria, Oregon. Josephson's is a traditional seafood smokehouse, family-owned and has operated for over ninety years and four generations. Particular about cutting no corners in their old world and modern processing techniques, Josephson's only uses #1 grade natural ingredients and natural alderwood smoke.",
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
  },
  {
    id: "alaskan-bullwhip-hot-sauce",
    title: "Alaskan BullWhip Hot Sauce",
    price: "$6.95",
    description: "Hot sauce made with sustainable Alaskan Bull Kelp. Vegan and gluten free.",
    fullDescription: "We are proud to offer a great addition to your hot sauce collection. Barnacle Foods has created an amazing set of sauces made with sustainable Alaskan Bull Kelp. The kelp used in this product is harvested from the pristine cold waters of the Alaskan coast on regenerative ocean farms and by sustainable foraging methods. These amazing products are vegan and gluten free. We know you will love these as an addition to your favorite Goose Point Oysters!",
    images: [
      "https://goosepoint.com/wp-content/uploads/2021/10/barnacle-foods-sauce-image-2021-scaled.jpeg",
      "https://goosepoint.com/wp-content/uploads/2021/12/262700427_605324814021436_5982763010038579151_n.jpg"
    ],
    category: "Pantry",
    options: [
      { name: "Flavor", values: ["Kelp and Piri Piri", "Kelp and Serrano"] }
    ]
  },
  {
    id: "oyster-breading",
    title: "Signature Spice Oyster Breading",
    price: "$9.00",
    description: "Designed specifically to compliment the taste of our Pacific Oysters.",
    fullDescription: "Our Signature Spice Oyster Breading is designed specifically to compliment the taste of our Pacific Oysters. Sold in 16oz resealable bags. Ingredients: Cornmeal, Flour, Rice Flour, Bread Crumbs, Salt, Nonfat Dry Milk, Garlic Powder, Onion Powder, Chili Pepper, Black Pepper, Paprika, Cayenne Pepper.",
    images: [
      "https://goosepoint.com/wp-content/uploads/2016/07/breading-for-webpage.jpg",
      "https://goosepoint.com/wp-content/uploads/2016/07/shucked-breaded-home-1.jpg",
      "https://goosepoint.com/wp-content/uploads/2016/07/shucked-fried-home.jpg"
    ],
    category: "Pantry",
    options: []
  },
  {
    id: "cocktail-sauce",
    title: "Oyster Cocktail Sauce",
    price: "$5.00",
    description: "Tangy, slightly spicy and oh-so-amazing with oysters.",
    fullDescription: "As close to homemade as you can get. Our zesty signature cocktail sauce is the perfect companion to fresh Goose Point oysters and Pacific shellfish. We specially developed this sauce in conjunction with Oregon State University's Food Laboratory to go with our oyster shooters and we are proud to offer it to the public.",
    images: [
      "https://goosepoint.com/wp-content/uploads/2016/06/cocktail-sauce-served.jpg",
      "https://goosepoint.com/wp-content/uploads/2016/06/shucked-oysters-1.jpg"
    ],
    category: "Pantry",
    options: []
  },
  {
    id: "oyster-hoodie",
    title: "Goose Point Oysters Hoodie",
    price: "$45.00",
    description: "Warm, comfortable hoodie featuring the Goose Point logo.",
    fullDescription: "Stay warm on those chilly coastal days with our signature Goose Point Oysters hoodie. Made from a soft cotton blend, it's perfect for beach bonfires or just relaxing at home.",
    images: [
      "https://goosepoint.com/wp-content/uploads/2017/01/roay-blue-hoodie-front.png"
    ],
    category: "Apparel",
    options: [
      { name: "Size", values: ["Small", "Medium", "Large", "X-Large"] },
      { name: "Color", values: ["Navy", "Black", "Gray"] }
    ]
  },
  {
    id: "shuck-yeah-apron",
    title: "Shuck Yeah Oyster Apron",
    price: "$26.50",
    description: "Durable apron for your kitchen or shucking station.",
    fullDescription: "Protect your clothes while you shuck and cook. This durable apron features our fun 'Shuck Yeah' design and handy pockets for your tools.",
    images: [
      "https://goosepoint.com/wp-content/uploads/2022/10/oyster-apron-300x300.png"
    ],
    category: "Apparel",
    options: []
  },
  {
    id: "trucker-hat",
    title: "Goose Point Trucker Hat",
    price: "$22.50",
    description: "Classic mesh-back trucker hat with embroidered logo.",
    fullDescription: "Keep the sun out of your eyes with our classic trucker hat. Features a breathable mesh back and an adjustable snap closure for a perfect fit.",
    images: [
      "https://goosepoint.com/wp-content/uploads/2022/06/283680898_410871584093955_7966066877628356496_n-300x300.jpg"
    ],
    category: "Apparel",
    options: []
  },
  {
    id: "shellfish-cookbook",
    title: "Shellfish: The Cookbook",
    price: "$24.95",
    description: "A comprehensive guide to cooking shellfish by Chef Karen Barnaby.",
    fullDescription: "Explore the world of shellfish with this comprehensive cookbook. Packed with delicious recipes and expert tips on selecting, cleaning, and cooking your favorite seafood.",
    images: [
      "https://goosepoint.com/wp-content/uploads/2024/05/Shellfish-the-cookbook-300x300.jpeg"
    ],
    category: "Tools",
    options: []
  }
];

const recipesData = [
  {
    id: "classic-oyster-shooters",
    title: "Classic Oyster Shooters",
    image: "/assets/images/new/shooters-closeup.jpg",
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
  },
  {
    id: "fried-oyster-tacos",
    title: "Fried Oyster Tacos",
    image: "https://goosepoint.com/wp-content/uploads/2024/05/Oyster-Tacos-768x655-1.jpg",
    time: "30 min",
    servings: "3-4",
    difficulty: "Medium",
    description: "A twist on your regular tacos, featuring crispy fried oysters and fresh pico de gallo.",
    ingredients: [
      "16oz Extra Small Goose Point Oysters",
      "Goose Point Special Oyster Breading (or panko)",
      "Corn Tortillas",
      "5 Roma Tomatoes, Diced",
      "1 Small Yellow Onion, Minced",
      "1 Bunch Cilantro, Chopped",
      "2 Jalapeno Peppers, Minced",
      "1 Lime, Juiced",
      "Shredded Cabbage & Carrots",
      "1/2 Cup Mayo & 1/4 Cup Milk (for slaw dressing)"
    ],
    instructions: [
      "Mix tomatoes, onions, cilantro, jalapeno, lime, salt, and pepper for Pico De Gallo. Chill.",
      "Mix cabbage, carrots, mayo, milk, and salt for Cole Slaw. Chill.",
      "Drain oysters and coat in breading.",
      "Pan fry oysters in oil over med-high heat for 3-4 mins until golden brown.",
      "Warm tortillas in a dry skillet.",
      "Assemble tacos with slaw, pico de gallo, and two fried oysters each."
    ]
  },
  {
    id: "oyster-stuffing",
    title: "Classic Oyster Stuffing",
    image: "https://goosepoint.com/wp-content/uploads/2016/07/shucked-fried-home.jpg",
    time: "60 min",
    servings: "8-10",
    difficulty: "Medium",
    description: "A savory Thanksgiving classic that brings the ocean to your holiday table.",
    ingredients: [
      "1 jar (10oz) Shucked Oysters, drained (reserve liquor)",
      "6 cups Stale Bread Cubes",
      "1/2 cup Butter",
      "1 Onion, chopped",
      "2 stalks Celery, chopped",
      "1 tsp Sage",
      "1 tsp Thyme",
      "Salt and Pepper to taste",
      "Chicken Broth (as needed)"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "In a large skillet, sauté onion and celery in butter until soft.",
      "Add herbs, salt, and pepper.",
      "In a large bowl, toss bread cubes with the sautéed vegetables.",
      "Gently fold in oysters.",
      "Moisten with reserved oyster liquor and chicken broth until damp but not soggy.",
      "Transfer to a baking dish and bake for 30-45 minutes until top is golden and crispy."
    ]
  },
  {
    id: "scalloped-oysters",
    title: "Scalloped Oysters",
    image: "https://goosepoint.com/wp-content/uploads/2016/07/hell-oysters-bag.jpg",
    time: "45 min",
    servings: "6",
    difficulty: "Easy",
    description: "A comforting, creamy casserole topped with buttery cracker crumbs.",
    ingredients: [
      "2 pints Fresh Oysters, drained",
      "2 cups Crushed Saltine Crackers",
      "1/2 cup Butter, melted",
      "1 cup Heavy Cream",
      "1/2 tsp Worcestershire Sauce",
      "Salt and Pepper to taste",
      "Paprika for garnish"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C). Grease a baking dish.",
      "Mix cracker crumbs with melted butter.",
      "Layer 1/3 of crumbs in the dish, then half the oysters. Repeat, ending with crumbs on top.",
      "Whisk cream, Worcestershire sauce, salt, and pepper. Pour evenly over the dish.",
      "Sprinkle with paprika.",
      "Bake for 30 minutes until bubbly and browned."
    ]
  }
];

const blogPostsData = [
  {
    id: "wonderful-partnership",
    title: "A Wonderful Partnership Evolves",
    excerpt: "Goose Point Oysters has always been committed to quality and safety. Our partnership with Oregon State University Seafood Laboratory continues to push the boundaries of innovation with our Fresher Under Pressure products.",
    fullContent: `Goose Point Oysters has always been committed to quality and safety. Our partnership with Oregon State University Seafood Laboratory continues to push the boundaries of innovation with our Fresher Under Pressure products.
    
    We have worked closely with the food scientists at OSU to validate our High Hydrostatic Pressure (HHP) processing methods. This technology allows us to shuck oysters without heat, preserving their raw texture and flavor while eliminating harmful bacteria like Vibrio.
    
    This collaboration ensures that when you enjoy a BlueSeal™ oyster, you are getting the safest, highest quality product on the market. It's science and tradition working hand in hand.`,
    date: "March 15, 2024",
    author: "Kathleen Nisbet-Moncy",
    image: "https://goosepoint.com/wp-content/uploads/2016/07/High-Pressure.jpg",
    category: "Updates"
  },
  {
    id: "family-farm-documentary",
    title: "Learn A Little About Our Family Farm",
    excerpt: "Watch our short documentary by Ocean Link Northwest about our family farm and how we strive to improve our small community in Willapa Bay.",
    fullContent: `We are proud to share a short documentary produced by Ocean Link Northwest. This film takes a look behind the scenes at our family farm in Willapa Bay.
    
    For generations, the Nisbet family has been dedicated to sustainable aquaculture. We don't just farm oysters; we steward the estuary. The film highlights our commitment to environmental health, our community in Bay Center, and the hard work that goes into every harvest.
    
    It's a story of tradition, innovation, and love for the water. We hope it gives you a deeper appreciation for the shellfish on your plate.`,
    date: "September 5, 2018",
    author: "Social Media",
    image: "/assets/images/new/family-mudflats.jpg",
    category: "Family Farm"
  },
  {
    id: "food-drink-international",
    title: "Food & Drink International Feature",
    excerpt: "In an effort to further improve the quality of its Goose Point Oysters and drive sustainability, Nisbet Oyster Co. has invested into new technology.",
    fullContent: `We were recently featured in Food & Drink International! The article covers Nisbet Oyster Co.'s journey into the future of aquaculture.
    
    "In an effort to further improve the quality of its Goose Point Oysters and drive sustainability, Nisbet Oyster Co. has invested into new technology."
    
    The piece discusses our investment in automated grading systems, which ensure consistent sizing for our customers. It also highlights our continued use of HHP processing and our sustainable farming practices in Willapa Bay. Being recognized on an international stage is a testament to the hard work of our entire team.`,
    date: "June 4, 2020",
    author: "In The News",
    image: "https://goosepoint.com/wp-content/uploads/2020/06/202OA0830.jpg",
    category: "Press"
  }
];

async function seed() {
  console.log("Seeding database...");
  
  // Insert products
  for (const product of productsData) {
    await db.insert(products).values(product).onConflictDoNothing();
  }
  console.log(`Inserted ${productsData.length} products`);
  
  // Insert recipes
  for (const recipe of recipesData) {
    await db.insert(recipes).values(recipe).onConflictDoNothing();
  }
  console.log(`Inserted ${recipesData.length} recipes`);
  
  // Insert blog posts
  for (const post of blogPostsData) {
    await db.insert(blogPosts).values(post).onConflictDoNothing();
  }
  console.log(`Inserted ${blogPostsData.length} blog posts`);
  
  console.log("Seeding complete!");
  process.exit(0);
}

seed().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});
