import React, {Component} from 'react';
import Pagination from "react-bootstrap/Pagination";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class OrdersPagination extends Component {

    limits = [5, 10, 15, 20];

    shouldComponentUpdate(nextProps) {
        return this.props.page !== nextProps.page
            || this.props.limit !== nextProps.limit;
    }

    render() {
        const active = this.props.page;
        const pages = Math.ceil(this.props.count / this.props.limit);
        console.log(pages);
        let items = [];
        for (let number = 1; number <= pages; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active} onClick={() => this.props.goToPage(number)}>
                    {number}
                </Pagination.Item>,
            );
        }

        return (
            <>
                <div style={pages > 1 ? {float: 'right'} : {textAlign: 'right'}}>
                    <DropdownButton
                        title={this.props.limit === 'inf' ? 'Zobrazit všechny' : 'Zobrazit: ' + this.props.limit}
                        variant="secondary">
                        {this.limits.map(limit => (
                            <Dropdown.Item key={limit} onClick={() => this.props.changeLimit(limit)}
                                           active={limit === this.props.limit}>{limit}</Dropdown.Item>
                        ))}
                        <Dropdown.Divider/>
                        <Dropdown.Item key="inf" onClick={() => this.props.changeLimit('inf')}
                                       active={0 === this.props.limit}>Všechny</Dropdown.Item>
                    </DropdownButton>
                </div>

                {pages > 1 ?
                    <div style={{textAlign: 'center'}}>
                        <Pagination style={{display: 'inline-flex'}}>{items}</Pagination>
                    </div>
                    : null}
            </>
        );
    }
}

export default OrdersPagination;
