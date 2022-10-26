import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, View, Text, SafeAreaView, Dimensions, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const BLUESH = '#3185FC';
const BACKGROUND = '#F5FAFF';
const MILK = '#e7dddcff';
const ORANGE = '#FD6B03';
const SHADOWGREY = '#E8E8E8';
const ALMOSTBLACK = '#020044';
const LIGHTBLUE = '#A8CFFF';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ProjectsFlatList extends Component {
  render() {
    return (
      <View style={styles.FlatListView}>
        
       
        <FlatList
        ListHeaderComponent={<CreateProjectField onPress={this.props.onHeaderbtnPress}></CreateProjectField>}
          horizontal={true}
          inverted={false}
         
          style={styles.flatlistStyle}
          
          
          data={this.props.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              
              <FlatListItem ProjectStyle={this.props.ProjectStyle}
               item={item} index={index}
               BudgetStyle={this.props.BudgetStyle}
               navigation={this.props.navigation}
               >

              </FlatListItem>
                
            )
          }}>

        </FlatList>

      </View>
    )
  }
}



class FlatListItem extends Component {
  render() {
    return (
      
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('DashBoard', {
        user: this.props.userInfo,
        project: this.props.item,
      });}}>
        <View style={styles.flatlistItemView}>


          <Text style={this.props.ProjectStyle}>
            <Text style={{fontWeight:"600"}}>
            Project Name</Text>: {this.props.item.project_name}
          </Text>
          
          <Text style={this.props.ProjectStyle}>
          <Text style={{fontWeight:"600"}}> Project Budget</Text>: {this.props.item.project_info.project_budget}
          </Text>
          
          <Text style={this.props.ProjectStyle}>
          <Text style={{fontWeight:"600"}}> Project Type</Text>:{this.props.item.project_info.project_type}
          </Text>
        
        </View>
      </TouchableOpacity>
    )
  }
}


class CreateProjectField extends Component{
  render(){
    return(
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.CreateProjectView}>
           
          <Text style={styles.createProjectStyle}><View></View> <Ionicons name="add" color={ORANGE} size={80}/> </Text>
         
        </View>
        </TouchableOpacity>

    )
  }
}




const styles = StyleSheet.create({
  FlatListView: {
    flex: 1
    //borderWidth: 1
    ,
    // marginTop:5,
    backgroundColor: BACKGROUND,
    height: "100%", width: "100%",
    justifyContent: "center", alignItems: "center",paddingVertical:20
  },createProjectStyle:{
    fontSize:24,
    fontWeight:"600",color:ORANGE,justifyContent:'center',textAlign:"center"
  },
  
  CreateProjectView:{
    flexDirection:'row',
    backgroundColor: ALMOSTBLACK, borderRadius: 25,opacity:0.8,
    width: windowWidth*0.2, height: windowHeight * 0.3,
    marginTop: 20,shadowColor:SHADOWGREY,marginLeft:15,
    justifyContent: "space-around",
    alignItems: "center", alignSelf: 'center'
  },
  FlatListContent: {
    width: "100%", height: "1000%",

    // alignItems:'center'
  }, flatlistItemView: {
    // flex:1,
    //borderWidth: 1,
    backgroundColor: LIGHTBLUE, borderRadius: 20,opacity:0.8,
    width: windowWidth*0.7, height: windowHeight * 0.3,
    marginVertical: 20,shadowColor:SHADOWGREY,marginHorizontal:15,
    justifyContent: "space-around",
    alignItems: "flex-end", alignSelf: 'center',paddingHorizontal:10
  },

  flatlistStyle: {
    flex: 1,
    //borderWidth: 1,
    width: "100%", height: "60%"
  }
})



var flatListData = [{ "id": "1", "data": [], "members": [], "project_info": { "project_budget": "5000", "project_type": "Photo", "time_limit": "185" }, "project_name": "First Projectnum ", "project_owner": "Dasf7328S" }, { "id": "2", "data": [], "members": [], "project_info": { "project_budget": "155000", "project_type": "Audio", "time_limit": "180" }, "project_name": "Second Projectnum1", "project_owner": "Dasf7328S" }, { "id": "3", "data": [], "members": [], "project_info": { "project_budget": "155000", "project_type": "Audio", "time_limit": "180" }, "project_name": "Project number3 ", "project_owner": "Dasf7328S" }, { "id": "1", "data": [], "members": [], "project_info": { "project_budget": "5000", "project_type": "Photo", "time_limit": "185" }, "project_name": "First Projectnum ", "project_owner": "Dasf7328S" }, { "id": "1", "data": [], "members": [], "project_info": { "project_budget": "5000", "project_type": "Photo", "time_limit": "185" }, "project_name": "First Projectnum ", "project_owner": "Dasf7328S" }, { "id": "1", "data": [], "members": [], "project_info": { "project_budget": "5000", "project_type": "Photo", "time_limit": "185" }, "project_name": "First Projectnum ", "project_owner": "Dasf7328S" }, { "id": "1", "data": [], "members": [], "project_info": { "project_budget": "5000", "project_type": "Photo", "time_limit": "185" }, "project_name": "First Projectnum ", "project_owner": "Dasf7328S" }]


/*
   <FlatList
          contentContainerStyle={{ alignItems: 'center' }}
          data={projects}
          style={styles.flatliststyle}
          horizontal={false}
          inverted={false}

          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.flatlistusers}
              onPress={() => {
                navigation.navigate('DashBoard', {
                  user: userr,
                  project: item,
                });
              }}>
              <Text style={styles.projectsinfo}>
                Project Name : {item.project_name}
              </Text>
              <Text style={styles.projectsinfo}>
                Project Budget : {item.project_info.project_budget}
              </Text>
              <Text style={styles.projectsinfo}>
                Project Type : {item.project_info.project_type}
              </Text>
            </TouchableOpacity>
          )}></FlatList>
 */