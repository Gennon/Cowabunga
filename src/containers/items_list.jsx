import { connect } from 'react-redux';
import { fetchAllItems } from '../actions';
import ItemsList from '../components/items_list';

const mapStateToProps = (state) => {
  return {
    items: state.items.all,
    user: state.user.current
  };
};

const ItemsListContainer = connect(
  mapStateToProps,
  { fetchAllItems }
)(ItemsList);

export default ItemsListContainer;