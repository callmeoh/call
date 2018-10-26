<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
/*.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}*/
</style>
<template>
    <div class="layout">
        <Layout>
            <Sider hide-trigger>Sider</Sider>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
    </Layout>
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
        }
    }
</script>
