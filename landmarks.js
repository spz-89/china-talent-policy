// 省市地标图片映射表
const landmarkImages = {
    // 直辖市
    '北京市': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop',
    '上海市': 'https://images.unsplash.com/photo-1478471054053-63ec72e97b0d?w=400&h=300&fit=crop',
    '天津市': 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=400&h=300&fit=crop',
    '重庆市': 'https://images.unsplash.com/photo-1596484554665-868197d0d018?w=400&h=300&fit=crop',

    // 省份 - 华北
    '河北省': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop',
    '山西省': 'https://images.unsplash.com/photo-15452393620-ef285ef95b6a?w=400&h=300&fit=crop',
    '内蒙古自治区': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',

    // 省份 - 华东
    '江苏省': 'https://images.unsplash.com/photo-1478471054053-63ec72e97b0d?w=400&h=300&fit=crop',
    '浙江省': 'https://images.unsplash.com/photo-1505986718524-61fa72ca013f?w=400&h=300&fit=crop',
    '安徽省': 'https://images.unsplash.com/photo-15452393620-ef285ef95b6a?w=400&h=300&fit=crop',
    '福建省': 'https://images.unsplash.com/photo-1505986718524-61fa72ca013f?w=400&h=300&fit=crop',
    '江西省': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop',
    '山东省': 'https://images.unsplash.com/photo-15452393620-ef285ef95b6a?w=400&h=300&fit=crop',

    // 省份 - 华中
    '河南省': 'https://images.unsplash.com/photo-15452393620-ef285ef95b6a?w=400&h=300&fit=crop',
    '湖北省': 'https://images.unsplash.com/photo-1505986718524-61fa72ca013f?w=400&h=300&fit=crop',
    '湖南省': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop',

    // 省份 - 华南
    '广东省': 'https://images.unsplash.com/photo-1478471054053-63ec72e97b0d?w=400&h=300&fit=crop',
    '广西壮族自治区': 'https://images.unsplash.com/photo-1505986718524-61fa72ca013f?w=400&h=300&fit=crop',
    '海南省': 'https://images.unsplash.com/photo-15452393620-ef285ef95b6a?w=400&h=300&fit=crop',

    // 省份 - 西南
    '四川省': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop',
    '贵州省': 'https://images.unsplash.com/photo-15452393620-ef285ef95b6a?w=400&h=300&fit=crop',
    '云南省': 'https://images.unsplash.com/photo-1505986718524-61fa72ca013f?w=400&h=300&fit=crop',
    '西藏自治区': 'https://images.unsplash.com/photo-15452393620-ef285ef95b6a?w=400&h=300&fit=crop',

    // 省份 - 西北
    '陕西省': 'https://images.unsplash.com/photo-15452393620-ef285ef95b6a?w=400&h=300&fit=crop',
    '甘肃省': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop',
    '青海省': 'https://images.unsplash.com/photo-1505986718524-61fa72ca013f?w=400&h=300&fit=crop',
    '宁夏回族自治区': 'https://images.unsplash.com/photo-15452393620-ef285ef95b6a?w=400&h=300&fit=crop',
    '新疆维吾尔自治区': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop',

    // 省份 - 东北
    '辽宁省': 'https://images.unsplash.com/photo-1478471054053-63ec72e97b0d?w=400&h=300&fit=crop',
    '吉林省': 'https://images.unsplash.com/photo-1505986718524-61fa72ca013f?w=400&h=300&fit=crop',
    '黑龙江省': 'https://images.unsplash.com/photo-15452393620-ef285ef95b6a?w=400&h=300&fit=crop',

    // 主要城市
    '广州市': 'https://images.unsplash.com/photo-1478471054053-63ec72e97b0d?w=400&h=300&fit=crop',
    '深圳市': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop',
    '杭州市': 'https://images.unsplash.com/photo-1505986718524-61fa72ca013f?w=400&h=300&fit=crop',
    '南京市': 'https://images.unsplash.com/photo-1478471054053-63ec72e97b0d?w=400&h=300&fit=crop',
    '苏州市': 'https://images.unsplash.com/photo-1505986718524-61fa72ca013f?w=400&h=300&fit=crop',
    '成都市': 'https://images.unsplash.com/photo-15452393620-ef285ef95b6a?w=400&h=300&fit=crop',
    '武汉市': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop',
    '西安市': 'https://images.unsplash.com/photo-15452393620-ef285ef95b6a?w=400&h=300&fit=crop',
    '青岛市': 'https://images.unsplash.com/photo-1478471054053-63ec72e97b0d?w=400&h=300&fit=crop',
    '厦门市': 'https://images.unsplash.com/photo-1505986718524-61fa72ca013f?w=400&h=300&fit=crop',
    '大连市': 'https://images.unsplash.com/photo-1478471054053-63ec72e97b0d?w=400&h=300&fit=crop',
    '宁波市': 'https://images.unsplash.com/photo-1505986718524-61fa72ca013f?w=400&h=300&fit=crop',
    '长沙市': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop',
    '郑州市': 'https://images.unsplash.com/photo-15452393620-ef285ef95b6a?w=400&h=300&fit=crop',
    '沈阳市': 'https://images.unsplash.com/photo-1478471054053-63ec72e97b0d?w=400&h=300&fit=crop',
    '哈尔滨市': 'https://images.unsplash.com/photo-15452393620-ef285ef95b6a?w=400&h=300&fit=crop',
    '长春市': 'https://images.unsplash.com/photo-1505986718524-61fa72ca013f?w=400&h=300&fit=crop',
    '昆明市': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop',
    '南宁市': 'https://images.unsplash.com/photo-1505986718524-61fa72ca013f?w=400&h=300&fit=crop',
    '福州市': 'https://images.unsplash.com/photo-1505986718524-61fa72ca013f?w=400&h=300&fit=crop',
    '贵阳市': 'https://images.unsplash.com/photo-15452393620-ef285ef95b6a?w=400&h=300&fit=crop',
    '兰州市': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop',
    '南昌市': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop',
    '合肥市': 'https://images.unsplash.com/photo-15452393620-ef285ef95b6a?w=400&h=300&fit=crop',
    '济南市': 'https://images.unsplash.com/photo-1478471054053-63ec72e97b0d?w=400&h=300&fit=crop',

    // 默认图片（当没有找到匹配时使用）
    'default': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop',
};

// 获取地标图片URL的函数
function getLandmarkImage(province, city) {
    // 优先匹配城市
    if (city && landmarkImages[city]) {
        return landmarkImages[city];
    }
    // 其次匹配省份
    if (province && landmarkImages[province]) {
        return landmarkImages[province];
    }
    // 返回默认图片
    return landmarkImages['default'];
};