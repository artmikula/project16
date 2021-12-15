function DealerSite() {
  return (
    <div id="results">
      <div id="resultsTop">
        <div id="dataTop">
          <div className="resultData1">
            <h1>딜러명</h1>
            <p>phone number</p>
          </div>
          <div className="resultData1">
            <h1>거래 성사량</h1>
            <p>result data</p>
          </div>
        </div>
        <div id="dealerPhoto"></div>
      </div>
      <div id="resultsBottom">
        <div id="table1">
          <h1>거래 후기 평점</h1>
          <table className="resultsTable">
            <thead>
              <tr>
                <th>소비자</th>
                <th>친절도</th>
                <th>신뢰도</th>
                <th>가격만족도</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>cell1_1</td>
                <td>cell2_1</td>
                <td>cell3_1</td>
                <td>cell3_1</td>
              </tr>
              <tr>
                <td>cell1_2</td>
                <td>cell2_2</td>
                <td>cell3_2</td>
                <td>cell3_2</td>
              </tr>
              <tr>
                <td>cell1_2</td>
                <td>cell2_2</td>
                <td>cell3_2</td>
                <td>cell3_2</td>
              </tr>
              <tr>
                <td>cell1_2</td>
                <td>cell2_2</td>
                <td>cell3_2</td>
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
              <tr>
                <td>cell1_3</td>
                <td>cell2_3</td>
                <td>cell3_3</td>
              </tr>
            </tbody>
          </table>
          <h1>고객 후기</h1>
          <p>총 5건의 고객 후기가 있습니다</p>
        </div>
        <div id="bottomLinks">
          <p>
            <a href="url">후기 확인</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DealerSite;
