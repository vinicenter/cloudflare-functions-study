<script>
import axios from 'axios'
import Counter from './lib/Counter.svelte'

axios.get('/api').then(res => console.log(res.data))

</script>

<main>
  <div class="card">
    <Counter />
  </div>
</main>