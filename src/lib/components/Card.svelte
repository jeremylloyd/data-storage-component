<script>
  export let cornerRounded = false;

  let topRightRadius = cornerRounded ? "100px" : "12px";
</script>

<div class="card" style="border-top-right-radius: {topRightRadius}">
  <slot></slot>
</div>

<style>
  .card {
    position: relative;
    padding: 30px;
    border-radius: 12px;

    background-color: hsl(242, 42%, 29%);
    color: hsl(243, 100%, 93%);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .card {
      min-width: 350px;
      padding: 40px;
    }
  }
</style>