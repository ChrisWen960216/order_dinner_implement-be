# Order-Dinner-Iplements-BE

Created By ChrisWen 17/12/19
---

## 结构
+ 数据库
  + `ids`
  + `time`
  + 数据库每次开启时，会根据当天的time读取ids并反序列化到内存中
+ ids
  + 订餐ID的集合
+ time
  + 获取到的当天时间

## 流程
+ 订餐
  + 数据（`name`,`uid`,`phone`） => `uid`存进`ids` => 更新数据库中的`ids`

+ 取消
  + 数据（`name`,`uid`,`phone`） => `ids`拿出`uid` => 更新数据库中的`ids`

+ 获取
  + `ids` => 由`ids`中的`uid`拿到订餐人员名单 => 返回前端

+ 图片
  + `ids` => 由`ids`中的`uid`拿到订餐人员名单 => 生成图片 => 发送

## 时效
  + 请求
    + 每一条请求均需要判断其时间，在许可范围内则有效。
  + ids
    + 读取ids的唯一依据是当天的时间(`YYYY-MM-DD`)
    + `ids`将被定时清除
  + 邮件
    + 邮件将被定时发送至指定邮箱

## 返回值
  + 成功

    `{code:0, payload: data}`
  + 失败

    `{code: errorCode, payload:errorMessage}`
    + code:1

      `backEndError`(后台错误),大多源于用户错误的操作
    + code:2 

      `middlewareError`(中间件错误)，不在系统限定时间（8:15-16:20）之内的请求
    + code:3

      `DBError`(数据库错误)，所有数据库错误均统一为`code:3`

  + 其他

    `GET /userlist`索要数据时，即使`userlist`为空，也视为成功获取了`userlist`，返回的状态码为0。