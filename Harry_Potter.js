function api(urll) {
    let card = document.getElementsByClassName("card")
    let resp = $.getJSON(urll, (data) => {

        let cardB = card[0];
        (cardB.getElementsByClassName("card-title")[0]).innerHTML = data[0].name;
        (cardB.getElementsByClassName("card-text")[0]).innerHTML = data[0].house;
        (cardB.getElementsByClassName("btn btn-dark")[0]).innerHTML = data[0].gender;

        let imgEl = document.createElement("img");
        $(imgEl).addClass("card-img-top");
        cardB.appendChild(imgEl);
        imgEl.setAttribute("src", data[0].image);

        let cardB1 = card[1];
        (cardB1.getElementsByClassName("card-title")[0]).innerHTML = data[1].name;
        (cardB1.getElementsByClassName("card-text")[0]).innerHTML = data[1].house;
        (cardB1.getElementsByClassName("btn btn-dark")[0]).innerHTML = data[1].gender;

        let imgEl1 = document.createElement("img");
        $(imgEl1).addClass("card-img-top");
        cardB1.appendChild(imgEl1);
        imgEl1.setAttribute("src", data[1].image);

        let cardB2 = card[2];
        (cardB2.getElementsByClassName("card-title")[0]).innerHTML = data[2].name;
        (cardB2.getElementsByClassName("card-text")[0]).innerHTML = data[2].house;
        (cardB2.getElementsByClassName("btn btn-dark")[0]).innerHTML = data[2].gender;

        let imgEl2 = document.createElement("img");
        $(imgEl2).addClass("card-img-top");
        cardB2.appendChild(imgEl2);
        imgEl2.setAttribute("src", data[2].image);

        let cardB3 = card[3];
        (cardB3.getElementsByClassName("card-title")[0]).innerHTML = data[3].name;
        (cardB3.getElementsByClassName("card-text")[0]).innerHTML = data[3].house;
        (cardB3.getElementsByClassName("btn btn-dark")[0]).innerHTML = data[3].gender;

        let imgEl3 = document.createElement("img");
        $(imgEl3).addClass("card-img-top");
        cardB3.appendChild(imgEl3);
        imgEl3.setAttribute("src", data[3].image);

        console.log("All characters:");
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
        }

        let inp_search = document.getElementById("inp-search");
        let btn_search = document.getElementById("btn-search");

        btn_search.addEventListener("click", function(){
            let item_search = inp_search.value;
            console.log(`Search: ${item_search}`);
        })

        inp_search.addEventListener("keyup", function(e){
            
            if(inp_search.value === 'Minerva'){

                    cardB1.remove()
                    cardB2.remove();
                    cardB3.remove(); 
                    cardB.append()
                
            }

            else if(inp_search.value === 'Severus'){
                    cardB.remove();
                    cardB2.remove();
                    cardB3.remove();
                    cardB1.append()
                
            }
            if(inp_search.value === 'Rubeus'){
            
                    cardB.remove();
                    cardB1.remove();
                    cardB3.remove();
            
            }
            if(inp_search.value === 'Remus'){
            
                    cardB.remove();
                    cardB1.remove();
                    cardB2.remove();

            }
        })

    })
}

api("https://hp-api.onrender.com/api/characters/staff");
