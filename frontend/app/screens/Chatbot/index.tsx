import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from '../../../config/dialogflow';

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
    const componentDidMount = () => {
        Dialogflow_V2.setConfiguration(
            dialogflowConfig.client_email,
            dialogflowConfig.private_key,
            Dialogflow_V2.LANG_ENGLISH_US,
            dialogflowConfig.project_id);
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