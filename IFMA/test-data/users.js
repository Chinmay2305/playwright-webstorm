// test-data/users.js
// Test data for login and dashboard verification tests

const users = [
  {
    // User 1: Admin with full access
    email: 'viren.desai@theopeneyes.in',
    password: 'OpenEyes@2024',
    expectedCards: [
      {
        title: 'Connector',
        button: 'Access Connector'
      },
      {
        title: 'IFMA’s self-assessment',
        button: 'Access SAT'
      },
      {
        title: 'Administration',
        button: 'Access Administration'
      }
    ]
  },
  {
    // User 2: First cohort user
    email: 'firstcohort@yopmail.com',
    password: 'firstcohort@yopmail.com',
    expectedCards: [
      {
        title: 'Connector',
        button: 'Access Connector'
      },
      {
        title: 'IFMA’s self-assessment',
        button: 'Access SAT'
      }
    ]
  },
  {
    // User 3: First user with limited access
    email: 'firstuser@yopmail.com',
    password: 'firstuser@yopmail.com',
    expectedCards: [
      {
        title: 'IFMA’s self-assessment',
        button: 'Access SAT'
      }
    ]
  }
];

module.exports = { users };
