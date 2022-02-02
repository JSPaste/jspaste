'use strict';

const constants = {
    baseURL: 'https://jspaste.ml',
    routeURL: '/documents/'
};

const info = {
    name: 'JSPaste',
    version: require('../../package.json').version,
    author: 'tnfAngel#6557',
    web: 'https://jspaste.ml',
    github: 'https://github.com/tnfAngel/jspaste-api',
    credits: [{
        creator: 'Inetol#0840',
        github: 'https://github.com/Inetol/jspaste-api'
    }, {
        creator: 'Aidak',
        github: 'https://github.com/Aidakkk/gopaste'
    }]
};

module.exports = {constants, info};