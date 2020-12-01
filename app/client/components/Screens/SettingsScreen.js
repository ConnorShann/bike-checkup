import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, Button} from 'react-native';
import {Colors} from './../../constants/Colors';

removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('removed item');
  } catch (e) {
    // remove error
  }
};

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  logout() {
    removeValue('userId');
    this.navigation.replace('Welcome');
  }

  syncStravaData() {
    global.SyncStrava(global.userId);
  }

  render() {
    return (
      <>
        <View>
          <Button
            title="Sync Strava Data"
            color={Colors.primaryOrange}
            onPress={() => this.syncStravaData()}
          />
          <Button
            title="Logout"
            color={Colors.primaryOrange}
            onPress={() => this.logout()}
          />
        </View>
      </>
    );
  }
}