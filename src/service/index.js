import request from "@/utils/request";
import { convert } from "@/utils/index";
/**
 * @description 获取歌手分类列表
 * @param {Object} data 请求参数
 * @param {Number} data.limit 返回数量，默认为 30
 * @param {Number} data.offset  偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30
 * @param {Number} data.type 类别 (-1:全部、1:男歌手、2:女歌手、3:乐队)
 * @param {Number} data.area  地域(-1:全部、7华语、96欧美、8:日本、16韩国、0:其他)
 * @returns {Promise}
 */
// 获取歌手列表
// request.post 返回值是Promise实例
export const getArtistList = (data) =>
  convert(request.post(`/artist/list`, data));
/**
 * @description 搜索音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "
 * @param {Object} params 请求参数
 * @param {String} params.keywords 关键词
 * @param {Number} params.limit 返回数量，默认为 30
 * @param {Number} params.offset  偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30
 * @param {Number} params.type 类别 (1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合, 2000:声音(搜索声音返回字段格式会不一样))
 * @returns {Promise}
 */
// 搜索
export const cloudSearch = (params) =>
  convert(request.get("/cloudsearch", { params }));
/**
 * @description 轮播图
 * @param {Object} data 请求参数
 * @param {Number} data.type 资源类型,对应以下类型,默认为 0 即 PC
 * @returns
 */
// 轮播图
export const swiperBanner = (data) => convert(request.post(`/banner`, data));

/**
 * @description 获取app首页信息
 * @returns
 */
export const getHomePageData = () =>
  convert(request.post("/homepage/block/page"));
/**
 * @description 获取歌单详情
 * @param {*} data
 * @returns
 */
export const personaLized = (data) =>
  convert(request.post(`/playlist/detail?timestamp=${Date.now()}`, data));

export const getTrackDetail = (ids) =>
  convert(request.get(`/song/detail?timestamp=${Date.now()}`,{params: { ids }}));
/**
 * @description 调用此接口 ,传入手机号码, 可发送验证码
 * @param {*} data
 * @returns
 */
export const postCaptcha = (data) =>
  convert(request.post(`/captcha/sent`, data));
/**
 * @description 手机号+验证码登录
 * @param {*} data
 * @returns
 */
export const loginCellphone = (data) =>
  convert(request.post(`/login/cellphone`, data));

export const loginCountries = (data) =>
  convert(request.post(`/countries/code/list`, data));
/**
 * @description 获取用户详情
 * @param {*} data
 * @returns
 */
export const postDetailData = (data) =>
  convert(request.post(`/user/detail`, data));
/**
 * @description 获取用户歌单
 * @param {*} data
 * @returns
 */
export const postPlayListData = (data) =>
  convert(request.post(`/user/playlist?timestamp=${Date.now()}`, data));
/**
 * @description 相关歌单
 * @param {*} data
 * @returns
 */
export const postRelatedListData = (data) =>
  convert(request.post(`/related/playlist?timestamp=${Date.now()}`, data));

/**
 * @description 获取用户登录状态
 * @param {*} data
 * @returns
 */
export const postStatus = () => convert(request.post(`/login/status`));
/**
 * @description 获取mv排行
 * @param {*} data
 * @returns
 */
export const postTopMVData = (data) => {
  return convert(request.post(`/top/mv?timestamp=${Date.now()}`, data));
};
/**
 * @description 获取mv地址
 * @param {*} data
 * @returns
 */
export const postUrlMVData = (data) => {
  return convert(request.post(`/mv/url?timestamp=${Date.now()}`, data));
};
/**
 * @description 获取mv数据
 * @param {*} data
 * @returns
 */
export const postDetailMVData = (data) => {
  return convert(request.post(`/mv/detail?timestamp=${Date.now()}`, data));
};
/**
 * @description 获取 mv 点赞转发评论数数据
 * @param {*} data
 * @returns
 */
export const postInfoMVData = (data) => {
  return convert(request.post(`/mv/detail/info?timestamp=${Date.now()}`, data));
};
/**
 * @description 获取 音乐 url
 * @param {*} data
 * @returns
 */
export const getTrackUrl = (track) => {
  return convert(
    request.post(`/song/url/v1?timestamp=${Date.now()}`, {
      id: track,
      level: "standard",
    })
  );
};
