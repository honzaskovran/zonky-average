import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isLoading: state.rating.loading,
  averagePrice: state.rating.averagePrice,
  selectedRating: state.rating.selectedRating
});

const formatMoney = n => (
  n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1 ')
);

const Result = props => {
  if(props.selectedRating === null) {
    return <div>Choose rating</div>
  }

  if(props.isLoading === true) {
    return <div>Loading...</div>
  }

  if(props.averagePrice !== null) {
    return <div>{formatMoney(props.averagePrice)}</div>
  }
};

export default connect(mapStateToProps, {})(Result);