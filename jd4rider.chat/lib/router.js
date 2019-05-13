//routing as home page (/), rendering meteoris_themeAdminMain as the template and jd4rider_chatIndex as the content
FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render('meteoris_themeAdminMain', {content:"jd4rider_chatIndex"});
    }
});
FlowRouter.route('/blog', {
    action: function() {
        BlazeLayout.render('meteoris_themeAdminMain', {content:"jd4rider_chatBlog"});
    }
});
FlowRouter.route('/bloglist', {
    action: function() {
        BlazeLayout.reset();
        BlazeLayout.render('meteoris_themeAdminMain', {content:"jd4rider_chatBloglist"});
    }
});