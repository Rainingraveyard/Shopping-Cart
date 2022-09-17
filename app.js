/* Once more into the fray,
   Into the last good fight I'll ever know.
   Live and Die on this day
   Live and Die on this day*/




const shipping = 15;

let products = document.querySelector(".products");
products.addEventListener("click", (e) => {
	if (e.target.classList.contains("remove-product")) {
		if (confirm(`One last step to lose discount, are you really sure?`)) {
			e.target.parentElement.parentElement.parentElement.remove();
            calcTotal();
		}
	} else if (e.target.classList.contains("plus")) {
		e.target.previousElementSibling.innerText++;
		calcLine(e.target.parentElement.parentElement);
	} else if (e.target.classList.contains("minus")) {
		if (e.target.nextElementSibling.innerText > 1) {
			e.target.nextElementSibling.innerText--;
			calcLine(e.target.parentElement.parentElement);
		} else if (confirm(`One last step to lose discount, are you really sure?`)) {
			e.target.parentElement.parentElement.parentElement.remove();
            calcTotal();
		}
	}
});

const calcLine = (productDetails) => {
	console.log("SS");
	let qty = productDetails.querySelector("#product-quantity").innerText;
	let reducedPrice = productDetails.querySelector("strong").innerText;
	let originalPrice = productDetails.querySelector(".line-through").innerText;
	let discount = productDetails.querySelector(".discount");
	let lineTotal = productDetails.querySelector(".product-line-price");

	lineTotal.innerText = ((qty * (reducedPrice * 100)) / 100).toFixed(2);
	

	calcTotal();
};

const calcTotal = () => {
	let lineTotals = document.querySelectorAll(".product-line-price");
	let subtotal = 0;
	let tax = 18;
    let discounts = document.querySelectorAll(".discount");
    let totalDiscount = 0;

	lineTotals.forEach((eachLineTotal) => {
		subtotal += Number(eachLineTotal.innerText);
	});

    discounts.forEach((eachDiscount) => {
        totalDiscount += Number(eachDiscount.innerText);
    });

    taxTotal = (subtotal * tax) / 100;
    grandTotal = subtotal + taxTotal + shipping;


	document.querySelector("#subtotal").innerText = subtotal.toFixed(2);
	document.querySelector("#tax-total").innerText = taxTotal.toFixed(2);
    document.querySelector("#grand-total").innerText = grandTotal.toFixed(2);
    
};
calcTotal();