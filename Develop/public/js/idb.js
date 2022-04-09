let db;
const request = indexedDB.open('budget_tracker', 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore('new_budget', { autoIncrement: true });
};

request.onsuccess = function(event) {
    db = event.target.result;
};

request.onerror = function(event) {
    console.log(event.target.errorCode);
};