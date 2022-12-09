module.exports =class actitimetestPage
{
    getUsername(){
        return $('[name="username"]')
    }
    getPwd(){
       return $('[name="pwd"]')
    }
    getClick(){
        return $('[class="initial"]')
    }

}
