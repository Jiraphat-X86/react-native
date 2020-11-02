import * as React from 'react'
import { View, Text, SafeAreaView} from 'react-native'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={}   
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e6ffff'}}>
                <Text>Tutorial</Text>
            </View>
        )
    }
}

export default App