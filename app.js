(function () {
  const thumbValue = document.querySelector("#slider-bar");
  const amountPageviews = document.querySelector(".numberOfPageviews");
  const toggle = document.querySelector(".toggle");
  const bill = document.querySelector(".bill");
  const billForYear = document.querySelector(".billForYear");
  const yearPrice = document.querySelector(".yearPrice");
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
      const allYearPrice = total * 12;
      const discount = allYearPrice / 4;
      billForYear.textContent = (allYearPrice - discount).toFixed(2);
      bill.textContent = ((allYearPrice - discount) / 12).toFixed(2);
    }
  }

  function calculateBill() {
    amountPageviews.textContent = this.value;
    for (let price in prices) {
      if (this.value == price) {
        total = prices[price];
        if (!yearlyChoice) {
          bill.textContent = prices[price].toFixed(2);
        } else calculateYearlyPrice();
      }
    }
  }
  function toggleIsChecked() {
    if (toggle.classList.contains("active")) {
      yearPrice.classList.remove("active");
      toggle.classList.remove("active");
      yearlyChoice = false;
      bill.textContent = total.toFixed(2);
    } else {
      yearPrice.classList.add("active");
      toggle.classList.add("active");
      calculateYearlyPrice();
    }
  }
  thumbValue.addEventListener("change", calculateBill);
  toggle.addEventListener("click", toggleIsChecked);
})();
