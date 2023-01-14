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
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    font-family: 'Raleway';
    min-height: 100vh;
    min-width: 100vw;
    padding: 20px;

    background-image: url('bg-mobile.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .content {
    display: flex;
    flex-direction: column;
    gap: 12px;

    height: 100%;
  }
</style>