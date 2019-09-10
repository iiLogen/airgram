export type MethodName = 'acceptCall' | 'acceptTermsOfService' | 'addChatMember' | 'addChatMembers' | 'addCustomServerLanguagePack' | 'addFavoriteSticker' | 'addLocalMessage' | 'addLogMessage' | 'addNetworkStatistics' | 'addProxy' | 'addRecentSticker' | 'addRecentlyFoundChat' | 'addSavedAnimation' | 'addStickerToSet' | 'answerCallbackQuery' | 'answerCustomQuery' | 'answerInlineQuery' | 'answerPreCheckoutQuery' | 'answerShippingQuery' | 'blockUser' | 'cancelDownloadFile' | 'cancelUploadFile' | 'changeChatReportSpamState' | 'changeImportedContacts' | 'changePhoneNumber' | 'changeStickerSet' | 'checkAuthenticationBotToken' | 'checkAuthenticationCode' | 'checkAuthenticationPassword' | 'checkChangePhoneNumberCode' | 'checkChatInviteLink' | 'checkChatUsername' | 'checkDatabaseEncryptionKey' | 'checkEmailAddressVerificationCode' | 'checkPhoneNumberConfirmationCode' | 'checkPhoneNumberVerificationCode' | 'checkRecoveryEmailAddressCode' | 'cleanFileName' | 'clearAllDraftMessages' | 'clearImportedContacts' | 'clearRecentStickers' | 'clearRecentlyFoundChats' | 'close' | 'closeChat' | 'closeSecretChat' | 'createBasicGroupChat' | 'createCall' | 'createNewBasicGroupChat' | 'createNewSecretChat' | 'createNewStickerSet' | 'createNewSupergroupChat' | 'createPrivateChat' | 'createSecretChat' | 'createSupergroupChat' | 'createTemporaryPassword' | 'deleteAccount' | 'deleteChatHistory' | 'deleteChatMessagesFromUser' | 'deleteChatReplyMarkup' | 'deleteFile' | 'deleteLanguagePack' | 'deleteMessages' | 'deletePassportElement' | 'deleteProfilePhoto' | 'deleteSavedCredentials' | 'deleteSavedOrderInfo' | 'deleteSupergroup' | 'destroy' | 'disableProxy' | 'discardCall' | 'disconnectAllWebsites' | 'disconnectWebsite' | 'downloadFile' | 'editCustomLanguagePackInfo' | 'editInlineMessageCaption' | 'editInlineMessageLiveLocation' | 'editInlineMessageMedia' | 'editInlineMessageReplyMarkup' | 'editInlineMessageText' | 'editMessageCaption' | 'editMessageLiveLocation' | 'editMessageMedia' | 'editMessageReplyMarkup' | 'editMessageText' | 'editProxy' | 'enableProxy' | 'finishFileGeneration' | 'forwardMessages' | 'generateChatInviteLink' | 'getAccountTtl' | 'getActiveLiveLocationMessages' | 'getActiveSessions' | 'getAllPassportElements' | 'getApplicationConfig' | 'getArchivedStickerSets' | 'getAttachedStickerSets' | 'getAuthorizationState' | 'getAutoDownloadSettingsPresets' | 'getBackgroundUrl' | 'getBackgrounds' | 'getBasicGroup' | 'getBasicGroupFullInfo' | 'getBlockedUsers' | 'getCallbackQueryAnswer' | 'getChat' | 'getChatAdministrators' | 'getChatEventLog' | 'getChatHistory' | 'getChatMember' | 'getChatMessageByDate' | 'getChatMessageCount' | 'getChatNotificationSettingsExceptions' | 'getChatPinnedMessage' | 'getChatReportSpamState' | 'getChatStatisticsUrl' | 'getChats' | 'getConnectedWebsites' | 'getContacts' | 'getCountryCode' | 'getCreatedPublicChats' | 'getCurrentState' | 'getDatabaseStatistics' | 'getDeepLinkInfo' | 'getEmojiSuggestionsUrl' | 'getFavoriteStickers' | 'getFile' | 'getFileDownloadedPrefixSize' | 'getFileExtension' | 'getFileMimeType' | 'getGameHighScores' | 'getGroupsInCommon' | 'getImportedContactCount' | 'getInlineGameHighScores' | 'getInlineQueryResults' | 'getInstalledStickerSets' | 'getInviteText' | 'getJsonString' | 'getJsonValue' | 'getLanguagePackInfo' | 'getLanguagePackString' | 'getLanguagePackStrings' | 'getLocalizationTargetInfo' | 'getLogStream' | 'getLogTagVerbosityLevel' | 'getLogTags' | 'getLogVerbosityLevel' | 'getMapThumbnailFile' | 'getMe' | 'getMessage' | 'getMessageLink' | 'getMessageLinkInfo' | 'getMessageLocally' | 'getMessages' | 'getNetworkStatistics' | 'getOption' | 'getPassportAuthorizationForm' | 'getPassportAuthorizationFormAvailableElements' | 'getPassportElement' | 'getPasswordState' | 'getPaymentForm' | 'getPaymentReceipt' | 'getPreferredCountryLanguage' | 'getProxies' | 'getProxyLink' | 'getPublicMessageLink' | 'getPushReceiverId' | 'getRecentInlineBots' | 'getRecentStickers' | 'getRecentlyVisitedTMeUrls' | 'getRecoveryEmailAddress' | 'getRemoteFile' | 'getRepliedMessage' | 'getSavedAnimations' | 'getSavedOrderInfo' | 'getScopeNotificationSettings' | 'getSecretChat' | 'getStickerEmojis' | 'getStickerSet' | 'getStickers' | 'getStorageStatistics' | 'getStorageStatisticsFast' | 'getSupergroup' | 'getSupergroupFullInfo' | 'getSupergroupMembers' | 'getSupportUser' | 'getTemporaryPasswordState' | 'getTextEntities' | 'getTopChats' | 'getTrendingStickerSets' | 'getUser' | 'getUserFullInfo' | 'getUserPrivacySettingRules' | 'getUserProfilePhotos' | 'getWebPageInstantView' | 'getWebPagePreview' | 'importContacts' | 'joinChat' | 'joinChatByInviteLink' | 'leaveChat' | 'logOut' | 'openChat' | 'openMessageContent' | 'optimizeStorage' | 'parseTextEntities' | 'pinChatMessage' | 'pingProxy' | 'processPushNotification' | 'readAllChatMentions' | 'readFilePart' | 'recoverAuthenticationPassword' | 'recoverPassword' | 'registerDevice' | 'registerUser' | 'removeBackground' | 'removeContacts' | 'removeFavoriteSticker' | 'removeNotification' | 'removeNotificationGroup' | 'removeProxy' | 'removeRecentHashtag' | 'removeRecentSticker' | 'removeRecentlyFoundChat' | 'removeSavedAnimation' | 'removeStickerFromSet' | 'removeTopChat' | 'reorderInstalledStickerSets' | 'reportChat' | 'reportSupergroupSpam' | 'requestAuthenticationPasswordRecovery' | 'requestPasswordRecovery' | 'resendAuthenticationCode' | 'resendChangePhoneNumberCode' | 'resendEmailAddressVerificationCode' | 'resendMessages' | 'resendPhoneNumberConfirmationCode' | 'resendPhoneNumberVerificationCode' | 'resendRecoveryEmailAddressCode' | 'resetAllNotificationSettings' | 'resetBackgrounds' | 'resetNetworkStatistics' | 'saveApplicationLogEvent' | 'searchBackground' | 'searchCallMessages' | 'searchChatMembers' | 'searchChatMessages' | 'searchChatRecentLocationMessages' | 'searchChats' | 'searchChatsOnServer' | 'searchContacts' | 'searchEmojis' | 'searchHashtags' | 'searchInstalledStickerSets' | 'searchMessages' | 'searchPublicChat' | 'searchPublicChats' | 'searchSecretMessages' | 'searchStickerSet' | 'searchStickerSets' | 'searchStickers' | 'sendBotStartMessage' | 'sendCallDebugInformation' | 'sendCallRating' | 'sendChatAction' | 'sendChatScreenshotTakenNotification' | 'sendChatSetTtlMessage' | 'sendCustomRequest' | 'sendEmailAddressVerificationCode' | 'sendInlineQueryResultMessage' | 'sendMessage' | 'sendMessageAlbum' | 'sendPassportAuthorizationForm' | 'sendPaymentForm' | 'sendPhoneNumberConfirmationCode' | 'sendPhoneNumberVerificationCode' | 'setAccountTtl' | 'setAlarm' | 'setAuthenticationPhoneNumber' | 'setAutoDownloadSettings' | 'setBackground' | 'setBio' | 'setBotUpdatesStatus' | 'setChatClientData' | 'setChatDescription' | 'setChatDraftMessage' | 'setChatMemberStatus' | 'setChatNotificationSettings' | 'setChatPermissions' | 'setChatPhoto' | 'setChatTitle' | 'setCustomLanguagePack' | 'setCustomLanguagePackString' | 'setDatabaseEncryptionKey' | 'setFileGenerationProgress' | 'setGameScore' | 'setInlineGameScore' | 'setLogStream' | 'setLogTagVerbosityLevel' | 'setLogVerbosityLevel' | 'setName' | 'setNetworkType' | 'setOption' | 'setPassportElement' | 'setPassportElementErrors' | 'setPassword' | 'setPinnedChats' | 'setPollAnswer' | 'setProfilePhoto' | 'setRecoveryEmailAddress' | 'setScopeNotificationSettings' | 'setStickerPositionInSet' | 'setSupergroupStickerSet' | 'setSupergroupUsername' | 'setTdlibParameters' | 'setUserPrivacySettingRules' | 'setUsername' | 'stopPoll' | 'synchronizeLanguagePack' | 'terminateAllOtherSessions' | 'terminateSession' | 'testCallBytes' | 'testCallEmpty' | 'testCallString' | 'testCallVectorInt' | 'testCallVectorIntObject' | 'testCallVectorString' | 'testCallVectorStringObject' | 'testGetDifference' | 'testNetwork' | 'testProxy' | 'testReturnError' | 'testSquareInt' | 'testUseUpdate' | 'toggleChatDefaultDisableNotification' | 'toggleChatIsMarkedAsUnread' | 'toggleChatIsPinned' | 'toggleSupergroupIsAllHistoryAvailable' | 'toggleSupergroupSignMessages' | 'unblockUser' | 'unpinChatMessage' | 'upgradeBasicGroupChatToSupergroupChat' | 'uploadFile' | 'uploadStickerFile' | 'validateOrderInfo' | 'viewMessages' | 'viewTrendingStickerSets' | 'writeGeneratedFilePart'

export const methods: MethodName[] = ['acceptCall', 'acceptTermsOfService', 'addChatMember', 'addChatMembers', 'addCustomServerLanguagePack', 'addFavoriteSticker', 'addLocalMessage', 'addLogMessage', 'addNetworkStatistics', 'addProxy', 'addRecentSticker', 'addRecentlyFoundChat', 'addSavedAnimation', 'addStickerToSet', 'answerCallbackQuery', 'answerCustomQuery', 'answerInlineQuery', 'answerPreCheckoutQuery', 'answerShippingQuery', 'blockUser', 'cancelDownloadFile', 'cancelUploadFile', 'changeChatReportSpamState', 'changeImportedContacts', 'changePhoneNumber', 'changeStickerSet', 'checkAuthenticationBotToken', 'checkAuthenticationCode', 'checkAuthenticationPassword', 'checkChangePhoneNumberCode', 'checkChatInviteLink', 'checkChatUsername', 'checkDatabaseEncryptionKey', 'checkEmailAddressVerificationCode', 'checkPhoneNumberConfirmationCode', 'checkPhoneNumberVerificationCode', 'checkRecoveryEmailAddressCode', 'cleanFileName', 'clearAllDraftMessages', 'clearImportedContacts', 'clearRecentStickers', 'clearRecentlyFoundChats', 'close', 'closeChat', 'closeSecretChat', 'createBasicGroupChat', 'createCall', 'createNewBasicGroupChat', 'createNewSecretChat', 'createNewStickerSet', 'createNewSupergroupChat', 'createPrivateChat', 'createSecretChat', 'createSupergroupChat', 'createTemporaryPassword', 'deleteAccount', 'deleteChatHistory', 'deleteChatMessagesFromUser', 'deleteChatReplyMarkup', 'deleteFile', 'deleteLanguagePack', 'deleteMessages', 'deletePassportElement', 'deleteProfilePhoto', 'deleteSavedCredentials', 'deleteSavedOrderInfo', 'deleteSupergroup', 'destroy', 'disableProxy', 'discardCall', 'disconnectAllWebsites', 'disconnectWebsite', 'downloadFile', 'editCustomLanguagePackInfo', 'editInlineMessageCaption', 'editInlineMessageLiveLocation', 'editInlineMessageMedia', 'editInlineMessageReplyMarkup', 'editInlineMessageText', 'editMessageCaption', 'editMessageLiveLocation', 'editMessageMedia', 'editMessageReplyMarkup', 'editMessageText', 'editProxy', 'enableProxy', 'finishFileGeneration', 'forwardMessages', 'generateChatInviteLink', 'getAccountTtl', 'getActiveLiveLocationMessages', 'getActiveSessions', 'getAllPassportElements', 'getApplicationConfig', 'getArchivedStickerSets', 'getAttachedStickerSets', 'getAuthorizationState', 'getAutoDownloadSettingsPresets', 'getBackgroundUrl', 'getBackgrounds', 'getBasicGroup', 'getBasicGroupFullInfo', 'getBlockedUsers', 'getCallbackQueryAnswer', 'getChat', 'getChatAdministrators', 'getChatEventLog', 'getChatHistory', 'getChatMember', 'getChatMessageByDate', 'getChatMessageCount', 'getChatNotificationSettingsExceptions', 'getChatPinnedMessage', 'getChatReportSpamState', 'getChatStatisticsUrl', 'getChats', 'getConnectedWebsites', 'getContacts', 'getCountryCode', 'getCreatedPublicChats', 'getCurrentState', 'getDatabaseStatistics', 'getDeepLinkInfo', 'getEmojiSuggestionsUrl', 'getFavoriteStickers', 'getFile', 'getFileDownloadedPrefixSize', 'getFileExtension', 'getFileMimeType', 'getGameHighScores', 'getGroupsInCommon', 'getImportedContactCount', 'getInlineGameHighScores', 'getInlineQueryResults', 'getInstalledStickerSets', 'getInviteText', 'getJsonString', 'getJsonValue', 'getLanguagePackInfo', 'getLanguagePackString', 'getLanguagePackStrings', 'getLocalizationTargetInfo', 'getLogStream', 'getLogTagVerbosityLevel', 'getLogTags', 'getLogVerbosityLevel', 'getMapThumbnailFile', 'getMe', 'getMessage', 'getMessageLink', 'getMessageLinkInfo', 'getMessageLocally', 'getMessages', 'getNetworkStatistics', 'getOption', 'getPassportAuthorizationForm', 'getPassportAuthorizationFormAvailableElements', 'getPassportElement', 'getPasswordState', 'getPaymentForm', 'getPaymentReceipt', 'getPreferredCountryLanguage', 'getProxies', 'getProxyLink', 'getPublicMessageLink', 'getPushReceiverId', 'getRecentInlineBots', 'getRecentStickers', 'getRecentlyVisitedTMeUrls', 'getRecoveryEmailAddress', 'getRemoteFile', 'getRepliedMessage', 'getSavedAnimations', 'getSavedOrderInfo', 'getScopeNotificationSettings', 'getSecretChat', 'getStickerEmojis', 'getStickerSet', 'getStickers', 'getStorageStatistics', 'getStorageStatisticsFast', 'getSupergroup', 'getSupergroupFullInfo', 'getSupergroupMembers', 'getSupportUser', 'getTemporaryPasswordState', 'getTextEntities', 'getTopChats', 'getTrendingStickerSets', 'getUser', 'getUserFullInfo', 'getUserPrivacySettingRules', 'getUserProfilePhotos', 'getWebPageInstantView', 'getWebPagePreview', 'importContacts', 'joinChat', 'joinChatByInviteLink', 'leaveChat', 'logOut', 'openChat', 'openMessageContent', 'optimizeStorage', 'parseTextEntities', 'pinChatMessage', 'pingProxy', 'processPushNotification', 'readAllChatMentions', 'readFilePart', 'recoverAuthenticationPassword', 'recoverPassword', 'registerDevice', 'registerUser', 'removeBackground', 'removeContacts', 'removeFavoriteSticker', 'removeNotification', 'removeNotificationGroup', 'removeProxy', 'removeRecentHashtag', 'removeRecentSticker', 'removeRecentlyFoundChat', 'removeSavedAnimation', 'removeStickerFromSet', 'removeTopChat', 'reorderInstalledStickerSets', 'reportChat', 'reportSupergroupSpam', 'requestAuthenticationPasswordRecovery', 'requestPasswordRecovery', 'resendAuthenticationCode', 'resendChangePhoneNumberCode', 'resendEmailAddressVerificationCode', 'resendMessages', 'resendPhoneNumberConfirmationCode', 'resendPhoneNumberVerificationCode', 'resendRecoveryEmailAddressCode', 'resetAllNotificationSettings', 'resetBackgrounds', 'resetNetworkStatistics', 'saveApplicationLogEvent', 'searchBackground', 'searchCallMessages', 'searchChatMembers', 'searchChatMessages', 'searchChatRecentLocationMessages', 'searchChats', 'searchChatsOnServer', 'searchContacts', 'searchEmojis', 'searchHashtags', 'searchInstalledStickerSets', 'searchMessages', 'searchPublicChat', 'searchPublicChats', 'searchSecretMessages', 'searchStickerSet', 'searchStickerSets', 'searchStickers', 'sendBotStartMessage', 'sendCallDebugInformation', 'sendCallRating', 'sendChatAction', 'sendChatScreenshotTakenNotification', 'sendChatSetTtlMessage', 'sendCustomRequest', 'sendEmailAddressVerificationCode', 'sendInlineQueryResultMessage', 'sendMessage', 'sendMessageAlbum', 'sendPassportAuthorizationForm', 'sendPaymentForm', 'sendPhoneNumberConfirmationCode', 'sendPhoneNumberVerificationCode', 'setAccountTtl', 'setAlarm', 'setAuthenticationPhoneNumber', 'setAutoDownloadSettings', 'setBackground', 'setBio', 'setBotUpdatesStatus', 'setChatClientData', 'setChatDescription', 'setChatDraftMessage', 'setChatMemberStatus', 'setChatNotificationSettings', 'setChatPermissions', 'setChatPhoto', 'setChatTitle', 'setCustomLanguagePack', 'setCustomLanguagePackString', 'setDatabaseEncryptionKey', 'setFileGenerationProgress', 'setGameScore', 'setInlineGameScore', 'setLogStream', 'setLogTagVerbosityLevel', 'setLogVerbosityLevel', 'setName', 'setNetworkType', 'setOption', 'setPassportElement', 'setPassportElementErrors', 'setPassword', 'setPinnedChats', 'setPollAnswer', 'setProfilePhoto', 'setRecoveryEmailAddress', 'setScopeNotificationSettings', 'setStickerPositionInSet', 'setSupergroupStickerSet', 'setSupergroupUsername', 'setTdlibParameters', 'setUserPrivacySettingRules', 'setUsername', 'stopPoll', 'synchronizeLanguagePack', 'terminateAllOtherSessions', 'terminateSession', 'testCallBytes', 'testCallEmpty', 'testCallString', 'testCallVectorInt', 'testCallVectorIntObject', 'testCallVectorString', 'testCallVectorStringObject', 'testGetDifference', 'testNetwork', 'testProxy', 'testReturnError', 'testSquareInt', 'testUseUpdate', 'toggleChatDefaultDisableNotification', 'toggleChatIsMarkedAsUnread', 'toggleChatIsPinned', 'toggleSupergroupIsAllHistoryAvailable', 'toggleSupergroupSignMessages', 'unblockUser', 'unpinChatMessage', 'upgradeBasicGroupChatToSupergroupChat', 'uploadFile', 'uploadStickerFile', 'validateOrderInfo', 'viewMessages', 'viewTrendingStickerSets', 'writeGeneratedFilePart']

export type AuthIndependentMethodName = 'addCustomServerLanguagePack' | 'addLogMessage' | 'addNetworkStatistics' | 'addProxy' | 'cleanFileName' | 'deleteAccount' | 'deleteLanguagePack' | 'disableProxy' | 'editCustomLanguagePackInfo' | 'editProxy' | 'enableProxy' | 'getApplicationConfig' | 'getCountryCode' | 'getCurrentState' | 'getDeepLinkInfo' | 'getFileExtension' | 'getFileMimeType' | 'getJsonString' | 'getJsonValue' | 'getLanguagePackInfo' | 'getLanguagePackString' | 'getLanguagePackStrings' | 'getLocalizationTargetInfo' | 'getLogStream' | 'getLogTagVerbosityLevel' | 'getLogTags' | 'getLogVerbosityLevel' | 'getNetworkStatistics' | 'getOption' | 'getProxies' | 'getProxyLink' | 'getPushReceiverId' | 'getStorageStatistics' | 'getStorageStatisticsFast' | 'getTextEntities' | 'parseTextEntities' | 'pingProxy' | 'processPushNotification' | 'removeProxy' | 'resetNetworkStatistics' | 'saveApplicationLogEvent' | 'setAlarm' | 'setCustomLanguagePackString' | 'setLogStream' | 'setLogTagVerbosityLevel' | 'setLogVerbosityLevel' | 'setNetworkType' | 'setOption' | 'synchronizeLanguagePack' | 'testCallBytes' | 'testCallEmpty' | 'testCallString' | 'testCallVectorInt' | 'testCallVectorIntObject' | 'testCallVectorString' | 'testCallVectorStringObject' | 'testNetwork' | 'testProxy' | 'testReturnError' | 'testSquareInt' | 'testUseUpdate'

export const authIndependentMethods: AuthIndependentMethodName[] = ['addCustomServerLanguagePack', 'addLogMessage', 'addNetworkStatistics', 'addProxy', 'cleanFileName', 'deleteAccount', 'deleteLanguagePack', 'disableProxy', 'editCustomLanguagePackInfo', 'editProxy', 'enableProxy', 'getApplicationConfig', 'getCountryCode', 'getCurrentState', 'getDeepLinkInfo', 'getFileExtension', 'getFileMimeType', 'getJsonString', 'getJsonValue', 'getLanguagePackInfo', 'getLanguagePackString', 'getLanguagePackStrings', 'getLocalizationTargetInfo', 'getLogStream', 'getLogTagVerbosityLevel', 'getLogTags', 'getLogVerbosityLevel', 'getNetworkStatistics', 'getOption', 'getProxies', 'getProxyLink', 'getPushReceiverId', 'getStorageStatistics', 'getStorageStatisticsFast', 'getTextEntities', 'parseTextEntities', 'pingProxy', 'processPushNotification', 'removeProxy', 'resetNetworkStatistics', 'saveApplicationLogEvent', 'setAlarm', 'setCustomLanguagePackString', 'setLogStream', 'setLogTagVerbosityLevel', 'setLogVerbosityLevel', 'setNetworkType', 'setOption', 'synchronizeLanguagePack', 'testCallBytes', 'testCallEmpty', 'testCallString', 'testCallVectorInt', 'testCallVectorIntObject', 'testCallVectorString', 'testCallVectorStringObject', 'testNetwork', 'testProxy', 'testReturnError', 'testSquareInt', 'testUseUpdate']

export type SyncMethodName = 'addLogMessage' | 'cleanFileName' | 'getFileExtension' | 'getFileMimeType' | 'getJsonString' | 'getJsonValue' | 'getLanguagePackString' | 'getLogStream' | 'getLogTagVerbosityLevel' | 'getLogTags' | 'getLogVerbosityLevel' | 'getPushReceiverId' | 'getTextEntities' | 'parseTextEntities' | 'setLogStream' | 'setLogTagVerbosityLevel' | 'setLogVerbosityLevel' | 'testReturnError'

export const syncMethods: SyncMethodName[] = ['addLogMessage', 'cleanFileName', 'getFileExtension', 'getFileMimeType', 'getJsonString', 'getJsonValue', 'getLanguagePackString', 'getLogStream', 'getLogTagVerbosityLevel', 'getLogTags', 'getLogVerbosityLevel', 'getPushReceiverId', 'getTextEntities', 'parseTextEntities', 'setLogStream', 'setLogTagVerbosityLevel', 'setLogVerbosityLevel', 'testReturnError']