console.log('JS connected!');

$(() => {
    const render = (data) => {
        data.forEach(item => {
            $colDiv = $('<div class="col-md-3">');
            $pTitle = $('<a href="product' + item.id + '.html" class="title-link"><h3>' + item.title + "</h3></a>");
            $pImage = $('<a href="product' + item.id + '.html"><img src="' + item.image + '" /></a>');
            $pDesc = $('<p class="item-description">' + item.description + '</p>');
            pStrike = parseInt(item.price) + Math.floor(Math.random() * 200);
            $pPrice = $('<p class="price">$' + '<strike>' + pStrike + '</strike>' + '     ' + '<strong>$' + item.price + '</strong>' + '<a href="#" class="add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</a></p>');
            $colDiv.append($pTitle, $pImage, $pDesc, $pPrice);
            $('#on-sale-row').append($colDiv);
        });
    }

    $.ajax({
        url: "/data/data.json",
        type: "GET",
    }).then(
        (data) => {
            // console.log(data);
            render(data);
    },
        () => {
            console.log('failed');
        }
    );
});

// $(cart).on('click', (e) => {    
//     // e.preventDefault();
//     console.log(cart.innerText)
//     console.log('blahhhh')

//     // let cart = document.querySelector('.shopping-cart-top');
//     // cart.innerText =  " Cartsss (" + 1 + ")"
//     cart.innerText(' Cart (' + 1 + ')');
// });

