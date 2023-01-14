<svelte:head>
  <title>Fylo data storage component</title>
  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:400,700">
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
    font-family: 'Raleway';

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    min-height: 100vh;
    
    border: dashed 1px red;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    gap: 12px;

    max-width: 330px;
  }
</style>