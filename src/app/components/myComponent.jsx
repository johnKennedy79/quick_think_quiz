export const MyComponent = ({ results }) => {
  const MyComponent = () => {
    const results = DataSet4();
  };
  return (
    <div>
      {results && ( // Check if results exist
        <>
          {/* Display subject totals */}
          <h2>Subject Totals</h2>
          <ul>
            {Object.values(results.subjectTotals).map((total) => (
              <li key={total.subject}>
                {total.subject}: {total.totalScore}
              </li>
            ))}
          </ul>

          {/* Display subject difficulty totals (similar logic) */}
        </>
      )}
      {!results && ( // Display message if no results
        <p>No quiz scores found for user.</p>
      )}
    </div>
  );
};
