travelForm = document.travelDet

travelForm.addEventListener('submit', function(event){
        event.preventDefault()
        var firstName = travelForm.firstName.value;
        var lastName = travelForm.lastName.value;
        //
        var age = travelForm.age.value;
        //
        var gender = travelForm.gender.value;
        //
        var location = travelForm.location.value;
        // 
        var checkedDiet = [];
        var checkedBoxes = document.querySelectorAll("input[name=diet]:checked");
            for (var i = 0; i < checkedBoxes.length; i++) {
        checkedDiet.push(checkedBoxes[i].value);
        }
        console.log(checkedDiet);
        var diet = travelForm.diet.value;
        console.log(diet)
        // for (var i = 0; i < diet.length; i++){
        //     if(diet.checked[i]){
        //         checkedDiet.push(diet[i].value)
        //     }
        // }console.log(checkedDiet)
        alert(`First Name: ${firstName}\n Last Name: ${lastName}\n Age: ${age}\n Gender: ${gender}\n Location: ${location}\n Dietary Restrictions: ${checkedDiet}`)
    })