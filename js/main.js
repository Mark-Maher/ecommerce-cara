let bagCounter = document.querySelector(".bag-counter");
let ItemsList = document.querySelector(".itemslist");
let closeBtn = document.querySelector(".close-btn");
// let navbarShow = document.querySelector("#navbarSupportedContent");
// console.log(navbarShow);
// if(navbarShow.className === "navbar-collapse collapse show") {
//     navbarShow.classList.remove("show")
// }
bagCounter.addEventListener("click", () => {
  ItemsList.classList.remove("d-none");
  if (ItemsList.style.right === "-305px") {
    ItemsList.style.right = "0px";
  } else {
    ItemsList.style.right = "-305px";
  }
});
closeBtn.addEventListener("click", () => {
  ItemsList.classList.add("d-none");
});
let cartIcons = document.querySelectorAll(".cart-icon");
let itemsOrder = document.querySelector(".itemsorder");
cartIcons.forEach((cart, index) => {
  cart.addEventListener("click", () => {
    if (itemsOrder.children.length === 0) {
      let emptyBag = document.querySelector(".emptybag");
      emptyBag.style.display = "none";
      let divItemList = document.createElement("div");
      divItemList.setAttribute(`id`, `divitem${index + 1}`);
      divItemList.setAttribute(`class`, `divitemcheck`);
      itemsOrder.appendChild(divItemList);
      let itemImg = document.querySelector(`img.item${index + 1}`);
      let itemTitle = document.querySelector(`h5.item${index + 1}`);
      let itemPrice = document.querySelector(`div.item${index + 1}`);
      itemImg.getAttribute("src");
      let itemCount = 1;
      let priceItemQunty = `${itemPrice.textContent}`;
      let itemDetails = `
            <div class="itemdetails d-flex w-100 bg-white justify-content-evenly py-1 align-items-center fw-bold my-1">
               <div class="text-danger"><i id="closeitem${
                 index + 1
               }" class="fa-solid fa-circle-xmark deleteitem"></i></div>
               <div class="itemdetailsimg"><img class="mw-100 rounded-3" src="${itemImg.getAttribute(
                 "src"
               )}"></div>
               <div><h5 class="fw-bold my-auto">${
                 itemTitle.textContent
               }</h5></div>
               <div class="allpricequantity pricequantity${
                 index + 1
               }">${priceItemQunty}</div>
               <div class="allquantity quantity${index + 1}">${itemCount}</div>
               <div class="d-flex flex-column">
                  <i class="fa-solid fa-plus plusitem${index + 1}"></i>
                  <i class="fa-solid fa-minus minusitem${index + 1}"></i>
               </div>
            </div>`;
      divItemList.innerHTML += itemDetails;

      let selectedCard = document.querySelector(`.card.cditem${index + 1}`);
      let circleBagCard = document.querySelector(`.order.cditem${index + 1}`);
      let brandBagCard = document.querySelector(`p.cditem${index + 1}`);
      selectedCard.style.backgroundColor = "#088178";
      circleBagCard.style.backgroundColor = "white";
      brandBagCard.style.color = "#fffab8";
      brandBagCard.style.fontWeight = "bold";
      itemPrice.style.color = "white";
      itemTitle.style.color = "white";
      let deleteItem = document.querySelector(`i#closeitem${index + 1}`);
      deleteItem.addEventListener("click", () => {
        divItemList.remove();
        selectedCard.style.backgroundColor = "";
        circleBagCard.style.backgroundColor = "";
        brandBagCard.style.color = "";
        brandBagCard.style.fontWeight = "";
        itemPrice.style.color = "";
        itemTitle.style.color = "";
      });
      let plusItem = document.querySelector(`.plusitem${index + 1}`);
      let minusItem = document.querySelector(`.minusitem${index + 1}`);
      let quantityItem = document.querySelector(`.quantity${index + 1}`);
      let totalPriceItem = document.querySelector(`.pricequantity${index + 1}`);
      plusItem.addEventListener("click", () => {
        if (itemCount < 10) {
          itemCount++;
          quantityItem.textContent = `${itemCount}`;
          priceItemQunty = `${eval(itemPrice.textContent * itemCount).toFixed(
            2
          )}`;
          totalPriceItem.textContent = `${priceItemQunty}`;
        }
      });
      minusItem.addEventListener("click", () => {
        if (itemCount > 1) {
          itemCount--;
          quantityItem.textContent = `${itemCount}`;
          priceItemQunty = `${eval(itemPrice.textContent * itemCount).toFixed(
            2
          )}`;
          totalPriceItem.textContent = `${priceItemQunty}`;
        }
      });
    } else if (
      itemsOrder.children.length > 0 &&
      itemsOrder.children.length < 5
    ) {
      let divItemsList = document.querySelectorAll(".divitemcheck");
      let arrToCheck = Array.from(divItemsList);
      let mapCheck = arrToCheck.map((e) => {
        return e.id === `divitem${index + 1}`;
      });
      if (mapCheck.includes(true) === true) {
        let checkP = document.querySelectorAll(`.forcheck`);
        checkP.forEach((o) => {
          o.classList.remove("orderinfo");
          o.innerHTML = "";
        });
        let checkArrow = document.querySelectorAll(`span.arrowforcheck`);
        checkArrow.forEach((arrow) => {
          arrow.classList.remove("orderinfoarrow");
        });
        let myAttention = document.querySelector(`p.item${index + 1}`);
        let myAttentionArrow = document.querySelector(`span.item${index + 1}`);
        myAttention.classList.add("orderinfo");
        myAttentionArrow.classList.add("orderinfoarrow");
        myAttention.innerHTML =
          "Already in your bag If you still want more, do that from your Shopping Bag";
        setTimeout(orderInfo, 8000);
        function orderInfo() {
          myAttention.classList.remove("orderinfo");
          myAttentionArrow.classList.remove("orderinfoarrow");
          myAttention.innerHTML = "";
        }
      } else {
        let divItemList = document.createElement("div");
        divItemList.setAttribute(`id`, `divitem${index + 1}`);
        divItemList.setAttribute(`class`, `divitemcheck`);
        itemsOrder.appendChild(divItemList);
        let itemImg = document.querySelector(`img.item${index + 1}`);
        let itemTitle = document.querySelector(`h5.item${index + 1}`);
        let itemPrice = document.querySelector(`div.item${index + 1}`);
        itemImg.getAttribute("src");
        let itemCount = 1;
        let priceItemQunty = `${itemPrice.textContent}`;
        let itemDetails = `
                <div class="itemdetails d-flex w-100 bg-white justify-content-evenly py-1 align-items-center fw-bold my-1">
                    <div class="text-danger"><i id="closeitem${
                      index + 1
                    }" class="fa-solid fa-circle-xmark deleteitem"></i></div>
                    <div class="itemdetailsimg"><img class="mw-100 rounded-3" src="${itemImg.getAttribute(
                      "src"
                    )}"></div>
                    <div><h5 class="fw-bold my-auto">${
                      itemTitle.textContent
                    }</h5></div>
                    <div class="allpricequantity pricequantity${
                      index + 1
                    }">${priceItemQunty}</div>
                    <div class="allquantity quantity${
                      index + 1
                    }">${itemCount}</div>
                    <div class="d-flex flex-column">
                       <i class="fa-solid fa-plus plusitem${index + 1}"></i>
                       <i class="fa-solid fa-minus minusitem${index + 1}"></i>
                    </div>
                </div>`;
        divItemList.innerHTML += itemDetails;

        let selectedCard = document.querySelector(`.card.cditem${index + 1}`);
        let circleBagCard = document.querySelector(`.order.cditem${index + 1}`);
        let brandBagCard = document.querySelector(`p.cditem${index + 1}`);
        selectedCard.style.backgroundColor = "#088178";
        circleBagCard.style.backgroundColor = "white";
        brandBagCard.style.color = "#fffab8";
        brandBagCard.style.fontWeight = "bold";
        itemPrice.style.color = "white";
        itemTitle.style.color = "white";

        let deleteItem = document.querySelector(`i#closeitem${index + 1}`);
        deleteItem.addEventListener("click", () => {
          divItemList.remove();
          selectedCard.style.backgroundColor = "";
          circleBagCard.style.backgroundColor = "";
          brandBagCard.style.color = "";
          brandBagCard.style.fontWeight = "";
          itemPrice.style.color = "";
          itemTitle.style.color = "";
        });
        let plusItem = document.querySelector(`.plusitem${index + 1}`);
        let minusItem = document.querySelector(`.minusitem${index + 1}`);
        let quantityItem = document.querySelector(`.quantity${index + 1}`);
        let totalPriceItem = document.querySelector(
          `.pricequantity${index + 1}`
        );
        plusItem.addEventListener("click", () => {
          if (itemCount < 10) {
            itemCount++;
            quantityItem.textContent = `${itemCount}`;
            priceItemQunty = `${eval(itemPrice.textContent * itemCount).toFixed(
              2
            )}`;
            totalPriceItem.textContent = `${priceItemQunty}`;
          }
        });
        minusItem.addEventListener("click", () => {
          if (itemCount > 1) {
            itemCount--;
            quantityItem.textContent = `${itemCount}`;
            priceItemQunty = `${eval(itemPrice.textContent * itemCount).toFixed(
              2
            )}`;
            totalPriceItem.textContent = `${priceItemQunty}`;
          }
        });
      }
    } else if (itemsOrder.children.length >= 5) {
      let divItemsList = document.querySelectorAll(".divitemcheck");
      let arrToCheck = Array.from(divItemsList);
      let mapCheck = arrToCheck.map((e) => {
        return e.id === `divitem${index + 1}`;
      });
      let checkP = document.querySelectorAll(`.forcheck`);
      checkP.forEach((o) => {
        o.classList.remove("orderinfo");
        o.classList.remove("orderinfomax");
        o.innerHTML = "";
      });
      let checkArrow = document.querySelectorAll(`span.arrowforcheck`);
      checkArrow.forEach((arrow) => {
        arrow.classList.remove("orderinfoarrow");
        arrow.classList.remove("orderinfoarrowmax");
      });
      let myAttention = document.querySelector(`p.item${index + 1}`);
      let myAttentionArrow = document.querySelector(`span.item${index + 1}`);
      if (mapCheck.includes(true) === true) {
        myAttention.innerHTML =
          "Already in your bag If you still want more, do that from your Shopping Bag";
        myAttention.classList.add("orderinfo");
        myAttentionArrow.classList.add("orderinfoarrow");
        setTimeout(orderInfo, 8000);
        function orderInfo() {
          myAttention.classList.remove("orderinfo");
          myAttentionArrow.classList.remove("orderinfoarrow");
          myAttention.innerHTML = "";
        }
      } else {
        myAttention.innerHTML =
          "You have reached the limit, Just 5 different items you can choose in one order";
        myAttention.classList.add("orderinfomax");
        myAttentionArrow.classList.add("orderinfoarrowmax");
        setTimeout(orderInfo, 8000);
        function orderInfo() {
          myAttention.classList.remove("orderinfomax");
          myAttentionArrow.classList.remove("orderinfoarrowmax");
          myAttention.innerHTML = "";
        }
      }
    }
  });
});
let bagCount = document.querySelector(".bag-counter");
bagCount.setAttribute("data-before", `0`);
let orderValue = document.querySelector(".ordervalue");

document.addEventListener("click", () => {
  if (itemsOrder.children.length === 0) {
    let emptyBag = document.querySelector(".emptybag");
    emptyBag.style.display = "block";
    bagCount.setAttribute("data-before", `${itemsOrder.children.length}`);
    orderValue.style.display = "none";
  } else {
    let quantitySum = document.querySelectorAll(".allquantity");
    let arrQuantity = [];
    quantitySum.forEach((item) => {
      let quantityNum = parseInt(item.textContent);
      arrQuantity.push(quantityNum);
    });
    let totalQuantitySum = arrQuantity.reduce((pre, cur) => pre + cur);
    bagCount.setAttribute("data-before", `${totalQuantitySum}`);
    let netQuantity = totalQuantitySum;

    let priceQuantitySum = document.querySelectorAll(".allpricequantity");
    let arrPrice = [];
    priceQuantitySum.forEach((item) => {
      let priceNum = parseFloat(item.textContent);
      arrPrice.push(priceNum);
    });
    let totalPriceSum = arrPrice.reduce((pre, cur) => pre + cur).toFixed(2);

    let wordItem = "items";
    if (netQuantity === 1) {
      wordItem = "item";
    }
    orderValue.style.display = "block";
    let orderValueMsg = `<div class="text-white d-flex flex-column py-1"><div>Your Bag contains <span class="text-warning fw-bold">${netQuantity}</span> ${wordItem}</div><div>Total Price is $<span class="text-warning fw-bold">${totalPriceSum}</span> <button class="btn btn-light btn-sm checkout">CHECKOUT</button></div></div>`;
    orderValue.innerHTML = orderValueMsg;
  }
});
