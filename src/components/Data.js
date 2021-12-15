function Data() {
  return (
    <div id="enterData">
      <h1>모델 검색</h1>
      <form className="dataForm">
        <select className="selectInput" />
        <select className="selectInput" />
        <select className="selectInput" />
        <input type="submit" value="검색"></input>
      </form>
      <h1>적정가 검색</h1>
      <form className="dataForm">
        <select className="selectInput" />
        <select className="selectInput" />
        <select className="selectInput" />
        <select className="selectInput" />
        <input type="submit" value="검색"></input>
      </form>
    </div>
  );
}

export default Data;
