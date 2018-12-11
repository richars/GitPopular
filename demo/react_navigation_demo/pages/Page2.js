import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MaterialTopTabNavigator} from '../navigators/AppNavigators'

export default class Page2 extends React.Component {
    //在这里定义每个页面的导航属性
    // static navigationOptions = {
    //     title: 'Page2',
    // };
    render() {
        return <View style={styles.container}><MaterialTopTabNavigator/></View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    text: {
        fontSize: 20,
        color: 'white'
    }
});