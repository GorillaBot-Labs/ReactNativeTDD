import React, {useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import NewMessageForm from './src/components/NewMessageForm';
import MessageList from './src/components/MessageList';

const App = () => {
    const [messages, setMessages] = useState([]);

    const sendHandler = (newMessage) => {
        setMessages([newMessage, ...messages]);
    }
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <View>
                    <NewMessageForm onSend={sendHandler}/>
                    <MessageList messages={messages}/>
                </View>
            </SafeAreaView>
        </>
    );
};

export default App;
