Template.jd4rider_chatBlog.events({

    'submit #blogForm': function (e, tmpl) {
        e.preventDefault();

        var title = tmpl.find('#blogTitle').value,
            body = tmpl.find('#blogBody').value;

        Meteor.call('submitPost', title, body);

    }
});

Template.jd4rider_chatBloglist.onCreated(function () {
    this.modeVar = new ReactiveVar(null);
});


Template.jd4rider_chatBloglist.helpers({
     // blogs() {
     //     let allblogs = Meteor.apply('listsPosts', null, { returnStubValue: true },function(error, result){
     //         if (error) { console.log(error)} // Note that the error is returned synchronously
     //         else {
     //             return result; // Using : Session.get('result') will return you the result of the meteor call !
     //         }
     //     });
     //     console.log(allblogs);
     // },
    modeArray() {
        return [ Template.instance().modeVar.get() ];
    },
    blogs: function () {
        var uniqueId = 'get-blogs';
        return Call(uniqueId, 'listsPosts').result();
    }
    //blogs: [
    //    {title: 'Hello', body: 'World'}
    //],
});