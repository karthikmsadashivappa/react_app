import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
	render() {
		const { image, name, price, desc, description, status } = this.props.details;
		return (
			<li className="menu-fish">
				<img src={image} alt={name} />
				<h3 className="fish-name">{name}</h3>
				<span className="price">{formatPrice(price)}</span>
				<p>{desc}</p>
				<button>Add to cart</button>
			</li>
		)
	}
}

export default Fish;