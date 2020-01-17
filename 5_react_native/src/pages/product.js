import React from 'react';
import { Text } from 'react-native';

const Product = ({ navigation }) => (
  <Text>{navigation.state.params.product.url}</Text>
);

Product.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.product.title
});

export default Product;