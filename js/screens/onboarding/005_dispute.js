/**
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, TouchableHighlight} from 'react-native';
import CommonOnboarding from './wrapper';

class DisputeScreen extends React.Component<any> {
  render() {
    return (
        <View>
            <Text>DisputeScreen</Text>
        </View>
    );
  }
}

export default CommonOnboarding(DisputeScreen);
