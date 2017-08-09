var app = app || {};
//Structure to show all books into the browser -- using the BookView
//
app.LibraryView = Backbone.View.extend({
  el: '#books',

  events: {
    'click #add': 'addBook'
  },

  initialize: function( initialBooks ) {  //app.js will get the instance of the LibraryView passing the initital books
    this.collection = new app.Library( initialBooks );  //filling the Array into the collection
    this.render(); //will append each book to the browser
    this.listenTo( this.collection, 'add', this.renderBook );
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
  },

  addBook: function( e ) {
    e.preventDefault(); //To dont submit and reload the page

    var formData = {};

    $('#addBook div').children('input').each(function(i, el){ //take the inputs into the #addBook div
      if( $(el).val() !== ''){  //if the input is not empty
        formData[el.id] = $(el).val();  //PUT your value into the formData Obj
      }
    });
    this.collection.add( new app.Book( formData ) );  //create a Book using the Obj formData
  }
});
