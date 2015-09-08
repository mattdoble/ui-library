import styles from './main.scss';

import React from 'react';

var text = styles.text;
var grid = styles.grid;

class Main extends React.Component {

  render() {
    return (
    	<div className={ grid }>
	    	<div className={ styles.root }>
	    		<a>Hello, testing...</a>
	    	</div>
	    </div>      
    );
  }

};

export default Main;