import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import { Link } from 'react-router';

class Dashboard extends Component {  
  
  static defaultProps = {
    items: [{ name: 'Home', active: true, link: '/home'}, { name: 'Items', active: false, link: '/items'}],
    current: 0
  };
  
  renderMain(){
    return (
      <Col md={10} mdOffset={2} sm={9} smOffset={3} className="main">
        <PageHeader>{this.props.items[this.props.current].name}</PageHeader>
        {this.props.children}
      </Col>
    );
  }
  
  renderSidebar(){
    return (
      <Col md={2} sm={3} className="sidebar">
        <ul className="nav nav-sidebar">
          { this.renderSidebarItems() }
        </ul>
      </Col>
    );
  }
  
  renderSidebarItems(){
    return this.props.items.map((item, index) => {
      return (
        <li className={item.active ? 'active' : ''} 
            key={index}>
          <Link to={item.link} onClick={() => this.props.handleSidebarClick(index)} >{item.name}</Link>
        </li>
      );
    });
  }
    
  render() {
    return (
      <Grid fluid>
        <Row>
          { this.renderSidebar() }
          { this.renderMain() }
        </Row>
      </Grid>
    );
  }
  
}

Dashboard.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
  })),
  current: PropTypes.number,
  handleSidebarClick: PropTypes.func
}

export default Dashboard;