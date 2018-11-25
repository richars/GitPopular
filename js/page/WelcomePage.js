import React, {Component} from 'react';

import NavigationUtil from "../navigator/NavigationUtil";
import SplashScreen from 'react-native-splash-screen'

type Props = {};

export default class WelcomePage extends Component<Props> {
    componentDidMount() {
        this.timer = setTimeout(() => {
            SplashScreen.hide();
            NavigationUtil.resetToHomPage({
                navigation: this.props.navigation
            })
        }, 200);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return null;
    }
}
