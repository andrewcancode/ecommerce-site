console.log('JS connected!');

const $cart = $('.shopping-cart-top');
let cartValue = 0;

$('.on-sale').on('click', '.add-to-cart', function () {
    cartValue++;
    $cart.text(' Cart (' + cartValue + ')');
});

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