import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    Dimensions,
    Text,
    Animated,
    Easing,
} from 'react-native';
import { styles } from '../styles/luxury';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../components/Card';

const { width, height } = Dimensions.get('screen');

export default class Luxury extends Component {
    state = {
        alignment: new Animated.Value(height),
        cardAlignment: new Animated.Value(400),
    };

    componentDidMount() {
        this.AnimateUI();
    }

    AnimateUI = () => {
        Animated.sequence([
            Animated.timing(this.state.alignment, {
                toValue: height / 3,
                duration: 800,
                easing: Easing.back(),
            }),
            Animated.timing(this.state.cardAlignment, {
                toValue: 0,
                duration: 700,
                easing: Easing.ease,
            }),
        ]).start();
    };

    render() {
        const AnimatedBackground = {
            height: this.state.alignment,
        };

        const AnimatedCards = {
            transform: [
                {
                    translateX: this.state.cardAlignment,
                },
            ],
        };
        return (
            <View>
                <Animated.View style={[{ width: width }, AnimatedBackground]}>
                    <ImageBackground
                        source={require('../assets/images/1.jpg')}
                        style={styles.backgroundImage}
                    >
                        <View style={styles.textView}>
                            <Text style={styles.title}>Luxury</Text>
                            <Text style={styles.description}>
                                Stunning Places
                            </Text>
                        </View>
                    </ImageBackground>
                </Animated.View>
                <Animated.View style={[styles.cardView, AnimatedCards]}>
                    <ScrollView>
                        <Card
                            title="Paradise Island"
                            location="Caribbean"
                            description="Amongst the many stunning places in Caribbean"
                            image={require('../assets/images/2.jpg')}
                        />
                        <Card
                            title="Paradise Island"
                            location="Caribbean"
                            description="Amongst the many stunning places in Caribbean"
                            image={require('../assets/images/3.jpg')}
                        />
                        <Card
                            title="Paradise Island"
                            location="Caribbean"
                            description="Amongst the many stunning places in Caribbean"
                            image={require('../assets/images/4.jpg')}
                        />
                        <Card
                            title="Paradise Island"
                            location="Caribbean"
                            description="Amongst the many stunning places in Caribbean"
                            image={require('../assets/images/1.jpg')}
                        />
                    </ScrollView>
                </Animated.View>
            </View>
        );
    }
}
