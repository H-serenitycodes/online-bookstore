/* =====================================================
   BRIGHTREADS BOOKSTORE
   EXTERNAL JAVASCRIPT
===================================================== */


/* ================= CART ================= */

let cartCount = 0;

const cartCounter = document.getElementById("cartCount");

const cartMessage = document.getElementById("cartMessage");


/*
    Function used whenever
    a user clicks "Add to Cart"
*/

function addToCart() {

    cartCount++;

    cartCounter.textContent = cartCount;

    // Show the cart notification
    cartMessage.classList.add("show");

    // Hide it automatically after 3 seconds
    setTimeout(function () {

        cartMessage.classList.remove("show");

    }, 3000);

}


/* ================= FEATURED BOOK CART BUTTONS ================= */

const addCartButtons =
    document.querySelectorAll(".add-cart");


addCartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        addToCart();

        // Change button text temporarily
        const oldText = button.textContent;

        button.textContent = "Added ✓";

        setTimeout(function() {

            button.textContent = oldText;

        }, 1500);

    });

});


/* ================= TABLE CART BUTTONS ================= */

const tableCartButtons =
    document.querySelectorAll(".table-cart");


tableCartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        addToCart();

        const oldText = button.textContent;

        button.textContent = "Added ✓";

        setTimeout(function() {

            button.textContent = oldText;

        }, 1500);

    });

});


/* ================= NAVIGATION SEARCH ================= */

const navSearch =
    document.getElementById("navSearch");


navSearch.addEventListener("keyup", function(event) {

    const searchValue =
        event.target.value.toLowerCase();

    const books =
        document.querySelectorAll(".book-card");


    books.forEach(function(book) {

        const bookName =
            book.querySelector("h3").textContent.toLowerCase();

        const author =
            book.querySelector(".author").textContent.toLowerCase();


        if (
            bookName.includes(searchValue) ||
            author.includes(searchValue)
        ) {

            book.style.display = "block";

        } else {

            book.style.display = "none";

        }

    });

});


/* ================= OUR BOOKS SEARCH ================= */

const bookSearch =
    document.getElementById("bookSearch");


bookSearch.addEventListener("keyup", function() {

    const searchValue =
        bookSearch.value.toLowerCase();

    const rows =
        document.querySelectorAll("#booksTable tbody tr");


    rows.forEach(function(row) {

        const rowText =
            row.textContent.toLowerCase();


        if (rowText.includes(searchValue)) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

});


/* ================= CLEAR FILTERS ================= */

const clearButton =
    document.querySelector(".clear-button");


clearButton.addEventListener("click", function() {

    // Clear table search
    bookSearch.value = "";

    // Show all table rows
    const rows =
        document.querySelectorAll("#booksTable tbody tr");

    rows.forEach(function(row) {

        row.style.display = "";

    });

    // Reset select menus
    const selects =
        document.querySelectorAll(".filters select");

    selects.forEach(function(select) {

        select.selectedIndex = 0;

    });

});


/* ================= NEWSLETTER ================= */

const newsletterForm =
    document.getElementById("newsletterForm");


newsletterForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const email =
        document.getElementById("email").value;


    if (email !== "") {

        alert(
            "Thank you for subscribing to BrightReads!"
        );

        newsletterForm.reset();

    }

});


/* ================= MOBILE MENU ================= */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.querySelector(".nav-links");


menuButton.addEventListener("click", function() {

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    } else {

        navLinks.style.display = "flex";

        navLinks.style.position = "absolute";

        navLinks.style.top = "94px";

        navLinks.style.left = "0";

        navLinks.style.width = "100%";

        navLinks.style.background = "#fffdf5";

        navLinks.style.padding = "15px";

        navLinks.style.flexDirection = "column";

        navLinks.style.zIndex = "100";

    }

});


/* ================= MONTHLY BOOK SLIDER ================= */

const monthlyBooks =
    document.querySelector(".monthly-books");

const nextBook =
    document.getElementById("nextBook");

const prevBook =
    document.getElementById("prevBook");


nextBook.addEventListener("click", function() {

    monthlyBooks.scrollBy({

        left: 140,

        behavior: "smooth"

    });

});


prevBook.addEventListener("click", function() {

    monthlyBooks.scrollBy({

        left: -140,

        behavior: "smooth"

    });

});


/* ================= VIEW CART ================= */

const viewCartButton =
    document.querySelector(".cart-message button");


viewCartButton.addEventListener("click", function() {

    if (cartCount === 0) {

        alert("Your cart is empty.");

    } else {

        alert(
            "You currently have " +
            cartCount +
            " book(s) in your cart."
        );

    }

});
/* ================= CATEGORY FILTER ================= */

const categoryButtons =
    document.querySelectorAll(".category-btn");

const featuredBooks =
    document.querySelectorAll(".book-card");


categoryButtons.forEach(function(categoryButton) {

    categoryButton.addEventListener("click", function() {

        // Get the category that was clicked
        const selectedCategory =
            categoryButton.dataset.category;


        // Show/hide books
        featuredBooks.forEach(function(book) {

            const bookCategory =
                book.dataset.category;


            if (bookCategory === selectedCategory) {

                book.style.display = "block";

            } else {

                book.style.display = "none";

            }

        });


        // Take the user to Featured Books
        document.getElementById("books").scrollIntoView({

            behavior: "smooth"

        });

    });

});