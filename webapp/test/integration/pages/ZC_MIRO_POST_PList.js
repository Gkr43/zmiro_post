sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zmiropost',
            componentId: 'ZC_MIRO_POST_PList',
            contextPath: '/ZC_MIRO_POST_P'
        },
        CustomPageDefinitions
    );
});