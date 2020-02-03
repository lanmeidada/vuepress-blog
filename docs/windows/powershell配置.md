# powershell配置
windows 推荐使用scoop包管理器，scoop安装目录和app安装目录都可以自定义安装位置。
## 更改脚本执行策略
允许PowerShell执行本地脚本，完成执行策略的更改,安装提示输入Y。
```shell script
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
```
## 安装scoop包管理器
```shell script
iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
```
## 安装concfg，导入和导出 Windows 控制台的设置
```shell script
scoop install concfg
```
## 安装git
> git的环境变量是设置在scoop/apps下的，使用**sudo scoop install -g git**设置环境变量为系统变量。
>
```shell script
scoop install git
```
## 安装 posh-git
> posh-git是oh-my-posh的依赖，在scoop的extras包中可以安装

先添加extras的bucket
```shell script
scoop bucket add extras
```
再安装posh-git
```shell script
scoop install posh-git
```
## 安装oh-my-posh
> oh-my-posh本身在scoop主包中
>
```shell script
scoop install oh-my-posh
```

## 导入powershell配置,设置主题色
> 新建config.json文件，通过输入**concfg import config.json -n**，导入powershell配置,重打开powershell即可。更新git后，重新执行**concfg import config.json -n**，可以解决字体问题

```json
{
  "cursor_size": "small",
  "command_history_length": 500,
  "num_history_buffers": 4,
  "command_history_no_duplication": false,
  "quick_edit": true,
  "insert_mode": true,
  "load_console_IME": true,
  "font_face": "Sarasa Term SC",
  "font_true_type": true,
  "font_size": "0x18",
  "font_weight": 0,
  "screen_buffer_size": "120x30000",
  "window_size": "120x30",
  "fullscreen": false,
  "popup_colors": "cyan,white",
  "screen_colors": "white,black",
  "black": "#1E1E1E",
  "dark_blue": "#2472C8",
  "dark_green": "#0DBC79",
  "dark_cyan": "#11A8CD",
  "dark_red": "#CD3131",
  "dark_magenta": "#BC3FBC",
  "dark_yellow": "#E5E510",
  "gray": "#E5E5E5",
  "dark_gray": "#666666",
  "blue": "#3B8EEA",
  "green": "#23D18B",
  "cyan": "#29B8DB",
  "red": "#F14C4C",
  "magenta": "#D670D6",
  "yellow": "#F5F543",
  "white": "#E5E5E5"
}
```
## 启用oh-my-posh
```shell script
Import-Module oh-my-posh
```
## 设置主题
> 选主题有 Agnoster、Avit、Darkblood、Fish、Honukai、Paradox、Sorin、tehrob。

```shell script
Set-Theme Agnoster
```
## oh-my-posh和主题配置永久生效，需设置profile文件
先新建一个powershell的配置文件
```shell script
if (!(Test-Path -Path $PROFILE )) { 
  New-Item -Type File -Path $PROFILE -Force
}
```
先打开$profile文件
```shell script
Notepad $profile
```
然后在文件里面输入，最后保存即可。
```text
Import-Module oh-my-posh
Set-Theme Agnoster
```
