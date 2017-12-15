import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const NewsDetail = ({ article }) => {
  const {
    title,
    author,
    description,
    urlToImage,
    url,
    publishedAt
  } = article;
  const {
    thumbnailStyle,
    headerContentStyles,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = style;
  return (
    <Card>
    <CardSection>
      <View style={thumbnailContainerStyle}>
      <Image
      style={thumbnailStyle}
      source={{ uri: urlToImage }}
      />
      </View>
      <View style={headerContentStyles}>
      <Text style={headerTextStyle}>{title}</Text>
      </View>
    </CardSection>
    <CardSection>
    <View style={headerContentStyles}>
    <Text>{description}</Text>
    </View>
    </CardSection>
    <CardSection>
    <Button onPress={() => Linking.openURL(url)} >
    Read the full article
    </Button>
    </CardSection>
    </Card>
  );
};

const style = {
  headerContentStyles: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center'
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
export default NewsDetail;
