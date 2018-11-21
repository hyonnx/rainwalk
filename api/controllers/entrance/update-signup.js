module.exports = {


  friendlyName: 'Update Progress Signup',


  description: 'Display "update Signup" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/entrance/updatesignup',
    },

    redirect: {
      description: 'The requesting user is already logged in.',
      responseType: 'redirect'
    }

  },


  fn: async function (inputs, exits) {

    if (this.req.me) {
      throw {redirect: '/'};
    }

    return exits.success();

  }


};
