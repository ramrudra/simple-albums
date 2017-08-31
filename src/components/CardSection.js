import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {

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
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export default CardSection;
