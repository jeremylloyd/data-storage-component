<button class="button-nav">
  <slot class="icon" />
</button>

<style>
  .button-nav {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-basis: 50px;

    background-color: hsl(229, 57%, 11%);
    border-radius: 12px;
  }

  .icon {
    color: hsl(239, 53%, 64%);
  }
</style>