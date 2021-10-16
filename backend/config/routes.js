const express = require('express');

module.exports = function (server) {

    // API Routes
    const router = express.Router();
    server.use('/api', router);

    // Rotas da API
    const BillingCycleServices = require('../api/billingCycle/billingCyclesService');
    BillingCycleServices.register(router, '/billingCycles');
    

} 