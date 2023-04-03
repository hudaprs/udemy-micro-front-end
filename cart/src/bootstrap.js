import faker from 'faker'

const mount = el => {
	const cart = `You have ${faker.random.number()} items inside cart`

	el.innerHTML = cart
}

if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#dev-cart')

	if (el) mount(el)
}

export { mount }
