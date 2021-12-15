function Results({ dataEntered }) {
  return (
    <div id="results">
      <div id="resultsTop">
        <div id="dataTop">
          <div className="resultData1">
            <h1>모델명</h1>
            <p>result data</p>
          </div>
          <div className="resultData1">
            <h1>적정가</h1>
            <p>result data</p>
          </div>
        </div>
        <div id="resultPhoto"></div>
      </div>
      <div id="resultsBottom">
        <div id="table1">
          <h1>동일 매물 거래 내역</h1>
          <table className="resultsTable">
            <thead>
              <tr>
                <th>모델명</th>
                <th>거래가</th>
                <th>거래일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cell1_1</td>
                <td>cell2_1</td>
                <td>cell3_1</td>
              </tr>
              <tr>
                <td>cell1_2</td>
                <td>cell2_2</td>
                <td>cell3_2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="table2">
          <h1>동일 차종 거래 내역</h1>
          <table className="resultsTable">
            <thead>
              <tr>
                <th>모델명</th>
                <th>거래가</th>
                <th>거래일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cell1_1</td>
                <td>cell2_1</td>
                <td>cell3_1</td>
              </tr>
              <tr>
                <td>cell1_2</td>
                <td>cell2_2</td>
                <td>cell3_2</td>
              </tr>
              <tr>
                <td>cell1_3</td>
                <td>cell2_3</td>
                <td>cell3_3</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="table2">
          <h1>동일 차종 거래 내역</h1>
          <table className="resultsTable">
            <thead>
              <tr>
                <th></th>
                <th>검색량</th>
                <th>거래량</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cell1_1</td>
                <td>cell2_1</td>
                <td>cell3_1</td>
              </tr>
              <tr>
                <td>cell1_2</td>
                <td>cell2_2</td>
                <td>cell3_2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="bottomLinks">
          <p>
            <a href="url">딜러정보 보기</a> | <a href="url">구매하기</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Results;
