import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  document.body.addEventListener("click",() => {

    for (let n=0; n<5; n++){

    let article=document.createElement("article");
    article.textContent="Text";
    article.classList="message"
    document.body.appendChild(article);
}
  
    

        
  })

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
