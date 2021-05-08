import React from 'react';
import Header from './Header';
import Order from './Order';
import Burger from './Burger';
import MenuAdmin from './MenuAdmin';
import sampleBurgers from '../sample-burgers';
import base from '../base';

class App extends React.Component {
	state = {
		burgers: {},
		order: {}
	};

	componentDidMount() {
		const { params } = this.props.match;
    this.ref = base.syncState(`${params.restaurantId}/burgers`, {
      context: this,
      state: 'burgers'
    });
	};

	addBurger = burger => {
		// 1. Делаем копию объекта state
		const burgers = { ...this.state.burgers };
    // 2. Добавить новый бургер в переменную burgers
    burgers[`burger${Date.now()}`] = burger;
		// 3. Записать новый объект burgers в state
		this.setState({burgers});
	};

	loadSampleBurgers=()=>{
		this.setState({burgers: sampleBurgers});
	};

	addToOrder = key => {
    // 1. Делаем копию объекта state
    const order = { ...this.state.order };
    // 2. Добавить ключ к заказу со знач-ем 1, либо обновить текущ. знач.
    order[key] = order[key] + 1 || 1;
    // 3. Записать наш новый объект order в state
    this.setState({ order });
  };

	render() {
		return (
			<div className='burger-paradise'>
				<div className='menu'>
					<Header title="Very hot burger" />
					<ul className='burgers'>
              {Object.keys(this.state.burgers).map(key => {
                return (
                  <Burger
                    key={key}
                    index={key}
                    addToOrder={this.addToOrder}
                    details={this.state.burgers[key]}
                  />
                );
              })}
            </ul>
				</div>
				<Order 
					burgers={this.state.burgers}
					order={this.state.order}
				/>
				<MenuAdmin 
					loadSampleBurgers={this.loadSampleBurgers}
					addBurger={this.addBurger} />
			</div>
		);
	}
}

export default App;