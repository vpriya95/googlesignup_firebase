<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import classNames from 'classnames';
export default {
  props: {
    relativeElementSelector: {
      type: String,
      required: true,
    },
    offset: {
      type: Object,
      default() {
        return {
          top: 50,
          bottom: 50,
        };
      },
    },
    enabled: {
      type: Boolean,
      default: true,
    },
    scrollAffix: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    relativeElement() {
      return document.querySelector(this.relativeElementSelector);
    },
  },

  data() {
    return {
      className: classNames(
        'affix'
      ),
      affixHeight: null,
      affixBottomPos: null,
      affixRect: null,
      relativeElmBottomPos: null,
      relativeElmOffsetTop: null,
      topPadding: null,
      lastState: null,
      currentState: null,
      currentScrollAffix: null,
      distanceFromTop: window.pageYOffset,
      lastDistanceFromTop: window.pageYOffset,
      scrollingUp: null,
      scrollingDown: null,
    };
  },

  methods: {
    setDynamicVariables() {
      this.distanceFromTop = window.pageYOffset;
      this.affixRect = this.$el.getBoundingClientRect();
      this.affixHeight = this.$el.offsetHeight;
      this.affixBottomPos = this.distanceFromTop + this.affixRect.bottom;
      this.screenBottomPos = this.distanceFromTop + window.innerHeight;
      this.relativeElmBottomPos = this.distanceFromTop +
        this.relativeElement.getBoundingClientRect().bottom;
      this.relativeElmOffsetTop = this.getOffsetTop(this.relativeElement);
    },

    onScroll() {
      if (!this.enabled) {
        this.removeClasses();
        return;
      }

      this.setDynamicVariables();

      if (this.affixHeight + this.offset.top >= this.relativeElement.offsetHeight) {
        return;
      }

      this.handleAffix();
    },

    handleAffix() {
      if (this.scrollAffix && this.affixHeight > window.innerHeight) {
        this.setScrollingDirection();

        if (this.currentScrollAffix === 'scrollaffix-top') {
          if (this.distanceFromTop + this.offset.top >= this.affixInitialTop) {
            this.setScrollAffixScrolling();
          }
        }

        if (this.scrollingDown && this.currentScrollAffix === 'scrollaffix-scrolling') {
          if (this.screenBottomPos >= this.affixBottomPos + this.offset.bottom &&
              this.screenBottomPos < this.relativeElmBottomPos) {
            this.setScrollAffixDown();
          }
        }

        if (this.scrollingUp && this.currentScrollAffix === 'scrollaffix-scrolling') {
          if (this.distanceFromTop + this.offset.top + this.topPadding <
              this.affixRect.top + this.distanceFromTop) {
            this.setScrollAffixUp();
          }
        }

        if (this.scrollingDown && this.currentScrollAffix === 'scrollaffix-down') {
          if (this.screenBottomPos >= this.relativeElmBottomPos + this.offset.bottom) {
            this.setScrollAffixBottom();
          }
        }

        if (this.currentScrollAffix === 'scrollaffix-bottom' && this.screenBottomPos < this.relativeElmBottomPos) {
          this.setScrollAffixScrolling();
        }

        if ((this.scrollingUp && this.currentScrollAffix === 'scrollaffix-down') ||
            (this.scrollingDown && this.currentScrollAffix === 'scrollaffix-up')) {
          this.setScrollAffixScrolling();
        }

        if (this.scrollingUp &&
            this.currentScrollAffix === 'scrollaffix-up' &&
            this.distanceFromTop < this.relativeElmOffsetTop - this.offset.top) {
          this.setScrollAffixTop();
        }

        this.lastScrollAffixState = this.currentScrollAffix;
        this.lastDistanceFromTop = this.distanceFromTop;

        return;
      }

      if (this.distanceFromTop < this.relativeElmOffsetTop - this.offset.top) {
        this.setAffixTop();
      }

      if (this.distanceFromTop >= this.relativeElmOffsetTop - this.offset.top &&
          this.relativeElmBottomPos - this.offset.bottom >=
          this.distanceFromTop + this.topPadding + this.affixHeight + this.offset.top) {
        this.setAffix();
      }

      if (this.relativeElmBottomPos - this.offset.bottom <
          this.distanceFromTop + this.topPadding + this.affixHeight + this.offset.top) {
        this.setAffixBottom();
      }

      this.lastState = this.currentState;
    },
    initScrollAffix() {
      if (this.distanceFromTop < this.affixInitialTop - this.offset.top) {
        this.setScrollAffixTop();
      } else if (this.screenBottomPos >= this.affixBottomPos + this.offset.bottom &&
          this.screenBottomPos < this.relativeElmBottomPos) {
        this.setScrollAffixDown();
      } else if (this.screenBottomPos >= this.relativeElmBottomPos) {
        this.setScrollAffixBottom();
      } else {
        this.setScrollAffixScrolling();
      }
    },
    setScrollAffixScrolling() {
      this.currentScrollAffix = 'scrollaffix-scrolling';
      this.$el.style.top = `${(this.affixRect.top + this.distanceFromTop) - this.affixInitialTop}px`;
      this.$el.style.bottom = 'auto';
      this.removeClasses();
      this.emitEvent();
    },
    setScrollAffixUp() {
      this.currentScrollAffix = 'scrollaffix-up';

      if (this.currentScrollAffix !== this.lastState) {
        this.$el.style.top = `${this.topPadding + this.offset.top}px`;
        this.$el.style.bottom = 'auto';
        this.removeClasses();
        this.emitEvent();
        this.$el.classList.add('affix');
      }
    },
    setScrollAffixDown() {
      this.currentScrollAffix = 'scrollaffix-down';

      if (this.currentScrollAffix !== this.lastState) {
        this.$el.style.bottom = `${this.offset.bottom}px`;
        this.$el.style.top = 'auto';
        this.removeClasses();
        this.emitEvent();
        this.$el.classList.add('affix');
      }
    },
    setScrollAffixTop() {
      this.currentScrollAffix = 'scrollaffix-top';
      this.$el.style.top = 0;
      this.$el.style.bottom = 'auto';
      this.removeClasses();
      this.emitEvent();
    },
    setScrollAffixBottom() {
      this.currentScrollAffix = 'scrollaffix-bottom';
      this.$el.style.top = `${this.relativeElmBottomPos - this.affixInitialTop - this.affixHeight}px`;
      this.$el.style.bottom = 'auto';
      this.removeClasses();
      this.emitEvent();
    },
    setScrollingDirection() {
      if (this.distanceFromTop > this.lastDistanceFromTop) {
        this.scrollingDown = true;
        this.scrollingUp = false;
      } else {
        this.scrollingUp = true;
        this.scrollingDown = false;
      }
    },
    setAffixTop() {
      this.currentState = 'affix-top';

      if (this.currentState !== this.lastState) {
        this.emitEvent();
        this.removeClasses();
        this.$el.classList.remove('affix');
        this.$el.classList.add('affix-top');
        this.$el.style.top = null;
      }
    },
    setAffix() {
      this.currentState = 'affix';
      this.$el.style.top = `${this.topPadding + this.offset.top}px`;

      if (this.currentState !== this.lastState) {
        this.emitEvent();
        this.removeClasses();
        this.$el.classList.add('affix');
      }
    },
    setAffixBottom() {
      this.currentState = 'affix-bottom';
      this.$el.style.top = `${this.relativeElement.offsetHeight - this.affixHeight -
        this.offset.bottom - this.topPadding}px`;

      if (this.currentState !== this.lastState) {
        this.emitEvent();
        this.removeClasses();
        this.$el.classList.add('affix-bottom');
      }
    },
    removeClasses() {
      this.$el.classList.remove('affix-top');
      this.$el.classList.remove('affix');
      this.$el.classList.remove('affix-bottom');
    },
    emitEvent() {
      if (this.scrollAffix && this.lastScrollAffixState) {
        this.$emit(this.currentScrollAffix.replace('-', ''));
      }

      if (this.lastState) {
        this.$emit(this.currentState.replace('-', ''));
      }
    },
    getOffsetTop(element) {
      let yPosition = 0;
      let nextElement = element;

      while (nextElement) {
        yPosition += (nextElement.offsetTop);
        nextElement = nextElement.offsetParent;
      }

      return yPosition;
    },
  },

  mounted() {
    this.$el.classList.add('vue-affix');
    this.affixInitialTop = this.getOffsetTop(this.$el);
    this.topPadding = this.affixInitialTop - this.getOffsetTop(this.relativeElement);

    this.setDynamicVariables();

    if (this.scrollAffix) this.initScrollAffix();

    this.onScroll();
    window.addEventListener('scroll', this.onScroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>

<style>
.vue-affix {
  position: relative;
}

.affix {
  position: fixed;
}

.affix-bottom {
  position: relative;
}
</style>
