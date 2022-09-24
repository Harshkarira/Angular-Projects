import { Injectable } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { product } from './shared/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: product[] = 
    [{
      "id": 1,
      "name": "Lamb Leg - Bone - In Nz",
      "category": "Ornamental Railings",
      "price": "$2.75",
      "quantity": 74
    }, {
      "id": 2,
      "name": "Compound - Strawberry",
      "category": "Framing (Wood)",
      "price": "$0.04",
      "quantity": 39
    }, {
      "id": 3,
      "name": "Peppercorns - Pink",
      "category": "Drilled Shafts",
      "price": "$3.30",
      "quantity": 56
    }, {
      "id": 4,
      "name": "Bread - White, Sliced",
      "category": "HVAC",
      "price": "$4.41",
      "quantity": 79
    }, {
      "id": 5,
      "name": "Cheese - Parmesan Grated",
      "category": "Elevator",
      "price": "$2.07",
      "quantity": 54
    }, {
      "id": 6,
      "name": "French Pastry - Mini Chocolate",
      "category": "RF Shielding",
      "price": "$4.38",
      "quantity": 29
    }, {
      "id": 7,
      "name": "Soup - French Onion, Dry",
      "category": "Framing (Steel)",
      "price": "$5.56",
      "quantity": 48
    }, {
      "id": 8,
      "name": "Basil - Dry, Rubbed",
      "category": "Marlite Panels (FED)",
      "price": "$4.81",
      "quantity": 85
    }, {
      "id": 9,
      "name": "Soup - Campbells Chili Veg",
      "category": "Waterproofing & Caulking",
      "price": "$1.88",
      "quantity": 57
    }, {
      "id": 10,
      "name": "Eggs - Extra Large",
      "category": "Prefabricated Aluminum Metal Canopies",
      "price": "$8.43",
      "quantity": 73
    }, {
      "id": 11,
      "name": "Cakes Assorted",
      "category": "Framing (Steel)",
      "price": "$9.61",
      "quantity": 57
    }, {
      "id": 12,
      "name": "Pizza Pizza Dough",
      "category": "Marlite Panels (FED)",
      "price": "$1.73",
      "quantity": 55
    }, {
      "id": 13,
      "name": "Beef - Roasted, Cooked",
      "category": "EIFS",
      "price": "$7.51",
      "quantity": 87
    }, {
      "id": 14,
      "name": "Cumin - Ground",
      "category": "RF Shielding",
      "price": "$1.35",
      "quantity": 60
    }, {
      "id": 15,
      "name": "Longos - Penne With Pesto",
      "category": "Construction Clean and Final Clean",
      "price": "$9.35",
      "quantity": 82
    }, {
      "id": 16,
      "name": "Chicken - Base",
      "category": "Ornamental Railings",
      "price": "$6.50",
      "quantity": 54
    }, {
      "id": 17,
      "name": "Crab Brie In Phyllo",
      "category": "Masonry & Precast",
      "price": "$3.43",
      "quantity": 1
    }, {
      "id": 18,
      "name": "Muffin Hinge 117n",
      "category": "Glass & Glazing",
      "price": "$8.65",
      "quantity": 21
    }, {
      "id": 19,
      "name": "Mushroom - Lg - Cello",
      "category": "Landscaping & Irrigation",
      "price": "$5.68",
      "quantity": 53
    }, {
      "id": 20,
      "name": "Jam - Marmalade, Orange",
      "category": "Site Furnishings",
      "price": "$6.06",
      "quantity": 39
    }, {
      "id": 21,
      "name": "Pork - Bacon Cooked Slcd",
      "category": "Drywall & Acoustical (FED)",
      "price": "$8.99",
      "quantity": 32
    }, {
      "id": 22,
      "name": "Garam Masala Powder",
      "category": "Roofing (Metal)",
      "price": "$3.08",
      "quantity": 62
    }, {
      "id": 23,
      "name": "Glass Clear 7 Oz Xl",
      "category": "Epoxy Flooring",
      "price": "$2.22",
      "quantity": 84
    }, {
      "id": 24,
      "name": "Kumquat",
      "category": "Temp Fencing, Decorative Fencing and Gates",
      "price": "$7.62",
      "quantity": 50
    }, {
      "id": 25,
      "name": "Juice - Cranberry 284ml",
      "category": "EIFS",
      "price": "$6.52",
      "quantity": 85
    }, {
      "id": 26,
      "name": "Sugar - Icing",
      "category": "Drilled Shafts",
      "price": "$8.75",
      "quantity": 31
    }, {
      "id": 27,
      "name": "Mushroom - Enoki, Fresh",
      "category": "Drywall & Acoustical (MOB)",
      "price": "$5.73",
      "quantity": 77
    }, {
      "id": 28,
      "name": "Beef - Short Ribs",
      "category": "Plumbing & Medical Gas",
      "price": "$6.45",
      "quantity": 44
    }, {
      "id": 29,
      "name": "Shortbread - Cookie Crumbs",
      "category": "Ornamental Railings",
      "price": "$7.83",
      "quantity": 75
    }, {
      "id": 30,
      "name": "Vermouth - White, Cinzano",
      "category": "Elevator",
      "price": "$8.48",
      "quantity": 92
    }, {
      "id": 31,
      "name": "Steel Wool",
      "category": "Temp Fencing, Decorative Fencing and Gates",
      "price": "$4.39",
      "quantity": 40
    }, {
      "id": 32,
      "name": "Wine - Jafflin Bourgongone",
      "category": "Ornamental Railings",
      "price": "$1.45",
      "quantity": 25
    }, {
      "id": 33,
      "name": "Soup - Campbells Beef Strogonoff",
      "category": "Doors, Frames & Hardware",
      "price": "$9.72",
      "quantity": 32
    }, {
      "id": 34,
      "name": "Schnappes Peppermint - Walker",
      "category": "Drilled Shafts",
      "price": "$9.53",
      "quantity": 5
    }, {
      "id": 35,
      "name": "Wine La Vielle Ferme Cote Du",
      "category": "Landscaping & Irrigation",
      "price": "$3.09",
      "quantity": 59
    }, {
      "id": 36,
      "name": "Kale - Red",
      "category": "Plumbing & Medical Gas",
      "price": "$2.70",
      "quantity": 86
    }, {
      "id": 37,
      "name": "Orange Roughy 4/6 Oz",
      "category": "Drilled Shafts",
      "price": "$4.19",
      "quantity": 9
    }, {
      "id": 38,
      "name": "Cheese - Cheddar, Medium",
      "category": "Asphalt Paving",
      "price": "$2.71",
      "quantity": 7
    }, {
      "id": 39,
      "name": "Soup - Cream Of Broccoli",
      "category": "Site Furnishings",
      "price": "$2.82",
      "quantity": 49
    }, {
      "id": 40,
      "name": "Cheese - Cottage Cheese",
      "category": "Glass & Glazing",
      "price": "$9.77",
      "quantity": 18
    }, {
      "id": 41,
      "name": "Sauce - Caesar Dressing",
      "category": "Ornamental Railings",
      "price": "$4.92",
      "quantity": 28
    }, {
      "id": 42,
      "name": "Yokaline",
      "category": "Prefabricated Aluminum Metal Canopies",
      "price": "$3.13",
      "quantity": 8
    }, {
      "id": 43,
      "name": "Sprouts - Onion",
      "category": "Elevator",
      "price": "$3.68",
      "quantity": 11
    }, {
      "id": 44,
      "name": "Southern Comfort",
      "category": "Drywall & Acoustical (MOB)",
      "price": "$5.70",
      "quantity": 21
    }, {
      "id": 45,
      "name": "Ecolab - Orange Frc, Cleaner",
      "category": "Framing (Steel)",
      "price": "$6.06",
      "quantity": 72
    }, {
      "id": 46,
      "name": "Beer - Molson Excel",
      "category": "Asphalt Paving",
      "price": "$6.19",
      "quantity": 83
    }, {
      "id": 47,
      "name": "Potatoes - Yukon Gold, 80 Ct",
      "category": "Fire Protection",
      "price": "$3.54",
      "quantity": 16
    }, {
      "id": 48,
      "name": "Beef Dry Aged Tenderloin Aaa",
      "category": "Soft Flooring and Base",
      "price": "$0.46",
      "quantity": 68
    }, {
      "id": 49,
      "name": "Pumpkin - Seed",
      "category": "Casework",
      "price": "$5.35",
      "quantity": 89
    }, {
      "id": 50,
      "name": "Monkfish Fresh - Skin Off",
      "category": "Drywall & Acoustical (MOB)",
      "price": "$4.06",
      "quantity": 33
    }, {
      "id": 51,
      "name": "Anchovy Paste - 56 G Tube",
      "category": "Soft Flooring and Base",
      "price": "$2.83",
      "quantity": 87
    }, {
      "id": 52,
      "name": "Sauce - Alfredo",
      "category": "Framing (Steel)",
      "price": "$3.42",
      "quantity": 3
    }, {
      "id": 53,
      "name": "Yogurt - French Vanilla",
      "category": "Rebar & Wire Mesh Install",
      "price": "$6.41",
      "quantity": 95
    }, {
      "id": 54,
      "name": "Beef - Rouladin, Sliced",
      "category": "Drywall & Acoustical (FED)",
      "price": "$8.00",
      "quantity": 16
    }, {
      "id": 55,
      "name": "Pop Shoppe Cream Soda",
      "category": "Epoxy Flooring",
      "price": "$6.65",
      "quantity": 88
    }, {
      "id": 56,
      "name": "Wine - Coteaux Du Tricastin Ac",
      "category": "Ornamental Railings",
      "price": "$3.19",
      "quantity": 57
    }, {
      "id": 57,
      "name": "Longos - Grilled Chicken With",
      "category": "Plumbing & Medical Gas",
      "price": "$0.99",
      "quantity": 47
    }, {
      "id": 58,
      "name": "Beets - Candy Cane, Organic",
      "category": "RF Shielding",
      "price": "$2.38",
      "quantity": 25
    }, {
      "id": 59,
      "name": "Pastry - Carrot Muffin - Mini",
      "category": "Epoxy Flooring",
      "price": "$2.07",
      "quantity": 95
    }, {
      "id": 60,
      "name": "Turkey Leg With Drum And Thigh",
      "category": "Marlite Panels (FED)",
      "price": "$0.84",
      "quantity": 25
    }, {
      "id": 61,
      "name": "Graham Cracker Mix",
      "category": "Masonry & Precast",
      "price": "$6.04",
      "quantity": 78
    }, {
      "id": 62,
      "name": "Contreau",
      "category": "Framing (Steel)",
      "price": "$8.71",
      "quantity": 23
    }, {
      "id": 63,
      "name": "Wine - Red, Concha Y Toro",
      "category": "Roofing (Asphalt)",
      "price": "$7.99",
      "quantity": 68
    }, {
      "id": 64,
      "name": "Olives - Nicoise",
      "category": "Prefabricated Aluminum Metal Canopies",
      "price": "$9.93",
      "quantity": 23
    }, {
      "id": 65,
      "name": "Tea - Honey Green Tea",
      "category": "Construction Clean and Final Clean",
      "price": "$0.22",
      "quantity": 64
    }, {
      "id": 66,
      "name": "Sparkling Wine - Rose, Freixenet",
      "category": "Soft Flooring and Base",
      "price": "$0.15",
      "quantity": 60
    }, {
      "id": 67,
      "name": "Grenadillo",
      "category": "Casework",
      "price": "$8.96",
      "quantity": 8
    }, {
      "id": 68,
      "name": "Cream - 18%",
      "category": "Overhead Doors",
      "price": "$8.26",
      "quantity": 97
    }, {
      "id": 69,
      "name": "Cheese - Havarti, Roasted Garlic",
      "category": "Drywall & Acoustical (MOB)",
      "price": "$8.90",
      "quantity": 43
    }, {
      "id": 70,
      "name": "Tarragon - Fresh",
      "category": "Drilled Shafts",
      "price": "$6.57",
      "quantity": 2
    }, {
      "id": 71,
      "name": "Sobe - Orange Carrot",
      "category": "Landscaping & Irrigation",
      "price": "$8.07",
      "quantity": 25
    }, {
      "id": 72,
      "name": "Nantucket Apple Juice",
      "category": "Temp Fencing, Decorative Fencing and Gates",
      "price": "$3.57",
      "quantity": 94
    }, {
      "id": 73,
      "name": "Venison - Striploin",
      "category": "Doors, Frames & Hardware",
      "price": "$8.29",
      "quantity": 48
    }, {
      "id": 74,
      "name": "Soup - Campbells",
      "category": "Sitework & Site Utilities",
      "price": "$1.59",
      "quantity": 14
    }, {
      "id": 75,
      "name": "Capon - Whole",
      "category": "Casework",
      "price": "$5.96",
      "quantity": 41
    }, {
      "id": 76,
      "name": "Olives - Green, Pitted",
      "category": "Landscaping & Irrigation",
      "price": "$7.70",
      "quantity": 17
    }, {
      "id": 77,
      "name": "Crackers - Water",
      "category": "Soft Flooring and Base",
      "price": "$0.51",
      "quantity": 86
    }, {
      "id": 78,
      "name": "Lemonade - Strawberry, 591 Ml",
      "category": "Drywall & Acoustical (FED)",
      "price": "$3.61",
      "quantity": 57
    }, {
      "id": 79,
      "name": "Beef Striploin Aaa",
      "category": "Rebar & Wire Mesh Install",
      "price": "$8.21",
      "quantity": 56
    }, {
      "id": 80,
      "name": "Rice - Wild",
      "category": "Electrical",
      "price": "$1.22",
      "quantity": 57
    }, {
      "id": 81,
      "name": "Clams - Bay",
      "category": "EIFS",
      "price": "$7.32",
      "quantity": 87
    }, {
      "id": 82,
      "name": "Spoon - Soup, Plastic",
      "category": "Hard Tile & Stone",
      "price": "$2.57",
      "quantity": 12
    }, {
      "id": 83,
      "name": "Soup Campbells Mexicali Tortilla",
      "category": "Masonry & Precast",
      "price": "$8.79",
      "quantity": 52
    }, {
      "id": 84,
      "name": "Cocktail Napkin Blue",
      "category": "Construction Clean and Final Clean",
      "price": "$2.51",
      "quantity": 16
    }, {
      "id": 85,
      "name": "Oven Mitts - 15 Inch",
      "category": "Electrical and Fire Alarm",
      "price": "$7.33",
      "quantity": 3
    }, {
      "id": 86,
      "name": "Stock - Beef, White",
      "category": "Exterior Signage",
      "price": "$4.05",
      "quantity": 75
    }, {
      "id": 87,
      "name": "Water - Spring Water 500ml",
      "category": "Fire Sprinkler System",
      "price": "$1.42",
      "quantity": 95
    }, {
      "id": 88,
      "name": "Aspic - Amber",
      "category": "Rebar & Wire Mesh Install",
      "price": "$1.42",
      "quantity": 49
    }, {
      "id": 89,
      "name": "Chicken - Diced, Cooked",
      "category": "Ornamental Railings",
      "price": "$2.90",
      "quantity": 36
    }, {
      "id": 90,
      "name": "Yeast - Fresh, Fleischman",
      "category": "Structural and Misc Steel (Fabrication)",
      "price": "$5.07",
      "quantity": 75
    }, {
      "id": 91,
      "name": "Pepsi, 355 Ml",
      "category": "Masonry",
      "price": "$8.77",
      "quantity": 11
    }, {
      "id": 92,
      "name": "Wine - Alsace Gewurztraminer",
      "category": "Landscaping & Irrigation",
      "price": "$7.66",
      "quantity": 75
    }, {
      "id": 93,
      "name": "Cup Translucent 9 Oz",
      "category": "Exterior Signage",
      "price": "$1.58",
      "quantity": 24
    }, {
      "id": 94,
      "name": "Ice Cream - Strawberry",
      "category": "Termite Control",
      "price": "$7.24",
      "quantity": 61
    }, {
      "id": 95,
      "name": "Nut - Chestnuts, Whole",
      "category": "Electrical",
      "price": "$6.47",
      "quantity": 21
    }, {
      "id": 96,
      "name": "Bread - Roll, Canadian Dinner",
      "category": "Drywall & Acoustical (FED)",
      "price": "$6.84",
      "quantity": 21
    }, {
      "id": 97,
      "name": "Mop Head - Cotton, 24 Oz",
      "category": "Framing (Steel)",
      "price": "$7.90",
      "quantity": 60
    }, {
      "id": 98,
      "name": "Plate - Foam, Bread And Butter",
      "category": "RF Shielding",
      "price": "$0.90",
      "quantity": 66
    }, {
      "id": 99,
      "name": "Turkey - Whole, Fresh",
      "category": "Plumbing & Medical Gas",
      "price": "$8.71",
      "quantity": 90
    }, {
      "id": 100,
      "name": "Soup - Campbells, Cream Of",
      "category": "Casework",
      "price": "$1.14",
      "quantity": 15
    }]

  constructor() { }

  fetchproducts(): product[]{
    return this.product
  }
  log(value:any){
    console.log("from service function")
    console.log(value)
  }
}
