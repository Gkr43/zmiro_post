sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zmiropost/test/integration/FirstJourney',
		'zmiropost/test/integration/pages/ZC_MIRO_POST_PList',
		'zmiropost/test/integration/pages/ZC_MIRO_POST_PObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZC_MIRO_POST_PList, ZC_MIRO_POST_PObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zmiropost') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZC_MIRO_POST_PList: ZC_MIRO_POST_PList,
					onTheZC_MIRO_POST_PObjectPage: ZC_MIRO_POST_PObjectPage
                }
            },
            opaJourney.run
        );
    }
);