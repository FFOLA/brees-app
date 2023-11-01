import React from 'react';
import { View } from 'react-native'
const TableOne = () => {
    const item = ({ item }) => (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 50, backgroundColor: 'lightyellow' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{item.id}</Text>
            </View>
            <View style={{ width: 400, backgroundColor: 'lightpink' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{item.name}</Text>
            </View>
            <View style={{ width: 400, backgroundColor: 'lavender' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{item.email}</Text>
            </View>
        </View>
    )
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
            <FlatList data={data} renderItem={item} keyExtractor={item => item.id.toString()} />
        </View>
    )
}
export default TableOne