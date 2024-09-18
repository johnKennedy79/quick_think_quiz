export default function ResultBtn({ questions, results, addResults, userId }) {
  const addResultsWithData = addResults.bind(null, questions, results, userId);
  return (
    <form action={addResultsWithData}>
      <br />
      <button className="endGame">End Game</button>
    </form>
  );
}
