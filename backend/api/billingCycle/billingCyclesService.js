const _ = require('lodash');
const BillingCycle = require('./billingCycle');


BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({new: true, runValidators: true});

// Padronização de retorno de erros da API
BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext);

function sendErrorsOrNext(req, res, next) {
    const bundle = res.locals.bundle;

    if (bundle.errors) {
        var errors = parseErrors(bundle.errors);
        res.status(500).json({errors});

    } else {
        next();
    }
}

function parseErrors(nodeRestfulErrors) {
    const errors = [];
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}
// Fim padronização de retorno de erros da API


BillingCycle.route('count', function(req, res, next) {
    BillingCycle.count(function(error, value) {
        if (error) {
            res.status(500).json({errors:[erro]});
        } else {
            res.json({value});
        }
    })
})

module.exports = BillingCycle;  