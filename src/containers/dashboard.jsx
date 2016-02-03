import { connect } from 'react-redux';
import { showPage } from '../actions';
import Dashboard from '../components/dashboard';

const mapStateToProps = (state) => {
  return {
    items: state.page.items,
    current: state.page.current
  };
};

const DashboardContainer = connect(
  mapStateToProps,
  { handleSidebarClick: showPage}
)(Dashboard);

export default DashboardContainer;