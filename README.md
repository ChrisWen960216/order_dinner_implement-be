# Order-Dinner-Iplements-BE

Created By ChrisWen 17/12/19
---

## 结构
+ 数据库
  + ids
  + time
  + 数据库每次开启时，会根据当天的time读取ids并反序列化到内存中
+ ids
  + 订餐ID的集合
+ time
  + 获取到的当天时间

## 流程
+ 订餐
  + 数据（name,uid,phone） => uid存进ids => 更新数据库中的ids

+ 取消
  + 数据（name,uid,phone） => ids拿出uid => 更新数据库中的ids

+ 获取
  + ids => 由ids中的uid拿到订餐人员名单 => 返回前端

+ 图片
  + ids => 由ids中的uid拿到订餐人员名单 => 生成图片 => 发送

## 时效
  + 请求
    + 每一条请求均需要判断其时间，在许可范围内则有效。
  + ids
    + 读取ids的唯一依据是当天的时间(YYYY-MM-DD)
    + ids将被定时清除
  + 邮件
    + 邮件将被定时发送至指定邮箱

