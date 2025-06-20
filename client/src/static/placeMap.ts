const provinces = [
  "北京市",
  "天津市",
  "河北省",
  "山西省",
  "内蒙古自治区",
  "辽宁省",
  "吉林省",
  "黑龙江省",
  "上海市",
  "江苏省",
  "浙江省",
  "安徽省",
  "福建省",
  "江西省",
  "山东省",
  "河南省",
  "湖北省",
  "湖南省",
  "广东省",
  "广西壮族自治区",
  "海南省",
  "重庆市",
  "四川省",
  "贵州省",
  "云南省",
  "西藏自治区",
  "陕西省",
  "甘肃省",
  "青海省",
  "宁夏回族自治区",
  "新疆维吾尔自治区",
  "香港特别行政区",
  "澳门特别行政区",
  "台湾省",
];

const cityMap: Record<string, string[]> = {
  北京市: ["北京市"],
  天津市: ["天津市"],
  河北省: ["石家庄市", "唐山市", "秦皇岛市", "邯郸市", "邢台市", "保定市"],
  山西省: ["太原市", "大同市", "阳泉市", "长治市", "晋城市", "朔州市"],
  内蒙古自治区: [
    "呼和浩特市",
    "包头市",
    "乌海市",
    "赤峰市",
    "通辽市",
    "鄂尔多斯市",
  ],
  辽宁省: ["沈阳市", "大连市", "鞍山市", "抚顺市", "本溪市", "丹东市"],
  吉林省: ["长春市", "吉林市", "四平市", "辽源市", "通化市", "白山市"],
  黑龙江省: [
    "哈尔滨市",
    "齐齐哈尔市",
    "鸡西市",
    "鹤岗市",
    "双鸭山市",
    "大庆市",
  ],
  上海市: ["上海市"],
  江苏省: ["南京市", "无锡市", "徐州市", "常州市", "苏州市", "南通市"],
  浙江省: ["杭州市", "宁波市", "温州市", "嘉兴市", "湖州市", "绍兴市"],
  安徽省: ["合肥市", "芜湖市", "蚌埠市", "淮南市", "马鞍山市", "淮北市"],
  福建省: ["福州市", "厦门市", "莆田市", "三明市", "泉州市", "漳州市"],
  江西省: ["南昌市", "景德镇市", "萍乡市", "九江市", "新余市", "鹰潭市"],
  山东省: ["济南市", "青岛市", "淄博市", "枣庄市", "东营市", "烟台市"],
  河南省: ["郑州市", "开封市", "洛阳市", "平顶山市", "安阳市", "鹤壁市"],
  湖北省: ["武汉市", "黄石市", "十堰市", "宜昌市", "襄阳市", "鄂州市"],
  湖南省: ["长沙市", "株洲市", "湘潭市", "衡阳市", "邵阳市", "岳阳市"],
  广东省: ["广州市", "深圳市", "珠海市", "汕头市", "佛山市", "韶关市"],
  广西壮族自治区: [
    "南宁市",
    "柳州市",
    "桂林市",
    "梧州市",
    "北海市",
    "防城港市",
  ],
  海南省: ["海口市", "三亚市", "三沙市", "儋州市"],
  重庆市: ["重庆市"],
  四川省: ["成都市", "自贡市", "攀枝花市", "泸州市", "德阳市", "绵阳市"],
  贵州省: ["贵阳市", "六盘水市", "遵义市", "安顺市", "毕节市", "铜仁市"],
  云南省: ["昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市"],
  西藏自治区: ["拉萨市", "日喀则市", "昌都市", "林芝市", "山南市", "那曲市"],
  陕西省: ["西安市", "铜川市", "宝鸡市", "咸阳市", "渭南市", "延安市"],
  甘肃省: ["兰州市", "嘉峪关市", "金昌市", "白银市", "天水市", "武威市"],
  青海省: [
    "西宁市",
    "海东市",
    "海北藏族自治州",
    "黄南藏族自治州",
    "海南藏族自治州",
    "果洛藏族自治州",
  ],
  宁夏回族自治区: ["银川市", "石嘴山市", "吴忠市", "固原市", "中卫市"],
  新疆维吾尔自治区: [
    "乌鲁木齐市",
    "克拉玛依市",
    "吐鲁番市",
    "哈密市",
    "昌吉回族自治州",
    "博尔塔拉蒙古自治州",
  ],
  香港特别行政区: ["香港岛", "九龙", "新界"],
  澳门特别行政区: [
    "花地玛堂区",
    "圣安多尼堂区",
    "大堂区",
    "望德堂区",
    "风顺堂区",
  ],
  台湾省: ["台北市", "新北市", "桃园市", "台中市", "台南市", "高雄市"],
};

const regionMap: Record<string, string[]> = {
  北京市: [
    "东城区",
    "西城区",
    "朝阳区",
    "丰台区",
    "石景山区",
    "海淀区",
    "门头沟区",
    "房山区",
  ],
  天津市: [
    "和平区",
    "河东区",
    "河西区",
    "南开区",
    "河北区",
    "红桥区",
    "东丽区",
    "西青区",
  ],
  石家庄市: [
    "长安区",
    "桥西区",
    "新华区",
    "井陉矿区",
    "裕华区",
    "藁城区",
    "鹿泉区",
    "栾城区",
  ],
  唐山市: [
    "路南区",
    "路北区",
    "古冶区",
    "开平区",
    "丰南区",
    "丰润区",
    "曹妃甸区",
    "遵化市",
  ],
  太原市: [
    "小店区",
    "迎泽区",
    "杏花岭区",
    "尖草坪区",
    "万柏林区",
    "晋源区",
    "清徐县",
    "阳曲县",
  ],
  大同市: [
    "新荣区",
    "平城区",
    "云冈区",
    "云州区",
    "阳高县",
    "天镇县",
    "广灵县",
    "灵丘县",
  ],
  呼和浩特市: [
    "新城区",
    "回民区",
    "玉泉区",
    "赛罕区",
    "土默特左旗",
    "托克托县",
    "和林格尔县",
    "清水河县",
  ],
  包头市: [
    "东河区",
    "昆都仑区",
    "青山区",
    "石拐区",
    "白云鄂博矿区",
    "九原区",
    "土默特右旗",
    "固阳县",
  ],
  沈阳市: [
    "和平区",
    "沈河区",
    "大东区",
    "皇姑区",
    "铁西区",
    "苏家屯区",
    "浑南区",
    "沈北新区",
  ],
  大连市: [
    "中山区",
    "西岗区",
    "沙河口区",
    "甘井子区",
    "旅顺口区",
    "金州区",
    "普兰店区",
    "瓦房店市",
  ],
  长春市: [
    "南关区",
    "宽城区",
    "朝阳区",
    "二道区",
    "绿园区",
    "双阳区",
    "九台区",
    "农安县",
  ],
  吉林市: [
    "昌邑区",
    "龙潭区",
    "船营区",
    "丰满区",
    "永吉县",
    "蛟河市",
    "桦甸市",
    "舒兰市",
  ],
  哈尔滨市: [
    "道里区",
    "南岗区",
    "道外区",
    "平房区",
    "松北区",
    "香坊区",
    "呼兰区",
    "阿城区",
  ],
  齐齐哈尔市: [
    "龙沙区",
    "建华区",
    "铁锋区",
    "昂昂溪区",
    "富拉尔基区",
    "碾子山区",
    "梅里斯达斡尔族区",
    "龙江县",
  ],
  上海市: [
    "黄浦区",
    "徐汇区",
    "长宁区",
    "静安区",
    "普陀区",
    "虹口区",
    "杨浦区",
    "闵行区",
  ],
  南京市: [
    "玄武区",
    "秦淮区",
    "建邺区",
    "鼓楼区",
    "浦口区",
    "栖霞区",
    "雨花台区",
    "江宁区",
  ],
  无锡市: [
    "锡山区",
    "惠山区",
    "滨湖区",
    "梁溪区",
    "新吴区",
    "江阴市",
    "宜兴市",
  ],
  杭州市: [
    "上城区",
    "拱墅区",
    "西湖区",
    "滨江区",
    "萧山区",
    "余杭区",
    "临平区",
    "钱塘区",
  ],
  宁波市: [
    "海曙区",
    "江北区",
    "北仑区",
    "镇海区",
    "鄞州区",
    "奉化区",
    "象山县",
    "宁海县",
  ],
  合肥市: [
    "瑶海区",
    "庐阳区",
    "蜀山区",
    "包河区",
    "肥东县",
    "肥西县",
    "长丰县",
    "庐江县",
  ],
  芜湖市: [
    "镜湖区",
    "弋江区",
    "鸠江区",
    "三山区",
    "无为市",
    "芜湖县",
    "繁昌县",
    "南陵县",
  ],
  福州市: [
    "鼓楼区",
    "台江区",
    "仓山区",
    "马尾区",
    "晋安区",
    "长乐区",
    "福清市",
    "闽侯县",
  ],
  厦门市: ["思明区", "湖里区", "集美区", "海沧区", "同安区", "翔安区"],
  南昌市: [
    "东湖区",
    "西湖区",
    "青云谱区",
    "湾里区",
    "青山湖区",
    "新建区",
    "南昌县",
    "安义县",
  ],
  景德镇市: ["昌江区", "珠山区", "乐平市", "浮梁县"],
  济南市: [
    "历下区",
    "市中区",
    "槐荫区",
    "天桥区",
    "历城区",
    "长清区",
    "章丘区",
    "济阳区",
  ],
  青岛市: [
    "市南区",
    "市北区",
    "黄岛区",
    "崂山区",
    "李沧区",
    "城阳区",
    "即墨区",
    "胶州市",
  ],
  郑州市: [
    "中原区",
    "二七区",
    "管城回族区",
    "金水区",
    "上街区",
    "惠济区",
    "巩义市",
    "荥阳市",
  ],
  开封市: [
    "龙亭区",
    "顺河回族区",
    "鼓楼区",
    "禹王台区",
    "祥符区",
    "杞县",
    "通许县",
    "尉氏县",
  ],
  武汉市: [
    "江岸区",
    "江汉区",
    "硚口区",
    "汉阳区",
    "武昌区",
    "青山区",
    "洪山区",
    "东西湖区",
  ],
  黄石市: ["黄石港区", "西塞山区", "下陆区", "铁山区", "大冶市", "阳新县"],
  长沙市: [
    "芙蓉区",
    "天心区",
    "岳麓区",
    "开福区",
    "雨花区",
    "望城区",
    "宁乡市",
    "浏阳市",
  ],
  株洲市: [
    "天元区",
    "芦淞区",
    "荷塘区",
    "石峰区",
    "渌口区",
    "攸县",
    "茶陵县",
    "炎陵县",
  ],
  广州市: [
    "荔湾区",
    "越秀区",
    "海珠区",
    "天河区",
    "白云区",
    "黄埔区",
    "番禺区",
    "花都区",
  ],
  深圳市: [
    "罗湖区",
    "福田区",
    "南山区",
    "宝安区",
    "龙岗区",
    "盐田区",
    "龙华区",
    "坪山区",
  ],
  南宁市: [
    "青秀区",
    "兴宁区",
    "江南区",
    "西乡塘区",
    "良庆区",
    "邕宁区",
    "武鸣区",
    "隆安县",
  ],
  柳州市: [
    "城中区",
    "鱼峰区",
    "柳南区",
    "柳北区",
    "柳江区",
    "柳城县",
    "鹿寨县",
    "融安县",
  ],
  海口市: ["秀英区", "龙华区", "琼山区", "美兰区"],
  三亚市: ["海棠区", "吉阳区", "天涯区", "崖州区"],
  重庆市: [
    "万州区",
    "涪陵区",
    "渝中区",
    "大渡口区",
    "江北区",
    "沙坪坝区",
    "九龙坡区",
    "南岸区",
  ],
  成都市: [
    "锦江区",
    "青羊区",
    "金牛区",
    "武侯区",
    "成华区",
    "龙泉驿区",
    "青白江区",
    "新都区",
  ],
  自贡市: ["自流井区", "贡井区", "大安区", "沿滩区", "荣县", "富顺县"],
  贵阳市: [
    "南明区",
    "云岩区",
    "花溪区",
    "乌当区",
    "白云区",
    "观山湖区",
    "开阳县",
    "息烽县",
  ],
  六盘水市: ["钟山区", "水城县", "盘州市", "六枝特区"],
  昆明市: [
    "五华区",
    "盘龙区",
    "官渡区",
    "西山区",
    "东川区",
    "呈贡区",
    "晋宁区",
    "安宁市",
  ],
  曲靖市: [
    "麒麟区",
    "沾益区",
    "马龙区",
    "宣威市",
    "富源县",
    "罗平县",
    "师宗县",
    "陆良县",
  ],
  拉萨市: [
    "城关区",
    "堆龙德庆区",
    "达孜区",
    "林周县",
    "当雄县",
    "尼木县",
    "曲水县",
  ],
  日喀则市: [
    "桑珠孜区",
    "南木林县",
    "江孜县",
    "定日县",
    "萨迦县",
    "拉孜县",
    "昂仁县",
    "谢通门县",
  ],
  西安市: [
    "新城区",
    "碑林区",
    "莲湖区",
    "灞桥区",
    "未央区",
    "雁塔区",
    "阎良区",
    "临潼区",
  ],
  铜川市: ["王益区", "印台区", "耀州区", "宜君县"],
  兰州市: [
    "城关区",
    "七里河区",
    "西固区",
    "安宁区",
    "红古区",
    "永登县",
    "皋兰县",
    "榆中县",
  ],
  嘉峪关市: ["雄关区", "镜铁区", "长城区"],
  西宁市: [
    "城中区",
    "城东区",
    "城西区",
    "城北区",
    "大通回族土族自治县",
    "湟中县",
    "湟源县",
  ],
  海东市: [
    "乐都区",
    "平安区",
    "民和回族土族自治县",
    "互助土族自治县",
    "化隆回族自治县",
    "循化撒拉族自治县",
  ],
  银川市: ["兴庆区", "西夏区", "金凤区", "永宁县", "贺兰县", "灵武市"],
  石嘴山市: ["大武口区", "惠农区", "平罗县"],
  乌鲁木齐市: [
    "天山区",
    "沙依巴克区",
    "新市区",
    "水磨沟区",
    "头屯河区",
    "达坂城区",
    "米东区",
    "乌鲁木齐县",
  ],
  克拉玛依市: ["独山子区", "克拉玛依区", "白碱滩区", "乌尔禾区"],
  香港岛: ["中西区", "湾仔区", "东区", "南区"],
  九龙: ["油尖旺区", "深水埗区", "九龙城区", "黄大仙区", "观塘区"],
  新界: [
    "北区",
    "大埔区",
    "沙田区",
    "西贡区",
    "荃湾区",
    "屯门区",
    "元朗区",
    "葵青区",
    "离岛区",
  ],
  花地玛堂区: ["澳门半岛北部"],
  圣安多尼堂区: ["澳门半岛西部"],
  大堂区: ["澳门半岛东南部"],
  望德堂区: ["澳门半岛中部"],
  风顺堂区: ["澳门半岛西南部"],
  台北市: ["中正区", "大同区", "中山区", "松山区", "大安区", "万华区"],
  新北市: [
    "板桥区",
    "新庄区",
    "中和区",
    "永和区",
    "土城区",
    "树林区",
    "三重区",
    "芦洲区",
  ],
};
export { provinces, cityMap, regionMap };
