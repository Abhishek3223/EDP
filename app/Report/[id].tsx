import { Image, SafeAreaView, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Stack, useRouter } from 'expo-router';
import { images, FONT, SIZES, COLORS, icons } from "../../constants";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Report() {

    // need to be fetched from the backend firebase ----
    const dotsData = [
        { coordinate: [78, 8], status: 'danger' },
        { coordinate: [56, 65], status: 'warning' },
    ];
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{

                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity style={styles.header} onPress={() => { router.push('/') }}>
                            <AntDesign name="leftcircle" size={24} color={COLORS.secondary} />
                            <Text style={styles.title}>
                                Crop title
                            </Text>
                        </TouchableOpacity>

                    ),
                    // headerRight: () => (
                    //     <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
                    // ),
                    headerTitle: ''
                }}
            />

            <>
                <View style={styles.container}>
                    <Image
                        source={images.topView}// Replace with your image URL
                        style={styles.image}
                    />
                    {/* <View style={[styles.dot, { left: `${dotCoordinates[0]}%`, top: `${dotCoordinates[1]}%` }]} /> */}
                    {dotsData.map((dot, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                { left: `${dot.coordinate[0]}%`, top: `${dot.coordinate[1]}%` },
                                dot.status === 'danger' ? { backgroundColor: 'red' } : { backgroundColor: 'yellow' },
                            ]}
                        />
                    ))}
                </View>
            </>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.lightWhite,
    },
    header: {
        flexDirection: 'row',
    }
    ,
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.primary,
        paddingX: 10,
    },
    image: {
        flex: 1,
        width: '100%'
    },
    dot: {
        position: 'absolute',
        width: 10,
        height: 10,
        borderRadius: 5,
    },
});
