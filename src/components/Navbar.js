function Navbar({ login, signup }) {
  return (
    <div id="navbar-top">
      <div id="logo">
        <h1>다음차</h1>
      </div>
      <div id="menu">
        <ul id="menuItems">
          <li>검색</li>
          <li>시세</li>
          <li>트렌드</li>
          <li>게시판</li>
          <li>문의사항</li>
          <li>|</li>
          <button onClick={signup}>회원가입</button>
          <button onClick={login}>로그인</button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
