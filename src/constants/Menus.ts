export const Menus = [
  { name: "Accueil", path: "/" },
  {
    name: "Nos Produits",
   
    subMenu: [
      {
        name: "Climatisation",
        
        subMenu: [
          { name: "Gains textiles", path: "/produits/climatisation/gains-textiles" },
          { name: "Filtres pour les unités gainable", path: "/produits/climatisation/filtres" },
          { name: "Manchettes souples", path: "/produits/climatisation/manchettes-souples" },
        ],
      },
      {
        name: "Isolation Thermique",
        
        subMenu: [
          { name: "Couvercles de protection", path: "/produits/isolation-thermique/couvercles" },
          { name: "Matelas de protection thermique", path: "/produits/isolation-thermique/matelas" },
        ],
      },
      { name: "Airbags thermique", path: "/produits/airbags" },
      { name: "Tente à usage multiple", path: "/produits/tente" },
      { name: "Jeux Gonflables", path: "/produits/jeux-gonflables" },
    ],
  },
  { name: "A propos", path: "/apropos" },
  { name: "Contact", path: "/contact" },
];
