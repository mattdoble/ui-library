import styles from './sampleComponent.scss';

import React, { Component } from 'react';

export default class SampleComponent extends Component {

  render() {
    return (
      <div className={ styles.root }>
        <p className={ styles.text }>This class is locally scoped. Bosh!</p>
      </div>
    );
  }

};
