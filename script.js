const totprice = document.getElementsByClassName("total");
const basketprice = document.getElementsByClassName("unit-price");
const plus = document.getElementsByClassName("fa-plus-circle");
const minus = document.getElementsByClassName("fa-minus-circle");
const heart = document.getElementsByClassName("fa-heart");
const items = document.getElementsByClassName("unit-price");
const cards = document.getElementsByClassName("card");

const ignore = document.getElementsByClassName("fa-trash-alt");
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    this.classList.toggle("liked");
  });
}

for (let i = 0; i < cards.length; i++) {
  //in this loop if you delete items from the right to the left it will work, otherwise you'll have some problems , because when you delete the item in the middle the one in the right wont be deleted , this is an issue i've been working on but haven't managed to solve it yet .
  ignore[i].addEventListener("click", function () {
    cards[i].remove();
  });
}

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    const quantity = this.nextElementSibling;
    let current = parseInt(quantity.textContent);
    quantity.textContent = current + 1;
    totprice.textContent = `${current * parseInt(items[i].textContent)} $`;
  });
}
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    const quantity = this.previousElementSibling;
    let current = parseInt(quantity.textContent);
    if (current > 0) {
      current -= 1;
      //i've been trying to rais the total price every time the user change the quantity , but it didnt work , i also made a function updatetotal() but it didnt work either.
      totprice.textContent = `${current * parseInt(items[i].textContent)} $`;
    }
    quantity.textContent = current;
  });
}
