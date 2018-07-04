<template>
    <div class="header">
        <el-row>
            <el-col :span="6">
                <div class="grid-content bg-purple header-left">
                    <img src="../../assets/images/logo.png" alt="">
                </div>
            </el-col>
            <el-col :span="10">
                <div class="grid-content bg-purple-light header-content">
                    <ul>
                        <li>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-zhinanzhen-copy"></use>
                            </svg>
                            <p>首页</p>                                 
                        </li>
                        <li>
                            <svg class="icon" aria-hidden="true" style="width:21px;">
                                <use xlink:href="#icon-app"></use>
                            </svg>
                            <p>下载App</p>                            
                        </li>
                        <li>
                            <input type="text"  :class="{ search: inputWidth.isSearch, 'close': inputWidth.isClose }" placeholder="搜索" @focus="search" @blur="close">
                            <span :class="{ 'cycleBlock': inputWidth.isClose }"></span>
                            <i class="magnifier">
                                <svg :class="{ iconSearch: inputWidth.isSearch, 'iconClose': inputWidth.isClose }" aria-hidden="true">
                                    <use xlink:href="#icon-fangdajing"></use>
                                </svg>   
                            </i>
                            <el-card class="box-card meCard" v-show="inputWidth.isSearch == false">
                                <div class="clearfix">
                                    <span class="headerLeft">热门搜索</span>
                                    <i style="float:right;margin-right:9px;">
                                        <svg class="icon" aria-hidden="true">
                                            <use xlink:href="#icon-huanyipi"></use>
                                        </svg>
                                        <p>换一批</p>                                        
                                    </i>
                                    <div class="headerContent">
                                        <div v-for="item in tagsArray" :key="item.name">
                                            <span class="spanBorder">
                                                {{item.name}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </el-card>                                                    
                        </li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple header-right">
                    <ul>
                        <li>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-Aa"></use>
                            </svg>                            
                        </li>
                        <li>
                            <p>登录</p>
                        </li>
                        <li>
                            <el-button round class="register">注册</el-button>
                        </li>
                        <li>
                            <el-button type="danger" icon="el-icon-edit" round class="write">写文章</el-button>
                        </li>
                    </ul>
                </div> 
            </el-col>
        </el-row>        
    </div>
</template>

<script>
    import { getTodoList, addTodo } from '../../api/api'; // 引入我们 封装好的两个接口函数。
    export default {
        data () {
            return {
                inputWidth: {
                    isSearch: true,
                    isClose: false
                },
                tagsArray:[
                    {
                        name:"理财理财理财理财"
                    },
                    {
                        name:"理财"                        
                    },
                    {
                        name:"理财"                        
                    },
                    {
                        name:"理财"                        
                    },
                    {
                        name:"理财"                        
                    },
                    {
                        name:"理财"                        
                    },
                    {
                        name:"理财"                        
                    },                                                                                                    
                ]
            }
        },
        methods: {
            search() {
                this.inputWidth.isSearch = false
                this.inputWidth.isClose = true
            },
            close() {
                this.inputWidth.isSearch = true
                this.inputWidth.isClose = false
            },
            getMessage() {
                getTodoList({}).then(res => {
                    console.log("res",res)
                    // const TODOS = res.data.todos; // 数据都会返回在res.data里面。
                    // this.items = TODOS; // 我的把菜单数据赋值给定义的this.items
                    // this.todoId = TODOS[0].id; // 把菜单数据的默认的第一个对象的id赋值给默认选中的id
                });
            }
        },
        mounted() {
            this.getMessage()
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        height:56px;
        position:fixed;
        top:0;
        left:0;
        z-index:100;
        border-bottom:1px solid #f0f0f0;
        background-color: #fff;
        color:black;
        font-size:17px;
        svg {
            float:left;             
            width:27px;
            height:100%;
            vertical-align: -webkit-baseline-middle;                 
        }
        ul {
            height:56px; 
            li {
                height:56px;
                float:left;
            }
        }
        .header-left {
            height:56px;
            img {
                height:100%;
                vertical-align: -webkit-baseline-middle;
            }
        }
        .header-content {
            ul {
                height:56px; 
                li {
                    height:56px; 
                    margin-right:45px;
                    position:relative;
                    p {
                        float:left;
                        line-height:56px;
                    }
                    .cycleBlock {
                        display:block;
                        position:absolute;
                        right:5px;
                        top:13px;
                        width:30px;
                        height:30px;
                        border-radius: 100%;
                        background:#969696;
                    }
                    input {
                        padding: 0 40px 0 20px;                        
                        border: 1px solid #eee;
                        height:38px;
                        background: #eee !important;
                        margin-top:.5rem;
                        border-radius: 40px;
                        transition: width 400ms ease;
                    }
                    .search {
                        width:178px;                       
                    }
                    .close {
                        width:260px;                       
                    }
                    i {
                        height:56px;
                        position:absolute;
                        right:10px;
                        top:0;
                        svg {
                            width:18px;
                        }
                        .iconSearch {
                            fill:#969696;
                        }
                        .iconClose {
                            fill:#fff;
                        }
                    }
                    .meCard {
                        position:absolute;
                        top:56px;
                        left:0;
                        z-index:10;
                        width:250px;
                        font-size:14px;
                        text-align: left;
                        padding-left:1px;
                        padding-right:5px;
                        color:#969696;
                        .headerLeft {
                            line-height:20px;
                        }
                        i {
                            line-height:20px; 
                        }
                        svg {
                            fill:#969696; 
                        }
                        .headerContent {
                            margin-top:10px;
                        }
                        .spanBorder {
                            float:left;
                            max-width: 100%;
                            min-width: 20%;
                            height:20px;
                            border:1px solid #ccc;
                            margin-right:8px;
                            margin-bottom:10px;
                            padding:3px;
                            line-height: 20px;
                            text-align: center;
                            border-radius: 3px;
                        }
                        .spanBorder:hover {
                            color:#333;
                            border:1px solid #333;
                        }
                    }
                }
            }     
        }
        .header-right {
            ul {
                li {
                    font-size:14px;
                    margin-right:45px;
                    svg {
                        width:24px;
                        fill:#969696;
                    }
                    p {
                        line-height:56px;
                        color:#969696;
                        font-weight: 400 !important;
                    }
                    button {
                        margin-top:8px;
                    }
                    .register {  
                        border: 1px solid rgba(236,97,73,.7);
                        color: #ea6f5a;
                    }
                    .register:hover {
                        background:#fde8e3;
                    }
                    .register:visited {
                        background:blue;
                    }
                    .write {
                        color:#fff;
                        margin-left:-20px;
                    }
                    .write:hover {
                        background:#F56C6C;
                    }
                }
            }
        }      
    }

</style>