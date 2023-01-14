<script>
  import Card from '$lib/components/Card.svelte';
  import NavButton from '$lib/components/NavButton.svelte';
</script>

<Card cornerRounded class='card'>
  <div class="flex-container">
    <img src="logo.svg" alt="Fylo logo">
    <nav class="navbar">
      <NavButton>
        <img src="icon-document.svg" alt="" class="icon">
      </NavButton>
      <NavButton>
        <img src="icon-folder.svg" alt="" class="icon">
      </NavButton>
      <NavButton>
        <img src="icon-upload.svg" alt="" class="icon">
      </NavButton>
    </nav>
  </div>
</Card>

<style>
  .navbar {
    display: flex;
    flex-basis: 50px;
    width: 100%;
    gap: 16px;
  }

  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;
    height: 120px;
  }
</style>