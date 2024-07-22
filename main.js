const app = Vue.createApp({
    data: function() {
        return {
            cart: [],
            premium: true,
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeCart(id) {
            this.cart.pop(id)
        }
    },
})
