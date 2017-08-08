var app = app || {};
//Structure to show all books into the browser -- using the BookView
//
app.LibraryView = Backbone.View.extend({
  el: '#books',

  initialize: function( initialBooks ) {  //app.js will get the instance of the LibraryView passing the initital books
    this.collection = new app.Library( initialBooks );  //filling the Array into the collection
    this.render(); //will append each book to the browser
  },

  render: function() {
    this.collection.each(function( item ){
      this.renderBook( item );
    }, this);
  },

  renderBook: function( item ) {
    var bookView = new app.BookView({ //create a instance of BookView passing a Book (model) 
      model: item
    });
    this.$el.append( bookView.render().el );
  }
});
