window.globalProvideData('slide', '{"title":"Pasangkan  dan geser kotak kategori wujud benda dibawah ini!","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"tween","slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":18,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"5lRbxJi0i3b","lmsId":"Slide18","width":720,"height":405,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6ENCkg7LgNd","actionGroups":{"ReviewInt_6q47zXDtkK4":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6q47zXDtkK4.5fWVTfffCq5"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6q47zXDtkK4.5a0p8H7pFjJ"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6q47zXDtkK4.686FdbjaUvu"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6q47zXDtkK4.6kHWn0FQyjp"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6q47zXDtkK4.6f0xb47MWuO"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6q47zXDtkK4.6VLoR0WXdvk"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5tGDUA2JTZ4.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6q47zXDtkK4_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6q47zXDtkK4_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6q47zXDtkK4","typea":"var","valueb":"5rV33gbb4b5","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5rV33gbb4b5.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6q47zXDtkK4"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5rV33gbb4b5.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6q47zXDtkK4"}]}]}]},"ReviewIntCorrectIncorrect_6q47zXDtkK4":{"kind":"actiongroup","actions":[{"kind":"set_review","objRef":{"type":"string","value":"6q47zXDtkK4.5fWVTfffCq5"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6q47zXDtkK4.5a0p8H7pFjJ"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6q47zXDtkK4.686FdbjaUvu"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6q47zXDtkK4.6kHWn0FQyjp"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6q47zXDtkK4.6f0xb47MWuO"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"6q47zXDtkK4.6VLoR0WXdvk"},"enabled":{"type":"boolean","value":true}}]},"AnsweredInt_6q47zXDtkK4":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6q47zXDtkK4"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_6q47zXDtkK4":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6q47zXDtkK4.5fWVTfffCq5"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6q47zXDtkK4.5a0p8H7pFjJ"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6q47zXDtkK4.686FdbjaUvu"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6q47zXDtkK4.6kHWn0FQyjp"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6q47zXDtkK4.6f0xb47MWuO"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6q47zXDtkK4.6VLoR0WXdvk"},"enabled":{"type":"boolean","value":false}}]},"6q47zXDtkK4_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5tGDUA2JTZ4.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5rV33gbb4b5.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6q47zXDtkK4"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5tGDUA2JTZ4.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5tGDUA2JTZ4.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6q47zXDtkK4"}]}]}]}]},"SetLayout_pxabnsnfns00000000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"NavigationRestrictionNextSlide_6ENCkg7LgNd":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6Hr8E8QqsEw"}}]},"NavigationRestrictionPreviousSlide_6ENCkg7LgNd":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000101"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6ImWc33haMd","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6ImWc33haMd","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6q47zXDtkK4","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6q47zXDtkK4"}],"elseActions":[{"kind":"exe_actiongroup","id":"6q47zXDtkK4_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6q47zXDtkK4","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6q47zXDtkK4","typea":"var","valueb":"5rV33gbb4b5","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5rV33gbb4b5"},"completed_slide_ref":{"type":"string","value":"_player.6F9yrRk0jYe.6MJKs0rvaZM"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6q47zXDtkK4","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6q47zXDtkK4","typea":"var","valueb":"5rV33gbb4b5","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5rV33gbb4b5"},"completed_slide_ref":{"type":"string","value":"_player.6F9yrRk0jYe.6MJKs0rvaZM"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6ENCkg7LgNd"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6ENCkg7LgNd"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":134,"id":"6MJ3H5jW7vW"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"67K6T84pxEz"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6q47zXDtkK4.5fWVTfffCq5"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6q47zXDtkK4.5a0p8H7pFjJ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6q47zXDtkK4.686FdbjaUvu"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6q47zXDtkK4.6kHWn0FQyjp"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6q47zXDtkK4.6f0xb47MWuO"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6q47zXDtkK4.6VLoR0WXdvk"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6q47zXDtkK4"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6WvK8ycypOm"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6baySZEcRxu"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":113,"id":"01","url":"story_content/6ASegapZ5qX_80_DX1440_DY1440.jpg","type":"normal","altText":"BACKGROUND BASIC 4.jpg","width":1440,"height":810,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":202.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":405,"altText":"BACKGROUND BASIC 4.jpg","pngfb":false,"pr":{"l":"Lib","i":84}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":405,"strokewidth":0}},"width":720,"height":405,"resume":true,"useHandCursor":true,"id":"67K6T84pxEz"},{"kind":"scrollarea","contentwidth":600,"contentheight":198,"objects":[{"kind":"droparea","style":"matching","reviewdata":3,"shapemaskId":"","xPos":16,"yPos":132,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6VLoR0WXdvk_-646166922","type":"acctext","altText":"Udara, uap air, dan angin","xPos":0,"yPos":0,"xAccOffset":10,"yAccOffset":5,"width":262,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Udara, uap air, dan angin","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":25,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":199,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":294}}},"html5data":{"xPos":0,"yPos":0,"width":292,"height":50,"strokewidth":0}},"width":292,"height":50,"resume":true,"useHandCursor":true,"id":"6VLoR0WXdvk"},{"kind":"shufflegroup","objects":[{"kind":"dragitem","style":"matching","connectdata":"choices.choice_6k9GsVllh9u","reviewdata":3,"shapemaskId":"","xPos":324,"yPos":132,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6f0xb47MWuO_-555771737","type":"acctext","altText":"Benda gas","xPos":0,"yPos":0,"xAccOffset":20,"yAccOffset":5,"width":262,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Benda gas","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":9,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":98,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":295}}},"html5data":{"xPos":0,"yPos":0,"width":292,"height":50,"strokewidth":0}},"width":292,"height":50,"resume":true,"useHandCursor":true,"id":"6f0xb47MWuO"},{"kind":"dragitem","style":"matching","connectdata":"choices.choice_5lqI5hdEMPn","reviewdata":2,"shapemaskId":"","xPos":324,"yPos":68,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_686FdbjaUvu_-175314642","type":"acctext","altText":"Benda cair","xPos":0,"yPos":0,"xAccOffset":20,"yAccOffset":5,"width":262,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Benda cair","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":10,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":100,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":296}}},"html5data":{"xPos":0,"yPos":0,"width":292,"height":50,"strokewidth":0}},"width":292,"height":50,"resume":true,"useHandCursor":true,"id":"686FdbjaUvu"},{"kind":"dragitem","style":"matching","connectdata":"choices.choice_6nUdyC5kLhL","reviewdata":1,"shapemaskId":"","xPos":324,"yPos":4,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":4,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5fWVTfffCq5_620221111","type":"acctext","altText":"Benda padat","xPos":0,"yPos":0,"xAccOffset":20,"yAccOffset":5,"width":262,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Benda padat","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":11,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":116,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":297}}},"html5data":{"xPos":0,"yPos":0,"width":292,"height":50,"strokewidth":0}},"width":292,"height":50,"resume":true,"useHandCursor":true,"id":"5fWVTfffCq5"}],"shuffle":true,"depth":2,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":true,"useHandCursor":true,"id":""},{"kind":"droparea","style":"matching","reviewdata":2,"shapemaskId":"","xPos":16,"yPos":68,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6kHWn0FQyjp_-1443685824","type":"acctext","altText":"Air, minyak, bensin","xPos":0,"yPos":0,"xAccOffset":10,"yAccOffset":5,"width":262,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Air, minyak, bensin","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":19,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":152,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":298}}},"html5data":{"xPos":0,"yPos":0,"width":292,"height":50,"strokewidth":0}},"width":292,"height":50,"resume":true,"useHandCursor":true,"id":"6kHWn0FQyjp"},{"kind":"droparea","style":"matching","reviewdata":1,"shapemaskId":"","xPos":16,"yPos":4,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":146,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5a0p8H7pFjJ_-1494939663","type":"acctext","altText":"Kayu, buku, bola","xPos":0,"yPos":0,"xAccOffset":10,"yAccOffset":5,"width":262,"height":40,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Kayu, buku, bola","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.563}}],"style":{"flowDirection":"leftToRight","tagType":"P"},"runs":[{"idx":0,"len":16,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#4B4B4B","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":134,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":299}}},"html5data":{"xPos":0,"yPos":0,"width":292,"height":50,"strokewidth":0}},"width":292,"height":50,"resume":true,"useHandCursor":true,"id":"5a0p8H7pFjJ"}],"shapemaskId":"","xPos":36,"yPos":104,"tabIndex":2,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":136,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":0,"yPos":0,"width":648,"height":272,"strokewidth":0}},"width":648,"height":272,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":648,"bottom":273,"altText":"Matching Drag and Drop","pngfb":false,"pr":{"l":"Lib","i":293}}},"id":"6q47zXDtkK4"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6WvK8ycypOm_-1723143602","id":"01","linkId":"txt__default_6WvK8ycypOm","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":628,"height":67,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Pasangkan  dan geser kotak kategori wujud benda dibawah ini!","style":{"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":26.365,"descent":7.227,"leading":0,"underlinePosition":-1.855,"underlineThickness":1.229,"xHeight":13.201}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":60,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":594,"bottom":73,"pngfb":false,"pr":{"l":"Lib","i":301}}}],"shapemaskId":"","xPos":36,"yPos":17,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":38.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":648,"bottom":77,"altText":"Pasangkan  dan geser kotak kategori wujud benda dibawah ini!","pngfb":false,"pr":{"l":"Lib","i":300}},"html5data":{"xPos":0,"yPos":0,"width":648,"height":77,"strokewidth":0}},"width":648,"height":77,"resume":true,"useHandCursor":true,"id":"6WvK8ycypOm"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5rz7HArdoyj_-1537523607","id":"01","linkId":"txt__default_6baySZEcRxu","type":"acctext","xPos":4,"yPos":2,"xAccOffset":4,"yAccOffset":2,"width":144,"height":36,"valign":"center","wordwrap":true,"textshadow":true,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"SUBMIT","style":{"fontFamily":"\\"Open SansBold CharsBoldE47A47C6\\",\\"Open Sans\\"","ascent":19.952,"descent":5.469,"leading":0,"underlinePosition":-1.404,"underlineThickness":0.93,"xHeight":10.19,"fontIsBold":false}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":6,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":14,"fontIsBold":true,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"shadow":{"offsetX":0.8,"offsetY":0.8,"color":"#969696"},"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":113,"bottom":33,"pngfb":false,"pr":{"l":"Lib","i":159}}}],"shapemaskId":"","xPos":528,"yPos":354,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":76,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":152,"bottom":40,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":155}},"html5data":{"xPos":0,"yPos":0,"width":152,"height":40,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":152,"bottom":40,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":155}},"html5data":{"xPos":-1,"yPos":-1,"width":153,"height":41,"strokewidth":0}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":154,"bottom":42,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":156}},"html5data":{"xPos":-3,"yPos":-3,"width":157,"height":45,"strokewidth":3}}},{"kind":"state","name":"_default_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":152,"bottom":40,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":155}},"html5data":{"xPos":-1,"yPos":-1,"width":153,"height":41,"strokewidth":0}}},{"kind":"state","name":"_default_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":152,"bottom":40,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":155}},"html5data":{"xPos":-1,"yPos":-1,"width":153,"height":41,"strokewidth":0}}},{"kind":"state","name":"_default_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":154,"bottom":42,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":156}},"html5data":{"xPos":-3,"yPos":-3,"width":157,"height":45,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":153,"bottom":41,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":157}},"html5data":{"xPos":-2,"yPos":-2,"width":155,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":153,"bottom":41,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":157}},"html5data":{"xPos":-2,"yPos":-2,"width":155,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":154,"bottom":42,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":156}},"html5data":{"xPos":-3,"yPos":-3,"width":157,"height":45,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":153,"bottom":41,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":157}},"html5data":{"xPos":-2,"yPos":-2,"width":155,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":153,"bottom":41,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":158}},"html5data":{"xPos":-2,"yPos":-2,"width":155,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":154,"bottom":42,"altText":"SUBMIT","pngfb":false,"pr":{"l":"Lib","i":156}},"html5data":{"xPos":-3,"yPos":-3,"width":157,"height":45,"strokewidth":3}}}],"width":152,"height":40,"resume":true,"useHandCursor":true,"id":"6baySZEcRxu","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_visited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savevisited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetVisitedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"var","value":"#_visited"}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"boolean","value":false}}]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_hover","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.6MJ3H5jW7vW"}},{"kind":"media_play","objRef":{"type":"string","value":"_parent.6MJ3H5jW7vW"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.6MJ3H5jW7vW"}}],"elseActions":[{"kind":"media_pause","objRef":{"type":"string","value":"_parent.6MJ3H5jW7vW"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.6MJ3H5jW7vW"}}]}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetVisitedState","scopeRef":{"type":"string","value":"_this"}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"noteq","valuea":"_parent.6q47zXDtkK4.5a0p8H7pFjJ.$DragConnectData","typea":"property","valueb":"","typeb":"string"},{"kind":"compare","operator":"noteq","valuea":"_parent.6q47zXDtkK4.6kHWn0FQyjp.$DragConnectData","typea":"property","valueb":"","typeb":"string"},{"kind":"compare","operator":"noteq","valuea":"_parent.6q47zXDtkK4.6VLoR0WXdvk.$DragConnectData","typea":"property","valueb":"","typeb":"string"}]}},"thenActions":[{"kind":"eval_interaction","id":"_parent.5tGDUA2JTZ4"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6ImWc33haMd.InvalidPromptSlide"}}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"noteq","valuea":"_parent.6q47zXDtkK4.5a0p8H7pFjJ.$DragConnectData","typea":"property","valueb":"","typeb":"string"},{"kind":"compare","operator":"noteq","valuea":"_parent.6q47zXDtkK4.6kHWn0FQyjp.$DragConnectData","typea":"property","valueb":"","typeb":"string"},{"kind":"compare","operator":"noteq","valuea":"_parent.6q47zXDtkK4.6VLoR0WXdvk.$DragConnectData","typea":"property","valueb":"","typeb":"string"}]}},"thenActions":[{"kind":"eval_interaction","id":"_parent.5tGDUA2JTZ4"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6ImWc33haMd.InvalidPromptSlide"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6q47zXDtkK4_CorrectReview","id":"01","linkId":"6q47zXDtkK4_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":402,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":161}}}],"shapemaskId":"","xPos":0,"yPos":365,"tabIndex":13,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":160}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6q47zXDtkK4_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6q47zXDtkK4_IncorrectReview","id":"01","linkId":"6q47zXDtkK4_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":411,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":163}}}],"shapemaskId":"","xPos":0,"yPos":365,"tabIndex":14,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":162}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6q47zXDtkK4_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","animations":[{"kind":"animation","id":"5lRbxJi0i3b","duration":800,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":800,"mask":{"type":"box","settings":[{"kind":"setting","name":"direction","value":"in"}],"duration":800,"easing":"linear","easingdir":"easeinout"}}]}],"useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');