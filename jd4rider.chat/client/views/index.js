/*
 * instantiate the Controller here
 */
var ctrl = new Jd4rider.ChatController();

/*
 * subscribe chat from server with criteria from controller and sort limit from controller
 * when template created
 */
Template.jd4rider_chatIndex.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('jd4rider_chat', ctrl.getCriteria(), ctrl.getSortLimit());
    });
});

Template.jd4rider_chatIndex.helpers({
    /* check whether collection empty or not from index method */
    isEmpty: function() {
        return ctrl.index().isEmpty;
    },
    /* get models from index method */
    models: function() {
        return ctrl.index().models;
    },
    /*
     *  use "" chat-message styling 
     *  if current message is current logged in user message 
     *  else use "right"
     */
    messageClass: function() {
        if (this.userId == Meteor.user()._id)
            return "";
        return "right";
    }
});

Template.jd4rider_chatIndex.events = {
    /* send message using t option from template, to get form value */
    'click #btnSend': function(e, t) {
        e.preventDefault();
        ctrl.post(t);
    }
};