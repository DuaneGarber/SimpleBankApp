import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import MainSection from '../components/MainSection';
import * as BankActions from '../actions/bank';

class App extends Component {
  render () {
    // const { actions } = this.props;
    return (
      <div>
        <Header />
        HIII
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps (state) {
  return {
    // todos: state.todos
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(BankActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
