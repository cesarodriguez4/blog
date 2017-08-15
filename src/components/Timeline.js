import React, { Component } from 'react';
import CardNew from './CardNew';
export default class Timeline extends Component {
  render() {
    let list = this.props.cards.map((item) => {
      return (
        <CardNew key={Math.random()} info={item}/>
        );
    });
  	return (
      <div>
        {list}
      </div>
      );
  }
}