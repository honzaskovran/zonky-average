import React from 'react';
import { connect } from 'react-redux';
import './Result.css';
import zonky from './zonky.svg';

const mapStateToProps = state => ({
  isLoading: state.rating.loading,
  averagePrice: state.rating.averagePrice,
  selectedRating: state.rating.selectedRating
});

const formatMoney = n => (
  n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1 ').replace('.', ',')
);

const Result = props => {
  return (
    <div className="Result-wrapper">
      {props.selectedRating === null &&
          <div>Vyberte si rating</div>
      }

      {props.isLoading === true &&
        <img className="loader" src={zonky} alt="Loader"/>
      }

      {props.averagePrice !== null &&
      <div>Průměrná výše úvěru s ratingem <span className="highlighted">{props.selectedRating}</span> je <span className="highlighted">{formatMoney(props.averagePrice)}&nbsp;Kč</span></div>
      }
    </div>
  )
};

export default connect(mapStateToProps, {})(Result);