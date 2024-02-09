var map = {
    title: "Underwater",
    song: "env2",
    maker: "catfishpie",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([-8.43979, 19.33021, -341.75979], [0, 1.07, 0], [8, 1, 70], "00ffc8", 0, 0, 0.6, false, false);
        a.p([0.00028000000000000003, -2.55972, 19.53028], [0, 0, 0], [3, 1, 113.26], "00ffc8", 0, 0, 0.6, true, false);
        a.p([0.00035000000000000005, -2.55965, -105.57965], [0.59, 0, 0], [5, 1, 12], "00ffc8", 0, 0, 0.6, true, false);
        a.p([13.830419999999998, -2.55958, -176.39958], [0.39, 0, 0], [40, 1, 5], "00ffc8", 0, 0, 0.6, true, false);
        a.p([11.71049, -2.55951, -240.34951], [2.53, 0, 0], [40, 1, 5], "00ffc8", 0, 0, 0.6, true, false);
        a.p([41.91, 48.99, -191.62], [-0.3, 0, 0], [20, 2, 4], "00ffc8", 0, 0, 0.6, false, false);
        a.y([-65.50993, -3.94993, -148.01993000000002], [0, 0, -1.57], [3, 14, 3], "04053b", 0, 0, 0.6, false, 1);
        a.y([-65.50986, -3.9498599999999997, -140.04986], [0, 0, -1.57], [3, 14, 3], "04053b", 0, 0, 0.6, false, 1);
        a.y([-67.73979, -3.9497899999999997, -267.68979], [0, 3.14, -1.57], [3, 14, 3], "04053b", 0, 0, 0.6, false, 1);
        a.y([-67.73971999999999, -3.9497199999999997, -259.71972], [0, 3.14, -1.57], [3, 14, 3], "04053b", 0, 0, 0.6, false, 1);
        a.p([-67.73965, 4.32035, -271.65965], [-3.14, 0, 0], [4, 6.66, 12], "ff8400", 0, 0, 0.6, true, false);
        a.p([-65.50958, 4.3204199999999995, -136.08958], [0, 0, 0], [4, 6.66, 12], "ff8400", 0, 0, 0.6, true, false);
        a.p([-65.50951, -10.84951, -121.21950999999999], [0, -1.49, 0], [4, 10, 12], "ff8400", 0, 0, 0.6, false, false);
        a.p([-65.51, -15.3, -136.24], [0, -1.21, 0], [10, 10, 4], "ff8400", 0, 0, 0.6, false, false);
        a.p([-67.73993, -15.29993, -271.49993], [-3.14, -1.21, 0], [10, 10, 4], "ff8400", 0, 0, 0.6, false, false);
        a.p([-67.73986, -10.849860000000001, -286.52986], [-3.14, -1.49, 0], [4, 10, 12], "ff8400", 0, 0, 0.6, false, false);
        a.y([-65.50979000000001, -8.229790000000001, -137.03978999999998], [0, 0, -1.57], [27.88, 6.8, 27.88], "ffc400", 0, 0, 0.6, false, 1);
        a.y([-67.73971999999999, -8.22972, -270.69972], [0, 3.14, -1.57], [27.88, 6.8, 27.88], "ffc400", 0, 0, 0.6, false, 1);
        a.y([-65.50965000000001, -3.9496499999999997, -148.01965], [0, 0, -1.57], [9.5, 12, 9.5], "ffffff", 0, 0, 0.6, false, 1);
        a.y([-65.50958, -3.94958, -140.04958], [0, 0, -1.57], [9.5, 12, 9.5], "ffffff", 0, 0, 0.6, false, 1);
        a.y([-67.73951, -3.94951, -267.68951], [0, 3.14, -1.57], [9.5, 12, 9.5], "ffffff", 0, 0, 0.6, false, 1);
        a.y([-67.74, -3.95, -259.72], [0, 3.14, -1.57], [9.5, 12, 9.5], "ffffff", 0, 0, 0.6, false, 1);
        a.p([-0.02993, 51.08007, -397.78993], [0, 0, 0.79], [6, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([0.01014, 53.89014, -397.78986], [0, 0, -0.79], [6, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([19.96021, 52.51021, -392.48978999999997], [-0.79, 0, 0], [12.06, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([22.97028, 53.890280000000004, -389.47972000000004], [-0.79, 0, -0.79], [6, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.p([22.95035, 51.080349999999996, -389.49965], [-0.79, 0, 0.79], [6, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.y([-12.009580000000001, 0.00042, -80.31958], [0, 0, 0], [26.8, 100, 26.8], "002fff,0.4", 0, 0, 0.6, false, 1);
        a.y([59.36049, 0.00049, -234.01951], [0, 0, 0], [38.26, 100, 38.26], "002fff,0.4", 0, 0, 0.6, false, 1);
        a.y([-43.18, 0, -306.53], [0, 0, 0], [32.28, 100, 32.28], "002fff,0.4", 0, 0, 0.6, false, 1);
        a.y([13.810070000000001, 0.00007000000000000001, -204.50993], [0, 0, 0], [43.32, 100, 43.32], "0099ff,0.5", 0, 0, 0.6, false, 1);
        a.y([12.000139999999998, 0.00014000000000000001, -57.06986], [0, 0, 0], [26.8, 100, 26.8], "0099ff,0.6", 0, 0, 0.6, false, 1);
        a.y([18.470209999999998, 0.00021, -143.54979], [0, 0, 0], [57.38, 100, 57.38], "00e5ff,0.6", 0, 0, 0.6, false, 1);
        a.y([24.570279999999997, 0.00028000000000000003, -282.82972], [0, 0, 0], [57.38, 100, 57.38], "0099ff,0.8", 0, 0, 0.6, false, 1);
        a.y([78.80035, 0.00035000000000000005, -193.45965], [0, 0, 0], [57.38, 100, 57.38], "0099ff,0.8", 0, 0, 0.6, false, 1);
        a.y([-18.479580000000002, 0.00042, -196.72958], [0, 0, 0], [57.38, 100, 57.38], "0099ff,0.8", 0, 0, 0.6, false, 1);
        a.c([7.8204899999999995, -1.5695099999999997, -172.85951], true);
        a.c([13.77, -1.5699999999999998, -177.48], true);
        a.c([14.59007, -1.5699299999999998, -175.51993], true);
        a.c([6.11014, -1.5698599999999998, -245.44986], true);
        a.c([10.840209999999999, -1.5697900000000002, -239.71979], true);
        a.p([44.780280000000005, 48.990280000000006, -254.73972], [-0.95, 0, 0], [16, 2, 4], "00ffc8", 0, 0, 0.6, false, false);
        a.p([0.11035, 48.99035, -170.19965], [-0.95, 0, 0], [9, 2, 4], "00ffc8", 0, 0, 0.6, false, false);
        a.p([-4.259580000000001, 52.51042, -397.78958], [0, 0, 0], [12.06, 2, 1], "2.0", 0, 0, 0.6, false, false);
        a.e([19.26049, 51.20049, -150.55951]);
    },
    post: function() {
        cc.set_monkey("scene.clearColor", new BABYLON.Color3.FromHexString("#00054a"));
        cc.set_monkey("speed", 0.2);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -3.0198599999999374) {
                    a.jh(3.5);
                    steer = default_steer * 0.8;
                    speed = default_speed * 1.1;
                    a.g(null, 0.05, null);
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -653.7198599999999) {
                    a.jh(null);
                    steer = cc.get("steer", null);
                    speed = cc.get("speed", null);
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [-8.43979, 19.33021, -341.75979], [0, 1.07, 0], [8, 1, 70]);
        a.re('P1', [0.00028000000000000003, -2.55972, 19.53028], [0, 0, 0], [3, 1, 113.26]);
        a.re('P2', [0.00035000000000000005, -2.55965, -105.57965], [0.59, 0, 0], [5, 1, 12]);
        a.re('P3', [13.830419999999998, -2.55958, -176.39958], [0.39, 0, 0], [40, 1, 5]);
        a.re('P4', [11.71049, -2.55951, -240.34951], [2.53, 0, 0], [40, 1, 5]);
        a.re('P5', [41.91, 48.99, -191.62], [-0.3, 0, 0], [20, 2, 4]);
        a.re('Y0', [-65.50993, -3.94993, -148.01993000000002], [0, 0, -1.57], [3, 14, 3]);
        a.re('Y1', [-65.50986, -3.9498599999999997, -140.04986], [0, 0, -1.57], [3, 14, 3]);
        a.re('Y2', [-67.73979, -3.9497899999999997, -267.68979], [0, 3.14, -1.57], [3, 14, 3]);
        a.re('Y3', [-67.73971999999999, -3.9497199999999997, -259.71972], [0, 3.14, -1.57], [3, 14, 3]);
        a.re('P6', [-67.73965, 4.32035, -271.65965], [-3.14, 0, 0], [4, 6.66, 12]);
        a.re('P7', [-65.50958, 4.3204199999999995, -136.08958], [0, 0, 0], [4, 6.66, 12]);
        a.re('P8', [-65.50951, -10.84951, -121.21950999999999], [0, -1.49, 0], [4, 10, 12]);
        a.re('P9', [-65.51, -15.3, -136.24], [0, -1.21, 0], [10, 10, 4]);
        a.re('P10', [-67.73993, -15.29993, -271.49993], [-3.14, -1.21, 0], [10, 10, 4]);
        a.re('P11', [-67.73986, -10.849860000000001, -286.52986], [-3.14, -1.49, 0], [4, 10, 12]);
        a.re('Y4', [-65.50979000000001, -8.229790000000001, -137.03978999999998], [0, 0, -1.57], [27.88, 6.8, 27.88]);
        a.re('Y5', [-67.73971999999999, -8.22972, -270.69972], [0, 3.14, -1.57], [27.88, 6.8, 27.88]);
        a.re('Y6', [-65.50965000000001, -3.9496499999999997, -148.01965], [0, 0, -1.57], [9.5, 12, 9.5]);
        a.re('Y7', [-65.50958, -3.94958, -140.04958], [0, 0, -1.57], [9.5, 12, 9.5]);
        a.re('Y8', [-67.73951, -3.94951, -267.68951], [0, 3.14, -1.57], [9.5, 12, 9.5]);
        a.re('Y9', [-67.74, -3.95, -259.72], [0, 3.14, -1.57], [9.5, 12, 9.5]);
        a.re('P12', [-0.02993, 51.08007, -397.78993], [0, 0, 0.79], [6, 2, 1]);
        a.re('P13', [0.01014, 53.89014, -397.78986], [0, 0, -0.79], [6, 2, 1]);
        a.re('P14', [19.96021, 52.51021, -392.48978999999997], [-0.79, 0, 0], [12.06, 2, 1]);
        a.re('P15', [22.97028, 53.890280000000004, -389.47972000000004], [-0.79, 0, -0.79], [6, 2, 1]);
        a.re('P16', [22.95035, 51.080349999999996, -389.49965], [-0.79, 0, 0.79], [6, 2, 1]);
        a.re('Y10', [-12.009580000000001, 0.00042, -80.31958], [0, 0, 0], [26.8, 100, 26.8]);
        a.re('Y11', [59.36049, 0.00049, -234.01951], [0, 0, 0], [38.26, 100, 38.26]);
        a.re('Y12', [-43.18, 0, -306.53], [0, 0, 0], [32.28, 100, 32.28]);
        a.re('Y13', [13.810070000000001, 0.00007000000000000001, -204.50993], [0, 0, 0], [43.32, 100, 43.32]);
        a.re('Y14', [12.000139999999998, 0.00014000000000000001, -57.06986], [0, 0, 0], [26.8, 100, 26.8]);
        a.re('Y15', [18.470209999999998, 0.00021, -143.54979], [0, 0, 0], [57.38, 100, 57.38]);
        a.re('Y16', [24.570279999999997, 0.00028000000000000003, -282.82972], [0, 0, 0], [57.38, 100, 57.38]);
        a.re('Y17', [78.80035, 0.00035000000000000005, -193.45965], [0, 0, 0], [57.38, 100, 57.38]);
        a.re('Y18', [-18.479580000000002, 0.00042, -196.72958], [0, 0, 0], [57.38, 100, 57.38]);
        a.re('C0', [7.8204899999999995, -1.5695099999999997, -172.85951], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [13.77, -1.5699999999999998, -177.48], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [14.59007, -1.5699299999999998, -175.51993], [0, 0, 0], [2, 2, 2]);
        a.re('C3', [6.11014, -1.5698599999999998, -245.44986], [0, 0, 0], [2, 2, 2]);
        a.re('C4', [10.840209999999999, -1.5697900000000002, -239.71979], [0, 0, 0], [2, 2, 2]);
        a.re('P17', [44.780280000000005, 48.990280000000006, -254.73972], [-0.95, 0, 0], [16, 2, 4]);
        a.re('P18', [0.11035, 48.99035, -170.19965], [-0.95, 0, 0], [9, 2, 4]);
        a.re('P19', [-4.259580000000001, 52.51042, -397.78958], [0, 0, 0], [12.06, 2, 1]);
        a.re('E0', [19.26049, 51.20049, -150.55951], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
