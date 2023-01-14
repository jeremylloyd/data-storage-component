<script>
  import NavButton from '$lib/components/NavButton.svelte';
</script>

<div class="card">
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

<style>
  .navbar {
    display: flex;
    flex-basis: 50px;
    width: 100%;
    gap: 16px;
  }

  .card {
    position: relative;
    padding: 30px;
    height: 200px;
    border-radius: 12px;
    border-top-right-radius: 100px;

    background-color: hsl(242, 42%, 29%);
    color: hsl(243, 100%, 93%);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .card {
      min-width: 350px;
      padding: 40px;
    }
  }
</style>