<template>
  <div>
    <!-- <input type="tel" placeholder="请输入手机号" v-model="phone" />
    <button @click="sendCode">发送验证码</button>
    <input
      type="number"
      placeholder="请输入验证码"
      maxlength="4"
      minlength="4"
      v-model="captcha"
    />
    <button @click="login">登录</button> -->
    <div class="bg-[#FDFBFC] h-[100vh] pb-[12vw]">
        <div class="flex h-[19vw] items-center justify-between px-[5.5vw]">
            <router-link to="/home">
                <icon icon="octicon:x-24" class=" text-[4vw]" />
            </router-link>
            <span class="text-[4vw] text-[#696969]">游客登录</span>
        </div>
        <icon icon="ri:netease-cloud-music-fill" class="w-[24vw] h-[24vw] mx-auto mt-[7vw] mb-[9vw] text-[#de4033]"  />
        <div class="px-[6vw]">
            <div class=" h-[15vw] bg-[#f2f3f4] rounded-xl text-[#3e4558] relative leading-[15vw] flex">
                <div class="flex ml-[3.4vw]">
                    <div class="mt-[1.5vw]">
                        <van-cell class="bg-[#f2f3f4]" @click="show = true">+{{ title }}</van-cell>
                        <van-action-sheet v-model="show" @select="onSelect" title="选择国家和地区">
                            <div class="px-[1.2vw] relative">
                                <van-index-bar v-for="(item,index) in countryList" :key="index" :index-list="indexList">
                                    <van-index-anchor :index="item.label">{{ item.label }}</van-index-anchor>
                                    <van-cell v-for="(i,n) in item.countryList" :key="n">
                                        <div class="flex justify-between" @click="showBool(i.code)">
                                            <span>{{ i.zh }}</span>
                                            <span class="mr-[10vw]">+{{ i.code }}</span>
                                        </div>
                                    </van-cell>
                                </van-index-bar>
                            </div>
                        </van-action-sheet>
                    </div>
                    <icon class="mt-[5vw]" icon="octicon:triangle-down-16" />
                </div>
                <icon icon="ci:line-l" class=" mt-[5vw] ml-[4vw] text-[#e6e7e9]" />
                <input class="bg-[#f2f3f4] text-center w-[44vw]" type="tel" placeholder="请输入手机号" v-model="phone">
                <icon icon="ph:x-circle-bold" class=" absolute right-3 top-[40%] text-[#c2c2c3]" />
            </div>
            <div class="h-[15vw] bg-[#ea4d44] text-[#fefefe] rounded-3xl mt-[7.5vw] text-center leading-[15vw]">
                <button @click="sendCode">获取验证码</button>
            </div>
            <div class=" mt-[7.5vw] flex text-sm">
                <van-checkbox v-model="checked" checked-color="#767c88">
                    <span class="text-[#bfc1c7]">我已阅读并同意</span>
                    <span class="text-[#5a7cab]">《服务条款》</span>
                    <span class="text-[#5a7cab]">《隐私政策》</span>
                </van-checkbox>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { postCaptcha,loginCountries } from "@/service/index";
import { Toast } from 'vant';
// loginCellphone
export default {
  name: "NeteasecloudIndex",

  data() {
    return {
      phone: "",
      captcha: "",
      checked:false,
      show: false,
      countryList:[],
      indexList:[],
      title:"86"
    };
  },

  mounted() {},

  methods: {
    async sendCode() {
      if (!/^1[356789]\d{9}$/.test(this.phone)) return alert("手机号不合法!");
      else if(this.checked==false) return alert("请勾选条款")
      const [err, res] = await postCaptcha({ phone: this.phone });
      if (err) return alert("请求错误，请稍后再试！");
      alert("验证码发送成功!");
      this.$router.push({path:'/captch',query:{phoneVal:this.phone,titleVal:this.title}})
      console.log(res);
    },

    async nice(){
        const [err,res] = await loginCountries()
        if(!err)
        this.countryList = res.data.data
        for (const key in this.countryList) {
            this.indexList.push(this.countryList[key].label)
        }
    },
    // async login() {
    //   if (!/^\d{4}$/.test(this.captcha)) return alert("验证码不正确");
    //   const [err, res] = await loginCellphone({
    //     phone: this.phone,
    //     captcha: this.captcha,
    //   });
    //   if (err) return alert("请求错误，请稍后再试！");
    //   console.log(res);
    // },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
    },
    showBool(res){
        this.title = res
        this.show = false
    }
  },
  created(){
    this.nice()
  }
};
</script>

<style scoped>
</style>