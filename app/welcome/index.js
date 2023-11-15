
import { } from 'react';
import {View, SafeAreaView} from 'react-native'
import Welcome from '.UinsportsApp/app/welcome/welcome.jsx';
import { Stack, useRouter } from 'expo-router';


const Home = () => {
    const router = useRouter();

    return(
        <SafeAreaView>
             <View style={{flex: 1, padding: SIZES.medium}}>
                <Welcome></Welcome>
            </View>
        </SafeAreaView>
    )
}