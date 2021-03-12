(function () {
  const thumbValue = document.querySelector("#slider-bar");
  const numberOfPageviews = document.querySelector(".numberOfPageviews");
  const toggle = document.querySelector(".toggle");
  const bill = document.querySelector(".bill");
  const billForYear = document.querySelector(".billForYear");
  const yearPrice = document.querySelector(".yearPrice");

  const discount = document.querySelector(".discount");
  const screenWidth = window.innerWidth;
  if (screenWidth > 1440) {
    discount.textContent = "-25% discount";
  }

  const prices = {
    50: 5,
    100: 10,
    150: 15,
    200: 20,
    250: 25,
    300: 30,
  };
  let yearlyChoice = false;
  let total = 10;

  function calculateYearlyPrice() {
    yearlyChoice = true;
    if (yearlyChoice) {
      const totalPrice = total * 12;
      const discount = totalPrice / 4;
      billForYear.textContent = `$ ${(totalPrice - discount).toFixed(2)}`;
      bill.textContent = `$ ${((totalPrice - discount) / 12).toFixed(2)}`;
    }
  }

  function calculateBill() {
    numberOfPageviews.textContent = this.value;
    for (let price in prices) {
      if (this.value == price) {
        total = prices[price];
        !yearlyChoice
          ? (bill.textContent = `$ ${prices[price].toFixed(2)}`)
          : calculateYearlyPrice();
      }
    }
  }
  function toggleIsChecked() {
    if (toggle.classList.contains("active")) {
      yearPrice.classList.remove("active");
      toggle.classList.remove("active");
      yearlyChoice = false;
      bill.textContent = `$ ${total.toFixed(2)}`;
    } else {
      yearPrice.classList.add("active");
      toggle.classList.add("active");
      calculateYearlyPrice();
    }
  }
  thumbValue.addEventListener("change", calculateBill);
  toggle.addEventListener("click", toggleIsChecked);
})();
