import React from 'react';
import { View, Text, Button } from 'react-native'

class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          User: {navigation.getParam('user')}
        </Text>
        <Button
          title={'Full Popup'}
          onPress={() => navigation.navigate('About')}>
        </Button>
      </View>
    );
  }
}

export default DetailsScreen;

