var anonymousFunc = function () {

    var urls = [
      PykCharts.assets+'lib/d3.min.js'
    , PykCharts.assets+'lib/topojson.min.js'
    , PykCharts.assets+'lib/custom-hive.min.js'
    , PykCharts.assets+'lib/colors.min.js'
    , PykCharts.assets+'lib/paper-full.min.js'
    ];

    function importFiles (url) {
        var include = document.createElement('script');
        include.type = 'text/javascript';
        include.async = false;
        include.onload = function () {
            try {
                PykCharts.numberFormat = d3.format(",");
                if (d3 && d3.customHive && topojson && $c && paper) {
                    window.PykChartsInit();
                    document.querySelector("body").onclick = function () {
                        if (PykCharts.export_menu_status === 0) {
                            d3.selectAll(".dropdown-multipleConatiner-export").style("visibility","hidden");
                        }
                        PykCharts.export_menu_status = 0;
                    };
                };
            }
            catch (e) {

            }
        }
        include.src = url;
        var s = document.getElementsByTagName('link')[0];
        s.parentNode.insertBefore(include, s);
    };

    try {
        if(!d3) {
            importFiles(urls[0]);
        }
    } catch (e) {
        importFiles(urls[0])
    }
    try {
        if(!d3.customHive) {
            importFiles(urls[2]);
        }
    } catch (e) {
        importFiles(urls[2]);
    }
    try {
        if(!topojson) {
            importFiles(urls[1]);
        }
    } catch (e) {
        importFiles(urls[1]);
    }
    try {
        if(!$c) {
            importFiles(urls[3]);
        }
    } catch (e) {
        importFiles(urls[3]);
    }
    try {
        if(!paper) {
            importFiles(urls[4]);
        }
    } catch (e) {
        importFiles(urls[4]);
    }
};

window.onload = anonymousFunc;
