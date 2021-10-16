const ld = require('lodash');
const billingCycle = require('../billingCycle/billingCycle');

/*
    Função middleware, responsavel por sumarizar todos os cliclos de pagamento.

    Doc utilização $project:
    https://docs.mongodb.com/manual/reference/operator/aggregation/project/#mongodb-pipeline-pipe.-project
    Doc utilização $group:
    https://docs.mongodb.com/manual/reference/operator/aggregation/group/#mongodb-pipeline-pipe.-group
*/

function getSummary(req, res) {
    console.log('getSummary');
    billingCycle.aggregate({
        $project: {credit: {$sum: "$credits.value"}, debts: {$sum: "$debts.value"}}
    },{
        $group: {_id: null, credit: {$sum: "credit"}, debt: {$sum: "debts"}}
    },{
        $project: {_id: 0, credit: 1, debt: 1}
    }, function(error, result) {
        if (error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(ld.defaults(result[0], {credit: 0, debt: 0}))
        }
    })
}

module.exports = { getSummary }


