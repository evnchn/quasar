import { computed } from 'vue'

export const useSizeDefaults = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
}

export const useSizeProps = {
  size: String
}

export default function useSize(props, sizes = useSizeDefaults) {
  // return sizeStyle
  return computed(() =>
    props.size !== void 0
      ? {
          fontSize: Object.hasOwn(sizes, props.size)
            ? `${sizes[props.size]}px`
            : props.size
        }
      : null
  )
}
