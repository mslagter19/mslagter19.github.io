app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img v-bind:src="image">
            </div>
        <div class="product-info">
            <p v-if="onSale"><strong>{{ Sale }}</strong></p>
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
            <p v-if="inStock">In stock</p>
            <p v-else-if="quantity <= 10 && quantity > 0">Almost sold out</p>
            <p v-else>Out of stock</p>
            <p>Shipping {{ shipping }}</p>
            <p v-show="inStock">Laat modal zien</p>
            
            <product-details></product-details>

            <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{ backgroundColor: variant.color }"></div>
            <ul>
            <li v-for="size in sizes" :key="size.id">{{ size.size }}</li>
            </ul>
            <button class="button" :disabled="!inStock" :class="{ disabledButton: !inStock }" v-on:click="addToCart">Add to Cart</button>
            <button class="button" v-on:click="removeFromCart">Remove from Cart</button>
        </div>
        <review-list :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form> 
    </div>`,
    data: function() {
        return {
            product: "Socks",
            brand: "Vue Mastery",
            description: "Lorem ipsum",
            selectedVariant: 0,
            link: '/contact',
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],
            reviews: [],
            sizes: [
                { id: 2201, size: 'XS'},
                { id: 2202, size: 'S'},
                { id: 2203, size: 'M'},
                { id: 2204, size: 'L'},
                { id: 2205, size: 'XL'},
            ],
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        addReview(review) {
            this.review.push(review)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        Sale() {
            return this.brand + this.product + ' is on Sale'
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            else {
                return '2,99'
            }
        }
    }
})