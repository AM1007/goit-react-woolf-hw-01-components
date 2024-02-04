### Statistics section

Create a `<Statistics>` component to display statistics based on the passed
props. For instance, showcase cloud uploads categorized by file type, website
visits sorted by users in various countries, financial costs, etc. The
statistical data is stored in the
[`data.json`](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fgoitacademy%2Freact-homework%2Fblob%2Fmaster%2Fhomework-01%2Fstatistics%2Fdata.json)
file.

##### Description of the `<Statistics>` component

The component must accept two props `title` and `stats`, which specify the title
and the statistics object.

- `title` is optional, and if not passed, no `<h2>` title markup should be
  rendered.
- `stats` – an array of objects containing information about the statistics
  element. Can have any number of elements.
- The background color of the statistic element in the design can be omitted or
  a function can be created to generate a random color.

The component must create a DOM element of the following structure.

```html
<section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>
```

##### Example of use

```js
import data from '/path/to/data.json';

<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />

```
