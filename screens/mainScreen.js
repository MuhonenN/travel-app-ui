import React, { Component } from 'react';
import { View, SafeAreaView, Text, Image, Dimensions } from 'react-native';
import { styles } from '../styles/styles';
import Input from '../components/Input';
import ImageButton from '../components/ImageButton';
import Animated, { Easing } from 'react-native-reanimated';

const { height } = Dimensions.get('screen');

export default class MainScreen extends Component {
    state = {
        alignment: new Animated.Value(height),
    };

    componentDidMount() {
        this.AnimateHeader();
    }

    AnimateHeader = () => {
        Animated.timing(this.state.alignment, {
            toValue: 200,
            duration: 700,
            easing: Easing.back(),
        }).start();
    };

    render() {
        const AnimatedHeader = {
            height: this.state.alignment,
        };

        return (
            <View>
                <Animated.View style={[styles.header, AnimatedHeader]}>
                    <View style={{ flex: 0.6, paddingTop: 20 }}>
                        <Text style={styles.headerText}>
                            Find your next trip!
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 0.35,
                            alignItems: 'flex-end',
                            paddingTop: 20,
                        }}
                    >
                        <Image
                            source={require('../assets/images/img.png')}
                            style={styles.headerImage}
                        />
                    </View>
                </Animated.View>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ alignItems: 'center' }}>
                        <Input placeholder={'Search'} />
                    </View>
                    <View style={styles.imageContainer}>
                        <View style={styles.imageView}>
                            <Image
                                source={require('../assets/images/1.jpg')}
                                style={styles.image}
                            />
                            <ImageButton
                                onPress={() =>
                                    this.props.navigation.navigate('Luxury')
                                }
                                title="Luxury"
                                description="Stunning Places"
                            />
                        </View>
                        <View style={styles.imageView}>
                            <Image
                                source={require('../assets/images/2.jpg')}
                                style={styles.image}
                            />
                            <ImageButton
                                title="City"
                                description="Fascinating Culture"
                            />
                        </View>
                    </View>
                    <View style={styles.imageContainer}>
                        <View style={styles.imageView}>
                            <Image
                                source={require('../assets/images/3.jpg')}
                                style={styles.image}
                            />
                            <ImageButton
                                title="Seaside"
                                description="Fish n' chips and beer"
                            />
                        </View>
                        <View style={styles.imageView}>
                            <Image
                                source={require('../assets/images/4.jpg')}
                                style={styles.image}
                            />
                            <ImageButton
                                title="Wonders"
                                description="Visit World Wonders"
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
