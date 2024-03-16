export const color = [
    "white",
    "Black",
    "Red",
    "marun",
    "Being",
    "Pink",
    "Green",
    "Yellow",
];

export const filters = [
    {
        id: "color",
        name:"Color",
        options: [
            { value: "white", label: "White" },
            { value: "Black", label: "Black" },
            { value: "Red", label: "Red" },
            { value: "marun", label: "Maroon" },
            { value: "Being", label: "Beige" },
            { value: "Pink", label: "Pink" },
            { value: "Green", label: "Green" },
            { value: "Yellow", label: "Yellow" },
        ]
    },
    {
        id: "size",
        name: "Size",
        options: [
            { value: "S", label: "S" },
            { value: "M", label: "M" },
            { value: "L", label: "L" },
        ],
    },
];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "159-399", label: "pkr159 To pkr399" },
            { value: "399-999", label: "pkr399 To pkr999" },
            { value: "999-1999", label: "pkr999 To pkr1999" },
            { value: "1999-2999", label: "pkr1999 To pkr2999" },
            { value: "2999-4999", label: "pkr2999 To pkr4999" },
        ],
    },
    {
        id: "discount",
        name: "Disccount Range",
        options: [
            { value: "10", label: "10% And Above" },
            { value: "20", label: "20% And Above" },
            { value: "30", label: "30% And Above" },
            { value: "40", label: "40% And Above" },
            { value: "50", label: "50% And Above" },
            { value: "60", label: "60% And Above" },
            { value: "70", label: "70% And Above" },
            { value: "80", label: "80% And Above" },
        ],
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "in_stock", label: "In Stock" },
            { value: "Out_of_stock", label: "Out of Stock" },
        ],
    },
];
