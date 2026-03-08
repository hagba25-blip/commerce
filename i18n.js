// i18n.js
const translations = {
  fr: {
    title: "PayPay Shop",
    searchPlaceholder: "Chercher un produit...",
    price: "Prix",
    addToCart: "Ajouter au panier",
    whatsapp: "whatsapp",
    cartEmpty: "Panier vide",
    cartMessage: "Bonjour, voici mon panier:",
    discuss: "Je veux discuter de",
    footer: { whatsapp:"WhatsApp", email:"Email", facebook:"Facebook", tiktok:"TikTok", cart:"Panier" },
    products: [
      {name:"Assiette faut plat", comment:"Faut plat super qualité"},
      {name:"Chaise plastique", comment:"Très demandé"},
      {name:"Frigidaire de glace", comment:"Nouveau"},
      {name:"Souris sans fil", comment:"Promo spéciale"},
      {name:"Montre en or", comment:"Montre en or très attirante"},
      {name:"Haut-parleur publicitaire", comment:"Édition limitée"},
      {name:"Frigidaire", comment:"Populaire"},
      {name:"Tablette", comment:"Tablette enfant"},
      {name:"Batterie artiste", comment:"Batterie moderne avec base éclairante"},
      {name:"Chaise", comment:"Chaise plastique et solide"},
      {name:"Tennis de sport", comment:"Tennis fermé pour la jeunesse"},
      {name:"Ordinateur", comment:"PC de haut niveau version avancée"},
      {name:"Ventilateur", comment:"Ventilateur super qualité"},
      {name:"Brasseur", comment:"Brasseur super qualité plafonnier"},
      {name:"Haojue", comment:"Moto Haojue dame nouveau"},
      {name:"Guitare", comment:"Guitare moderne avec son éclatant"},
      {name:"Frigidaire du salon", comment:"Bien décoré"},
      {name:"Casque Bluetooth", comment:"Casque Bluetooth"},
      {name:"T-shirt homme", comment:"Bonne qualité"},
      {name:"T-shirt homme", comment:"Bonne qualité et couleur"}
    ]
  },
  en: {
    title: "PayPay Shop",
    searchPlaceholder: "Search a product...",
    price: "Price",
    addToCart: "Add to cart",
    whatsapp: "whatsapp",
    cartEmpty: "Cart is empty",
    cartMessage: "Hello, here is my cart:",
    discuss: "I want to discuss",
    footer: { whatsapp:"WhatsApp", email:"Email", facebook:"Facebook", tiktok:"TikTok", cart:"Cart" },
    products: [
      {name:"Flat plate", comment:"High quality flat plate"},
      {name:"Plastic chair", comment:"Highly demanded"},
      {name:"Ice refrigerator", comment:"New arrival"},
      {name:"Wireless mouse", comment:"Special promotion"},
      {name:"Gold watch", comment:"Attractive gold watch"},
      {name:"Advertising speaker", comment:"Limited edition"},
      {name:"Refrigerator", comment:"Popular"},
      {name:"Tablet", comment:"Kids tablet"},
      {name:"Artist drum set", comment:"Modern drum with lighted base"},
      {name:"Chair", comment:"Solid plastic chair"},
      {name:"Sport tennis shoes", comment:"Closed tennis shoes for youth"},
      {name:"Computer", comment:"High-level advanced PC"},
      {name:"Fan", comment:"High quality fan"},
      {name:"Ceiling fan", comment:"High quality ceiling fan"},
      {name:"Haojue motorcycle", comment:"New Haojue for ladies"},
      {name:"Guitar", comment:"Modern guitar with bright sound"},
      {name:"Living room refrigerator", comment:"Well decorated"},
      {name:"Bluetooth headset", comment:"Bluetooth headset"},
      {name:"Men’s T-shirt", comment:"Good quality"},
      {name:"Men’s T-shirt", comment:"Good quality and color"}
    ]
  },
  ew: {
    title: "PayPay ƒe Dɔwɔnu",
    searchPlaceholder: "Dɔwɔnu bia...",
    price: "Xɔse",
    addToCart: "Tsɔ na kɔnta",
    whatsapp: "whatsapp",
    cartEmpty: "Kɔnta me le mɔ",
    cartMessage: "Miawoe, nye kɔnta nyea:",
    discuss: "Meɖi be maɖo gbe ɖe",
    footer: { whatsapp:"WhatsApp", email:"Email", facebook:"Facebook", tiktok:"TikTok", cart:"Kɔnta" },
    products: [
      {name:"Asiɛte", comment:"Asiɛte ƒe nyuie"},
      {name:"Agɔme plastik", comment:"Wɔwɔ le gbɔ"},
      {name:"Frigidaire ƒe ice", comment:"Nyea"},
      {name:"Sɔri si me fili o", comment:"Promo kɔkɔe"},
      {name:"Afe kɔkɔ", comment:"Afe kɔkɔ ƒe nyuie"},
      {name:"Hɔ-parleur", comment:"Edition ƒe kɔkɔe"},
      {name:"Frigidaire", comment:"Popular"},
      {name:"Tablet", comment:"Tablet ƒe viwo"},
      {name:"Bateri artiste", comment:"Bateri modern kple light base"},
      {name:"Agɔme", comment:"Agɔme plastik kple nyuie"},
      {name:"Tenis sport", comment:"Tenis ƒe viwo"},
      {name:"Kɔmputa", comment:"PC ƒe nyuie"},
      {name:"Ventilateur", comment:"Ventilateur ƒe nyuie"},
      {name:"Brasseur", comment:"Brasseur plafon ƒe nyuie"},
      {name:"Haojue moto", comment:"Moto Haojue viƒe"},
      {name:"Gita", comment:"Gita modern kple nyuie song"},
      {name:"Frigidaire salon", comment:"Salon ƒe nyuie"},
      {name:"Casque Bluetooth", comment:"Casque Bluetooth"},
      {name:"T-shirt ameawo", comment:"Nyuie"},
      {name:"T-shirt ameawo", comment:"Nyuie kple color"}
    ]
  }
};

let currentLang = "fr";

function setLanguage(lang) {
  currentLang = lang;
  document.querySelector("header h1").textContent = translations[lang].title;
  document.getElementById("searchInput").placeholder = translations[lang].searchPlaceholder;
  // Re-render products with translations
  renderProducts(products, lang);
}
