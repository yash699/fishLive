import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: 'relative',
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};
var items = [
    {
      name: 'Random Name #1',
      description:
        'https://img.dmart.in/images/rwd/banners/hmpg/15mar22-crsl-halfprice-kalmibel.jpg',
    },
    {
      name: 'Random Name #2',
      description:
        'https://img.dmart.in/images/rwd/banners/hmpg/15mar22-crsl-dmartgrocery.jpg',
    },
    {
      name: 'Random Name #3',
      description:
        'https://img.dmart.in/images/rwd/banners/hmpg/15mar22-crsl-ds1.jpg',
    },
  ];

class Advertisement_banner extends React.Component {
  state = {
    index: 0,
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div style={styles.root}>
        <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          {items.map((item, i) => (
             
                <Item  key={i} item={item} />
                              
                
             
           ))}
        </AutoPlaySwipeableViews>
      </div>
    );
  }
}

function Item(props) {
  return (
    <div>
      <img
        src={props.item.description}
        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}
export default Advertisement_banner;