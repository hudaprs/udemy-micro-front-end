import faker from 'faker'

const cart = `You have ${faker.random.number()} items inside cart`

document.querySelector('#dev-cart').innerHTML = cart
