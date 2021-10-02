console.log('JS connected!');

const $productData = $.ajax({
    url: "/data/data.json",
    type: "GET",
}).then(
    (data) => {
        console.log(data);
},
    () => {
        console.log('failed');
    }
);