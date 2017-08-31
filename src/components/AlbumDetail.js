import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import { Button } from 'native-base';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url} = album;

  const { headerStyles, thumbnailStyles, thumbnailContainerStyles, titleStyles, coverImageStyles , buttonStyles }  = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyles}>
          <Image style={thumbnailStyles} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerStyles} >
          <Text style={titleStyles}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={coverImageStyles} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button style={buttonStyles} onPress={() => Linking.openURL(url)} block success>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerStyles: {
    flexDirection:'column',
    justifyContent: 'space-around'
  },
  titleStyles: {
    fontSize: 16,
    fontWeight: '600'
  },
  thumbnailStyles: {
    width: 50,
    height: 50
  },
  coverImageStyles: {
    height: 300,
    flex: 1,
    width: null
  },
  buttonStyles: {
    height: 30,
    flex: 1,
    width: null,
    marginRight: 50,
    marginLeft: 50,
    marginTop: 5,
    marginBottom: 5
  },
  thumbnailContainerStyles: {
    marginRight: 10
  }
};


export default AlbumDetail;
