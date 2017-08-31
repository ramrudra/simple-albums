import React from 'react';
import { View } from 'react-native';

const Card = (props) => {

  const children = props.children;

  const containerStyles = styles.containerStyles;
  return (
    <View style={containerStyles} >
      { children }
    </View>
  );
};

const styles = {
  containerStyles: {
    backgroundColor: '#eee',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: .1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft:5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
