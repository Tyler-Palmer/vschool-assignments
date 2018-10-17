var shopper = {
    firstName: 'Tyler',
    lastName: 'Palmer',
    Age: 27,
    isHuman: true,
    groceryCart: ['apples', 'bananas', 'eggs', 'spinach', 'greek yogurt', 'granola'],
    fullName: function(){
        console.log("The shopper's name is" + " " + this.firstName + " " + this.lastName)
    }
}

shopper.fullName();