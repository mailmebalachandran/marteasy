import React, { Component } from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    RefreshControl,
    Image,
} from 'react-native';
import { Text } from 'react-native-elements';
import StatusBarComponent from '../../components/StatusBar/StatusBarComponent';
import MenuLoader from '../../components/Loader/MenuLoader';
import Octicons from "react-native-vector-icons/Octicons";
import Anticons from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import ErrorOverlay from '../../components/Errors/ErrorOverlay';
import NetInfo from '@react-native-community/netinfo';
import styles from './styles';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import MotorMainCategory from './MotorMainCategoryScreen';
import MotorAPI from '../../api/Motor/MotorAPI';
import Header from '../../components/Header/Header';

class MotorScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            refreshing: false,
            isShowError: false,
            isPressed: false,
            IsInternetConnected: true,
            motorList: [],
        };
    }

    componentDidMount = () => {
        this.setState({ isLoading: true });
        NetInfo.addEventListener(this.handleConnectivityChange);
        NetInfo.fetch().done((isConnected) => {
            if (isConnected.isConnected == true) {
                this.setState({ IsInternetConnected: true })
            }
            else {
                this.setState({ IsInternetConnected: false })
            }
        });

        this.getMotorProductsOnLoad();

        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.setState({ isLoading: true });
            this.getMotorProductsOnLoad();
        });

    };
    handleConnectivityChange = (isConnected) => {
        if (isConnected.isConnected == true) {
            this.setState({ IsInternetConnected: true })
        }
        else {
            this.setState({ IsInternetConnected: false })
        }
    }

    getMotorProductsOnLoad = async () => {
        const result = await MotorAPI.getMotorProducts(this.props.route.params.tagId);
        if (result !== undefined && result.isError !== undefined && result.isError === true) {

            this.setState({ isShowError: true, isLoading: false });
        }
        else if (result !== undefined) {
            this.setState({ motorList: result }, () => {
                this.setState({ isLoading: false, isShowError: false });
            });
        }
    };


    _onRefresh = () => {
        this.getMotorProductsOnLoad();
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, }}>
                {!this.state.IsInternetConnected ? <ErrorOverlay errorType={"NetWork"} /> : this.state.isLoading ? (
                    <MenuLoader />
                ) : false ? <ErrorOverlay errorType={"API"} reload={this.componentDidMount} /> : (
                    <>
                        <Header
                           navigationScreenValue="Motor Wash"
                            navigation={this.props.navigation}
                        />
                        <ScrollView refreshControl={<RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />}>
                            <StatusBarComponent styleType={0} />
                            <View style={{ flex: 1 }}>
                                <View style={{ backgroundColor: 'white' }}>
                                    <MotorMainCategory
                                        categories={this.state.motorList}
                                        navigation={this.props.navigation}
                                    />
                                </View>
                            </View>
                        </ScrollView>
                    </>
                )}
            </SafeAreaView>
        );
    }
}

export default MotorScreen;
