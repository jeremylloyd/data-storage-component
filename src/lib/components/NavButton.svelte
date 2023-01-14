<button class="button-nav">
  <slot class="icon" />
</button>

<style>
  .button-nav {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: hsl(229, 57%, 11%);
    width: 50px;
    height: 50px;
    border-radius: 12px;
  }

  .icon {
    color: hsl(239, 53%, 64%);
  }
</style>