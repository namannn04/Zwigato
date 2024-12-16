import menu1 from '/menu/salad.jpg'
import menu2 from '/menu/rolls.jpeg'
import menu3 from '/menu/dessert.jpg'
import menu4 from '/menu/sandwhich.jpg'
import menu5 from '/menu/cake.jpg'
import menu6 from '/menu/pureVeg.jpeg'
import menu7 from '/menu/pasta.jpeg'
import menu8 from '/menu/noodles.jpg'

import rating_4 from '/assets/rating-4.png'
import rating_5 from '/assets/rating-5.png'

import salad_1 from '/foodList/fruitSalad.jpg'
import salad_2 from '/foodList/greekSalad.jpg'
import salad_3 from '/foodList/santaFeSalad.jpg'
import salad_4 from '/foodList/veggieSalad.jpg'
import salad_5 from '/foodList/ketoPaneerSalad.jpg'
import roll_1 from '/foodList/springRoll.jpg'
import roll_2 from '/foodList/paneerTikkaRoll.jpg'
import roll_3 from '/foodList/vegFrankie.jpeg'
import roll_4 from '/foodList/kathiRoll.jpg'
import roll_5 from '/foodList/mushroomRoll.jpg'
import des_1 from '/foodList/brownieSundae.jpg'
import des_2 from '/foodList/chocoLavaCake.jpg'
import des_3 from '/foodList/hotChocolateFudgeSundae.jpg'
import des_4 from '/foodList/kitkatJarCake.jpeg'
import des_5 from '/foodList/nutellaWaffle.jpg'

export const menu_list = [
    {
        menu_name: "Salad",
        menu_image: menu1
    },
    {
        menu_name: "Rolls",
        menu_image: menu2
    },
    {
        menu_name: "Desserts",
        menu_image: menu3
    },
    {
        menu_name: "Sandwhich",
        menu_image: menu4
    },
    {
        menu_name: "Cake",
        menu_image: menu5
    },
    {
        menu_name: "Pure Veg",
        menu_image: menu6
    },
    {
        menu_name: "Pasta",
        menu_image: menu7
    },
    {
        menu_name: "Noodles",
        menu_image: menu8
    },
]

export const food_list = [
    {
        _id: "1",
        name: "Fruit Salad",
        rate: rating_4,
        image: salad_1,
        price: 180,
        description: "A refreshing mix of juicy, seasonal fruits for a sweet, healthy treat!",
        category: "Salad"
    },
    {
        _id: "2",
        name: "Greek Salad",
        rate: rating_5,
        image: salad_2,
        price: 150,
        description: "A Mediterranean classic with crisp veggies, feta, and olives!",
        category: "Salad"
    },
    {
        _id: "3",
        name: "Santa Fe Salad",
        rate: rating_4,
        image: salad_3,
        price: 190,
        description: "A zesty salad with crunchy tortilla strips and vibrant veggies!",
        category: "Salad"
    },
    {
        _id: "4",
        name: "Veggie Salad",
        rate: rating_5,
        image: salad_4,
        price: 110,
        description: "A wholesome blend of fresh, crunchy vegetables for a healthy bite!",
        category: "Salad"
    },
    {
        _id: "5",
        name: "Keto Paneer Salad",
        rate: rating_4,
        image: salad_5,
        price: 140,
        description: "A protein-packed salad with creamy paneer and fresh veggies!",
        category: "Salad"
    },
    {
        _id: "6",
        name: "Spring Roll",
        rate: rating_5,
        image: roll_1,
        price: 50,
        description: "Crispy and golden, packed with fresh veggies and mild spices!",
        category: "Rolls"
    },
    {
        _id: "7",
        name: "Paneer Tikka Roll",
        rate: rating_4,
        image: roll_2,
        price: 80,
        description: "Smoky paneer cubes wrapped in a soft roti, bursting with flavors!",
        category: "Rolls"
    },
    {
        _id: "8",
        name: "Veg Frankie",
        rate: rating_5,
        image: roll_3,
        price: 80,
        description: "A tangy veggie delight with a hint of street-style magic!",
        category: "Rolls"
    },
    {
        _id: "9",
        name: "Kathi Roll",
        rate: rating_4,
        image: roll_4,
        price: 50,
        description: "Soft paratha rolled with spiced fillings, a perfect quick bite!",
        category: "Rolls"
    },
    {
        _id: "10",
        name: "Mushroom Roll",
        rate: rating_5,
        image: roll_5,
        price: 70,
        description: "Juicy mushrooms in a creamy, spiced wrap, pure indulgence!",
        category: "Rolls"
    },
    {
        _id: "11",
        name: "Brownie Sundae",
        rate: rating_4,
        image: des_1,
        price: 120,
        description: "Warm brownie with vanilla ice cream, chocolate sauce, and crunchy nuts!",
        category: "Desserts"
    },
    {
        _id: "12",
        name: "Choco Lava Cake",
        rate: rating_5,
        image: des_2,
        price: 120,
        description: "Soft chocolate cake with a gooey molten chocolate center!",
        category: "Desserts"
    },
    {
        _id: "13",
        name: "Hot Chocolate Fudge Sundae",
        rate: rating_4,
        image: des_3,
        price: 120,
        description: "Vanilla ice cream layered with hot chocolate fudge and sprinkled with nuts!",
        category: "Desserts"
    },
    {
        _id: "14",
        name: "Kitkat Jar Cake",
        rate: rating_5,
        image: des_4,
        price: 120,
        description: "Layers of moist chocolate cake and crushed KitKat in a jar!",
        category: "Desserts"
    },
    {
        _id: "15",
        name: "Nutella Waffle",
        rate: rating_4,
        image: des_5,
        price: 120,
        description: "Crispy waffle topped generously with creamy Nutella!",
        category: "Desserts"
    },
]