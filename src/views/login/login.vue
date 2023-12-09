<template>
    <div @click="focusInput">
        <div class="bg-[#FDFBFC] h-[100vh] pb-[12vw]">
            <div class="flex h-[19vw] items-center justify-between px-[5.5vw]">
                <router-link to="/home">
                    <icon icon="octicon:x-24" class=" text-[4vw]" />
                </router-link>
                <span class="text-[4vw] text-[#696969]">游客登录</span>
            </div>
            <div class="px-[6vw] mt-[12vw]">
                <div class="text-[9vw]">输入验证码</div>
                <div class="mt-[3vw]">
                    <span>验证码已发送至</span>
                    <span> +{{ titleVal }}</span>
                    <span> {{ phoneVal }}</span>
                </div>
                <div class="mt-[3vw]">
                    <input style="width: 0px;height: 0px;" minlength="4" maxlength="4" type="text" ref="input" v-model="value">
                    <van-password-input
                    :value="value"
                    :length="4"
                    :gutter="20"
                    :mask="false"
                    :focused="focused"
                    class="text-[red] border-1"
                    />
                </div>
                <div class="flex justify-between mt-[2vw]">
                    <span class="flex text-[#696969]">
                        重新获取
                        (<van-count-down class="mt-[0.8vw]" :time="time" format="ss"/>s)
                    </span>
                    <span>手机号已停用？</span>
                </div>
            </div>
        </div>
        <More></More>
    </div>
</template>

<script>
import More from "@/views/home/children/more.vue"
import {  } from "@/service/index";
export default {
  components: { More },
    name: 'NeteasecloudLogin',

    data() {
        return {
            value: '',
            focused: false,
            phoneVal:this.$route.query.phoneVal,
            titleVal:this.$route.query.titleVal,
            time:60 * 1000
        };
    },

    mounted() {
        
    },

    methods: {
        focusInput(){
            this.$refs.input.focus()
            this.focused = true
        },
        
    },

    watch:{
        async value(val) {
            if (val.length==4) {
                if (!/^\d{4}$/.test(this.value)) return alert("验证码不正确");
                this.$store.dispatch("requestLoginCellPhone",{
                    phone: this.phoneVal,
                    captcha: this.value,
                })
                alert("登录成功")
                this.$router.push('/home')
            }
        }, 
    }
};
</script>

<style scoped>
ul li {
    border-bottom: 1px solid black;
    background-color: #FDFBFC;
}
</style>