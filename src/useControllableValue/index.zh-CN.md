---
map:
  path: /use-controllable-value
---

# useControllableValue

在某些组件开发时，我们需要组件的状态即可以自己管理，也可以被外部控制，`useControllableValue` 就是帮你管理这种状态的 Hook。

::: tip
Api 与[ahooks](https://ahooks.js.org/zh-CN/hooks/state/use-controllable-value)一致。
:::

## 代码演示

### 基础用法

<demo src="./demo/demo1.vue"
  language="vue"
  title="非受控组件"
  desc="如果 props 中没有 value，则组件内部自理 state">
</demo>

## API

```javascript
const state = useControllableValue(props: object, options?: Options)
```

### Result

| 参数  | 说明   | 类型 |
| ----- | ------ | ---- |
| state | 状态值 | -    |

### Params

| 参数    | 说明                   | 类型     | 默认值 |
| ------- | ---------------------- | -------- | ------ |
| props   | 组件的 props           | `object` | -      |
| options | 可选配置项，见 Options | -        | -      |

### Options

| 参数                 | 说明                                                     | 类型     | 默认值              |
| -------------------- | -------------------------------------------------------- | -------- | ------------------- |
| defaultValue         | 默认值，会被 props.defaultValue 和 props.modelValue 覆盖 | -        | -                   |
| defaultValuePropName | 默认值的属性名                                           | `string` | `defaultValue`      |
| valuePropName        | 值的属性名                                               | `string` | `modelValue`        |
| trigger              | 修改值时，触发的函数                                     | `string` | `update:modelValue` |
