sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zmiropost',
            componentId: 'ZC_MIRO_POST_PObjectPage',
            contextPath: '/ZC_MIRO_POST_P'
        },
        CustomPageDefinitions
    );
});