import { ref, computed, getCurrentInstance, WritableComputedRef } from 'vue';

export interface Options<T> {
  defaultValue?: T;
  defaultValuePropName?: string;
  valuePropName?: string;
  trigger?: string;
}

export interface Props {
  [key: string]: any;
}

interface StandardProps<T> {
  modelValue: T;
  defaultValue?: T;
}
function useControllableValue<T = any>(
  props: StandardProps<T>,
): WritableComputedRef<T>;
function useControllableValue<T = any>(
  props?: Props,
  options?: Options<T>,
): WritableComputedRef<T>;
function useControllableValue<T = any>(
  props: Props = {},
  options: Options<T> = {},
) {
  const {
    defaultValue,
    defaultValuePropName = 'defaultValue',
    valuePropName = 'modelValue',
    trigger = 'update:modelValue',
  } = options;

  const { proxy } = getCurrentInstance();

  const innerValue = ref<T>();

  innerValue.value = (() => {
    // 初始值
    if (defaultValuePropName in props) {
      return props[defaultValuePropName];
    }
    return defaultValue;
  })();

  const state = computed<T>({
    get() {
      if (valuePropName in props) {
        return props[valuePropName];
      }
      return innerValue.value;
    },
    set(value) {
      if (!(valuePropName in props)) {
        innerValue.value = value;
      }
      proxy.$emit(trigger, value);
    },
  });

  return state;
}

export default useControllableValue;
