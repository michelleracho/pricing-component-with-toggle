const planBundle = [
  {
    type: 'Basic',
    storage: '500 GB',
    users: 2,
    limit: '3 GB'
  },
  {
    type: 'Professional',
    storage: '1 TB',
    users: 5,
    limit: '10 GB'
  },
  {
    type: 'Master',
    storage: '2 TB',
    users: 10,
    limit: '20 GB'
  }
];

const annualPrice = [
  {
    type: 'Basic',
    price: 199.99
  },
  {
    type: 'Professional',
    price: 249.99
  },
  {
    type: 'Master',
    price: 399.99
  }
];

const monthlyPrice = [
  {
    type: 'Basic',
    price: 19.99
  },
  {
    type: 'Professional',
    price: 24.99
  },
  {
    type: 'Master',
    price: 39.99
  }
];

export { planBundle, annualPrice, monthlyPrice };
