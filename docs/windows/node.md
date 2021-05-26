# node多版本控制
## 通过scoop安装nvs
```shell script
scoop install nvs
```
## 帮助命令
```shell script
nvs --help 
```
## 安装最新的lts版本
```shell script
nvs add lts
```
## 安装固定版本，例如10
```shell script
nvs add 10
```
## 当前shell切换node的10版本
```shell script
nvs use 10
```
## 设置全局默认node版本为lts
```shell script
nvs link lts
```