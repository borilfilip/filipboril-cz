import React, {Component} from 'react';
import axios from 'axios';
import Order from "../../../../components/Demos/BurgerBuilder/Orders/Order/Order";
import OrdersTable from "../../../../components/Demos/BurgerBuilder/Orders/OrdersTable/OrdersTable";
import Spinner from "react-bootstrap/Spinner";

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    };

    url = 'https://www.filipboril.cz/api/burger';

    componentDidMount() {
        axios.get(this.url)
            .then(res => {
                this.setState({loading: false, orders: res.data});
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    render() {
        let orders = (
            <Spinner animation="border" role="status">
                <span className="sr-only">Načítání...</span>
            </Spinner>
        );

        if (!this.state.loading) {
            orders = (
                <OrdersTable>
                    {this.state.orders.map(order => (
                        <Order date="10.7.2019 8:00" name={order.name} method={order.delivery_method} price={order.price}
                               state="Čeká na zaplacení"/>
                    ))}
                </OrdersTable>
            );
        }

        return (
            <>
                {orders}
            </>
        )
    }
}

export default Orders;
