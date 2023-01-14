<script>
  import Card from '$lib/components/Card.svelte';
  import Progress from '$lib/components/Progress.svelte';
  import CardStatus from '$lib/components/CardStatus.svelte';
  import { storageUsed, storageMax } from '$lib/stores.js';
</script>

<Card>
  <div class="card-content">
    <p>You've used <strong>{$storageUsed} GB</strong> of your storage</p>
    <Progress value={$storageUsed / $storageMax} legendLabels={['0GB', `${$storageMax}GB`]}></Progress>
    <CardStatus status={$storageMax - $storageUsed}></CardStatus>
  </div>
</Card>

<style>
  .card-content {
    display: flex;
    flex-direction: column;
    gap: 15px;

    margin-bottom: 20px;
    width: 100%;
  }

  p {
    text-align: center;
    font-size: 0.9rem;
  }
</style>