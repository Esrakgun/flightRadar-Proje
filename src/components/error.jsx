

const Error = ({ message }) => {
  return (
    <div className="error">
      <p>Uçuş Verisi Alınamadı</p>
      <p>{message}</p>
    </div>
  );
};

export default Error;
