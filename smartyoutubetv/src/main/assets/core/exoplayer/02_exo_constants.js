console.log("Scripts::Running core script exo_constants.js");

// java constants
var PlayerActivity = {
    VIDEO_VIEW_COUNT: "video_views",
    SCREEN_WIDTH: "screen_width",
    VIDEO_DATE: "video_date",
    BUTTON_LIKE: "button_like",
    BUTTON_DISLIKE: "button_dislike",
    BUTTON_SUBSCRIBE: "button_subscribe",
    // BUTTON_USER_PAGE: "button_user_page",
    BUTTON_PREV: "button_prev",
    BUTTON_NEXT: "button_next",
    BUTTON_SUGGESTIONS: "button_suggestions",
    TRACK_ENDED: "track_ended",
    BUTTON_BACK: "button_back" // should be the last
};

// java constants in js code
var PlayerActivityMapping = {
    BUTTON_LIKE: ".icon-like.toggle-button",
    BUTTON_DISLIKE: ".icon-dislike.toggle-button",
    BUTTON_SUBSCRIBE: ".icon-logo-lozenge.toggle-button",
    // BUTTON_USER_PAGE: ".pivot-channel-tile",
    // multiple selectors: first that exists is used
    // so now we can match buttons from the different app versions
    BUTTON_NEXT: [".new-skip-forward-button", ".button.icon-player-next"],
    BUTTON_PREV: ".button.icon-player-prev",
    BUTTON_SUGGESTIONS: "button_suggestions", // fake button (use internal logic)
    TRACK_ENDED: "track_ended", // fake button (use internal logic)
    BUTTON_BACK: "#legend .back" // should be the last
};

var ExoConstants = {
    bottomUiSelector: '#bottom-half.bottom-half',
    cornerButtonsSelector: '#legend.legend',
    focusedClass: 'focused',
    hiddenClass: 'hidden',
    disabledClass: 'disabled',
    selectedClass: 'toggle-selected',
    optionsBtnSelector: '#transport-more-button',
    backBtnSelector: '#legend .back',
    playerControlsSelector: '#transport-controls',
    controlsBarSelector: '#buttons-list',
    playButtonSelector: ".icon-player-play.toggle-button",
    // mainControlsSelector: '.fresh-transport-controls.transport-controls',
    mainTitleSelector: '.title-card.watch-title-tray',
    playerUiSelector: '#watch.watch', // div that receives keys events
    uploadDateSelector: '.uploaded-date',
    viewCountSelector: '.view-count-label',
    videoDetailsSelector: '.player-video-details',
    suggestionsListSelector: 'div.pivot-shelf-list',
    componentFocusEvent: 'component-focus',
    channelScreenSelector: '#channel.channel', // empty on boot because of lazy initialization behavior
    searchScreenSelector: '#search.search', // empty on boot because of lazy initialization behavior
    componentBlurEvent: 'component-blur',
    modelChangedEvent: 'model:changed',
    noModelClass: 'no-model',
    transportShowingClass: 'transport-showing',
    watchIdleClass: 'watch-idle',
    toggleButtonClass: 'toggle-button',
    newPlayerTitleSelector: '.watch-title-tray'
};