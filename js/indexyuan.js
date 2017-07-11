/**
 * Created by Administrator on 2015/10/25.
 */
window.onload = function() {

	var dataArr = [[
		// 澳门
		{picUrl: '../photo/11.jpg', width: 850, height: 425},
		{picUrl: '../photo/22.jpg', width: 5200, height: 3902},
		{picUrl: '../photo/3.jpg', width: 5184, height: 3888},
		{picUrl: '../photo/4.jpg', width: 5184, height: 3888},
		// 北京
		{picUrl: '../photo/111.jpg', width: 850, height: 425},
		{picUrl: '../photo/222.jpg', width: 403, height: 268},
		{picUrl: '../photo/333.jpg', width: 720, height: 450},
		{picUrl: '../photo/444.jpg', width: 1024, height: 640},
		{picUrl: '../photo/666.jpg', width: 640, height: 960},
        {picUrl: '../photo/555.jpg', width: 373, height: 252},],[
		// 冰岛

		{picUrl: '../photo/P9040197.jpg', width: 500, height: 272},
		{picUrl: '../photo/P9050225.jpg', width: 960, height: 540},
		{picUrl: '../photo/P9050262.jpg', width: 391, height: 220},
		{picUrl: '../photo/P9080510.jpg', width: 468, height: 292},
        {picUrl: '../photo/P9140052.jpg', width: 1024, height: 640},
		{picUrl: '../photo/P9121045.jpg', width: 480, height: 800},

		// 丹麦
        {picUrl: '../photo/P1150124.jpg', width: 1000, height: 562},
        {picUrl: '../photo/P1150141.jpg', width: 600, height: 415},
        {picUrl: '../photo/P1140102.jpg', width: 960, height: 540},
        {picUrl: '../photo/P1140087.jpg', width: 800, height: 500},



        ,],[
        {picUrl: '../photo/020058.jpg', width: 850, height: 425},
        {picUrl: '../photo/020108.jpg', width: 850, height: 425},
		{picUrl: '../photo/P1160262.jpg', width: 362, height: 362},
		{picUrl: '../photo/P1160306.jpg', width: 480, height: 800},
		{picUrl: '../photo/P1160327.jpg', width: 874, height: 490},
		{picUrl: '../photo/P1160341.jpg', width: 1024, height: 640},

        // 桂林
        {picUrl: '../photo/1111.jpg', width: 850, height: 425},
        {picUrl: '../photo/2222.jpg', width: 850, height: 425},
        {picUrl: '../photo/3333.jpg', width: 850, height: 425},
        {picUrl: '../photo/4444.jpg', width: 850, height: 425},
		//韩国


    ],

        [
            {picUrl: '../photo/020061.jpg', width: 850, height: 425},
        {picUrl: '../photo/2260003.jpg', width: 850, height: 425},
        {picUrl: '../photo/2260005.jpg', width: 850, height: 425},
        {picUrl: '../photo/2260009.jpg', width: 850, height: 425},
		//黑龙江
        {picUrl: '../photo/12312as.jpg', width: 850, height: 425},
        {picUrl: '../photo/123z.jpg', width: 850, height: 425},
        {picUrl: '../photo/12a.jpg', width: 850, height: 425},
        {picUrl: '../photo/1a.jpg', width: 850, height: 425},
        {picUrl: '../photo/212z.jpg', width: 850, height: 425},
        {picUrl: '../photo/3psd.jpg', width: 850, height: 425}
        ],

        [

            // {picUrl: '../photo/asd.jpg', width: 850, height: 425},
			//柬埔寨
        {picUrl: '../photo/0550.jpg', width: 850, height: 425},
        {picUrl: '../photo/0551.jpg', width: 850, height: 425},

        {picUrl: '../photo/0558.jpg', width: 850, height: 425},
        //马来西亚
            {picUrl: '../photo/0554.jpg', width: 850, height: 425},
            // {picUrl: '../photo/0555.jpg', width: 850, height: 425},
            {picUrl: '../photo/P6210002.jpg', width: 850, height: 425},
            {picUrl: '../photo/0557.jpg', width: 850, height: 425},


        {picUrl: '../photo/P6220070.jpg', width: 850, height: 425},
        {picUrl: '../photo/P6220072.jpg', width: 850, height: 425}
        ],

        [

        {picUrl: '../photo/P6240128.jpg', width: 850, height: 425},
        {picUrl: '../photo/P6240143.jpg', width: 850, height: 425},
			//上海

        {picUrl: '../photo/P8120323.jpg', width: 850, height: 425},
        {picUrl: '../photo/P8120334.jpg', width: 850, height: 425},
        {picUrl: '../photo/P8120391.jpg', width: 850, height: 425},
        {picUrl: '../photo/P8130540.jpg', width: 850, height: 425},

			//台湾
        {picUrl: '../photo/P3110010.jpg', width: 850, height: 425},
        {picUrl: '../photo/P31100101.jpg', width: 850, height: 425},
        {picUrl: '../photo/P31100102.jpg', width: 850, height: 425},
            {picUrl: '../photo/IMG_8670.jpg', width: 850, height: 425},
        ],

        [

            {picUrl: '../photo/P311001021.jpg', width: 850, height: 425},
        {picUrl: '../photo/P3110016-1.jpg', width: 850, height: 425},


			//泰国
        {picUrl: '../photo/IMG_8666.jpg', width: 850, height: 425},
        {picUrl: '../photo/IMG_8668.jpg', width: 850, height: 425},
        {picUrl: '../photo/IMG_8669.jpg', width: 850, height: 425},

        {picUrl: '../photo/IMG_8673.jpg', width: 850, height: 425},
			//乌克兰
            {picUrl: '../photo/P3120043.jpg', width: 850, height: 425},
        {picUrl: '../photo/P8110043.jpg', width: 850, height: 425}
        ],

        [

            {picUrl: '../photo/P8120140.jpg', width: 850, height: 425},
        {picUrl: '../photo/P8120229.jpg', width: 850, height: 425},
        {picUrl: '../photo/P8120244.jpg', width: 850, height: 425},
        {picUrl: '../photo/P8120301.jpg', width: 850, height: 425},
        {picUrl: '../photo/P8130506.jpg', width: 850, height: 425},
//西藏

        {picUrl: '../photo/PC090025.jpg', width: 850, height: 425},
        {picUrl: '../photo/PC090028.jpg', width: 850, height: 425},
        {picUrl: '../photo/PC090045.jpg', width: 850, height: 425},
        {picUrl: '../photo/PC090060.jpg', width: 850, height: 425},
        {picUrl: '../photo/PC210416.jpg', width: 850, height: 425}
        ],

        [
            {picUrl: '../photo/PC220497.jpg', width: 850, height: 425},
        {picUrl: '../photo/PC230590.jpg', width: 850, height: 425},
        {picUrl: '../photo/PC260966.jpg', width: 850, height: 425},
		//意大利
        {picUrl: '../photo/P6120222.jpg', width: 850, height: 425},
        {picUrl: '../photo/P6150456.jpg', width: 850, height: 425},
        {picUrl: '../photo/P6150489.jpg', width: 850, height: 425},
        {picUrl: '../photo/P6150490.jpg', width: 850, height: 425},
        {picUrl: '../photo/P6150535.jpg', width: 850, height: 425},
        {picUrl: '../photo/P6150567.jpg', width: 850, height: 425},
        {picUrl: '../photo/P6160631.jpg', width: 850, height: 425}
	]
	];

	var listType = 1,
		bannerDom = document.querySelector('.banner'),
		contentDom = document.querySelector('.content'),
		loadMoreDom = document.querySelector('.load-more'),
		wtf = null;

	showList();

var listmore = 1;
	loadMoreDom.onclick = function() {
	    if(listmore==9){
            listmore =1;
        }
		wtf.create(dataArr[listmore]);
        listmore++;
	}

	function showList() {
		contentDom.innerHTML = '';
		wtf = new WaterFull('.content', {
			type: listType,
			urlField: 'picUrl'
		});
		wtf.create(dataArr[0]);
	};
};
