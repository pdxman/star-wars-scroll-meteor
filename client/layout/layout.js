Template.layout.curfilm =function(){
	var episode = Session.get('episode');
	Meteor.call('getFilm',episode,function(err,results){
		console.log(results);
		Session.set('film',JSON.parse(results.content).opening_crawl);
	})
	return (Session.get('film'));
};
Template.layout.events({
	'change .films':function(evt,tmpl){
		loadingTemplate: 'loading'
		waitOn: Session.set('episode',tmpl.find('.films').value);
	}
	
	
});