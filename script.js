var currentTab;
var composeCount = 0;
$(function () {
    $("#myTab").on("click", "a", function (e) {
        e.preventDefault();
        $(this).tab('show');
        $currentTab = $(this);
    });
    registerComposeButtonEvent();
    registerCloseEvent();
});
var composeCountDisplay=4;
function registerComposeButtonEvent() {
    $('#newAddButton').click(function (e) {
        e.preventDefault();

        var tabId = "compose" + composeCount; //this is id on tab content div where the 
        composeCount = composeCount + 1; //increment compose count

        $('<li><a href="#' + tabId + '"><button class="close closeTab" type="button" >×</button>Ontology'+(composeCountDisplay++)+'</a></li>').insertBefore( ".add-btn" );

        $('.tab-content').append('<div class="tab-pane" id="' + tabId + '"></div>');

        $(this).tab('show');
        showTab(tabId);
        registerCloseEvent();
    });
}

function registerCloseEvent() {
    $(".closeTab").click(function () {
        //there are multiple elements which has .closeTab icon so close the tab whose close icon is clicked
        var tabContentId = $(this).parent().attr("href");
        $(this).parent().parent().remove(); //remove li of tab
        $('#myTab a:last').tab('show'); // Select first tab
        $(tabContentId).remove(); //remove respective tab content
    });
}

function showTab(tabId) {
    $('#myTab a[href="#' + tabId + '"]').tab('show');
}
function getCurrentTab() {
    return currentTab;
}

function getElement(selector) {
    var tabContentId = $currentTab.attr("href");
    return $("" + tabContentId).find("" + selector);
}

function removeCurrentTab() {
    var tabContentId = $currentTab.attr("href");
    $currentTab.parent().remove(); //remove li of tab
    $('#myTab a:last').tab('show'); // Select first tab
    $(tabContentId).remove(); //remove respective tab content
}