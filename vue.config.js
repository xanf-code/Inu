const path = require('path');
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias.set('vue$', path.join(__dirname, 'node_modules/vue'));
        config.resolve.alias.set('highcharts$', path.join(__dirname, 'node_modules/highcharts'));
    },
};