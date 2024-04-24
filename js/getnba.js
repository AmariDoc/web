new gridjs.Grid({
    search: true,
    sort: true,
    pagination: true,
    fixedheader: true,
    height: "90%",

    columns: [
        { name: "Id", width: "100px" },
        { name: "Player", width: "100px" },
        { name: "Team", width: "100px" } ],

    server: {
        url: "http://localhost:8500/api/v1/nba",
        then: (data) => {
            data.sort((a,b) => b.order_id   - a.order_id);
            return data.map((basketball)  => [
                NBA.id,
                NBA.player,
                NBA.team
            ]);
        }
    } ,
}).render(document.getElementById("table"));