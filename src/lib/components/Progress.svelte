<script>
  export let value = 0.2;
  export let max = 1;
  export let legendLabels = []
</script>

<div class="container">
  <div class="progress-bar">
    <div class="progress-value" style="--value-width: calc(var(--bar-height) + (100% - var(--bar-height) - 4px) * ({value / max}))"></div>
  </div>
  {#if legendLabels.length > 0}
    <div class="legend">
      {#each legendLabels as label}
        <span class="legend-label">{label}</span>
      {/each}
    </div>
  {/if}
</div>

<style>
  :root {
    --bar-height: 14px;
    --value-padding: 3px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .progress-bar {
    height: calc(var(--bar-height) + 2 * var(--value-padding));
    background-color: hsl(229, 57%, 11%);
    border-radius: 999px;
  }

  .progress-value {
    height: var(--bar-height);
    top: var(--value-padding);
    left: var(--value-padding);
    background-image: linear-gradient(
      to right,
      hsl(6, 100%, 80%),
      hsl(335, 100%, 65%)
    );
    border-radius: 999px;
    position: relative;

    width: var(--value-width);
    max-width: calc(100% - 2 * var(--value-padding));
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

  .legend {
    display: flex;
    justify-content: space-between;

    font-weight: 700;
    font-size: 0.8rem;
  }
</style>