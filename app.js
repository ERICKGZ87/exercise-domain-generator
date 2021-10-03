window.onload = function() {
    document.querySelector("#Btn").addEventListener("click", () => {

      document.querySelector("#the-excuse").innerHTML = misDominios();
      
    });
  };
  
  let misDominios = () => {
    let pronoun = ['the','our'];
    let adj = ['great', 'big' ];
    let noun = ['jogger','racoon'];
  
    let pronounindice = Math.floor(Math.random() * pronoun.length);
    let adjindice = Math.floor(Math.random() * adj.length);
    let nounindice = Math.floor(Math.random() * noun.length);
   
  
    return ('https://www.'+pronoun[pronounindice]+adj[adjindice]+noun[nounindice]+'.com');
  };

