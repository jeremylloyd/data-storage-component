<script>
  export let value = 0.2;
  export let max = 1;

  let minValueWidth = 12;
</script>

<div class="container">
  <div class="progress-bar">
    <div class="progress-value" style="--value-width: calc({minValueWidth}px + (100% - {minValueWidth + 4}px) * ({value / max}))"></div>
  </div>
</div>

<style>
  :root {
    --bar-height: 14px;
    --value-padding: 3px;
  }

  .container {
    width: 100%;
    position: relative;
  }

  .progress-bar {
    width: 100%;
    height: calc(var(--bar-height) + 2 * var(--value-padding));
    background-color: hsl(229, 57%, 11%);
    border-radius: 999px;
  }

  .progress-value {
    height: var(--bar-height);
    top: var(--value-padding);
    left: var(--value-padding);
    background-color: hsl(6, 100%, 80%);
    background-image: linear-gradient(
      to right,
      hsl(6, 100%, 80%),
      hsl(335, 100%, 65%)
    );
    border-radius: 999px;
    position: relative;

    width: var(--value-width);
  }

  /* Add a white dot just inside the end of the progress value */
  .progress-value::after {
    content: "";
    position: absolute;

    top: 2px;
    right: 2px;
    height: calc(var(--bar-height) - 4px);
    width: calc(var(--bar-height) - 4px);
    border-radius: 999px;
    background-image: radial-gradient(
      circle at 50% 50%,
      hsl(0, 0%, 100%),
      hsl(0, 0%, 100%) 50%,
      hsl(0, 0%, 59%) 100%
    );
  }
</style>