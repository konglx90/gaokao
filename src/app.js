/**
 * Created by kong90 on 16-6-27.
 */
define(['json!web/data.json'], function(data){

    var chinaMap = function(){};

    chinaMap.draw = function() {

        $(function () {

            // Initiate the chart
            $('#container').highcharts('Map', {

                title: {
                    text: '2015年942万人报名高考 各省高考人数汇总排行'
                },

                subtitle: {
                    text: '<a href="#">map china</a>'
                },

                mapNavigation: {
                    enabled: true,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },

                colorAxis: {
                    min: 20000,
                    max: 800000
                },

                series: [{
                    data: data,
                    mapData: Highcharts["countries/cn/custom/cn-all-china"],
                    joinBy: 'hc-key',
                    name: 'Random data',
                    states: {
                        hover: {
                            color: '#BADA55'
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        format: '{point.properties.cn-name}'
                    }
                }]
            });
        });
    }
    return chinaMap;
});