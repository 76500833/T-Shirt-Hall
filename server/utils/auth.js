const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'theSecret'
const expiration = '2h';

module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user.' , {
        extensions: {
            code: 'UNAUTHENTICATED',
        },
    }),

    signToken: function ({ email, _id }) {
        const payload = { email, _id };
        return jwt.sign({ data: payload }, secret, {expiresIn: expiration})
    }
}