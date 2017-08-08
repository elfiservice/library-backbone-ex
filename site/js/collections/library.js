var app = app || {};
//create Array of Books using the class Book in models
app.Library = Backbone.Collection.extend({
  model: app.Book
});
