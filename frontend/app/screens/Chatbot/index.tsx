import React, { useState } from 'react';
import { View } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { Avatar } from 'react-native-elements';

const botAvatar = require('../../../assets/images/avatar.png');

const BOT = {
    _id: 2,
    name: 'Mr. Bot',
    avatar: botAvatar,
};

const Chatbot = () => {
    const [messages, setMessages] = useState<IMessage[]>([
        {
            _id: 1,
            text: 'Welcome to the NUSCampusCompass Chatbot. Ask away!',
            createdAt: new Date(),
            user: BOT,
        },
    ]);

    const renderAvatar = () => {
        return (
            <Avatar
                rounded
                size="small"
                source={BOT.avatar}
            />
        );
    };

    const onSend = (newMessages: IMessage[]) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, newMessages)
        );
        // Handle sending messages to backend or Dialogflow here
    };

    return (
        <View style={{ flex: 1, marginBottom: 90, backgroundColor: '#90B8B8' }}>
            <GiftedChat
                messages={messages}
                onSend={(newMessages) => onSend(newMessages)}
                onQuickReply={(quickReply) => console.log(quickReply)}
                user={{ _id: 1 }}
                renderAvatarOnTop
                renderAvatar={(props) => renderAvatar()}
            />
        </View>
    );
};

export default Chatbot;