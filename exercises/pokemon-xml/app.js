var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 & xhr.status == 200){
        var jsonData = xhr.responseText
        var data = JSON.parse(jsonData);
        console.log(data)
        myFunctionToDoSomethingWithData(data)
    }
}
//      Request Type            - URL -                                         - Async (true)
xhr.open("GET", "https://vschool-cors.herokuapp.com?url=https://api.vschool.io/pokemon", true)
//      Send Request
xhr.send()

function myFunctionToDoSomethingWithData(data){
    var list = data.objects[0].pokemon
        for(i = 0; i < list.length; i++){
            document.getElementById("pokemon").innerHTML +=`<div class="poke1"><h1>Pokemon Name: </h1><h2>${list[i].name}</h2></div>`;
            // document.getElementById("pokemon").innerHTML +=`Parsed JSON's 'name' property: + ${list[i].name}`
        }
}