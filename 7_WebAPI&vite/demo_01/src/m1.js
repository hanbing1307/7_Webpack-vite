// export default {
//     setH1(){
//         // document.body.insertAdjacentHTML("beforeend", "<h1>你好 webpack</h1>")
        
//     }
// }


import $ from 'jquery';

export default {
    setH1(){
        $("body").append("<h1>你好！ 这是引入jquery后打包的</h1>")
    }
    
}