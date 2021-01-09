// var headerEl = getElementById('')
var viewNameEl = document.getElementById('viewName');
var newWoButtonEl = document.getElementById('newWoButton');

function initWO() {
    viewNameEl.id = "newWoView";
    viewNameEl.innerHTML = `<h3>New Work Order</h3>`;
};

newWoButtonEl.addEventListener("click", function() {
    initWO();
});