import React, {Component} from 'react';
import {connect} from 'react-redux'
import {onThemeChange} from '../action/theme'
import {Button, StyleSheet, Text, View} from 'react-native';

type Props = {};

class MyPage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>MyPage</Text>
                <Button
                    title="改变主题色"
                    onPress={() => {
                        // let {dispatch} = NavigatorUtil.navigation;
                        // dispatch(onThemeChange('red'))
                        this.props.onThemeChange('#62a');
                    }}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    onThemeChange: (theme) => dispatch(onThemeChange(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50

    },

});
