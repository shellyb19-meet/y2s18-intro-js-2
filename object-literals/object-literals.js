// Create your 'me' object literal here!
var me={
	firstName: "shelly",
	lastName: "beider",
	favoriteFoods: ["pasta", "pizza", "icecream"],
	age: 15,
	picture: "https://bit.ly/2KgLzTk"
}
meString = JSON.stringify(me);
document.write(meString)