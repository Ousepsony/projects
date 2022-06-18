function addEventListenerCopy (type,action){
    var eventProperties = {
        ClientX:100,
        ClientY:200,
    }
    if(type="keypress"){
        action(eventProperties);
    }
}