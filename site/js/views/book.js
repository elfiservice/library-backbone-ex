var app = app || {};
//a single structure to a unique book
//Will be used into the LibraryView
app.BookView = Backbone.View.extend({
  tagName: 'div',
  className: 'bookContainer',
  template: _.template( $('#bookTemplate').html() ),

  render: function() {
    this.$el.html( this.template( this.model.attributes ) );

    return this;
  }
});
