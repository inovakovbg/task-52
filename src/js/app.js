import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  document.body.addEventListener("click",() => {

    let article=document.createElement("article");
    article.textContent="Text";
    article.classList="message"
    document.body.appendChild(article);

    let article1=document.createElement("article");
    article1.textContent="Text";
    article1.classList="message"
    document.body.appendChild(article1);
    

        
  })

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
