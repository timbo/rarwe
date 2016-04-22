import Ember from 'ember';

export default Ember.Controller.extend({
  songCreationStarted: false,
  actions: {
    enableSongCreation: function() {
      this.set('songCreationStarted', true);
    },
    canCreateSong: Ember.computed('songCreationStarted', 'model.songs.length', function() {
        return this.get('songCreationStarted') || this.get('model.songs.length');
      }),
    updateRating: function(params) {
      var song = params.item,
          rating = params.rating;

      song.set('rating', rating);
    }
  }
});
