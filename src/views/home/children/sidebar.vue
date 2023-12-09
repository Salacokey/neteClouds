<template>
    <div>
        <div class="dark:bg-[#151515]  bg-[#f5f5f5] border-none">
            <div class="dark:bg-[#151515] bg-[#f5f5f5] overflow-hidden">
                <div class="dark:bg-black mx-auto w-[75vw] h-[27.66vw] ml-[4vw] bg-gradient-to-r from-[#3e3c3a] to-[#5a4f4b] px-[3.96vw] text-[#9e8f8f] rounded-[20px]">
                    <div class="h-[10vw] flex justify-between items-center">
                        <h1 class="text-[3.6vw] text-[#fee5de]">续费黑胶VIP</h1>
                        <div class="w-[15.78vw] h-[6.56vw] leading-[6vw] text-center rounded-[100px] border-[1px] border-[#9e8f8f] text-[2.5vw] mt-[3vw]">会员中心</div>
                    </div>
                    <div class="h-[7vw] border-b-[1px] border-[#494443]">
                        <p class="text-[2.73vw]">点击恢复超21项专属特权</p>
                    </div>
                    <div class="h-[11vw] leading-[11vw] flex justify-between items-center mr-[4.45vw]">
                        <div class="text-[2.5vw] h-[11vw]">黑胶VIP学生特惠，仅需￥5/月</div>
                        <div class="scale-50 w-[8vw]">
                            <div class="w-[22vw] h-[22vw] rounded-[10px] bg-[#e54701] text-[#fff] pl-[3vw] text-[14vw] leading-[22vw] scale-50">冲</div>
                        </div>
                    </div>
                </div>
                <div class="dark:bg-[#2c2c2c] mt-[5vw] ml-[4vw] w-[75vw] rounded-3xl bg-[#fff]">
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw] pt-[5vw] border-b-2">
                        <div class="flex items-center">
                            <icon icon="solar:letter-outline" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">我的消息</span>
                        </div>
                        <div class="flex items-center">
                            <span class="text-[#f0f0f0] w-[6vw] h-[4vw] text-center rounded-3xl bg-[#fe3c3a] text-[3.5vw] ml-[2.73vw]">22</span>
                            <icon icon="formkit:right" class="dark:text-[#fff] font-[800] w-[6vw] h-[6vw]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw] pt-[5vw] border-b-2">
                        <div class="flex items-center">
                            <icon icon="streamline:shell" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">云贝中心</span>
                        </div>
                        <div class="flex items-center">
                            <span class="text-[#000000] text-[3.5vw] ml-[2.73vw] dark:text-[#fff]">签到</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw] pt-[5vw]">
                        <div class="flex items-center">
                            <icon icon="heroicons-outline:light-bulb" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">创作者中心</span>
                        </div>
                        <div class="flex items-center">
                            <span v-if="false" class="text-[#f0f0f0] w-[6vw] h-[4vw] text-center rounded-3xl bg-[#fe3c3a] text-[3.5vw] ml-[2.73vw]">22</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                </div>
                <div class="dark:bg-[#2c2c2c] mt-[4vw] ml-[4vw] w-[75vw] h-[85vw] rounded-3xl bg-[#fff]">
                    <div class="dark:border-b-[#333] text-[#969696] text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]">音乐服务</div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw] pt-[5vw]">
                        <div class="flex items-center">
                            <span class=" border-solid border border-black dark:text-[#fff] dark:border-white">免</span>
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">免费听歌</span>
                        </div>
                        <div class="flex items-center">
                            <span v-if="false" class="text-[#f0f0f0] w-[6vw] h-[4vw] text-center rounded-3xl bg-[#fe3c3a] text-[3.5vw] ml-[2.73vw]">22</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw] pt-[8vw]">
                        <div class="flex items-center">
                            <icon icon="ion:ticket-outline" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">云村有票</span>
                        </div>
                        <div class="flex items-center">
                            <span v-if="false" class="text-[#f0f0f0] w-[6vw] h-[4vw] text-center rounded-3xl bg-[#fe3c3a] text-[3.5vw] ml-[2.73vw]">22</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw]  dark:text-[#fff]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw] pt-[8vw]">
                        <div class="flex items-center">
                            <icon icon="material-symbols:shopping-bag-outline" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">商城</span>
                        </div>
                        <div class="flex items-center">
                            <span v-if="false" class="text-[#f0f0f0] w-[6vw] h-[4vw] text-center rounded-3xl bg-[#fe3c3a] text-[3.5vw] ml-[2.73vw]">22</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw] pt-[8vw]">
                        <div class="flex items-center">
                            <icon icon="logos:beats" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">Beat专区</span>
                        </div>
                        <div class="flex items-center">
                            <span class="text-[#000000] text-[3.5vw] ml-[2.73vw] dark:text-[#fff]">节奏玩家年终对决!</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw] pt-[8vw]">
                        <div class="flex items-center">
                            <icon icon="streamline:justice-hammer" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">音乐收藏家</span>
                        </div>
                        <div class="flex items-center">
                            <span class="text-[#000000] text-[3.5vw] ml-[2.73vw] dark:text-[#fff]">与音乐人共享收益</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw] pt-[8vw]">
                        <div class="flex items-center">
                            <icon icon="icon-park-solid:replay-music" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">视频彩铃</span>
                        </div>
                        <div class="flex items-center">
                            <span class="text-[#000000] text-[3.5vw] ml-[2.73vw] dark:text-[#fff]">pick你的音乐彩铃</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                </div>
                <div class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto ml-[4vw] mt-[4vw]">
                    <div class="dark:border-b-[#333] text-[#969696] text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]">其他</div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                        <div class="flex items-center">
                            <icon icon="ant-design:setting-twotone" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">设置</span>
                        </div>
                        <div class="flex items-center">
                            <span v-if="false" class="text-[#000000] text-[3.5vw] ml-[2.73vw]">pick你的音乐彩铃</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                        <div class="flex items-center">
                            <icon icon="line-md:moon-twotone" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">深色模式</span>
                        </div>
                        <div class="flex items-center">
                            <span v-if="false" class="text-[#000000] text-[3.5vw] ml-[2.73vw]"></span>
                            <div class="relative inline-block mr-2 align-middle select-none transition duration-200 ease-in">
                                <div class="switch">
                                    <van-switch v-model="isDarkMode" active-color="#ee0a24" inactive-color="#dcdee0" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                        <div class="flex items-center">
                            <icon icon="lets-icons:clock" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">定时关闭</span>
                        </div>
                        <div class="flex items-center">
                            <span v-if="false" class="text-[#000000] text-[3.5vw] ml-[2.73vw]">pick你的音乐彩铃</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                        <div class="flex items-center">
                            <icon icon="icon-park-twotone:clothes-turtleneck" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">个性装扮</span>
                        </div>
                        <div class="flex items-center">
                            <span v-if="false" class="text-[#000000] text-[3.5vw] ml-[2.73vw]">pick你的音乐彩铃</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                        <div class="flex items-center">
                            <icon icon="iconoir:headset" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">边听边存</span>
                        </div>
                        <div class="flex items-center">
                            <span class="text-[#000000] text-[3.5vw] ml-[2.73vw] dark:text-[#fff]">未开启</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                        <div class="flex items-center">
                            <icon icon="icon-park-outline:memory-card" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">在线听歌免流量</span>
                        </div>
                        <div class="flex items-center">
                            <span v-if="false" class="text-[#000000] text-[3.5vw] ml-[2.73vw]">pick你的音乐彩铃</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                        <div class="flex items-center">
                            <icon icon="ant-design:stop-outlined" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">音乐黑名单</span>
                        </div>
                        <div class="flex items-center">
                            <span v-if="false" class="text-[#000000] text-[3.5vw] ml-[2.73vw]">pick你的音乐彩铃</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                        <div class="flex items-center">
                            <icon icon="iconamoon:shield-yes-thin"  class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">青少年模式</span>
                        </div>
                        <div class="flex items-center">
                            <span class="text-[#000000] text-[3.5vw] ml-[2.73vw] dark:text-[#fff]">未开启</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                        <div class="flex items-center">
                            <icon icon="gala:clock" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">音乐闹钟</span>
                        </div>
                        <div class="flex items-center">
                            <span v-if="false" class="text-[#000000] text-[3.5vw] ml-[2.73vw]">pick你的音乐彩铃</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                </div>
                <div class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto ml-[4vw] mt-[4vw]">
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                        <div class="flex items-center">
                            <icon icon="bx:file" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">我的订单</span>
                        </div>
                        <div class="flex items-center">
                            <span v-if="false" class="text-[#000000] text-[3.5vw] ml-[2.73vw]">pick你的音乐彩铃</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                        <div class="flex items-center">
                            <icon icon="ion:ticket-outline" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">优惠卷</span>
                        </div>
                        <div class="flex items-center">
                            <span v-if="false" class="text-[#000000] text-[3.5vw] ml-[2.73vw]">pick你的音乐彩铃</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                        <div class="flex items-center">
                            <icon icon="ep:service" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">我的客服</span>
                        </div>
                        <div class="flex items-center">
                            <span v-if="false" class="text-[#000000] text-[3.5vw] ml-[2.73vw]">pick你的音乐彩铃</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                        <div class="flex items-center">
                            <icon icon="icon-park-outline:share" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">分享网易云音乐</span>
                        </div>
                        <div class="flex items-center">
                            <span v-if="false" class="text-[#000000] text-[3.5vw] ml-[2.73vw]">pick你的音乐彩铃</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                        <div class="flex items-center">
                            <icon icon="material-symbols-light:file-save-outline" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">个人信息收集与使用清单</span>
                        </div>
                        <div class="flex items-center">
                            <span v-if="false" class="text-[#000000] text-[3.5vw] ml-[2.73vw]">未开启</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                        <div class="flex items-center">
                            <icon icon="icons8:share" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">个人信息第三方共享清单</span>
                        </div>
                        <div class="flex items-center">
                            <span v-if="false" class="text-[#000000] text-[3.5vw] ml-[2.73vw]">pick你的音乐彩铃</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                        <div class="flex items-center">
                            <icon icon="codicon:shield" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">个人信息与隐私保护</span>
                        </div>
                        <div class="flex items-center">
                            <span v-if="false" class="text-[#000000] text-[3.5vw] ml-[2.73vw]">pick你的音乐彩铃</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                    <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
                        <div class="flex items-center">
                            <icon icon="icon-park-outline:attention" class="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw]" />
                            <span class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">关于</span>
                        </div>
                        <div class="flex items-center">
                            <span v-if="false" class="text-[#000000] text-[3.5vw] ml-[2.73vw]">pick你的音乐彩铃</span>
                            <icon icon="formkit:right" class="font-[800] w-[6vw] h-[6vw] dark:text-[#fff]" />
                        </div>
                    </div>
                </div>               
                <div class="dark:bg-[#151515] ml-[4vw] h-[12vw] px-[3.6vw] bg-[#fff] w-[76vw] mt-[4vw] rounded-[15px] mx-auto leading-[12vw] text-center text-[3.6vw] text-[#ef4239]" style="pointer-events: auto;">
                    <van-cell title="退出登录" @click="show = true" class="text-[#ef4239] dark:bg-[#151515]" />
                </div>
                <van-dialog :overlayStyle="{width:'101%'}" class="w-[65vw] ml-[10%]" v-model="show" title="确定退出当前账号吗" show-cancel-button @confirm="quit()"></van-dialog>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NeteasecloudSidebar',
    components:{

    },

    data() {
        return {
            show: false,
        };
    },

    mounted() {
        
    },

    methods: {
        quit(){
            this.$store.commit("deleteCookie")
        },
    },
    computed:{
        isDarkMode:{
            get(){
                return this.$store.state.isDark
            },
            set(val){
                this.$store.commit("changeDarkMode",val)
            }
        }
    }
};
</script>

<style lang="scss" scoped>

</style>