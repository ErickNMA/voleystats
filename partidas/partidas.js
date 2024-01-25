const sendbtn = document.getElementById('send');

var stats = {
    labels: [],
    data: [[], [], []],
}; 

sendbtn.addEventListener('click', () => {
    saveJSON();
});

function saveJSON() {
    //var JSONContent = "tempo\ttheta\tref\tusig\n";
    /*for (let i = 0; i < stats.labels.length; i++) {
        var line = stats.labels[i].toString() + "\t" + stats.data[0][i].toString() + "\t" + stats.data[1][i].toString() + "\t" + stats.data[2][i].toString() + "\n";
        JSONContent += line;
    }*/

    JSONContent = '{"name": Erick,"age": 18,"gender": "male"}';

    let blob = new Blob( [JSONContent] , {type: "text/plain;charset=utf-8"} );
    saveAs(blob, "teste.json");

    stats = {
        labels: [],
        data: [[], [], []],
    };
};