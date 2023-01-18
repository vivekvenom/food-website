let food = [
    {
        name : "burger",
        category: "snacks",
        calories: "400",
        junkfood: "yes",
        image: "burger.jpg"
    },
    {
        name : "sandwitch",
        category: "snacks",
        calories: "250",
        junkfood: "yes",
        image: "sandwitch.jpg"
    },
    {
        name : "noodles",
        category: "snacks",
        calories: "400",
        junkfood: "yes",
        image: "noodles.jpg"
    },
    {
        name : "friedrice",
        category: "snacks",
        calories: "400",
        junkfood: "yes",
        image: "friedrice.jpg"
    },
    {
        name : "pasta",
        category: "snacks",
        calories: "400",
        junkfood: "yes",
        image: "pasta.jpg"
    },
    {
        name : "omlette",
        category: "breakfast",
        calories: "250",
        junkfood: "no",
        image: "omlette.jpg"
    },
    {
        name : "salad",
        category: "breakfast",
        calories: "250",
        junkfood: "no",
        image: "salad.jpg"
    },
    {
        name : "pancakes",
        category: "breakfast",
        calories: "250",
        junkfood: "no",
        image: "pancakes.jpg"
    },
    {
        name : "cereal",
        category: "breakfast",
        calories: "250",
        junkfood: "no",
        image: "cereal.jpg"
    },
    {
        name : "palakpaneer",
        category: "food",
        calories: "300",
        junkfood: "no",
        image: "palakpaneer.jpg"
    }
]

food.forEach(element => {
    let card = document.createElement("div");
    card.classList.add("card",element.category,"hide");
    
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    
    let image = document.createElement("img");
    image.setAttribute("src",element.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("p");
    name.classList.add("food-name");
    name.innerText = `name: ${element.name.toUpperCase()}`;
    container.appendChild(name);

    let category = document.createElement("p");
    category.classList.add("food-category");
    category.innerText = `category: ${element.category.toUpperCase()}`;
    container.appendChild(category);

    let calories = document.createElement("p");
    calories.classList.add("food-calories");
    calories.innerText = `calories: ${element.calories.toUpperCase()}`;
    container.appendChild(calories);

    let junkfood = document.createElement("p");
    junkfood.classList.add("food-junkfood");
    junkfood.innerText = `junkfood: ${element.junkfood.toUpperCase()}`;
    container.appendChild(junkfood);

    card.appendChild(container);
    document.getElementById("fooditems").appendChild(card);
});

let all = document.querySelector("#all");
all.addEventListener("click",() => {
    let card = Array.from(document.getElementsByClassName("card"));
    card.forEach((element) =>{
        element.classList.remove("hide");
    })
})

let category = document.querySelector("#category");
category.addEventListener("click",() => {
    // console.log(category);
    // console.log(category.value);
    let card = Array.from(document.getElementsByClassName("card"));
    card.forEach((element) =>{
        if(element.classList.contains(category.value)){
            element.classList.remove("hide");
        }else{
            element.classList.add("hide");
        }
    })
})

let calories = document.querySelector("#calories");
calories.addEventListener("click",() => {
    let card = Array.from(document.getElementsByClassName("card"));
    card.forEach((element) =>{
        let string = element.childNodes[1].childNodes[2].innerText;
        let ans="";
        for(let i=string.length-1;i>=0;i--){
            if(string.charAt(i)==' '){
                break;
            }
            ans=string.charAt(i)+ans;
        }
        if(ans<300){
            element.classList.remove("hide");
        }else{
            element.classList.add("hide");
        }
    })
})

let junkfood = document.querySelector("#junkfood");
junkfood.addEventListener("click",() => {
    let card = Array.from(document.getElementsByClassName("card"));
    card.forEach((element) =>{
        let string = element.childNodes[1].childNodes[3].innerText;
        let ans="";
        for(let i=string.length-1;i>=0;i--){
            if(string.charAt(i)==' '){
                break;
            }
            ans=string.charAt(i)+ans;
        }
        console.log(ans);
        if(ans==="YES"){
            element.classList.remove("hide");
        }else{
            element.classList.add("hide");
        }
    })
})