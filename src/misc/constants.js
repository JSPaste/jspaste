'use strict';

const constants = {
    baseURL: 'https://jspaste.tk',
    routeURL: '/documents/'
};

const info = {
    name: 'JSPaste',
    version: require('../../package.json').version,
    creator: 'tnfAngel#6557',
    web: 'https://jspaste.tk',
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