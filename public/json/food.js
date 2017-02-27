var food = [
    {
	"menuID" : 20,
	"type"   : "food",
	"label"  : "Hamburgare",
	"price"  : 70,
	"ingredients": [
	    {
		"onion"  : true,
		"gluten" : true,
		"vegan"  : false,
		"lactose": true,
		"pickles": true,
		"cheese" : true,
		"bacon"  : [
		    {
			"include" : false,
			"price" : 5
		    }
		],
		"egg"    : [
		    {
			"include" : false,
			"price" : 5
		    }
		]
	    }
	]
    }
]


var formalFood = {
    hamburgare = {
        "menuID" : 20,
        "type": "food",
        "name": "Hamburger",
        "price": 70,
        "ingredients":["onion","cheese","pickles"],
        "allergies": ["gluten free","lactose free"] 
    }
}
