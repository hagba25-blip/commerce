// --- Produits ---
const products = [
  {name:"faut plat", price:"200 FCFA", comment:"faut plat Super qualité", img:"images/assiete.jpg"},
  {name:"CHISE PLASTIQUE", price:"2.500 FCFA", comment:"Très demandé", img:"images/chese1.jpg"},
  {name:"FRIGIDAIRE DE GLACE", price:"60.000 FCFA", comment:"Nouveau", img:"images/frigidair.jpg"},
  {name:"SOURIS SANS FILE", price:"1.500 FCFA", comment:"Promo spéciale", img:"images/sourisss.jpg"},
  {name:"MONTER EN OR", price:"3.000 FCFA", comment:"Montre en or très attirant", img:"images/monmontre.jpg"},
  {name:"HAUT PARLEUR PUBLICITAIRE", price:"12.000 FCFA", comment:"Édition limitée", img:"images/hoparleur.jpg"},
  {name:"FRIGIDAIRE", price:"66.000 FCFA", comment:"Populaire", img:"images/frigidair&.jpg"},
  {name:"TABLETTE", price:"20.000 FCFA", comment:"Tablette enfant", img:"images/tablette.jpg"},
  {name:"BATERIE ARTISTE", price:"100.000 FCFA", comment:"Batterie moderne avec base éclairante", img:"images/bateri.jpg"},
  {name:"CHAISE", price:"2.000 FCFA", comment:"Chaise plastique solide", img:"images/chese22.jpg"},
  {name:"TENIS DE SPORT", price:"7.000 FCFA", comment:"Tenis fermé pour la jeunesse", img:"images/chaussur.jpg"},
  {name:"ORDINATEUR", price:"110.000 FCFA", comment:"PC de haut niveau version avancée", img:"images/ordinateur.jpg"},
  {name:"VENTILATEUR", price:"10.000 FCFA", comment:"Ventilateur Super qualité", img:"images/ventilateur.jpg"},
  {name:"BRASSEUR", price:"20.000 FCFA", comment:"Brasseur plafonnier Super qualité", img:"images/ventilateur_plafon.jpg"},
  {name:"HAOJUE", price:"560.000 FCFA", comment:"Moto Haojue dame nouveau", img:"images/moto22.jpg"},
  {name:"GITAR", price:"55.000 FCFA", comment:"Guitare moderne son éclatant", img:"images/gitar.jpg"},
  {name:"FRIGIDAIRE DU SALON", price:"90.000 FCFA", comment:"Frigidaire du salon décoré", img:"images/friji.jpg"},
  {name:"CASQUE BLUETOOTH", price:"2.200 FCFA", comment:"Casque bluetooth", img:"images/casque_audi.jpg"},
  {name:"TSHIRT HOMME", price:"1.500 FCFA", comment:"Tshirt de bonne qualité", img:"images/habi_hom.jpg"},
  {name:"TSHIRT BISEXE", price:"1.500 FCFA", comment:"Tshirt de bonne qualité et couleur", img:"images/habi_hom2.jpg"}
];

// --- Panier ---
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// --- Affichage produits ---
function renderProducts(list){
  const container = document.getElementById("productList");
  if(!container) return;

  // Debug : afficher la liste reçue
  console.log("Produits à afficher:", list);
  
  container.innerHTML="";
  list.forEach((p)=>{
    const div=document.createElement("div");
    div.className="product";
    div.innerHTML=`
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Prix: ${p.price}</p>
      <p>${p.comment}</p>
      <button onclick="addToCart('${p.name}','${p.price}','${p.img}')">Ajouter au panier</button>
    `;
    container.appendChild(div);
  });
}

// --- Ajouter au panier ---
function addToCart(name,price,img){
  const item = cart.find(c=>c.name===name);
  if(item){ item.qty++; }
  else { cart.push({name,price,img,qty:1}); }
  localStorage.setItem("cart",JSON.stringify(cart));
  updateCartCount();
}

// --- Compteur panier ---
function updateCartCount(){
  const count = cart.reduce((sum,i)=>sum+i.qty,0);
  const el=document.getElementById("cartCount");
  if(el) el.textContent=count;
}

// --- Affichage du panier ---
function renderCart(){
  const container = document.getElementById("cartItems");
  const totalDiv = document.getElementById("cartTotal");
  if(!container) return;

  container.innerHTML="";
  let total=0;

  cart.forEach((item,index)=>{
    const priceNum=parseInt(item.price.replace(/\D/g,"")); // extraire le nombre
    const subtotal=priceNum*item.qty;
    total+=subtotal;

    const div=document.createElement("div");
    div.className="cart-item";
    div.innerHTML=`
      <img src="${item.img}" alt="${item.name}" style="width:80px;">
      <h3>${item.name}</h3>
      <p>Prix: ${item.price}</p>
      <p>Quantité: 
        <button onclick="changeQty(${index},-1)">-</button>
        ${item.qty}
        <button onclick="changeQty(${index},1)">+</button>
      </p>
      <p>Sous-total: ${subtotal} FCFA</p>
      <button onclick="removeItem(${index})">Supprimer</button>
    `;
    container.appendChild(div);
  });

  if(totalDiv) totalDiv.textContent="Total: "+total+" FCFA";
}

// --- Modifier quantité ---
function changeQty(index,delta){
  cart[index].qty+=delta;
  if(cart[index].qty<=0){ cart.splice(index,1); }
  localStorage.setItem("cart",JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

// --- Supprimer un produit ---
function removeItem(index){
  cart.splice(index,1);
  localStorage.setItem("cart",JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

// --- Commander ---
function checkout(){
  const formDiv=document.getElementById("checkoutForm");
  if(formDiv) formDiv.style.display="block";
}

// --- Soumission du formulaire ---
document.addEventListener("DOMContentLoaded",()=>{
  const form=document.getElementById("orderForm");
  if(form){
    form.addEventListener("submit",function(e){
      e.preventDefault();
      const name=document.getElementById("fullName").value;
      const phone=document.getElementById("phone").value;
      const city=document.getElementById("city").value;
      const address=document.getElementById("address").value;
      const payment=document.querySelector('input[name="payment"]:checked').value;

      let msg="Nouvelle commande:\n";
      cart.forEach(c=>{
        msg+=`- ${c.name} (${c.price}) x${c.qty}\n`;
      });
      msg+=`\nNom: ${name}\nTéléphone: ${phone}\nVille: ${city}\nAdresse: ${address}\nPaiement: ${payment}`;

      // Envoi vers WhatsApp
      window.open("https://wa.me/22891962246?text="+encodeURIComponent(msg),"_blank");

      // ✅ Afficher le badge de confirmation
      const badge=document.getElementById("successBadge");
      if(badge){
        badge.style.display="block";
        setTimeout(()=>{ badge.style.display="none"; },9000);
      }
    });
  }

  // Initialisation
  renderProducts(products);
  renderCart();
  updateCartCount();
});

// --- Recherche produit ---
function searchProduct(){
  const val=document.getElementById("searchInput")?.value.toLowerCase();
  if(val===undefined) return;
  const filtered=products.filter(p=>p.name.toLowerCase().includes(val));
  renderProducts(filtered);
}

// --- Toggle barre de recherche ---
function toggleSearch(){
  const bar = document.getElementById("searchBar");
  if(bar) bar.style.display = (bar.style.display === "none") ? "block" : "none";
}
