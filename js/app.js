console.log('JS connected!');

$(() => {

    const render = (data) => {
        data.forEach(item => {
            // const $pImage = $('<div class="col-md-3">').html('<img src="' + item.image + '" />');
            $colDiv = $('<div class="col-md-3">');
            $pTitle = $('<h3>' + item.title + "</h3>")
            $pImage = $('<img src="' + item.image + '" />');
            $pDesc = $('<p>' + item.description + '</p>');
            $colDiv.append($pTitle);
            $colDiv.append($pImage)
            $colDiv.append($pDesc);
            $('#on-sale-row').append($colDiv);
        })
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

// console.log($productData)

// $('.product-top').text($productData[0].price)