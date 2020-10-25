import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native'


// Note: add separators based on dates
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

// These don't need to be pressable for now
let Item = ({ title, onPress }) => {
  return (
  <TouchableHighlight style={styles.item} onPress={onPress} underlayColor = 'gainsboro'>
    <Text style={styles.title}>{title}</Text>
  </TouchableHighlight>
  );
};


export default class ScheduleScreen extends React.Component {
  constructor(props){
    console.log("ComponentScreen Props:")
    console.log(props)
    super(props);
    this.state = {
        maintenanceData: [],
        editMode: false
    };
    this.navigation = props.navigation;
    this.bikeId = props.route.params.bikeId;
  }

  updateMaintenanceData() {
    // this.setState({maintenanceData: })
  }

  componentDidMount() {
    // fetch('3.97.53.16:8080/maintenance-schedule/', {
    //   method: 'GET'
    //   })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.updateMaintenanceData({dateJSON: data})
    //   })
    //   .catch((error) => {
    //     // this.setState({dateJSON: "Error fetching data"})
    //     console.error(error);
    //   })
    //   .finally(() => {
    //     // this.setState({ isLoading: false });
    //   });;
  }

  // Note: arrow function needed to bind correct context
  toggleEditMode = () => {
    console.log("STATE UPDATING")
    console.log(this)
    this.setState({editMode: this.editMode ? false: true});
    console.log("STATE UPDATED")
    console.log(this.state)
  }

  renderItem = ({ item }) => {
    return (
      <Item
        title={item.title}
        onPress={() => this.navigation.navigate('ComponentSchedule',{componentID: item.id})}
      />
    );
  }
  
  render() {
    // Add edit button to navigation bar
    this.navigation.setOptions({
      headerRight: () => (
      <TouchableOpacity onPress={() => alert("hi")} >
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
      ),
    });

    return(
        <View style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => item + index}
            ItemSeparatorComponent={() => <View style={styles.separator}/>}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "white",
    padding: 18,
  },
  separator: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 20
  },
  editButtonText: {
    fontSize: 15,
    color: "white",
    padding: 10,
    fontWeight: "bold"
  }
});