import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

const NewMessageForm = ({onSend}) => {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        onSend(text);
        setText('');
    };

    return (
        <View>
            <TextInput testID="messageText"
                       value={text}
                       onChangeText={setText}
            />
            <Button title="Send"
                    testID="sendButton"
                    onPress={handleSubmit}
            />
        </View>
    );
};

export default NewMessageForm;
