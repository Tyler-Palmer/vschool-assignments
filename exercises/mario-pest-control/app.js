var marioForm = document.inputForm;
console.log(marioForm)
marioForm.addEventListener('submit', function(event){
    event.preventDefault();
    //Goomba
    var goombaSmash = Number(inputForm.goombaIn.value);
    var aGoom = 5;
    var goombaTotal = aGoom * goombaSmash
    console.log(goombaTotal)
    //Bob-omb
    var bobombSmash = Number(inputForm.bobombIn.value);
    var aBob = 7;
    var bobombTotal = aBob * bobombSmash
    console.log(bobombTotal)
    //Cheep-cheep
    var cheepSmash = Number(inputForm.cheepIn.value);
    var aCheep = 11;
    var cheepTotal = aCheep * cheepSmash
    console.log(cheepTotal)
    document.getElementById('results').innerHTML = Number(goombaTotal + bobombTotal + cheepTotal)
})

