import { Component } from 'react';

import cssfilter from '../Filter/Filter.module.css';

export class Filter extends Component {
  render() {
    const { filter, addFilter } = this.props;
    return (
      <div className={cssfilter.filter}>
        <input
          type="text"
          name="filter"
          className={cssfilter.filter__input}
          value={filter}
          onChange={addFilter}
          placeholder="Enter name"
        />
      </div>
    );
  }
}