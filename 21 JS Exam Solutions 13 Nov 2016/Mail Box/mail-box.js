class MailBox {
    constructor() {
        this._messages = [];
    }

    get messageCount() {
        return this._messages.length;
    }

    addMessage(subject, text) {
        this._messages.push([subject, text]);
        return this;
    }

    deleteAllMessages() {
        this._messages = [];
    }

    findBySubject(substr) {
        let results = [];
        this._messages.forEach(msgPair => {
            if(msgPair[0].indexOf(substr) !== -1) {
                results.push({subject:msgPair[0], text: msgPair[1]});
            }
        });
        return results;
    }

    toString() {
        if(!this._messages.length) return ' * (empty mailbox)';
        let resultMessage = '';
        this._messages.forEach( msgPair => {
           resultMessage += ` * [${msgPair[0]}] ${msgPair[1]}\n`;
        });
        return resultMessage;
    }
}

//For testing
let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
 JSON.stringify(mb.findBySubject('rakiya')));
 console.log("Messages holding 'ee': " +
 JSON.stringify(mb.findBySubject('ee')));

 mb.deleteAllMessages();
 console.log("Msg count: " + mb.messageCount);
 console.log('Messages:\n' + mb);

 console.log("New mailbox:\n" +
 new MailBox()
 .addMessage("Subj 1", "Msg 1")
 .addMessage("Subj 2", "Msg 2")
 .addMessage("Subj 3", "Msg 3")
 .toString());
