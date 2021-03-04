import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Notify extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state={}   
    }    

    render() {
        return ( 
            <View style={{flex: 1}}>
                <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
                    <TouchableOpacity style={{padding: 20, backgroundColor: '#aaff00'}} onPress={() => this.props.navigation.navigate('Bluetooth')}>
                        <Text style={{fontWeight: 'bold', fontSize: 17}}>BlueTooth</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    componentDidMount() {
    }

}


export default Notify