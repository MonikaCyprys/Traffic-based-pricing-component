(function () {
  const thumbValue = document.querySelector("#slider-bar");
  const amountPageviews = document.querySelector(".numberOfPageviews");
  const toggle = document.querySelector(".toggle");
  const bill = document.querySelector(".bill");
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
    toggle.classList.toggle("active");
    if (yearlyChoice) {
      const allYearPrice = total * 12;
      const discount = allYearPrice / 4;
      //   billForYear.textContent = `$ ${allYearPrice - discount}.00`;
      bill.textContent = `$ ${(allYearPrice - discount) / 12}0`;
    }
  }

  function calculateBill() {
    amountPageviews.textContent = this.value;
    for (let price in prices) {
      if (this.value == price) {
        if (!yearlyChoice) {
          bill.textContent = `$ ${prices[price]}.00`;
        }
        total = prices[price];
      }
    }

    console.log(total);
  }
  thumbValue.addEventListener("change", calculateBill);
  toggle.addEventListener("click", calculateYearlyPrice);
})();
