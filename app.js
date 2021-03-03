//PROFESOR ESTE PROGRAMA SE CORRE EN LA CONSOLA
//PONER ESTE COMANDO $ node app.js

//Create variables for the domain

let pronoun = ['the', 'our', 'this', 'a', '', 'that'];
let adj = ['great', 'big', 'beautiful', 'little', 'grouse', 'ginormous'];
let noun = ['jogger', 'racoon', 'myself', 'person', 'elephant'];
let extensions = ['.com', '.us', '.io', '.edu', '.cr'];

//Creat a loop considering all the variables

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < extensions.length; l++) {
                //combine all the variables
                let website = pronoun[i]+adj[j]+noun[k]+extensions[l];
                //print the variables
                console.log(website);
            }
        }

    }
}