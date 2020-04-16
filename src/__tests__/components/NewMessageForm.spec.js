import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import NewMessageForm from '../../components/NewMessageForm';

describe('NewMessageForm', () => {
    const sendHandler = jest.fn();
    const messageText = 'Hello world';

    it('clears the message field', () => {
        const {getByTestId} = render(<NewMessageForm onSend={sendHandler}/>);

        fireEvent.changeText(getByTestId('messageText'), messageText);
        fireEvent.press(getByTestId('sendButton'));

        expect(getByTestId('messageText').props.value).toEqual('');
    });

    it('calls the send handler', () => {
        const {getByTestId} = render(<NewMessageForm onSend={sendHandler}/>);

        fireEvent.changeText(getByTestId('messageText'), messageText);
        fireEvent.press(getByTestId('sendButton'));

        expect(sendHandler).toHaveBeenCalledWith(messageText);
    });
});
