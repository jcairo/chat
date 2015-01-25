var myApp = angular.module('myApp', []);

myApp.factory('MessageData', function () {
    messages = [
        {messageText: 'Hello how are you', time: '8:00pm', from: 'user'},
        {messageText: 'Im good how are you', time: '8:01pm', from: 'user'},
        {messageText: 'Im good how are you', time: '8:01pm', from: 'correspondent'}
    ];
    return messages;
});

var BubbleController = ['MessageData', function (MessageData) {
    this.messages = MessageData;

    this.addMessage = function(messageText) {
        if (this.messageInput === '') return;
        this.messages.push({messageText: messageText, time: '8:05', from: 'user'});
        var scrollEl = document.getElementsByClassName('bubble-wrapper')[0];
        this.messageInput = '';
        setTimeout( function() { scrollEl.scrollTop = scrollEl.scrollHeight; }, 100);
    };

}];

myApp.controller('BubbleController', BubbleController);
