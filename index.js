// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0;

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
    return store.costomers.filter(
      function(customer) {
        return customer.neighborhoodId = this.id;
      }.bind(this)
    )
  };

};

class Meal {

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
    return store.costomers.filter(
      function(customer) {
        return customer.neighborhoodId = this.id;
      }.bind(this)
    )
  };

};


