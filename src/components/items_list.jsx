import React, {Component, PropTypes} from 'react';
import { Table } from 'react-bootstrap';

class ItemsList extends Component {
  
  static defaultProps = {
    items: []
  };
  
  componentDidMount() {
    this.props.fetchAllItems(this.props.user);
  }
  
  render() {
    if (this.props.items.length === 0)
      return this.renderEmptyList();
      
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Created By</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {this.renderItems()}
        </tbody>
      </Table>
    );
  }
  
  renderEmptyList(){
    return(
      <h2 className="sub-header">No items to display</h2>
    );
  }
  
  renderItems(){
    return this.props.items.map(item => {
      return (
        <tr key={item._id}>
          <td>{item._id}</td>
          <td>{item.title}</td>
          <td>{item.created_by}</td>
          <td>{item.state}</td>
        </tr>
      );
    });
  }
}

ItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    created_by: PropTypes.number.isRequired,
    state: PropTypes.number.isRequired
  })),
  fetchAllItems: PropTypes.func,
  user: PropTypes.object
};

export default ItemsList;