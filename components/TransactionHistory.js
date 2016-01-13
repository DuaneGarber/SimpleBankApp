'use strict';

import React from 'react';
import { connect } from 'react-redux';

const TransactionHeader = React.createClass({
  render: function () {
    return (
      <div id='transactionHeader'>
        <span>Date</span>
        <span>Description</span>
        <span>Amount</span>
      </div>
    );
  }
});

const TransactionRow = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired,
    id: React.PropTypes.string.isRequired
  },
  render: function () {
    var transactionData = this.props.data || {};
    var id = this.props.id;
    return (
      <div className='transactionRow' key={id}>
        <span>{transactionData.date}</span>
        <span>{transactionData.desc}</span>
        <span>{transactionData.amount} {transactionData.currency}</span>
      </div>
    );
  }
});

const TransactionHistory = React.createClass({
  getInitialState: function () {
    return {
      transactions: [
        {
          date: '12/13/2015',
          desc: 'Purchase: Coffee',
          amount: 3.59,
          currency: 'USD'
        }, {
          date: '12/14/2015',
          desc: 'Purchase: Game',
          amount: 59.99,
          currency: 'USD'
        }, {
          date: '12/15/2015',
          desc: 'Purchase: Gift',
          amount: 19.97,
          currency: 'USD'
        }

      ]
    };
  },
  renderRows: function (id) {
    return (
      <TransactionRow key={id} id={id} data={this.state.transactions[id]} />
    );
  },
  render: function () {
    return (
    <section>
      <h1>
        Transaction History
      </h1>
      <div id='transactionContainer'>
      npoop
        <TransactionHeader />
        {Object.keys(this.state.transactions).map(this.renderRows)}
      </div>
    </section>
    );
  }
});

export default TransactionHistory;
