Meteor.methods({
	'getFilm':function(episode){
		return Meteor.http.call('GET','http://swapi.co/api/films/' + episode + '/?format=json')
	}
})