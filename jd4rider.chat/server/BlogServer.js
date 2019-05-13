Meteor.methods({
    'submitPost': function  ( title , body ) {
        console.log(title);
        console.log(body);

        Blogs.insert({
            title: title,
            body: body
        })
    },
    'listsPosts': function () {
        const allblogs = Blogs.find({});
        return allblogs.fetch();
    },
});