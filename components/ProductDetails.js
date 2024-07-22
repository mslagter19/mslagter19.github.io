app.component('product-details', {
    template:
    /*html*/
    `<ul>
    <li v-for="detail in details">{{ detail }}</li>
    </ul>`,
    data: function() {
        return {
            details: ['50% cotton', '30% wool', '20% polyester'],
        }
    },
})