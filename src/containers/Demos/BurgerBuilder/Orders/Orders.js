import React, {Component} from 'react';
import axios from 'axios';
import Order from "../../../../components/Demos/BurgerBuilder/Orders/Order/Order";
import OrdersPagination from "./OrdersPagination/OrdersPagination";
import OrdersTable from "../../../../components/Demos/BurgerBuilder/Orders/Order/OrdersTable/OrdersTable";
import Spinner from "react-bootstrap/Spinner";
import withErrorHandler from "../../../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {

    state = {
        orders: [],
        page: 1,
        count: 0,
        limit: 10,
        loading: true
    };

    url = 'https://www.filipboril.cz/api/burger';

    componentDidMount() {
        axios.get(this.url + '/order-count')
            .then(res => {
                this.setState({count: res.data.count});
                this.getOrders();
            })
            .catch(err => {
                this.setState({loading: false});
            });
        this.getOrders();
    }

    componentDidUpdate(_, prevState) {
        if (prevState.page !== this.state.page || prevState.limit !== this.state.limit) {
            this.getOrders();
        }
    }

    getOrders = () => {
        let config = {};
        if (this.state.limit !== 'inf')
            config = {
                params: {
                    limit: this.state.limit,
                    offset: (this.state.page - 1) * this.state.limit
                }
            };

        axios.get(this.url + '/orders', config)
            .then(res => {
                this.setState({loading: false, orders: res.data});
            })
            .catch(err => {
                this.setState({loading: false});
            });
    };

    goToPage = (page) => {
        this.setState({page: page});
    };

    changeLimit = (limit) => {
        this.setState({limit: limit});
    };

    render() {
        let orders = (
            <Spinner animation="border" role="status">
                <span className="sr-only">Načítání...</span>
            </Spinner>
        );

        if (!this.state.loading) {
            orders = (
                <>
                    <OrdersTable>
                        {this.state.orders.map(order => (
                            <Order key={order.id} date={order.date} name={order.name} method={order.delivery_method}
                                   price={order.price} state={order.state}/>
                        ))}
                    </OrdersTable>

                    <OrdersPagination page={this.state.page} limit={this.state.limit} count={this.state.count}
                                      goToPage={this.goToPage} changeLimit={this.changeLimit}/>
                </>
            );
        }

        return orders;
    }
}

export default withErrorHandler(Orders, axios);
