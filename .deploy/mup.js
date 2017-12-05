module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '172.20.20.28',
      username: 'root',
      // pem: './path/to/pem'
      password: 'N6RVxTHxgTFZU5SBD'
      // or neither for authenticate from ssh-agent
    }
  },

  app: {
    // TODO: change app name and path
    name: 'FOL',
    path: 'C:/Users/00185769/webstormprojects/FOL',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'http://172.20.20.28/',
      MONGO_URL: 'mongodb://localhost/meteor',
      MAIL_URL: "smtp://localhost"
    },

    // ssl: { // (optional)
    //   // Enables let's encrypt (optional)
    //   autogenerate: {
    //     email: 'email.address@domain.com',
    //     // comma separated list of domains
    //     domains: 'website.com,www.website.com'
    //   }
    // },

    docker: {
      // change to 'abernix/meteord:base' if your app is using Meteor 1.4 - 1.5
      image: 'abernix/meteord:node-8.4.0-base',
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  }
};
