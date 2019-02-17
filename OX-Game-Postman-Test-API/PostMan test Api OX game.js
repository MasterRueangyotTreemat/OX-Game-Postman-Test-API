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

//Example
response {
    "player1Name" : "Noom",
    "player2Name" : "Nut",
    "player1Status" : "O",
    "player2Status" : "X",
    "TABLE" : 9
}
//Request name บอกพฤฤิกรรมของ test เรา
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Player1 name is Noom", function () {//check Mark of player one
    var jsonData = pm.response.json();
    pm.expect(jsonData.player1Name).to.eql("Noom"); // Data sent from server | expected frome server 
});

pm.test("Player2 name is Nut", function () {//check Mark of player one
    var jsonData = pm.response.json();
    pm.expect(jsonData.player2Name).to.eql("Nut"); // Data sent from server | expected frome server 
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


//1. API startGame
localhost:3000/startgame //format POST

//Data have to send by JSON
response {
    "player1" : "Noom",
    "player2" : "Nut",
    "player1Status" : "O",
    "player2Status" : "X",
    "TABLE" : 9
}

//Wait backend return Data
return {
    "player1 Name" : "Noom",
    "player2 Name" : "Nut",
    "player1 Status" : "O",
    "player2 Status" : "X",
    "score p1" : 0,
    "score p2" : 0,
    "TABLE" : [ , , , , , , , , ] 
}

//2. API play
localhost::3000/Startgame/play //format POST

//Data have to send by JSON
response {
    "playerName" : "Noom",
    "playerStatus" : "O",
    "PlayerScore" : 0,
    "PlayerPosition" : 1
}

//wait backend return Data
return {
    "player Name" : "Noom",
    "player1 Status" : "O",
    "score" : 1,
    "TABLE" : [1,2,3],
    "Match" : win
}




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