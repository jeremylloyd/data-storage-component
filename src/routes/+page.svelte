<svelte:head>
  <title>Fylo data storage component</title>
  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">

</svelte:head>

<script>
  import CardHeader from '$lib/components/CardHeader.svelte';
  import StorageSummary from '$lib/components/StorageSummary.svelte';
</script>

<div class="page">
  <div class="content">
    <CardHeader></CardHeader>
    <StorageSummary></StorageSummary>
  </div>
</div>

<style>
  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
  }

  .content {
    max-width: 330px;
  }
</style>