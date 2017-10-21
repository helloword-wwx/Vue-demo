<template>
<div class="tmpl">
    <el-row>
    <el-col :span="leftcol">
         
    <div class="layout menu">
            <img src="../../../static/imgs/logo.png">
    <el-menu default-active="1-1" class="el-menu-vertical-demo" :collapse='iscollapse'>
    <el-submenu index="1">
    <template slot="title"><i class="el-icon-message"></i>购物商城</template>
<el-menu-item-group>
    <router-link to='/admin/goodslist'>
        <el-menu-item index="1-1">内容管理</el-menu-item>
    </router-link>
    <el-menu-item index="1-2">类别管理</el-menu-item>
    <el-menu-item index="1-3">评论管理</el-menu-item>
</el-menu-item-group>
</el-submenu>
<!-- 订单管理 -->
<el-submenu index="2">
    <template slot="title"><i class="el-icon-message"></i>订单管理</template>
    <el-menu-item-group>
        <el-menu-item index="2-1">订单列表</el-menu-item>
        <el-menu-item index="2-2">订单管理</el-menu-item>
        <el-menu-item index="2-3">评论管理</el-menu-item>
    </el-menu-item-group>
</el-submenu>
</el-menu>
</div>
</el-col>
<!-- 右边 -->
<el-col :span="rightcol">
    <el-row>
        <el-col :span="24">
            <div class="topbg">
                <el-row>
                    <el-col :span="1">
                        <i @click="showhide" class="el-icon-menu layout area"></i>
                    </el-col>
                    <el-col :span="23">
                        <span>欢迎小迪</span>
                        <el-dropdown split-button type='primary'>
                            更多
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>预览网站</el-dropdown-item>
                                <el-dropdown-item>修改密码</el-dropdown-item>
                                <el-dropdown-item>注销登陆</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
            </div>
        </el-col>
    </el-row>
    <!-- 中间content内容 -->
    <el-row>
        <el-col :span="24">
            <router-view></router-view>
        </el-col>
    </el-row>
</el-col>
</el-row>
</div>
</template>
<script>
    export default {

        data() {
            return {
                iscollapse: false,
                leftcol: 4,
                rightcol: 20
            }
        },
        methods: {
            showhide() {
                this.iscollapse = !this.iscollapse;

                if (this.iscollapse) {
                    this.leftcol = 1;
                    this.rightcol = 24;
                } else {
                    //当菜单是展开状态的石猴,left=4,rightcol=20
                    this.leftcol = 4;
                    this.rightcol = 20;
                }
            }
        }
    }
</script>
<style>

</style>