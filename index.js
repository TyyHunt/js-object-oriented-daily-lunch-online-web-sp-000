// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0;
let customerId = 0;
let mealId = 0;
let deliveryId = 0;

class Neighborhood {

  constructor(name) {
    this.name = name;
    this.id = ++neighborhoodId;

    store.neighborhoods.push(this);
  };

  deliveries() {
    return store.deliveries.filter(
      function(delivery) {
        return delivery.neighborhoodId = this.id;
      }.bind(this)
    )
  };

  customers() {
    return store.customers.filter(
      function(customer) {
        return customer.neighborhoodId = this.id;
      }.bind(this)
    )
  };

};

class Meal {

  constructor(title, price) {
    this.title = title;
    this.price = price;
    this.id = ++mealId;

    store.meals.push(this);
  };

};


class Customer {

  constructor(name, neighborhood) {
    this.name = name;
    this.id = ++customerId;
    this.neighborhoodId = neighborhood;

    store.customers.push(this);
  };

  deliveries() {
    return store.deliveries.filter(
      function(delivery) {
        return delivery.customerId = this.id;
      }.bind(this)
    )
  };

  meals() {
    return store.meals.filter(
      function(meal) {
        return meal.customerId = this.id;
      }.bind(this)
    )
  };

};

class Delivery {

  constructor(meal, customer, neighborhood) {
    this.mealId = meal;
    this.customerId = customer;
    this.neighborhoodId = neighborhood;
    this.id = ++deliveryId;

    store.deliveries.push(this);
  };

  meal() {
    return store.meals.find(
      function(meal) {
        return meal.id === this.mealId;
      }.bind(this)
    )
  };

  customer(){
    return store.customers.find(
      function(customer){
        return customer.id === this.customerId
      }.bind(this)
    )
  };

  neighborhood(){
    return store.neighborhoods.find(
      function(neighborhood){
        return neighborhood === this.neighborhoodId;
      }.bind(this)
    )
  };

};
