new gridjs.Grid({
    search: true,
    sort: true,
    pagination: true,
    fixedheader: true,
    height: "90%",

    columns: [
        { name: "id", width: "100px" },
        { name: "NBAPlayer", width: "100px" },
        { name: "NBATeam", width: "100px" } ],

    server: {
        url: "http://localhost:3000/NBA",
        then: (data) => {
            data.sort((a,b) => b.order_id   - a.order_id);
            return data.map((NBA)  => [
                NBA.id,
                NBA.NBAPlayer,
                NBA.NBATeam
            ]);
        }
    } ,
}).render(document.getElementById("table"));