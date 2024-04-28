export const NavigationData = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          to: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          to: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        // Ensure sections array is defined
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", id: "top", to: `{women/clothing/tops}` },
            { name: "Dresses", id: "Women_dress", to: "#" },
            { name: "Lengha choli", id: "lengha_choli" },
            { name: "Sweaters", id: "sweater" },
            { name: "T-Shirts", id: "t-shirt" },
            { name: "Jackets", id: "jacket" },
            { name: "Gouns", id: "gouns" },
            { name: "Saree", id: "saree" },
            { name: "Activewear", to: "#" },
            { name: "Browse All", to: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches",to: "#" },
            { name: "Handbags",to: "#" },
            { name: "Sunglasses",to: "#" },
            { name: "Hats",to: "#" },
            { name: "Belts",to: "#" },
            { name: "Browse All",to: "#" },
          ],
        },
        {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Aranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Full Nelson', id: '#' },
              { name: 'My way', id: '#' },
            ]
        }
           
            
      ],
    },
    //   second category
    {
      id: "Men",
      name: "Men",
      featured: [
        // Featured items
      ],
      sections: [
        // Ensure sections array is defined
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", id: "top", to: `{men/clothing/tops}` },
            { name: "Dresses", id: "Men_dress", to: "#" },
            { name: "Jeans", id: "jeans" },
            { name: "Sweaters", id: "sweater" },
            { name: "T-Shirts", id: "t-shirt" },
            { name: "Jackets", id: "jacket" },
            { name: "Gouns", id: "gouns" },
            { name: "Kurta", id: "kurta" },
            { name: "Pant", id: "pant" },
          ],
        },
        // Other sections
      ],
    },
  ],
  pages: [
    { name: "Company", id: "/" },
    { name: "Stores", id: "/" },
  ],
};
