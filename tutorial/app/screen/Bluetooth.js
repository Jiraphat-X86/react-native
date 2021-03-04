import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { BleManager } from 'react-native-ble-plx'

class Notify extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state={} 
    }    

    render() {
        return ( 
            <View style={{flex: 1}}>
                <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
                    <TouchableOpacity style={{padding: 20, backgroundColor: '#ffb3b3'}} onPress={() => this.props.navigation.goBack()}>
                        <Text style={{fontWeight: 'bold', fontSize: 17}}>Black</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }

    componentDidMount() {
    }

}


export default Notify