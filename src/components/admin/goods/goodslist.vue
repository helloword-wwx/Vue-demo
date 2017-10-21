<template>
    <!-- 通常编写组件的html结构，注意vue2.0中一定要有一个根元素 -->
    <div class="arttmpl">
        <el-row>
            <el-col :span='24'>
                <div class="abread bt-line">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path:'/admin' }">购物商城</el-breadcrumb-item>
                        <el-breadcrumb-item>内容管理</el-breadcrumb-item>
                        <el-breadcrumb-item>首页</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-col>
        </el-row>
        <div class="operation">
            <el-row>
                <el-col :span='6'>
                    <el-button>
                    <i class="el-icon-check"></i>
                        全选</el-button>
                    <el-button>
                    <i class="el-icon-plus"></i>
                        新增</el-button>
                    <el-button>
                    <i class="el-icon-delete"></i>
                        删除</el-button>   
                </el-col>
                <el-col :span='4' :offset='14'>
                        <el-input placeholder="请输入搜索条件" icon="search" v-model="searchValue" :on-icon-click="getlist">
    
                        </el-input>
                </el-col>
            </el-row>  
        </div>
        <el-row>
            <el-col :span='24'>    
                <el-table :data="list" style="width: 100%" :row-class-name="tableRowClassName">
                        <el-table-column prop="date" label="全选" width="80">
                                <span class="el-checkbox__inner"></span>
                        </el-table-column>
                        <el-table-column prop="title" label="标题">
                            </el-table-column>
                        <el-table-column prop="categoryname" label="类别" width="100">
                        </el-table-column>
                        <el-table-column label="发布人/发布时间" width="150">
                            <template scope="scope">
                                    {{scope.row.user_name}} / {{scope.row.add_time}}
                                                        </template>
</el-table-column>
<el-table-column prop="name" label="属性" width='100'>
</el-table-column>
<el-table-column label="操作" width='80'>
    <template scope="scope">
                                                        <a href="#">修改</a>
                                                    </template>
</el-table-column>
</el-table>
</el-col>
</el-row>
</div>
</template>

<script>
    export default {

        data() {
            return {
                searchValue: '',
                list: []
            }
        },

        methods: {
            getlist() {
                var url = 'http://157.122.54.189:9095/admin/goods/getlist?pageIndex=1&pageSize=10&searchvalue=';
                this.$http.get(url).then(res => {
                    if (res.data.status == 1) {
                        this.$message.error(res.data.message)
                        return;
                    }
                    this.list = res.data.message;
                });
            },
            tableRowClassName(row, index) {
                if (index % 2 == 0) {
                    return 'info-row';
                } else {
                    return 'positive-row'
                }
            }
        },
        mounted() {
            this.getlist()
        },
    }
</script>

<style>

</style>