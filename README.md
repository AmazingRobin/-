
qiankun文件夹内包含3个项目，一个主应用，2个子应用，
3个都是用vite创建的

npm create vite@latest vue-main-project -- --template vue-ts

npm create vite@latest react-sub-project -- --template react-ts

npm create vite@latest vue-sub-project -- --template vue

Vue3的技术栈Vue+ts作为主应用

React的技术栈React+ts作为子应用一 

Vue3的技术栈Vue+js作为子应用二

使用方法：

1、clone到本地后，分别进入3个项目中执行 npm install, 并运行起来

2、主应用端口为8000，后续子应用用8001，8002

3、3个项目运行后，打开主应用 http://localhost:8000/ 即可
