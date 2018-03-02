var chart = new CanvasJS.Chart("graphique", {

    axisX: {
        title: "Durée de l'activité"
    },

    axisY: [
        {
            title: "Vitesse (km/h)",
            lineColor: "blue",
      },
        {
            title: "Altitude (m)",
            lineColor: "red",

      }
    ],


    data: [{
            type: "line",
            legendText: "Vitesse",
            showInLegend: true,
            dataPoints: [{
                    x: new Date("October 12, 1988 13:14:00"),
                    y: 10
                            }, {
                    x: new Date("October 12, 1988 13:14:05"),
                    y: 10.5
                            },
                {
                    x: new Date("October 12, 1988 13:14:10"),
                    y: 11
                            },
                {
                    x: new Date("October 12, 1988 13:14:15"),
                    y: 12
                            },
                {
                    x: new Date("October 12, 1988 13:14:20"),
                    y: 13
                            },
                {
                    x: new Date("October 12, 1988 13:14:25"),
                    y: 14
                            },
                {
                    x: new Date("October 12, 1988 13:14:30"),
                    y: 13
                            },
                {
                    x: new Date("October 12, 1988 13:14:35"),
                    y: 12
                            }]
            },
        {
            type: "line",
            legendText: "Altitude",
            showInLegend: true,
            axisYIndex: 1,
            dataPoints: [{
                    x: new Date("October 12, 1988 13:14:00"),
                    y: 100
                            }, {
                    x: new Date("October 12, 1988 13:14:05"),
                    y: 101
                            },
                {
                    x: new Date("October 12, 1988 13:14:10"),
                    y: 105
                            },
                {
                    x: new Date("October 12, 1988 13:14:15"),
                    y: 104
                            },
                {
                    x: new Date("October 12, 1988 13:14:20"),
                    y: 101
                            },
                {
                    x: new Date("October 12, 1988 13:14:25"),
                    y: 100
                            },
                {
                    x: new Date("October 12, 1988 13:14:30"),
                    y: 99
                            },
                {
                    x: new Date("October 12, 1988 13:14:35"),
                    y: 98
                            }]
                    }]
});
chart.render();
