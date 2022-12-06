<script>
  let poxa = 0

  $: poxa2 = poxa

  const count = {
    p: {
      x: 0
    }
  }
  const increment = () => {
    poxa += 1
  }
</script>

<button on:click={increment}>
   {poxa2}
</button>
