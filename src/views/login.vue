<style scoped>
.layout{
    height: -webkit-fill-available;
    background-image: -webkit-linear-gradient(top,#415077,#2E3A59);

}
h3 {
    font-size: 52px;
    color: #fff;
    margin-bottom: 45px;
}
.center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 605px;
}
.login-content {
    width: 500px;
    height: 343px;
    box-shadow: 0 2px 30px 5px rgba(0,0,0,0.28);
    border-radius: 6px;
    background-color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 56px;
}
.pwd {
    margin-top:18px;
}
.remerber {
    width: 350px;
    margin-top: 14px;
    color: #333;
    opacity: 0.6;
}
.username,
.pwd {
    width: 360px;
    height: 40px;
}
.btn-login {
    margin-top: 56px;
    background-image: -webkit-linear-gradient(top,#486498,#2D437B);
    width: 160px;
    height: 40px;
    font-size: 14px;
    border: 0;
}

</style>
<template>
    <div class="layout">
        <div class="center">
            <h3>XX110网上报警平台</h3>
            <div class="login-content">
                <Input prefix="md-person" placeholder="在此输入您的用户名" class="username" size="large"/>
                <Input prefix="ios-lock" type="password" placeholder="在此输入您的密码" class="pwd" size="large"/>
                <Checkbox v-model="single" size="large" class="remerber">记住用户名</Checkbox>
                <Button type="primary" class="btn-login">登录</Button>
            </div>
        </div>
    </div>
</template>
<script>
    import api from '../libs/api'
    export default {
        created(){
            
            api.post({url:'http://a1.easemob.com/1170181022253438/tr-police110/token', data: {
     grant_type: 'client_credentials',
     client_id: 'YXA65AoFkNYGEeic_G-0g7YwQA',
     client_secret : 'YXA6yweDOXDwvE2lo48UhMVVe8f5c30'
}
}).then((res)=>{
    // debugger
console.log(res)
            })
        },
    data(){
        return {
                single: false
            }
    }
    }
</script>
