# scoop 包管理器的使用
[点此传送到官方Github仓库](https://github.com/lukesampson/scoop)
## 允许PowerShell执行本地脚本，完成执行策略的更改,安装提示输入Y。
```shell script
set-executionpolicy remotesigned -scope currentuser
```
## 安装scoop
> 默认安装目录C:\用户\user(自己的用户名)\scoop

```shell script
iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
```
> 若想自定义安装目录，则上面的命令换成下面的执行,假设自定义目录为"D:\Applications\Scoop"

```shell script
[environment]::setEnvironmentVariable('SCOOP','D:\Scoop','User')
$env:SCOOP='D:\Scoop'
iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
```
## scoop命令查看
```shell script
scoop help
```
## scoop查看某个命令的具体用法
```shell script
scoop help install
```
## 查询本地的全部bucket内的全部程序
```shell script
scoop search
```
## 从本地的全部bucket查询yarn程序
```shell script
scoop search yarn
```
## 更新scoop版本
```shell script
scoop update
```
## scoop安装的全部程序进行版本更新
```shell script
scoop update *
```