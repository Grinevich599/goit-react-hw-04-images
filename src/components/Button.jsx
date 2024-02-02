const Button = ({ handleLoadMore }) => {
  return (
    <button className='Button' type="button" onClick={handleLoadMore}>
      Load more
    </button>
  );
};

export { Button };