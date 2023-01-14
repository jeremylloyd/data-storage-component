<script>
  export let status = 100;
</script>

<div class="card-status">
  <span class="status">{status}</span>
  <span class="label">GB left</span>
</div>

<style>
  .card-status {
    position: absolute;
    align-self: center;
    bottom: -35px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;

    background: hsl(243, 100%, 93%);
    background: white;
    color: hsl(229, 57%, 11%);
    font-weight: 700;
    
    border-radius: 12px;

    min-width: 180px;
    padding: 5px 30px;
  }
  
  .status {
    font-size: 2.5rem;
  }
  
  .label {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: rgb(153, 155, 158);
    flex-shrink: 0;
  }
</style>
