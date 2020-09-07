import React from 'react';
import './Chat.css';
import Message from '../Message/Message';

class Chat extends React.Component {
  state = {
    messages: [
      { text: "Text Aa", date: "12:30" },
      { text: "Text Ba", date: "12:31" },
      { text: "Text Ca", date: "12:32" },
    ],
    newText: ''
  }

  addNewMessage() {
    console.log("In - addNewMessage()");
    const newMessage = {
      text: this.state.newText,
      date: "12:12"
    };
    const allMessages = this.state.messages;
    allMessages.push(newMessage);

    this.setState({
      messages: allMessages,
    });
  }

  textChanged(event) {
    console.log(event.target.value);
    this.setState({ newText: event.target.value });
  }

  render() {

    const renderedMessages = this.state.messages.map(
      (m, index) => <Message key={index} text={m.text} date={m.date} />
    );

    return (
      <div className="chat-container">
        <div>
          <input type="text" onChange={(e) => this.textChanged(e)} />
          <button onClick={() => this.addNewMessage()}>Add</button>
        </div>
        <div>
          {renderedMessages}
        </div>
      </div>
    );
  }
}

export default Chat;