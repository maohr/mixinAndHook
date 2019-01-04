function debounce(func, delay, context, event) {
  clearTimeout(func.timer)
  func.timer = setTimeout(function() {
    func.call(context, event)
  }, delay)
}

export default {
  name: 'ButtonHoc',
  mounted() {
    console.log('HOC succeed')
  },
  methods: {
    handleClickLink(event) {
      let that = this
      console.log('debounce')
      debounce(that.$listeners.click, 500, that, event)
    }
  },
  render(h) {
    const slots = Object.keys(this.$slots)
      .reduce((arr, key) => arr.concat(this.$slots[key]), [])
      .map(vnode => {
        vnode.context = this._self
        return vnode
      })
    console.log('$attr', this)
    return h('el-button', {
      on: {
        click: this.handleClickLink
      },
      props: this.$props,
      scopedSlots: this.$scopedSlots,
      attrs: this.$attrs
    }, slots)
  }
}