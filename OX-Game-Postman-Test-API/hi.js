scenarios บอกเรื่องราว actor action
API ส่งไปหลังบ้านแล้วส่ง json มา
//check status
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Your test name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.value).to.eql(100);
});


response {
    "player1 Name" : "Noom",
    "player2 Name" : "Nut",
    "player1 Status" : "O",
    "player2 Status" : "X",
    "TABLE" : "3,3"
}

1. API startgame
localhost::3000/startgame //format POST

//Data have to send by JSON
response {
    "player1 Name" : "Noom",
    "player2 Name" : "Nut",
    "player1 Status" : "O",
    "player2 Status" : "X",
    "TABLE" : "3,3"
}

//wait backend return Data
return {
    "player1 Name" : "Noom",
    "player2 Name" : "Nut",
    "player1 Status" : "O",
    "player2 Status" : "X",
    "score p1" : 0,
    "score p2" : 0,
    "TABLE" : [ , , , , , , , ,]
}

API Wangmark
localhost::3000/Startgame?Wangmark //format POST

//Data have to send by JSON
response {
    "player Name" : "Noom",
    "player1 Status" : "O",
    "score" : 0
    "position_x" : 1
}

//wait backend return Data
return {
    "player Name" : "Noom",
    "player1 Status" : "O",
    "score" : 1
    "TABLE" : [1,2,3]
    "Match" : win
}


Request name บอกพฤฤิกรรมของ test เรา
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Player1 is O", function () {//check Mark of player one
    var jsonData = pm.response.json();
    pm.expect(jsonData.player1Name).to.eql("O"); // Data sent from server | expected frome server 
});

pm.test("Player2 is X", function () {//check Mark of player one
    var jsonData = pm.response.json();
    pm.expect(jsonData.player2Name).to.eql("X"); // Data sent from server | expected frome server 
});

pm.test("Table size 9", function () {//check Mark of player one
    var jsonData = pm.response.json();
    pm.expect(jsonData.table.length).to.eql(9); // Data sent from server | expected frome server 
});

//ลงหมากยิ่ง Api 5 ครั้ง

pm.test("Status code is 200", function () {//เช็คว่าพังแบบไหน500 404
    pm.response.to.have.status(200);
});
pm.test("playerName is Noom", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.playerName).to.eql("Noom");
});
pm.test("playerStatus is X", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.playerStatus).to.eql("x");
});
pm.test("playerPosition is 1", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.playerPositio).to.eql("1");
});
pm.test("playerScore is 0", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.playerPositio).to.eql("0");
});