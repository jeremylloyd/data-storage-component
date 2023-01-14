<script>
  export let cornerRounded = false;

  let topRightRadius = cornerRounded ? "100px" : "12px";
</script>

<div class="card" style="border-top-right-radius: {topRightRadius}">
  <slot class="card-contents"></slot>
</div>

<style>
  .card {
    background-color: hsl(242, 42%, 29%);
    padding: 40px;

    border-radius: 12px;

    min-height: 200px;
    min-width: 330px;
  }

  .card-contents {
    display: flex;
    flex-direction: column;
  }
</style>