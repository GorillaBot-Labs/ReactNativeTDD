import React from 'react';
import {
    View,
    FlatList,
    Text
} from 'react-native';

const Message = ({text}) => <Text>{text}</Text>;

const MessageList = ({messages}) => (
    <View>
        <FlatList
            data={messages}
            keyExtractor={item => item}
            renderItem={({item}) => <Message text={item}/>}
        />
    </View>
);

export default MessageList;
