import React, {Component} from 'react'
import { FlatList, Text, View, StyleSheet, Image } from 'react-native'
import { SearchBar } from 'react-native-elements'
import SearchInput, { createFilter } from 'react-native-search-filter';

const rows = [{ id: 0, name: 'Robin garg', gender: 'Male', age: '31', consultations: '3 Consultations', cost: '$2' }, { id: 1, name: 'Mohit', gender: 'Male', age: '29', consultations: '5 Consultations', cost: '$5' }, { id: 2, name: 'Ankush Sharma', gender: 'Male', age: '28', consultations: '3 Consultations', cost: '$3' }];

const extractKey = ({id}) => id

export default class Patient extends Component {

  // Initial state
  state = {
    // initial data array
    searchTerm: ''
  };

  renderItem = ({item}) => {
    return (
      <View style = {styles.rowContainer}>
        <View>
          <Text style={styles.rowTitle}>
            {item.name}
          </Text>
          <Text style={styles.rowGender}>
            {item.gender + ', ' + item.age}
          </Text>
          <Text style={styles.rowConsultations}>
            {item.consultations}
          </Text>
        </View>
        <View style = {styles.costContainer}>
          <Text style={styles.rowCost}>
            {item.cost}
          </Text>
          <Image
            source={require("../assets/disclosure.png") }
            style={{
              paddingRight: 10,
              width: 10,
              height: 10,
              resizeMode: Image.resizeMode.contain,
            }}
            />
        </View>
      </View>
    )
  }

  searchBarChangeText = (term) => {
    if (term.length === 0) {
      this.setState({
        searchTerm: ''
      })
    } else {
      this.setState({
        searchTerm: term
      })
      console.log(term);
    }
  }

  searchBarClearText = () => {
    this.setState({
      searchTerm: ''
    })
  }

  render() {
    const filteredObjects = rows.filter(createFilter(this.state.searchTerm, 'name'));
    return (
      <View style={styles.container}>
        <View style={styles.blueBackground}>
          <Text style={styles.headerTitle}>3</Text>
          <Text style={styles.headerSubTitle}>Patient(s) helped</Text>
        </View>
        <View>
          <SearchBar icon={ { color: 'white', name: 'search' }}  clearIcon lightTheme onChangeText={(term) => this.searchBarChangeText(term) } onClearText={() => this.searchBarClearText() } placeholder='Search' placeholderTextColor='white' ref={search => this.search = search} />
        </View>
        <View>
          <FlatList
            style={styles.list}
            data={filteredObjects}
            renderItem={this.renderItem}
            keyExtractor={extractKey}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
    backgroundColor: '#f1f1f1'
  },
  rowContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom:2
  },
  costContainer: {
    paddingRight: 15,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  list: {
    marginTop: 0,
    backgroundColor: '#f1f1f1'
  },
  rowTitle: {
    paddingLeft: 15,
    paddingTop: 5,
    marginTop: 2,
    backgroundColor: 'white',
    fontSize: 15
  },
  rowGender: {
    paddingTop: 5,
    paddingLeft: 15,
    paddingBottom: 5,
    backgroundColor: 'white',
    fontSize: 12
  },
  rowConsultations: {
    paddingLeft: 15,
    paddingBottom: 5,
    backgroundColor: 'white',
    color: '#bbb',
    fontSize: 12
  },
  rowCost: {
    backgroundColor: 'white',
    color: '#bbb',
    fontSize: 12
  },
  blueBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#007AFF",
    height: 150
  },
  headerTitle: {
    color: "white",
    fontSize: 60
  },
  headerSubTitle: {
    color: "white",
    fontSize: 13
  }
})