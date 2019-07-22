import React, {Component} from 'react';
import axios from 'axios';
import Order from "../../../../components/Demos/BurgerBuilder/Orders/Order/Order";
import OrdersPagination from "./OrdersPagination/OrdersPagination";
import OrdersTable from "../../../../components/Demos/BurgerBuilder/Orders/Order/OrdersTable/OrdersTable";
import Spinner from "react-bootstrap/Spinner";
import withErrorHandler from "../../../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../../../store/burgerBuilder/actions";
import {connect} from "react-redux";

class Orders extends Component {

    state = {
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
        this.props.fetchOrders(this.state.limit, this.state.page);
    }

    componentDidUpdate(_, prevState) {
        if (prevState.page !== this.state.page || prevState.limit !== this.state.limit) {
            this.props.fetchOrders(this.state.limit, this.state.page);
        }
    }

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

        if (!this.state.loading && !this.props.loading && !this.props.error) {
            orders = (
                <>
                    <OrdersTable>
                        {this.props.orders.map(order => (
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

const mapStateToProps = state => {
    return {
        orders: state.orders.orders,
        loading: state.orders.loading,
        error: state.orders.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: (limit, page) => dispatch(actions.fetchOrders(limit, page))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios))
