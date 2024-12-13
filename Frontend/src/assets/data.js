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
    }    
]