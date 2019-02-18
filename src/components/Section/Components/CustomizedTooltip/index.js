import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class CustomizedTooltip extends Component {
  static displayName = "CustomizedTooltip";
  static propTypes = {
    payload: PropTypes.array,
    active: PropTypes.bool,
    label: PropTypes.string,
    formatter: PropTypes.func
  }
  render() {
    const { payload: dimensions, active, label, formatter } = this.props;
    if (!active) {
      return null;
    }
    if (dimensions.length === 1) {
      return (
        <ul className='tooltip'>
          <li className='tooltip-item' style={{ color: dimensions[0].color || dimensions[0].payload.fill }}>
            <span className='name'>{label || dimensions[0].name}</span>
            <span className='value'>{`${formatter(dimensions[0].value)}`}</span>
          </li>
        </ul>
      )
    }
    return (
      <ul className='tooltip'>
        {dimensions.map((payload, idx) =>
          <li className='tooltip-item' key={idx} style={{ color: payload.color }}>
            <span className='name'>{`${payload.dataKey}`}</span>
            <span className='value'>{payload.value ? formatter(payload.value) : <span className="no-data">datos insuficientes</span>}</span>
          </li>)}
      </ul>
    );
  }
}

export default CustomizedTooltip;