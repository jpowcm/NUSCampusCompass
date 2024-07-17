import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const botAvatar = require('../../../assets/images/avatar.png');

const BOT = {
    _id: 2,
    name: 'Mr. Bot',
    avatar: botAvatar,
}

const Chatbot = () => {
    const state = {
        messages: [],
        id: 1,
        name: ''
    }
    return (
        <View style={{ marginBottom: 90, flex: 1 }}>
            <GiftedChat messages={state.messages}
                onSend={(message) => console.log(message)}
                onQuickReply={(quickReply) => console.log(quickReply)}
                user={{ _id: 1 }} />
        </View>
    );
};

export default Chatbot;