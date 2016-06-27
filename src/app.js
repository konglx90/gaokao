/**
 * Created by kong90 on 16-6-27.
 */
define(['json!web/data.json'], function(data){

    var chinaMap = function(){};

    chinaMap.draw = function() {

        $(function () {
            // Prepare demo data
            //var data = [
            //    {
            //        "value": "772000",
            //        "hc-key": "cn-he"
            //    },
            //    {
            //        "value": "754000",
            //        "hc-key": "cn-gd"
            //    },
            //    {
            //        "value": "696198",
            //        "hc-key": "cn-sd"
            //    },
            //    {
            //        "value": "570000",
            //        "hc-key": "cn-sc"
            //    },
            //    {
            //        "value": "546000",
            //        "hc-key": "cn-ah"
            //    },
            //    {
            //        "value": "404799",
            //        "hc-key": "cn-hb"
            //    },
            //    {
            //        "value": "392900",
            //        "hc-key": "cn-js"
            //    },
            //    {
            //        "value": "390000",
            //        "hc-key": "cn-hn"
            //    },
            //    {
            //        "value": "368425",
            //        "hc-key": "cn-hu"
            //    },
            //    {
            //        "value": "354641",
            //        "hc-key": "cn-jx"
            //    },
            //    {
            //        "value": "344000",
            //        "hc-key": "cn-sa"
            //    },
            //    {
            //        "value": "342278",
            //        "hc-key": "cn-sx"
            //    },
            //    {
            //        "value": "330591",
            //        "hc-key": "cn-gz"
            //    },
            //    {
            //        "value": "310000",
            //        "hc-key": "cn-gx"
            //    },
            //    {
            //        "value": "303838",
            //        "hc-key": "cn-gs"
            //    },
            //    {
            //        "value": "280000",
            //        "hc-key": "cn-zj"
            //    },
            //    {
            //        "value": "272126",
            //        "hc-key": "cn-yn"
            //    },
            //    {
            //        "value": "255460",
            //        "hc-key": "cn-cq"
            //    },
            //    {
            //        "value": "225191",
            //        "hc-key": "cn-ln"
            //    },
            //    {
            //        "value": "198000",
            //        "hc-key": "cn-hl"
            //    },
            //    {
            //        "value": "189300",
            //        "hc-key": "cn-fj"
            //    },
            //    {
            //        "value": "184000",
            //        "hc-key": "cn-nm"
            //    },
            //    {
            //        "value": "160500",
            //        "hc-key": "cn-xj"
            //    },
            //    {
            //        "value": "137681",
            //        "hc-key": "cn-jl"
            //    },
            //    {
            //        "value": "68000",
            //        "hc-key": "cn-bj"
            //    },
            //    {
            //        "value": "67708",
            //        "hc-key": "cn-nx"
            //    },
            //    {
            //        "value": "62000",
            //        "hc-key": "cn-ha"
            //    },
            //    {
            //        "value": "61990",
            //        "hc-key": "cn-tj"
            //    },
            //    {
            //        "value": "51000",
            //        "hc-key": "cn-sh"
            //    },
            //    {
            //        "value": "42682",
            //        "hc-key": "cn-qh"
            //    },
            //    {
            //        "value": "21145",
            //        "hc-key": "cn-xz"
            //    }
            //];

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