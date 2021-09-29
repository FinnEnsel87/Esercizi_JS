const order = {};

/*
if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}

*/

// usa operatore not per order e option chaining ( perchè ?)
 if (!order?.customer?.address?.city) {
  console.log('City is required');
}