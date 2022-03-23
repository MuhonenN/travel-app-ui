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
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';

const { width, height } = Dimensions.get('screen');

export default class Luxury extends Component {
    state = {
        alignment: new Animated.Value(height),
        cardAlignment: new Animated.Value(400),
        cards: [
            {
                id: 1,
                title: 'Paradise Island',
                description: 'Caribbean',
                location: 'Amongst the many stunning places in Caribbean',
                information:
                    'Far From Urban Noises, Outstanding Nature Awaits You to take you to some your pure imaginations',
                paymentInfo:
                    'Very Affordable Hotels, Starting from 1500 €/Night and Delightful Place To Visit',
                detailedDescription:
                    'Amongst The Many Stunning Lands in Maldives, A Wonderful Place on Earth and is Super Comfortable for New Wed Couples',
                image: require('../assets/images/2.jpg'),
            },
            {
                id: 2,
                title: 'Paradise Island',
                description: 'Caribbean',
                location: 'Amongst the many stunning places in Caribbean',
                information:
                    'Far From Urban Noises, Outstanding Nature Awaits You to take you to some your pure imaginations',
                paymentInfo:
                    'Very Affordable Hotels, Starting from 1500 €/Night and Delightful Place To Visit',
                detailedDescription:
                    'Amongst The Many Stunning Lands in Maldives, A Wonderful Place on Earth and is Super Comfortable for New Wed Couples',

                image: require('../assets/images/3.jpg'),
            },
            {
                id: 3,
                title: 'Paradise Island',
                description: 'Caribbean',
                location: 'Amongst the many stunning places in Caribbean',
                information:
                    'Far From Urban Noises, Outstanding Nature Awaits You to take you to some your pure imaginations',
                paymentInfo:
                    'Very Affordable Hotels, Starting from 1500 €/Night and Delightful Place To Visit',
                detailedDescription:
                    'Amongst The Many Stunning Lands in Maldives, A Wonderful Place on Earth and is Super Comfortable for New Wed Couples',

                image: require('../assets/images/4.jpg'),
            },
            {
                id: 4,
                title: 'Paradise Island',
                description: 'Caribbean',
                location: 'Amongst the many stunning places in Caribbean',
                information:
                    'Far From Urban Noises, Outstanding Nature Awaits You to take you to some your pure imaginations',
                paymentInfo:
                    'Very Affordable Hotels, Starting from 1500 €/Night and Delightful Place To Visit',
                detailedDescription:
                    'Amongst The Many Stunning Lands in Maldives, A Wonderful Place on Earth and is Super Comfortable for New Wed Couples',

                image: require('../assets/images/1.jpg'),
            },
        ],
    };

    AnimateUI = () => {
        Animated.sequence([
            Animated.timing(this.state.alignment, {
                toValue: height / 3,
                duration: 800,
                easing: Easing.back(),
                useNativeDriver: false,
            }),
            Animated.timing(this.state.cardAlignment, {
                toValue: 0,
                duration: 700,
                easing: Easing.ease,
                useNativeDriver: true,
            }),
        ]).start();
    };

    componentDidMount() {
        this.AnimateUI();
    }

    handlePress = (id) => {
        const card = this.state.cards.find((item) => item.id === id);

        this.props.navigation.navigate('Details', { card });
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
                        source={this.props.route.params.image}
                        // source={require('../assets/images/1.jpg')}
                        style={styles.backgroundImage}
                    >
                        <View style={styles.textView}>
                            <Text style={styles.title}>
                                {/* Luxury */}
                                {this.props.route?.params?.title}
                            </Text>
                            <Text style={styles.description}>
                                {/* Stunning Places */}
                                {this.props.route?.params?.slogan}
                            </Text>
                        </View>
                    </ImageBackground>
                </Animated.View>
                <Animated.View style={[styles.cardView, AnimatedCards]}>
                    <FlatList
                        data={this.state.cards}
                        renderItem={({ item }) => (
                            <Card
                                title={item.title}
                                location={item.location}
                                description={item.description}
                                image={item.image}
                                onPress={() => this.handlePress(item.id)}
                            />
                        )}
                    />
                </Animated.View>
            </View>
        );
    }
}
