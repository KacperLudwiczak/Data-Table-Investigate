function App() {
  return (
    <div className="app">
      <h1>Data Tables Testing</h1>
      <h2>MUI DataGrid:</h2>
      <h3>Positive:</h3>
      <ul>
        <li>
          Solid feature-rich table that integrates perfectly with Material UI
          components.
        </li>
        <li>Well-maintained with good support from the MUI team.</li>
        <li>Offers every table feature you might need.</li>
      </ul>
      <h3>Negative:</h3>
      <ul>
        <li>
          Some features are only available in the paid Pro or Premium versions.
        </li>
        <li>No support in IE 11.</li>
        <li>Vendor lock-in potential if you choose the free MIT version.</li>
      </ul>

      <h2>AG Grid:</h2>
      <h3>Positive:</h3>
      <ul>
        <li>Feature-rich library with extensive functionality.</li>
        <li>Works in multiple JavaScript frameworks, not limited to React.</li>
        <li>Close adherence to Material Design.</li>
      </ul>
      <h3>Negative:</h3>
      <ul>
        <li>Some features require the paid Enterprise version.</li>
        <li>
          Large library size and bundle size, not the most lightweight option.
        </li>
      </ul>

      <h2>Material React Table:</h2>
      <h3>Positive:</h3>
      <ul>
        <li>100% free to use with the MIT license.</li>
        <li>
          Built directly on top of Material UI v5, seamlessly integrating with
          Material UI projects.
        </li>
        <li>Offers every data grid/table feature needed.</li>
        <li>Lightweight bundle size compared to other libraries.</li>
      </ul>
      <h3>Negative:</h3>
      <ul>
        <li>
          Being a new library, it may have fewer community resources and
          documentation.
        </li>
      </ul>

      <h2>Material-Table (Not recommended for new projects):</h2>
      <h3>Negative:</h3>
      <ul>
        <li>
          No longer being actively maintained, with the maintainer inactive on
          GitHub.
        </li>
        <li>Security warnings and lack of updates.</li>
        <li>Community fork exists but is not recommended for new projects.</li>
      </ul>

      <h2>MUI-Data tables (Not recommended for new projects):</h2>
      <h3>Negative:</h3>
      <ul>
        <li>Lack of good documentation and difficulty in usage.</li>
        <li>Numerous open and unresolved issues in the GitHub repository.</li>
      </ul>
    </div>
  );
}

export default App;
